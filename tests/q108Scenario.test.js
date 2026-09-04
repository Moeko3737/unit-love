import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance } from "../js/gameLogic.js";

const projectRoot = new URL("../", import.meta.url);
const scenes = scenario.filter((scene) => scene.chapter === "Q1-08");
const conversations = scenes.filter((scene) => /^q1-08-\d{3}$/.test(scene.id));
const at = (number) => scenes.find((scene) =>
  scene.id === `q1-08-${String(number).padStart(3, "0")}`
);
const room = "./assets/images/backgrounds/morning-room.png";

test("Q1-08は前日・当日・終了後の3場面と103会話・CLEARで構成される", () => {
  assert.equal(scenes.length, 107);
  assert.equal(conversations.length, 103);
  assert.deepEqual(scenes[0].timePassage, {
    label: "END OF QUARTER",
    title: "1Q末",
    detail: "単位認定試験・前日"
  });
  assert.deepEqual(scenes.find((scene) => scene.id === "q1-08-exam-day").timePassage, {
    label: "EXAM DAY",
    title: "受験当日",
    detail: "単位認定試験・開始前"
  });
  assert.deepEqual(scenes.find((scene) => scene.id === "q1-08-after-exam").timePassage, {
    label: "AFTER THE EXAM",
    title: "試験終了後",
    detail: "少しして"
  });
  assert.equal(at(70).next, "q1-08-exam-day");
  assert.equal(at(81).next, "q1-08-after-exam");
  assert.equal(scenes.at(-1).id, "q1-08-clear");
  assert.equal(scenes.at(-1).clear, true);
  assert.deepEqual(scenes.at(-1).quarterEnd, {
    nextQuarter: 2,
    target: "q2-start"
  });
});

test("受験前チェックにPC・動作確認・スマートフォンを表示する", () => {
  const checklist = {
    period: "EXAM PREPARATION",
    title: "受験前チェック",
    items: [
      { label: "CHECK 01", date: "環境チェック", detail: "PC・通信環境" },
      { label: "CHECK 02", date: "カメラ・マイク", detail: "動作確認" },
      { label: "CHECK 03", date: "スマートフォン", detail: "カメラを準備" }
    ]
  };
  for (let number = 19; number <= 27; number += 1) {
    assert.deepEqual(at(number).deadlineSchedule, checklist);
  }
  assert.equal(at(18).deadlineSchedule, undefined);
  assert.equal(at(28).deadlineSchedule, undefined);
});

test("持ち込みルールと最新情報の確認を強調し、Slackでの共同学習も伝える", () => {
  assert.equal(at(34).text, "白紙は30枚まで。筆記用具は持ち込み可。");
  assert.equal(at(34).emphasis, true);
  assert.equal(at(58).text, "学生同士で授業の内容について話したり、学びを深めたりするチャンネルもあるよ。");
  assert.equal(at(61).text, "学生同士で問題を作って、模擬試験みたいに共有してる人たちもいるし。");
  assert.equal(at(93).text, "学生便覧やZEN Portalで、最新の情報を自分で確認して。");
  assert.equal(at(93).emphasis, true);
});

test("Q1-07 CLEARから始まり、全場面を通ってQ1成績へ進む", () => {
  let index = scenario.findIndex((scene) => scene.id === "q1-07-clear");
  const start = resolveScenarioAdvance(scenario, index);
  assert.equal(scenario[start.targetIndex].id, "q1-08-time-passage");
  index = start.targetIndex;

  while (scenario[index].id !== "q1-08-clear") {
    index = resolveScenarioAdvance(scenario, index).targetIndex;
  }
  assert.deepEqual(resolveScenarioAdvance(scenario, index), {
    type: "quarter-result",
    targetIndex: scenario.findIndex((scene) => scene.id === "q2-start"),
    nextQuarter: 2
  });
});

test("単位認定試験くんとSlackくんの画像をPNG・WebPで先読みできる", async () => {
  const pngPaths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), false);
  assert.deepEqual(pngPaths, [
    room,
    "./assets/images/characters/exam/normal.png",
    "./assets/images/characters/exam/smile.png",
    "./assets/images/characters/slack/smile.png"
  ]);
  const webpPaths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), true);
  assert.deepEqual(webpPaths, pngPaths.map((path) => path.replace(/\.png$/, ".webp")));
  for (const path of [...pngPaths, ...webpPaths]) {
    await access(new URL(path, projectRoot));
  }
});
