import test from "node:test";
import assert from "node:assert/strict";

import { createImageLoader, createImagePresenter } from "../js/imageLoader.js";

function deferred() {
  let resolve;
  const promise = new Promise((done) => { resolve = done; });
  return { promise, resolve };
}

test("同じ画像は一度だけ読み込み、デコード完了後に再利用する", async () => {
  const decoded = deferred();
  const image = { decode: () => decoded.promise };
  let created = 0;
  const loader = createImageLoader({ createImage: () => { created += 1; return image; } });
  const loading = loader.load("normal.webp");
  let ready = false;
  loading.then(() => { ready = true; });

  assert.equal(loader.load("normal.webp"), loading);
  assert.equal(image.src, "normal.webp");
  assert.equal(image.decoding, "async");
  const decoding = image.onload();
  await Promise.resolve();
  assert.equal(ready, false);

  decoded.resolve();
  await decoding;
  assert.equal(await loading, image);
  assert.equal(await loader.load("normal.webp"), image);
  assert.equal(created, 1);
});

test("先読みは順番に行い、今必要な画像の読み込みを待たせない", async () => {
  const images = [];
  const loader = createImageLoader({ createImage: () => {
    const image = {};
    images.push(image);
    return image;
  } });
  const preloading = loader.preload(["normal.webp", "normal.webp", "smile.webp"]);
  assert.deepEqual(images.map((image) => image.src), ["normal.webp"]);

  const urgent = loader.load("troubled.webp");
  assert.deepEqual(images.map((image) => image.src), ["normal.webp", "troubled.webp"]);
  await images[0].onload();
  assert.deepEqual(images.map((image) => image.src), ["normal.webp", "troubled.webp", "smile.webp"]);

  await images[1].onload();
  await images[2].onload();
  await preloading;
  assert.equal(await urgent, images[1]);
});

test("画像が欠けても先読みを続け、decode非対応環境でも読み込める", async () => {
  const images = [];
  const loader = createImageLoader({ createImage: () => {
    const image = {};
    images.push(image);
    return image;
  } });
  const preloading = loader.preload(["missing.webp", "normal.webp"]);
  images[0].onerror();
  assert.equal(await loader.load("missing.webp"), null);
  await images[1].onload();
  await preloading;
  assert.equal(await loader.load("normal.webp"), images[1]);
});

test("デコードやImage生成が失敗しても未処理の例外を出さない", async () => {
  const image = { decode: async () => { throw new Error("decode failed"); } };
  const loader = createImageLoader({ createImage: () => image });
  const loading = loader.load("invalid.webp");
  await image.onload();
  assert.equal(await loading, null);

  const unavailable = createImageLoader({ createImage: () => { throw new Error("unavailable"); } });
  assert.equal(await unavailable.load("normal.png"), null);
  assert.equal(await unavailable.load(null), null);
});

test("次の画像の準備中は前の画像を保ち、同じ表情を入れ直さない", async () => {
  const nextImage = deferred();
  let displayed = "normal";
  let loads = 0;
  let shows = 0;
  const presenter = createImagePresenter({
    loadImage: () => { loads += 1; return nextImage.promise; },
    showImage: (image) => { displayed = image; shows += 1; },
    hideImage: () => { displayed = null; }
  });

  const pending = presenter.set("smile.webp");
  assert.equal(presenter.set("smile.webp"), pending);
  await Promise.resolve();
  assert.equal(displayed, "normal");
  nextImage.resolve("smile");
  await pending;
  await presenter.set("smile.webp");
  assert.equal(displayed, "smile");
  assert.equal(loads, 1);
  assert.equal(shows, 1);
});

test("連打で読み込み順が逆転しても最新の画像だけを表示する", async () => {
  const first = deferred();
  const second = deferred();
  const shown = [];
  const presenter = createImagePresenter({
    loadImage: (path) => path === "first" ? first.promise : second.promise,
    showImage: (image) => shown.push(image),
    hideImage: () => {}
  });
  const oldRequest = presenter.set("first");
  const newRequest = presenter.set("second");

  second.resolve("new image");
  await newRequest;
  first.resolve("old image");
  await oldRequest;
  assert.deepEqual(shown, ["new image"]);
});

test("読み込み中に戻る・画像なしの場面へ進むと古い要求を無効にする", async () => {
  const waiting = deferred();
  let displayed = null;
  const presenter = createImagePresenter({
    loadImage: (path) => path === "normal" ? Promise.resolve("normal") : waiting.promise,
    showImage: (image) => { displayed = image; },
    hideImage: () => { displayed = null; }
  });

  await presenter.set("normal");
  const pending = presenter.set("smile");
  await presenter.set("normal");
  waiting.resolve("smile");
  await pending;
  assert.equal(displayed, "normal");

  const cancelled = presenter.set("smile");
  await presenter.set(null);
  await cancelled;
  assert.equal(displayed, null);
});

test("表示用画像の読み込みに失敗しても、次の画像は表示できる", async () => {
  let displayed = "previous";
  const presenter = createImagePresenter({
    loadImage: async (path) => path === "missing" ? null : "normal",
    showImage: (image) => { displayed = image; },
    hideImage: () => { displayed = null; }
  });

  await presenter.set("missing");
  assert.equal(displayed, null);
  await presenter.set("normal");
  assert.equal(displayed, "normal");
});

test("全身レイアウトは画像と同時に切り替え、読み込み中の前キャラには適用しない", async () => {
  const teacher = deferred();
  let displayed;
  const presenter = createImagePresenter({
    loadImage: (path) => path === "teacher" ? teacher.promise : Promise.resolve("slack"),
    showImage: (image, layout) => { displayed = { image, layout }; },
    hideImage: () => { displayed = null; }
  });
  await presenter.set("slack");
  const pending = presenter.set("teacher", "full-body");
  await Promise.resolve();
  assert.deepEqual(displayed, { image: "slack", layout: "" });
  teacher.resolve("teacher");
  await pending;
  assert.deepEqual(displayed, { image: "teacher", layout: "full-body" });
  await presenter.set("slack");
  assert.deepEqual(displayed, { image: "slack", layout: "" });
});

test("画像が同じでもレイアウト変更を反映し、古いサイズ指定は後から適用しない", async () => {
  const waiting = deferred();
  const shown = [];
  const presenter = createImagePresenter({
    loadImage: () => waiting.promise,
    showImage: (image, layout) => shown.push({ image, layout }),
    hideImage: () => {}
  });
  const oldRequest = presenter.set("teacher", "full-body");
  const latestRequest = presenter.set("teacher");
  assert.equal(presenter.set("teacher"), latestRequest);
  waiting.resolve("teacher");
  await Promise.all([oldRequest, latestRequest]);
  assert.deepEqual(shown, [{ image: "teacher", layout: "" }]);
  await presenter.set("teacher", "full-body");
  assert.deepEqual(shown.at(-1), { image: "teacher", layout: "full-body" });
  await presenter.set("teacher", "contain");
  assert.deepEqual(shown.at(-1), { image: "teacher", layout: "contain" });
});
