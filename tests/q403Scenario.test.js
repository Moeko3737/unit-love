import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance, resolveScenarioChoice } from "../js/gameLogic.js";

const scenes = scenario.filter((scene) => scene.chapter === "Q4-03");
const byId = (id) => scenario.find((scene) => scene.id === id);
const at = (number) => byId("q4-03-" + String(number).padStart(3, "0"));

test("Q4-03は4Q後半の自室から始まる", () => {
  assert.equal(scenes[0].id, "q4-03-time-passage");
  assert.equal(scenes[0].timePassage.title, "4Q後半");
  assert.equal(scenes[0].timePassage.detail, "自室・昼");
  assert.equal(at(5).text, "今の私って、卒業までどの辺にいるんだろ。");
});

test("履修状況UIで取得状況・卒業要件・残りを見比べる", () => {
  const progress = at(17).deadlineSchedule;
  assert.equal(progress.title, "1年終了時点の履修状況");
  assert.deepEqual(progress.items.map((item) => item.label), [
    "今年取得したもの",
    "卒業に必要なもの",
    "これから必要なもの"
  ]);
  assert.match(at(24).text, /区分や条件/);
  assert.match(at(25).text, /現在地/);
});

test("3択は指定された能力値と卒業要件先輩の好感度に反映される", () => {
  const choices = byId("q4-03-choice").choices;
  assert.deepEqual(choices.map((choice) => choice.label), ["A", "B", "C"]);
  assert.deepEqual(choices.map((choice) => choice.effects), [
    {
      selfManagement: 2,
      informationUse: 1,
      affection: { graduation: 2 }
    },
    { selfManagement: 0 },
    {
      selfManagement: -1,
      affection: { graduation: -1 }
    }
  ]);
});

test("どの回答も卒業までの現在地を振り返る共通ルートへ合流する", () => {
  const choiceIndex = scenario.findIndex((scene) => scene.id === "q4-03-choice");
  for (let answer = 0; answer < 3; answer += 1) {
    let index = resolveScenarioChoice(scenario, choiceIndex, answer).targetIndex;
    let steps = 0;
    while (scenario[index].id !== "q4-03-common-001" && steps < 14) {
      index = resolveScenarioAdvance(scenario, index).targetIndex;
      steps += 1;
    }
    assert.equal(scenario[index].id, "q4-03-common-001");
  }
  assert.equal(byId("q4-03-common-008").text, "卒業まで、あと3年。");
  assert.match(byId("q4-03-common-020").text, /現在地の確認/);
});

test("卒業要件先輩の通常・笑顔素材を使いQ4-03 CLEARからQ4-04へ進む", () => {
  const paths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), false);
  assert.ok(paths.includes("./assets/images/characters/graduation/normal.png"));
  assert.ok(paths.includes("./assets/images/characters/graduation/smile.png"));
  assert.equal(byId("q4-03-common-015").character, "./assets/images/characters/graduation/smile.png");
  const clearIndex = scenario.findIndex((scene) => scene.id === "q4-03-clear");
  const next = resolveScenarioAdvance(scenario, clearIndex);
  assert.equal(scenario[next.targetIndex].id, "q4-04-time-passage");
});
