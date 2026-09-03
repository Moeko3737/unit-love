import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);

test("タイトル画面がロゴとOP背景を使用する", async () => {
  const [html, css] = await Promise.all([
    readFile(new URL("index.html", projectRoot), "utf8"),
    readFile(new URL("css/style.css", projectRoot), "utf8")
  ]);

  assert.match(html, /id="title-screen"/);
  assert.match(html, /assets\/images\/ui\/title-logo\.png/);
  assert.match(css, /assets\/images\/backgrounds\/op-campus\.png/);
});

test("PC表示用の左右パネルが用意されている", async () => {
  const html = await readFile(new URL("index.html", projectRoot), "utf8");

  assert.match(html, /desktop-side--left/);
  assert.match(html, /desktop-side--right/);
  assert.match(html, /side-year-card/);
});

test("タイトル画面で使用する画像ファイルが存在する", async () => {
  await Promise.all([
    access(new URL("assets/images/ui/title-logo.png", projectRoot)),
    access(new URL("assets/images/backgrounds/op-campus.png", projectRoot))
  ]);
});

test("つづきからは栞の読み込み前に無効で、保存状態を説明する表示がある", async () => {
  const html = await readFile(new URL("index.html", projectRoot), "utf8");
  assert.match(html, /id="continue-button"[^>]*aria-describedby="bookmark-info"[^>]*disabled/);
  assert.match(html, /id="bookmark-info"[^>]*role="status"/);
  assert.match(html, /id="bookmark-status"[^>]*role="status"/);
});
