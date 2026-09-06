import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance, resolveScenarioChoice } from "../js/gameLogic.js";

const scenes = scenario.filter((scene) => scene.chapter === "Q3-02");
const byId = (id) => scenario.find((scene) => scene.id === id);
const at = (number) => byId("q3-02-" + String(number).padStart(3, "0"));

test("Q3-02は留学・国際交流の通知から始まる", () => {
  assert.equal(scenes[0].id, "q3-02-001");
  assert.equal(
    at(4).notification.text,
    "留学・国際交流プログラムのお知らせ"
  );
  assert.equal(at(4).se, "./assets/audio/se/notification.wav");
  for (let number = 4; number <= 10; number += 1) {
    assert.equal(at(number).notification.title, "ZEN Portal");
  }
});

test("まず知ってから参加するかを選べると伝える", () => {
  assert.equal(at(16).text, "参加するって決めなくていいじゃん。");
  assert.equal(at(18).text, "まず、“どんな選択肢があるんだろ”って見るだけでもいい。");
  assert.equal(at(27).text, "知らないものって、やりたいかどうかも決められないでしょ。");
  assert.equal(byId("q3-02-common-013").text, "“自分には関係ない”って、最初から閉じなくてもいい。");
});

test("3択は指定された能力値とガクチカくん好感度に反映される", () => {
  const choices = byId("q3-02-choice").choices;
  assert.deepEqual(choices.map((choice) => choice.label), ["A", "B", "C"]);
  assert.deepEqual(choices.map((choice) => choice.effects), [
    { universityLife: 2, informationUse: 1, affection: { gakuchika: 2 } },
    { informationUse: 1, universityLife: 1, affection: { gakuchika: 1 } },
    { universityLife: -1, affection: { gakuchika: -1 } }
  ]);
});

test("どの回答も共通会話を通ってQ3-02 CLEARへ合流し、Q3-03へ進む", () => {
  const choiceIndex = scenario.findIndex((scene) => scene.id === "q3-02-choice");

  for (let answer = 0; answer < 3; answer += 1) {
    let index = resolveScenarioChoice(scenario, choiceIndex, answer).targetIndex;
    let steps = 0;
    while (scenario[index].id !== "q3-02-clear" && steps < 40) {
      index = resolveScenarioAdvance(scenario, index).targetIndex;
      steps += 1;
    }
    assert.equal(scenario[index].id, "q3-02-clear");
  }
  const next = resolveScenarioAdvance(
    scenario,
    scenario.findIndex((scene) => scene.id === "q3-02-clear")
  );
  assert.equal(scenario[next.targetIndex].id, "q3-03-time-passage");
});

test("ガクチカくんのnormal・smile・grinを表示する", () => {
  const paths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), false);
  assert.ok(paths.includes("./assets/images/characters/gakuchika/normal.png"));
  assert.ok(paths.includes("./assets/images/characters/gakuchika/smile.png"));
  assert.ok(paths.includes("./assets/images/characters/gakuchika/grin.png"));
});
