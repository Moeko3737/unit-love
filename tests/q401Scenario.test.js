import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance } from "../js/gameLogic.js";

const scenes = scenario.filter((scene) => scene.chapter === "Q4-01");
const byId = (id) => scenario.find((scene) => scene.id === id);
const at = (number) => byId("q4-01-" + String(number).padStart(3, "0"));

test("Q4-01は4Q初日の朝から始まる", () => {
  assert.equal(scenes[0].id, "q4-start");
  assert.deepEqual(scenes[0].timePassage, {
    label: "NEXT QUARTER",
    title: "4Q START",
    detail: "4Q初日・自室／朝"
  });
});

test("主人公が大学生活の確認を自分で済ませる", () => {
  assert.equal(at(5).text, "4Qの履修科目を確認。");
  assert.match(at(6).text, /確認レポートの締切/);
  assert.match(at(7).text, /単位認定試験の日程/);
  assert.match(at(8).text, /カレンダーに入れとこ/);
  assert.equal(at(10).text, "Slackも未読チェック。");
});

test("6人が順番に主人公の成長を確認する", () => {
  const paths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), false);
  for (const path of [
    "./assets/images/characters/rishu/normal.png",
    "./assets/images/characters/slack/smile.png",
    "./assets/images/characters/report/serious.png",
    "./assets/images/characters/exam/normal.png",
    "./assets/images/characters/graduation/normal.png",
    "./assets/images/characters/gakuchika/normal.png"
  ]) {
    assert.ok(paths.includes(path));
  }
  assert.equal(at(22).text, "自分で確認してたからね。");
  assert.equal(at(44).text, "……成長したね。");
  assert.equal(at(58).text, "完璧じゃん。");
});

test("少し間を置いて自分で進む決意をする", () => {
  assert.equal(byId("q4-01-pause").timePassage.title, "少し間");
  assert.equal(at(70).text, "今度は、私が自分でやってみる。");
});

test("会話のみでQ4-01 CLEARからQ4-02へ進む", () => {
  assert.ok(scenes.every((scene) => !scene.choices));
  const clearIndex = scenario.findIndex((scene) => scene.id === "q4-01-clear");
  const next = resolveScenarioAdvance(scenario, clearIndex);
  assert.equal(scenario[next.targetIndex].id, "q4-02-time-passage");
});
