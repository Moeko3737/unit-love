import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import { renderSceneDecorations } from "../js/sceneDecorations.js";
import { scenario } from "../js/scenario.js";

function createElements() {
  return {
    sceneElement: { dataset: {} },
    captionElement: { textContent: "", hidden: true },
    notificationCard: { hidden: true },
    notificationTitle: { textContent: "" },
    notificationText: { textContent: "" }
  };
}

test("通知からスマホ一覧・立ち絵へ進むと補助UIを切り替え、戻れば復元する", () => {
  const elements = createElements();
  const notification = scenario.find((scene) => scene.id === "q1-03-006");
  const phone = scenario.find((scene) => scene.id === "q1-03-010");
  const character = scenario.find((scene) => scene.id === "q1-03-018");

  renderSceneDecorations(notification, elements);
  assert.equal(elements.notificationCard.hidden, false);
  assert.equal(elements.notificationTitle.textContent, "Slack · ZEN大学");
  assert.equal(elements.notificationText.textContent, "新しい通知が届いています。");

  renderSceneDecorations(phone, elements);
  assert.equal(elements.notificationCard.hidden, true);
  assert.equal(elements.notificationText.textContent, "");
  assert.equal(elements.sceneElement.dataset.foregroundLayout, "phone");

  renderSceneDecorations(character, elements);
  assert.equal(elements.notificationCard.hidden, true);
  assert.equal(elements.sceneElement.dataset.foregroundLayout, "");

  renderSceneDecorations(notification, elements);
  assert.equal(elements.notificationCard.hidden, false);
  renderSceneDecorations(undefined, elements);
  assert.equal(elements.notificationCard.hidden, true);
  assert.equal(elements.notificationTitle.textContent, "");
});

test("同じ通知の会話を送っても読み上げ用テキストを再設定しない", () => {
  const elements = createElements();
  const writes = { title: 0, text: 0 };
  for (const [key, element] of [
    ["title", elements.notificationTitle], ["text", elements.notificationText]
  ]) {
    let value = "";
    Object.defineProperty(element, "textContent", {
      get: () => value,
      set: (next) => { value = next; writes[key] += 1; }
    });
  }
  for (let number = 6; number <= 9; number += 1) {
    renderSceneDecorations(
      scenario.find((scene) => scene.id === `q1-03-00${number}`), elements
    );
  }
  assert.deepEqual(writes, { title: 1, text: 1 });
});

test("通知カードは初期非表示で、読み上げ用の状態通知として用意されている", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
  assert.match(html, /id="scene-notification"[^>]*role="status"[^>]*hidden/);
  assert.match(html, /id="scene-notification-title"/);
  assert.match(html, /id="scene-notification-text"/);
  assert.match(html, /id="scene-caption"[^>]*role="status"[^>]*hidden/);
});

test("日時・会場の表示は場面ごとに切り替わり、戻る操作でも復元する", () => {
  const elements = createElements();
  const room = scenario.find((scene) => scene.id === "q1-04-001");
  const notification = scenario.find((scene) => scene.id === "q1-04-003");
  const festival = scenario.find((scene) => scene.id === "q1-04-020");
  const teacher = scenario.find((scene) => scene.id === "q1-04-035");

  renderSceneDecorations(room, elements);
  assert.equal(elements.captionElement.textContent, "数週間後／自室・昼");
  assert.equal(elements.captionElement.hidden, false);
  renderSceneDecorations(notification, elements);
  assert.equal(elements.captionElement.hidden, true);
  assert.equal(elements.notificationCard.hidden, false);
  renderSceneDecorations(festival, elements);
  assert.equal(elements.captionElement.textContent, "展軸祭当日／リアル会場");
  assert.equal(elements.captionElement.hidden, false);
  assert.equal(elements.notificationCard.hidden, true);
  renderSceneDecorations(teacher, elements);
  assert.equal(elements.captionElement.hidden, true);
  renderSceneDecorations(room, elements);
  assert.equal(elements.captionElement.textContent, "数週間後／自室・昼");
  assert.equal(elements.captionElement.hidden, false);
  renderSceneDecorations(undefined, elements);
  assert.equal(elements.captionElement.textContent, "");
  assert.equal(elements.captionElement.hidden, true);
});
