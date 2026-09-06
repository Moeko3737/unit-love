import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance, resolveScenarioChoice } from "../js/gameLogic.js";

const scenes = scenario.filter((scene) => scene.chapter === "Q4-04");
const byId = (id) => scenario.find((scene) => scene.id === id);
const at = (number) => byId("q4-04-" + String(number).padStart(3, "0"));

test("Q4-04は4Q末の夕方から一年を振り返る", () => {
  assert.equal(scenes[0].id, "q4-04-time-passage");
  assert.equal(scenes[0].timePassage.title, "4Q末");
  assert.equal(scenes[0].timePassage.detail, "自室・夕方");
  assert.equal(at(7).text, "一年間、何してきた？");
});

test("一年間の出来事を専用UIで振り返る", () => {
  const review = at(18).deadlineSchedule;
  assert.equal(review.title, "一年間の出来事");
  assert.deepEqual(review.items.map((item) => item.label), ["1Q", "2Q", "3Q", "4Q"]);
  assert.match(at(24).text, /締切とシフト/);
  assert.match(at(25).text, /予定の立て方/);
});

test("Q2-03の選択結果で地域活動の振り返りだけが分岐する", () => {
  const branchIndex = scenario.findIndex((scene) => scene.id === "q4-04-026");
  const participated = resolveScenarioAdvance(scenario, branchIndex, {
    decisions: { q203Program: "participated" }
  });
  const notParticipated = resolveScenarioAdvance(scenario, branchIndex, {
    decisions: { q203Program: "not-participated" }
  });
  assert.equal(scenario[participated.targetIndex].id, "q4-04-participated-001");
  assert.equal(scenario[notParticipated.targetIndex].id, "q4-04-not-participated-001");
  assert.equal(byId("q4-04-participated-003").next, "q4-04-before-choice-001");
  assert.equal(byId("q4-04-not-participated-004").next, "q4-04-before-choice-001");
});

test("3択は大学生活・自己管理・ガクチカくん好感度に反映される", () => {
  const choices = byId("q4-04-choice").choices;
  assert.deepEqual(choices.map((choice) => choice.label), ["A", "B", "C"]);
  assert.deepEqual(choices.map((choice) => choice.effects), [
    {
      universityLife: 2,
      selfManagement: 1,
      affection: { gakuchika: 2 }
    },
    {
      universityLife: 1,
      affection: { gakuchika: 1 }
    },
    {
      universityLife: -1,
      affection: { gakuchika: -1 }
    }
  ]);
});

test("どの回答もマイステップで一年を言葉にする共通ルートへ合流する", () => {
  const choiceIndex = scenario.findIndex((scene) => scene.id === "q4-04-choice");
  for (let answer = 0; answer < 3; answer += 1) {
    let index = resolveScenarioChoice(scenario, choiceIndex, answer).targetIndex;
    let steps = 0;
    while (scenario[index].id !== "q4-04-common-001" && steps < 14) {
      index = resolveScenarioAdvance(scenario, index).targetIndex;
      steps += 1;
    }
    assert.equal(scenario[index].id, "q4-04-common-001");
  }
  const form = byId("q4-04-common-002").myStep;
  assert.equal(form.category, "学生時代の活動記録");
  assert.equal(form.fields[0].value, "大学1年目の振り返り");
  assert.deepEqual(form.fields.slice(1).map((field) => field.value), [
    "何をやったか",
    "何を感じたか",
    "自分がどう変わったか"
  ]);
});

test("ガクチカくんの3表情を使いQ4-04 CLEARから最終話へ進む", () => {
  const paths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), false);
  assert.ok(paths.includes("./assets/images/characters/gakuchika/normal.png"));
  assert.ok(paths.includes("./assets/images/characters/gakuchika/smile.png"));
  assert.ok(paths.includes("./assets/images/characters/gakuchika/grin.png"));
  assert.equal(byId("q4-04-common-027").character, "./assets/images/characters/gakuchika/smile.png");
  const clearIndex = scenario.findIndex((scene) => scene.id === "q4-04-clear");
  const next = resolveScenarioAdvance(scenario, clearIndex);
  assert.equal(scenario[next.targetIndex].id, "q4-05-time-passage");
});
