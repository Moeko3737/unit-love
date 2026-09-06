import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { ENDING_ARTWORK, ENDING_CATALOG } from "../js/endingAlbum.js";

const projectRoot = new URL("../", import.meta.url);

test("エンディング専用画面に物語タイトル・3能力・タイトルへ戻る操作がある", async () => {
  const html = await readFile(new URL("index.html", projectRoot), "utf8");
  const requiredIds = [
    "ending-screen",
    "ending-story-title",
    "ending-self-management",
    "ending-information-use",
    "ending-university-life",
    "ending-unlocked-label",
    "ending-save-note",
    "ending-title-button",
    "ending-artwork-dialog",
    "ending-artwork-image-webp",
    "ending-artwork-image",
    "ending-artwork-title",
    "ending-artwork-close"
  ];

  for (const id of requiredIds) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  assert.doesNotMatch(html, /PERFECT END/);
});

test("5種類の一枚絵はWebPを優先しつつPNGへフォールバックできる", async () => {
  const [html, css] = await Promise.all([
    readFile(new URL("index.html", projectRoot), "utf8"),
    readFile(new URL("css/style.css", projectRoot), "utf8")
  ]);

  assert.match(html, /id="ending-image-webp"[^>]*type="image\/webp"/);
  assert.match(html, /id="ending-image"/);
  assert.match(html, /id="ending-artwork-image-webp"[^>]*type="image\/webp"/);
  assert.match(html, /id="ending-artwork-image"/);
  assert.match(css, /\.ending-picture img[\s\S]*?object-fit:\s*contain/);
  assert.match(css, /\.ending-artwork-picture img[\s\S]*?object-fit:\s*contain/);
  assert.match(css, /\.ending-visual\[data-has-artwork="false"\]/);

  assert.deepEqual(
    Object.keys(ENDING_ARTWORK),
    ENDING_CATALOG.map(({ id }) => id)
  );

  await Promise.all(
    Object.values(ENDING_ARTWORK)
      .flatMap(({ png, webp }) => [png, webp])
      .map((path) => access(new URL(path, projectRoot)))
  );
});
