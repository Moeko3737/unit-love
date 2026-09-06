import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";
import { resolveScenarioAdvance } from "../js/gameLogic.js";

const scenes = scenario.filter((scene) => scene.chapter === "Q3 RESULT");
const byId = (id) => scenario.find((scene) => scene.id === id);

test("3Q末の夜に3Qの出来事を振り返る", () => {
  assert.equal(scenes[0].id, "q3-result-time-passage");
  assert.equal(scenes[0].timePassage.title, "3Q末");
  assert.equal(scenes[0].timePassage.detail, "自室・夜");
  assert.ok(scenes.every((scene) =>
    scene.background === "./assets/images/backgrounds/night-room.png"
  ));
});

test("履修・国際交流・確認レポート・試験トラブルを振り返る", () => {
  assert.match(byId("q3-result-007").text, /来年以降に取りたい科目/);
  assert.match(byId("q3-result-011").text, /知らないまま閉じちゃったら/);
  assert.match(byId("q3-result-016").text, /あああああ/);
  assert.match(byId("q3-result-020").text, /自分の言葉で書く/);
  assert.match(byId("q3-result-027").text, /38\.7℃/);
  assert.match(byId("q3-result-035").text, /自己管理/);
});

test("3Q RESULTで成績を表示して4Qへ進む", () => {
  const resultIndex = scenario.findIndex((scene) => scene.id === "q3-result");
  const advance = resolveScenarioAdvance(scenario, resultIndex);
  assert.deepEqual(advance, {
    type: "quarter-result",
    targetIndex: scenario.findIndex((scene) => scene.id === "q4-start"),
    nextQuarter: 4
  });
  assert.equal(byId("q4-start").timePassage.title, "4Q START");
  assert.equal(byId("q4-start").next, "q4-01-001");
});
