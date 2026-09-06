import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance, resolveScenarioChoice } from "../js/gameLogic.js";

const scenes = scenario.filter((scene) => scene.chapter === "Q2-03");
const byId = (id) => scenario.find((scene) => scene.id === id);

test("Q2-03はZEN Portal通知から3択へ進む", () => {
  assert.equal(scenes[0].id, "q2-03-time-passage");
  assert.equal(
    byId("q2-03-003").notification.text,
    "地域・企業連携プログラムのお知らせ"
  );
  const choice = byId("q2-03-choice");
  assert.deepEqual(choice.choices.map((item) => item.label), ["A", "B", "C"]);
  assert.deepEqual(choice.choices[0].effects, {
    universityLife: 2,
    affection: { gakuchika: 2 },
    decisions: { q203Program: "participated" }
  });
  assert.deepEqual(choice.choices[1].effects, {
    informationUse: 1,
    universityLife: 1,
    affection: { gakuchika: 1 },
    decisions: { q203Program: "participated" }
  });
  assert.deepEqual(choice.choices[2].effects, {
    universityLife: -1,
    affection: { gakuchika: -1 },
    decisions: { q203Program: "not-participated" }
  });
});

test("A・Bは現地参加へ、Cは締めへ合流する", () => {
  const choiceIndex = scenario.findIndex((scene) => scene.id === "q2-03-choice");
  assert.equal(
    byId("q2-03-choice-a-003").next,
    "q2-03-field-passage"
  );
  assert.equal(
    byId("q2-03-choice-b-003").next,
    "q2-03-field-passage"
  );
  assert.equal(
    byId("q2-03-choice-c-004").next,
    "q2-03-final-001"
  );

  for (let answer = 0; answer < 3; answer += 1) {
    let index = resolveScenarioChoice(scenario, choiceIndex, answer).targetIndex;
    let steps = 0;
    while (scenario[index].id !== "q2-03-clear" && steps < 60) {
      index = resolveScenarioAdvance(scenario, index).targetIndex;
      steps += 1;
    }
    assert.equal(scenario[index].id, "q2-03-clear");
  }
});

test("現地活動は仮背景と場所表示を使い、帰宅演出を挟む", () => {
  assert.deepEqual(byId("q2-03-field-passage").timePassage, {
    label: "FIELD PROGRAM",
    title: "現地へ",
    detail: "地域・企業連携プログラム"
  });
  assert.equal(
    byId("q2-03-field-001").background,
    "./assets/images/backgrounds/op-campus.png"
  );
  assert.equal(byId("q2-03-field-001").caption, "現地／活動場所");
  assert.equal(byId("q2-03-after-field").next, "q2-03-final-001");
});

test("ガクチカくんの3表情と現地背景を先読みする", () => {
  const paths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), false);
  assert.ok(paths.includes("./assets/images/characters/gakuchika/normal.png"));
  assert.ok(paths.includes("./assets/images/characters/gakuchika/smile.png"));
  assert.ok(paths.includes("./assets/images/characters/gakuchika/grin.png"));
  assert.ok(paths.includes("./assets/images/backgrounds/op-campus.png"));
});

test("Q2-03 CLEARから選択結果に合うQ2-04へ進む", () => {
  const clearIndex = scenario.findIndex((scene) => scene.id === "q2-03-clear");
  assert.equal(byId("q2-03-clear").text, "Q2-03 CLEAR！");
  const participated = resolveScenarioAdvance(scenario, clearIndex, {
    decisions: { q203Program: "participated" }
  });
  const skipped = resolveScenarioAdvance(scenario, clearIndex, {
    decisions: { q203Program: "not-participated" }
  });
  assert.equal(scenario[participated.targetIndex].id, "q2-04-participated-passage");
  assert.equal(scenario[skipped.targetIndex].id, "q2-04-not-participated-passage");
});
