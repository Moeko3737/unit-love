import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import { renderSceneDecorations } from "../js/sceneDecorations.js";

function createElements() {
  const node = () => ({
    className: "",
    textContent: "",
    hidden: true,
    dataset: {},
    children: [],
    replaceChildren() { this.children = []; },
    append(...children) { this.children.push(...children); }
  });

  return {
    sceneElement: { dataset: {} },
    captionElement: node(),
    notificationCard: node(),
    notificationIcon: node(),
    notificationTitle: node(),
    notificationText: node(),
    deadlineScheduleCard: node(),
    deadlineSchedulePeriod: node(),
    deadlineScheduleTitle: node(),
    deadlineScheduleList: node(),
    myStepCard: node(),
    myStepCategory: node(),
    myStepSubject: node(),
    myStepFields: node(),
    strategyGuideCard: node(),
    strategyGuideTitle: node(),
    strategyGuideList: node(),
    strategyGuideAction: node(),
    createElement: node
  };
}

test("通知・日時・場面レイアウトは次の場面で残らない", () => {
  const elements = createElements();
  renderSceneDecorations({
    caption: "展軸祭当日／会場",
    foregroundLayout: "phone",
    timePassage: { title: "翌日" },
    notification: { icon: "Z", title: "ZENPortal", text: "お知らせ" }
  }, elements);

  assert.equal(elements.captionElement.hidden, false);
  assert.equal(elements.notificationCard.hidden, false);
  assert.equal(elements.notificationIcon.textContent, "Z");
  assert.equal(elements.notificationTitle.textContent, "ZENPortal");
  assert.equal(elements.sceneElement.dataset.foregroundLayout, "phone");
  assert.equal(elements.sceneElement.dataset.sceneLayout, "time-passage");

  renderSceneDecorations({}, elements);
  assert.equal(elements.captionElement.hidden, true);
  assert.equal(elements.captionElement.textContent, "");
  assert.equal(elements.notificationCard.hidden, true);
  assert.equal(elements.notificationTitle.textContent, "");
  assert.equal(elements.sceneElement.dataset.foregroundLayout, "");
  assert.equal(elements.sceneElement.dataset.sceneLayout, "");
});

test("締切カードを一覧化し、同じデータならDOMを作り直さない", () => {
  const elements = createElements();
  const deadlineSchedule = {
    period: "2026年度 1Q",
    title: "確認レポート 締切スケジュール",
    items: [
      { label: "第1回締切", date: "5月6日", detail: "第5回分まで" },
      { label: "最終締切", date: "6月7日", detail: "第15回分まで" }
    ]
  };

  renderSceneDecorations({ deadlineSchedule }, elements);
  assert.equal(elements.deadlineScheduleCard.hidden, false);
  assert.equal(elements.deadlineSchedulePeriod.textContent, "2026年度 1Q");
  assert.equal(elements.deadlineScheduleList.children.length, 2);
  assert.deepEqual(
    elements.deadlineScheduleList.children[0].children.map((item) => item.textContent),
    ["第1回締切", "5月6日", "第5回分まで"]
  );

  const firstRows = elements.deadlineScheduleList.children;
  renderSceneDecorations({ deadlineSchedule }, elements);
  assert.equal(elements.deadlineScheduleList.children, firstRows);
  renderSceneDecorations({}, elements);
  assert.equal(elements.deadlineScheduleCard.hidden, true);
  assert.equal(elements.deadlineScheduleList.children.length, 0);
});

test("マイステップの必須表示と攻略カードを場面ごとに切り替える", () => {
  const elements = createElements();
  renderSceneDecorations({
    myStep: {
      category: "学生時代の活動記録",
      subject: "対象授業なし",
      fields: [
        { label: "1.タイトル", value: "大学生活の経験", required: true },
        { label: "4.活動の内容", value: "何をしたか" }
      ]
    }
  }, elements);

  assert.equal(elements.myStepCard.hidden, false);
  assert.equal(elements.myStepFields.children.length, 2);
  assert.deepEqual(
    elements.myStepFields.children[0].children[0].children.map((item) => item.textContent),
    ["1.タイトル", "必須"]
  );
  assert.equal(elements.strategyGuideCard.hidden, true);

  renderSceneDecorations({
    strategyGuide: {
      title: "締切の攻略法",
      points: ["締切を確認する", "予定表へ入れる"],
      action: "今すぐ予定表を開こう。"
    }
  }, elements);

  assert.equal(elements.myStepCard.hidden, true);
  assert.equal(elements.myStepFields.children.length, 0);
  assert.equal(elements.strategyGuideCard.hidden, false);
  assert.equal(elements.strategyGuideTitle.textContent, "Tips：締切の攻略法");
  assert.deepEqual(
    elements.strategyGuideList.children.map((item) => item.textContent),
    ["締切を確認する", "予定表へ入れる"]
  );
  assert.equal(elements.strategyGuideAction.textContent, "今すぐ予定表を開こう。");

  renderSceneDecorations(undefined, elements);
  assert.equal(elements.strategyGuideCard.hidden, true);
  assert.equal(elements.strategyGuideList.children.length, 0);
});

test("補助カードは初期非表示かつ読み上げ可能な状態通知である", async () => {
  const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
  for (const id of [
    "scene-notification",
    "deadline-schedule",
    "my-step-form",
    "strategy-guide"
  ]) {
    assert.match(html, new RegExp(`id="${id}"[^>]*role="status"[^>]*hidden`));
  }
  assert.match(html, /id="strategy-guide-list"/);
  assert.match(html, /id="strategy-guide-action"/);
});
