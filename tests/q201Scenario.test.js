import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance } from "../js/gameLogic.js";

const projectRoot = new URL("../", import.meta.url);
const scenes = scenario.filter((scene) => scene.chapter === "Q2-01");
const conversations = scenes.filter((scene) => /^q2-01-\d{3}$/.test(scene.id));
const at = (number) => scenes.find((scene) =>
  scene.id === `q2-01-${String(number).padStart(3, "0")}`
);
const room = "./assets/images/backgrounds/morning-room.png";

test("Q2-01は2Q開始画面・71会話・CLEARで構成される", () => {
  assert.equal(scenes.length, 73);
  assert.equal(scenes[0].id, "q2-start");
  assert.deepEqual(scenes[0].timePassage, {
    label: "NEXT QUARTER",
    title: "2Q START",
    detail: "2Q初日・自室／朝"
  });
  assert.equal(conversations.length, 71);
  for (let number = 1; number <= 71; number += 1) {
    assert.equal(conversations[number - 1], at(number));
    assert.equal(at(number).background, room);
  }
  assert.equal(scenes.at(-1).id, "q2-01-clear");
  assert.equal(scenes.at(-1).clear, true);
  assert.equal(scenes.at(-1).end, undefined);
  assert.equal(scenes.at(-1).next, "q2-02-time-passage");
});

test("アルバイトのシフト画面を表示し、履修確認へ切り替える", () => {
  const shift = {
    period: "PART-TIME JOB / SHIFT",
    title: "アルバイト シフト希望",
    items: [
      { label: "希望日", date: "火曜日", detail: "夕方から" },
      { label: "希望日", date: "木曜日", detail: "夕方から" },
      { label: "希望日", date: "土曜日", detail: "昼から" }
    ]
  };
  for (let number = 7; number <= 12; number += 1) {
    assert.deepEqual(at(number).deadlineSchedule, shift);
  }
  assert.equal(at(6).deadlineSchedule, undefined);
  assert.equal(at(13).deadlineSchedule, undefined);
});

test("2Qの履修修正と3Q・4Qの履修登録時期を伝える", () => {
  assert.equal(at(21).text, "1Qのときに、2Qの科目も登録してる。");
  assert.equal(at(36).text, "2Qの最初なら、履修を修正できる期間がある。");
  assert.equal(at(36).emphasis, true);
  assert.equal(at(40).text, "そのうえで、大学とバイトの予定を組む。");
  assert.equal(at(49).text, "3Qで、3Qと4Qの履修を決める。");
  assert.equal(at(49).emphasis, true);
});

test("1Q成績後の2Q STARTから全会話を通ってQ2-02へ進む", () => {
  let index = scenario.findIndex((scene) => scene.id === "q2-start");
  while (scenario[index].id !== "q2-01-clear") {
    index = resolveScenarioAdvance(scenario, index).targetIndex;
  }
  const advance = resolveScenarioAdvance(scenario, index);
  assert.equal(advance.type, "scene");
  assert.equal(scenario[advance.targetIndex].id, "q2-02-time-passage");
});

test("履修登録くんの3表情をPNG・WebPで先読みできる", async () => {
  const pngPaths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), false);
  assert.deepEqual(pngPaths, [
    room,
    "./assets/images/characters/rishu/normal.png",
    "./assets/images/characters/rishu/troubled.png",
    "./assets/images/characters/rishu/smile.png"
  ]);
  const webpPaths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), true);
  assert.deepEqual(webpPaths, pngPaths.map((path) => path.replace(/\.png$/, ".webp")));
  for (const path of [...pngPaths, ...webpPaths]) {
    await access(new URL(path, projectRoot));
  }
});
