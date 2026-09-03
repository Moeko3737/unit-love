import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);

test("成績画面がゲームロジックから更新する表示要素を維持している", async () => {
  const html = await readFile(new URL("index.html", projectRoot), "utf8");
  const requiredIds = [
    "result-quarter",
    "result-grade",
    "result-self-management",
    "result-information-use",
    "result-university-life",
    "result-comment",
    "result-affection",
    "result-close-button"
  ];

  for (const id of requiredIds) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
});

test("成績画面に評価・コメント・好感度の表示領域がある", async () => {
  const html = await readFile(new URL("index.html", projectRoot), "utf8");

  assert.match(html, /class="result-grade-box"/);
  assert.match(html, /class="result-comment-card"/);
  assert.match(html, /class="result-affection-card"/);
});

