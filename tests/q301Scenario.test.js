import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance, resolveScenarioChoice } from "../js/gameLogic.js";

const scenes = scenario.filter((scene) => scene.chapter === "Q3-01");
const byId = (id) => scenario.find((scene) => scene.id === id);
const at = (number) => byId("q3-01-" + String(number).padStart(3, "0"));

test("Q3-01は3Q開始演出から自室での会話へ進む", () => {
  assert.equal(scenes[0].id, "q3-start");
  assert.deepEqual(scenes[0].timePassage, {
    label: "NEXT QUARTER",
    title: "3Q START",
    detail: "3Q序盤・自室／昼"
  });
  assert.equal(at(3).text, "3Qと4Qの履修登録！");
  assert.equal(at(3).deadlineSchedule, undefined);
  assert.equal(
    scenes.some((scene) => scene.deadlineSchedule !== undefined),
    false
  );
});

test("必修・選択必修・前提科目と少し先を見た履修を伝える", () => {
  assert.equal(at(21).text, "必修科目と選択必修科目は、1年生のうちに進めておくと後が楽になる。");
  assert.equal(at(24).text, "特に必修科目は、この先いろんな分野を学んでいくための基礎になる。");
  assert.equal(at(33).text, "科目によっては、先に履修しておく前提科目がある。");
  assert.equal(at(44).text, "“この先、何を学びたいか”を少し見る。");
});

test("3択は指定された能力値と履修登録くん好感度に反映される", () => {
  const choices = byId("q3-01-choice").choices;
  assert.deepEqual(choices.map((choice) => choice.label), ["A", "B", "C"]);
  assert.deepEqual(choices.map((choice) => choice.effects), [
    { selfManagement: 2, informationUse: 1, affection: { rishu: 2 } },
    { selfManagement: 1, universityLife: 1, affection: { rishu: 1 } },
    { selfManagement: -1, affection: { rishu: -1 } }
  ]);
});

test("どの回答も共通会話を通ってQ3-01 CLEARからQ3-02へ進む", () => {
  const choiceIndex = scenario.findIndex((scene) => scene.id === "q3-01-choice");

  for (let answer = 0; answer < 3; answer += 1) {
    let index = resolveScenarioChoice(scenario, choiceIndex, answer).targetIndex;
    let steps = 0;
    while (scenario[index].id !== "q3-01-clear" && steps < 40) {
      index = resolveScenarioAdvance(scenario, index).targetIndex;
      steps += 1;
    }
    assert.equal(scenario[index].id, "q3-01-clear");
  }
  assert.equal(byId("q3-01-clear").end, undefined);
  const advance = resolveScenarioAdvance(
    scenario,
    scenario.findIndex((scene) => scene.id === "q3-01-clear")
  );
  assert.equal(scenario[advance.targetIndex].id, "q3-02-001");
});

test("履修登録くんのnormal・worried・smileを既存3表情で表示する", () => {
  const paths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), false);
  assert.ok(paths.includes("./assets/images/characters/rishu/normal.png"));
  assert.ok(paths.includes("./assets/images/characters/rishu/troubled.png"));
  assert.ok(paths.includes("./assets/images/characters/rishu/smile.png"));
});
