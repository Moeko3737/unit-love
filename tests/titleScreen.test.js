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
  assert.match(html, /<link rel="icon"[^>]*title-logo\.png/);
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

test("確認したい章へ直接移動できるテストプレイ画面がある", async () => {
  const html = await readFile(new URL("index.html", projectRoot), "utf8");
  assert.match(html, /id="chapter-select-button"/);
  assert.match(html, /id="chapter-jump-dialog"[^>]*role="dialog"/);
  assert.match(html, /value="q2-04-participated-passage"/);
  assert.match(html, /value="q2-04-not-participated-passage"/);
  assert.match(html, /value="q2-result-001"/);
  assert.match(html, /value="q3-start"/);
  assert.match(html, /value="q3-02-001"/);
  assert.match(html, /value="q3-03-time-passage"/);
  assert.match(html, /value="q3-04-time-passage"/);
  assert.match(html, /value="q3-05-time-passage"/);
  assert.match(html, /value="q3-result-time-passage"/);
  assert.match(html, /value="q4-start"/);
  assert.match(html, /value="q4-02-time-passage"/);
  assert.match(html, /value="q4-03-time-passage"/);
  assert.match(html, /value="q4-04-time-passage"/);
  assert.match(html, /value="q4-05-time-passage"/);
  assert.match(html, /value="q4-05-theme"/);
});

test("解放した5種類の成長エンディングを確認できるアルバム画面がある", async () => {
  const html = await readFile(new URL("index.html", projectRoot), "utf8");
  assert.match(html, /id="ending-album-button"/);
  assert.match(html, /id="ending-album-count">0 \/ 5</);
  assert.match(html, /MEMORIES \/ FIVE STORIES/);
  assert.match(html, /id="ending-album-dialog"[^>]*role="dialog"/);
  assert.match(html, /id="ending-album-list"/);
  assert.match(html, /id="ending-album-close"/);
});

test("PCでは中央440px、狭い画面では一列のアルバムへ切り替える", async () => {
  const css = await readFile(new URL("css/style.css", projectRoot), "utf8");
  assert.match(css, /--game-max-width:\s*440px/);
  assert.match(css, /@media \(min-width:\s*900px\)/);
  assert.match(css, /@media \(max-width:\s*360px\)[\s\S]*\.ending-album-list\s*\{\s*grid-template-columns:\s*1fr;/);
});
