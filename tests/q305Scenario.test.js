import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance, resolveScenarioChoice } from "../js/gameLogic.js";

const scenes = scenario.filter((scene) => scene.chapter === "Q3-05");
const byId = (id) => scenario.find((scene) => scene.id === id);
const at = (number) => byId("q3-05-" + String(number).padStart(3, "0"));

test("Q3-05は試験当日の高熱と体温計から始まる", () => {
  assert.equal(scenes[0].id, "q3-05-time-passage");
  assert.equal(scenes[0].timePassage.title, "試験当日の朝");
  assert.equal(at(1).se, "./assets/audio/se/notification.wav");
  for (let number = 4; number <= 8; number += 1) {
    assert.equal(at(number).foreground, "./assets/images/foregrounds/thermometer.png");
  }
  assert.equal(at(4).text, "…………38.7℃。");
});

test("3択は指定された能力値と単位認定試験くん好感度に反映される", () => {
  const choices = byId("q3-05-choice").choices;
  assert.deepEqual(choices.map((choice) => choice.label), ["A", "B", "C"]);
  assert.deepEqual(choices.map((choice) => choice.effects), [
    { informationUse: 2, selfManagement: 2, affection: { exam: 2 } },
    { informationUse: 0, affection: { exam: -1 } },
    { selfManagement: -2, affection: { exam: -1 } }
  ]);
});

test("どの回答も公式案内の確認と追試験申請へ合流する", () => {
  const choiceIndex = scenario.findIndex((scene) => scene.id === "q3-05-choice");
  for (let answer = 0; answer < 3; answer += 1) {
    let index = resolveScenarioChoice(scenario, choiceIndex, answer).targetIndex;
    let steps = 0;
    while (scenario[index].id !== "q3-05-common-001" && steps < 10) {
      index = resolveScenarioAdvance(scenario, index).targetIndex;
      steps += 1;
    }
    assert.equal(scenario[index].id, "q3-05-common-001");
  }
  assert.match(byId("q3-05-common-006").text, /追試験を申請できる/);
  assert.match(byId("q3-05-common-011").text, /自動で追試になる/);
  assert.match(byId("q3-05-common-014").text, /期限や必要な手続き/);
});

test("FAQとZEN Portalの申請案内を切り替える", () => {
  assert.equal(byId("q3-05-common-001").deadlineSchedule.period, "ZEN大学 / FAQ");
  assert.equal(byId("q3-05-common-001").deadlineSchedule.items.length, 3);
  assert.equal(byId("q3-05-common-017").deadlineSchedule.period, "ZEN PORTAL / 追試験");
  assert.equal(byId("q3-05-common-017").deadlineSchedule.items.length, 3);
});

test("心配・通常・笑顔の3表情と体温計素材を使う", () => {
  const paths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), false);
  assert.ok(paths.includes("./assets/images/foregrounds/thermometer.png"));
  assert.ok(paths.includes("./assets/images/characters/exam/worried.png"));
  assert.ok(paths.includes("./assets/images/characters/exam/normal.png"));
  assert.ok(paths.includes("./assets/images/characters/exam/smile.png"));
});

test("Q3-05 CLEARから3Q RESULTへ進む", () => {
  const clearIndex = scenario.findIndex((scene) => scene.id === "q3-05-clear");
  const next = resolveScenarioAdvance(scenario, clearIndex);
  assert.equal(scenario[next.targetIndex].id, "q3-result-time-passage");
});
