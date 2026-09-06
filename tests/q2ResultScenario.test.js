import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";
import { resolveScenarioAdvance } from "../js/gameLogic.js";

const scenes = scenario.filter((scene) => scene.chapter === "Q2 RESULT");
const byId = (id) => scenario.find((scene) => scene.id === id);

test("2Qの振り返り前半から成績表を開き、後半の会話へ戻る", () => {
  assert.equal(scenes[0].text, "2Q、終了〜！");
  assert.equal(byId("q2-result-005").text, "自分で“いつやるか”を決めないと、ほんとに全部あとに回る……。");

  const previewIndex = scenario.findIndex((scene) => scene.id === "q2-result-005");
  const advance = resolveScenarioAdvance(scenario, previewIndex);
  assert.deepEqual(advance, {
    type: "quarter-result-preview",
    targetIndex: scenario.findIndex((scene) => scene.id === "q2-result-006")
  });
  assert.equal(scenario[advance.targetIndex].text, "でも、締切も予定も前よりちゃんと見るようになった。");
});

test("2Qの振り返りは3Qへの意欲と2Q CLEARで締め、3Qへ進む", () => {
  assert.equal(byId("q2-result-010").text, "3Qもいってみよ！");
  assert.equal(scenes.at(-1).id, "q2-result-clear");
  assert.equal(scenes.at(-1).text, "2Q CLEAR！");
  const advance = resolveScenarioAdvance(scenario, scenario.indexOf(scenes.at(-1)));
  assert.deepEqual(advance, {
    type: "quarter-advance",
    targetIndex: scenario.findIndex((scene) => scene.id === "q3-start"),
    nextQuarter: 3
  });
});
