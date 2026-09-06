import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import { renderSceneDecorations } from "../js/sceneDecorations.js";
import { scenario } from "../js/scenario.js";

function createElements() {
  const node = () => ({
    textContent: "",
    hidden: true,
    dataset: {},
    children: [],
    replaceChildren() { this.children = []; },
    append(...children) { this.children.push(...children); }
  });
  return {
    sceneElement: { dataset: {} },
    captionElement: { textContent: "", hidden: true },
    notificationCard: { hidden: true },
    notificationTitle: { textContent: "" },
    notificationText: { textContent: "" },
    deadlineScheduleCard: node(),
    deadlineSchedulePeriod: node(),
    deadlineScheduleTitle: node(),
    deadlineScheduleList: node(),
    myStepCard: node(),
    myStepCategory: node(),
    myStepSubject: node(),
    myStepFields: node(),
    createElement: node
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
  assert.match(html, /id="deadline-schedule"[^>]*role="status"[^>]*hidden/);
  assert.match(html, /id="deadline-schedule-list"/);
  assert.match(html, /id="my-step-form"[^>]*role="status"[^>]*hidden/);
  assert.match(html, /id="my-step-fields"/);
});

test("確認レポートの3段階の締切を表示し、次の会話と戻る操作で切り替える", () => {
  const elements = createElements();
  const before = scenario.find((scene) => scene.id === "q1-06-019");
  const schedule = scenario.find((scene) => scene.id === "q1-06-020");
  const scheduleContinued = scenario.find((scene) => scene.id === "q1-06-021");
  const after = scenario.find((scene) => scene.id === "q1-06-022");

  renderSceneDecorations(before, elements);
  assert.equal(elements.deadlineScheduleCard.hidden, true);
  renderSceneDecorations(schedule, elements);
  assert.equal(elements.deadlineScheduleCard.hidden, false);
  assert.equal(elements.deadlineSchedulePeriod.textContent, "2026年度 1Q");
  assert.equal(elements.deadlineScheduleTitle.textContent, "確認レポート 締切スケジュール");
  assert.equal(elements.deadlineScheduleList.children.length, 3);
  assert.deepEqual(
    elements.deadlineScheduleList.children.map((row) =>
      row.children.map((item) => item.textContent)
    ),
    [
      ["第1回締切", "5月6日", "第5回分まで"],
      ["第2回締切", "5月21日", "第10回分まで"],
      ["最終締切", "6月7日", "第15回分まで"]
    ]
  );
  const renderedRows = elements.deadlineScheduleList.children;
  renderSceneDecorations(scheduleContinued, elements);
  assert.equal(elements.deadlineScheduleList.children, renderedRows);
  renderSceneDecorations(after, elements);
  assert.equal(elements.deadlineScheduleCard.hidden, true);
  assert.equal(elements.deadlineScheduleList.children.length, 0);
  renderSceneDecorations(schedule, elements);
  assert.equal(elements.deadlineScheduleCard.hidden, false);
  assert.equal(elements.deadlineScheduleList.children.length, 3);
});

test("マイステップ登録フォームを表示し、次の会話と戻る操作で切り替える", () => {
  const elements = createElements();
  const before = scenario.find((scene) => scene.id === "q2-04-common-005");
  const form = scenario.find((scene) => scene.id === "q2-04-common-006");
  const formContinued = scenario.find((scene) => scene.id === "q2-04-common-007");
  const after = scenario.find((scene) => scene.id === "q2-04-common-010");

  renderSceneDecorations(before, elements);
  assert.equal(elements.myStepCard.hidden, true);
  renderSceneDecorations(form, elements);
  assert.equal(elements.myStepCard.hidden, false);
  assert.equal(elements.myStepCategory.textContent, "学生時代の活動記録");
  assert.equal(elements.myStepSubject.textContent, "対象授業なし");
  assert.deepEqual(
    elements.myStepFields.children.map((row) =>
      row.children.map((item) =>
        item.children?.length
          ? item.children.map((child) => child.textContent)
          : item.textContent
      )
    ),
    [
      [["1.タイトル", "必須"], "大学生活の経験"],
      [["4.活動の内容"], "何をしたか"],
      [["5.課題・6.工夫"], "何を感じたか"],
      [["7.結果と次のアクション"], "何が変わったか"]
    ]
  );
  const renderedFields = elements.myStepFields.children;
  renderSceneDecorations(formContinued, elements);
  assert.equal(elements.myStepFields.children, renderedFields);
  renderSceneDecorations(after, elements);
  assert.equal(elements.myStepCard.hidden, true);
  assert.equal(elements.myStepFields.children.length, 0);
  renderSceneDecorations(form, elements);
  assert.equal(elements.myStepCard.hidden, false);
  assert.equal(elements.myStepFields.children.length, 4);
});

test("日時・会場の表示は場面ごとに切り替わり、戻る操作でも復元する", () => {
  const elements = createElements();
  const passage = scenario.find((scene) => scene.id === "q1-04-time-passage");
  const room = scenario.find((scene) => scene.id === "q1-04-001");
  const notification = scenario.find((scene) => scene.id === "q1-04-003");
  const festival = scenario.find((scene) => scene.id === "q1-04-020");
  const teacher = scenario.find((scene) => scene.id === "q1-04-035");

  renderSceneDecorations(passage, elements);
  assert.equal(elements.sceneElement.dataset.sceneLayout, "time-passage");
  assert.equal(elements.captionElement.hidden, true);
  renderSceneDecorations(room, elements);
  assert.equal(elements.sceneElement.dataset.sceneLayout, "");
  assert.equal(elements.captionElement.hidden, true);
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
  assert.equal(elements.captionElement.textContent, "");
  assert.equal(elements.captionElement.hidden, true);
  renderSceneDecorations(undefined, elements);
  assert.equal(elements.captionElement.textContent, "");
  assert.equal(elements.captionElement.hidden, true);
});
