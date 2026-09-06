import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance, resolveScenarioChoice } from "../js/gameLogic.js";

const scenes = scenario.filter((scene) => scene.chapter === "Q4-02");
const byId = (id) => scenario.find((scene) => scene.id === id);
const at = (number) => byId("q4-02-" + String(number).padStart(3, "0"));

test("Q4-02は最終締切まであと3日の通知から始まる", () => {
  assert.equal(scenes[0].id, "q4-02-time-passage");
  assert.equal(scenes[0].timePassage.title, "4Q終盤");
  assert.equal(at(2).notification.text, "確認レポート　最終締切まであと3日");
  assert.equal(at(2).se, "./assets/audio/se/notification.wav");
  assert.equal(at(18).notification.title, "Slack · ZEN大学");
  assert.equal(at(18).se, "./assets/audio/se/notification.wav");
});

test("カレンダーで締切・バイト・試験の重なりに気づく", () => {
  const calendar = at(13).deadlineSchedule;
  assert.equal(calendar.title, "これからの予定");
  assert.deepEqual(calendar.items.map((item) => item.label), [
    "確認レポート", "アルバイト", "単位認定試験"
  ]);
  assert.match(at(17).text, /大渋滞/);
});

test("最終3択は指定された能力値と3人の好感度に反映される", () => {
  const choices = byId("q4-02-choice").choices;
  assert.deepEqual(choices.map((choice) => choice.label), ["A", "B", "C"]);
  assert.deepEqual(choices.map((choice) => choice.effects), [
    {
      selfManagement: 3,
      informationUse: 2,
      affection: { report: 1, exam: 1, slack: 1 }
    },
    { selfManagement: -1 },
    { selfManagement: -2, informationUse: -1 }
  ]);
});

test("どの回答も予定整理UIへ合流する", () => {
  const choiceIndex = scenario.findIndex((scene) => scene.id === "q4-02-choice");
  for (let answer = 0; answer < 3; answer += 1) {
    let index = resolveScenarioChoice(scenario, choiceIndex, answer).targetIndex;
    let steps = 0;
    while (scenario[index].id !== "q4-02-common-001" && steps < 12) {
      index = resolveScenarioAdvance(scenario, index).targetIndex;
      steps += 1;
    }
    assert.equal(scenario[index].id, "q4-02-common-001");
  }
  const plan = byId("q4-02-common-001").deadlineSchedule;
  assert.equal(plan.items.length, 5);
  assert.deepEqual(plan.items.map((item) => item.label), [
    "確認レポート", "最終締切", "アルバイト", "単位認定試験", "必要なお知らせ"
  ]);
});

test("前倒し提出から単位認定試験まで時間を進める", () => {
  assert.equal(byId("q4-02-before-deadline").timePassage.detail, "最終締切前");
  assert.equal(byId("q4-02-deadline-002").text, "全部提出完了！！");
  assert.equal(byId("q4-02-exam-day").timePassage.detail, "単位認定試験の日");
  assert.equal(byId("q4-02-exam-008").text, "準備もできてる！");
});

test("3人の表情素材を使いQ4-02 CLEARからQ4-03へ進む", () => {
  const paths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), false);
  assert.ok(paths.includes("./assets/images/characters/slack/smile.png"));
  assert.ok(paths.includes("./assets/images/characters/report/serious.png"));
  assert.ok(paths.includes("./assets/images/characters/report/normal.png"));
  assert.ok(paths.includes("./assets/images/characters/exam/normal.png"));
  assert.ok(paths.includes("./assets/images/characters/exam/worried.png"));
  assert.ok(paths.includes("./assets/images/characters/exam/smile.png"));
  const clearIndex = scenario.findIndex((scene) => scene.id === "q4-02-clear");
  const next = resolveScenarioAdvance(scenario, clearIndex);
  assert.equal(scenario[next.targetIndex].id, "q4-03-time-passage");
});
