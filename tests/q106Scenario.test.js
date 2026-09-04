import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import {
  applyScenarioEffects,
  createInitialState,
  resolveScenarioAdvance,
  resolveScenarioChoice
} from "../js/gameLogic.js";

const projectRoot = new URL("../", import.meta.url);
const scenes = scenario.filter((scene) => scene.chapter === "Q1-06");
const passage = scenes.find((scene) => scene.id === "q1-06-time-passage");
const choice = scenes.find((scene) => scene.id === "q1-06-choice");
const conversations = scenes.filter((scene) => /^q1-06-\d{3}$/.test(scene.id));
const at = (number) => scenes.find((scene) =>
  scene.id === `q1-06-${String(number).padStart(3, "0")}`
);
const room = "./assets/images/backgrounds/morning-room.png";
const phone = "./assets/images/foregrounds/smartphone-report-deadline.png";

test("Q1-06は1Q中盤の時間経過画面・原稿・3択・CLEARで構成される", () => {
  assert.equal(scenes.length, 83);
  assert.equal(scenes[0], passage);
  assert.deepEqual(passage.timePassage, {
    label: "MID QUARTER",
    title: "1Q中盤",
    detail: "自室・昼"
  });
  assert.equal(conversations.length, 55);
  for (let number = 1; number <= 55; number += 1) {
    assert.equal(conversations[number - 1], at(number));
    assert.equal(at(number).background, room);
  }
  assert.equal(at(1).text, "よし、今日の授業も終わり！");
  assert.equal(at(17).text, "オンデマンド科目では、基本的に各授業回ごとに確認レポートを提出する。");
  assert.equal(at(28).text, "間に合わなかった分は、3分の1減点。");
  assert.equal(at(37).text, "単位認定試験は受けられない。");
  assert.equal(at(51).text, "提出できる回は、前倒しで提出できる。");
});

test("通知画面から登場し、2026年度1Qの3段階の締切を一覧表示する", () => {
  assert.equal(at(1).foreground, undefined);
  assert.equal(at(2).foreground, undefined);
  for (let number = 3; number <= 9; number += 1) {
    assert.equal(at(number).foreground, phone);
    assert.equal(at(number).foregroundLayout, "phone");
    assert.equal(at(number).character, undefined);
  }
  assert.equal(at(10).foreground, undefined);

  const expected = {
    period: "2026年度 1Q",
    title: "確認レポート 締切スケジュール",
    items: [
      { label: "第1回締切", date: "5月6日", detail: "第5回分まで" },
      { label: "第2回締切", date: "5月21日", detail: "第10回分まで" },
      { label: "最終締切", date: "6月7日", detail: "第15回分まで" }
    ]
  };
  assert.deepEqual(at(20).deadlineSchedule, expected);
  assert.equal(at(21).deadlineSchedule, at(20).deadlineSchedule);
  assert.equal(at(19).deadlineSchedule, undefined);
  assert.equal(at(22).deadlineSchedule, undefined);
  assert.equal(at(20).character, undefined);
  assert.equal(at(21).character, undefined);
});

test("normalとseriousの2表情だけを会話のまとまりで使う", () => {
  const normal = "./assets/images/characters/report/normal.png";
  const serious = "./assets/images/characters/report/serious.png";

  for (let number = 10; number <= 16; number += 1) {
    assert.equal(at(number).character, normal, at(number).id);
  }
  for (let number = 17; number <= 19; number += 1) {
    assert.equal(at(number).character, serious, at(number).id);
  }
  for (let number = 22; number <= 55; number += 1) {
    assert.equal(at(number).character, serious, at(number).id);
  }
  assert.equal(choice.character, serious);

  for (const scene of scenes.filter((entry) => entry.id.startsWith("q1-06-choice-a-"))) {
    assert.equal(scene.character, normal, scene.id);
  }
  for (const route of ["b", "c"]) {
    for (const scene of scenes.filter((entry) => entry.id.startsWith(`q1-06-choice-${route}-`))) {
      assert.equal(scene.character, serious, scene.id);
    }
  }
  for (let number = 1; number <= 9; number += 1) {
    assert.equal(scenes.find((scene) => scene.id === `q1-06-final-${String(number).padStart(3, "0")}`).character, serious);
  }
  for (let number = 10; number <= 11; number += 1) {
    assert.equal(scenes.find((scene) => scene.id === `q1-06-final-${String(number).padStart(3, "0")}`).character, normal);
  }
});

test("3択は自己管理と好感度に反映され、各回答から共通会話へ合流する", () => {
  assert.deepEqual(choice.choices.map((entry) => entry.label), ["A", "B", "C"]);
  const expectedStates = [
    { selfManagement: 2, informationUse: 0, universityLife: 0, affection: { report: 2 } },
    { selfManagement: -1, informationUse: 0, universityLife: 0, affection: { report: -1 } },
    { selfManagement: -2, informationUse: 0, universityLife: 0, affection: { report: -1 } }
  ];
  const expectedAnswerCounts = [5, 6, 3];
  const choiceIndex = scenario.indexOf(choice);

  choice.choices.forEach((entry, choiceNumber) => {
    const selected = resolveScenarioChoice(scenario, choiceIndex, choiceNumber);
    assert.deepEqual(
      applyScenarioEffects(createInitialState(), selected.effects),
      expectedStates[choiceNumber]
    );

    let index = selected.targetIndex;
    let answerCount = 0;
    let finalCount = 0;
    while (scenario[index].id !== "q1-06-clear") {
      if (scenario[index].id.startsWith("q1-06-choice-")) answerCount += 1;
      if (scenario[index].id.startsWith("q1-06-final-")) finalCount += 1;
      index = resolveScenarioAdvance(scenario, index).targetIndex;
    }
    assert.equal(answerCount, expectedAnswerCounts[choiceNumber]);
    assert.equal(finalCount, 11);
    assert.equal(scenario[index].clear, true);
    const advance = resolveScenarioAdvance(scenario, index);
    assert.equal(advance.type, "scene");
    assert.equal(scenario[advance.targetIndex].id, "q1-07-time-passage");
  });
});

test("重要事項を強調し、章内画像をPNG・WebPで先読みできる", async () => {
  const emphasized = scenes.filter((scene) => scene.emphasis).map((scene) => scene.id);
  assert.deepEqual(emphasized, [
    "q1-06-028",
    "q1-06-037",
    "q1-06-final-002",
    "q1-06-final-003",
    "q1-06-final-005"
  ]);
  assert.ok(scenes.every((scene) => scene.bgm === undefined && scene.se === undefined));

  const pngPaths = getChapterImagePaths(scenario, scenario.indexOf(passage), false);
  assert.deepEqual(pngPaths, [
    room,
    phone,
    "./assets/images/characters/report/normal.png",
    "./assets/images/characters/report/serious.png"
  ]);
  const webpPaths = getChapterImagePaths(scenario, scenario.indexOf(passage), true);
  assert.deepEqual(webpPaths, pngPaths.map((path) => path.replace(/\.png$/, ".webp")));
  for (const path of [...pngPaths, ...webpPaths]) {
    await access(new URL(path, projectRoot));
  }
});
