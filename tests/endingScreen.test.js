import test from "node:test";
import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";

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
    "ending-title-button"
  ];

  for (const id of requiredIds) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
  assert.doesNotMatch(html, /PERFECT END/);
});

test("集合絵はWebPを優先しつつPNGへフォールバックできる", async () => {
  const [html, css] = await Promise.all([
    readFile(new URL("index.html", projectRoot), "utf8"),
    readFile(new URL("css/style.css", projectRoot), "utf8")
  ]);

  assert.match(html, /id="ending-image-webp"[^>]*type="image\/webp"/);
  assert.match(html, /id="ending-image"/);
  assert.match(css, /\.ending-picture img[\s\S]*?object-fit:\s*contain/);
  assert.match(css, /\.ending-visual\[data-has-artwork="false"\]/);

  await Promise.all([
    access(new URL("assets/images/endings/perfect.png", projectRoot)),
    access(new URL("assets/images/endings/perfect.webp", projectRoot))
  ]);
});
