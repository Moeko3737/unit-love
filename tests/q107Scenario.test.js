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
const scenes = scenario.filter((scene) => scene.chapter === "Q1-07");
const passage = scenes.find((scene) => scene.id === "q1-07-time-passage");
const choice = scenes.find((scene) => scene.id === "q1-07-choice");
const conversations = scenes.filter((scene) => /^q1-07-\d{3}$/.test(scene.id));
const at = (number) => scenes.find((scene) =>
  scene.id === `q1-07-${String(number).padStart(3, "0")}`
);
const room = "./assets/images/backgrounds/morning-room.png";

test("Q1-07は1Q後半の時間経過画面・原稿・3択・CLEARで構成される", () => {
  assert.equal(scenes.length, 86);
  assert.equal(scenes[0], passage);
  assert.deepEqual(passage.timePassage, {
    label: "LATE QUARTER",
    title: "1Q後半",
    detail: "自室・昼"
  });
  assert.equal(conversations.length, 47);
  for (let number = 1; number <= 47; number += 1) {
    assert.equal(conversations[number - 1], at(number));
    assert.equal(at(number).background, room);
  }
  assert.equal(at(24).text, "各科目、候補日時は三つ。");
  assert.equal(at(26).text, "その中から一つが、最初に割り当てられる。");
  assert.equal(at(32).text, "残りの二つから選ぶ。");
  assert.equal(at(34).text, "ZEN Portalから日程変更を申請できる。");
  assert.equal(scenes.at(-1).id, "q1-07-clear");
  assert.equal(scenes.at(-1).clear, true);
  assert.equal(scenes.at(-1).end, undefined);
});

test("ZEN Portal通知と割り当てられた試験日時を画面で確認できる", () => {
  for (let number = 1; number <= 4; number += 1) {
    assert.deepEqual(at(number).notification, {
      icon: "Z",
      title: "ZEN Portal",
      text: "単位認定試験の日程が公開されました"
    });
  }
  assert.equal(at(1).se, "./assets/audio/se/notification.wav");

  const assigned = {
    period: "ZEN PORTAL / 試験日程",
    title: "○○科目",
    items: [
      { label: "あなたの受験日時", date: "○月○日", detail: "○:○○" }
    ]
  };
  for (let number = 5; number <= 7; number += 1) {
    assert.deepEqual(at(number).deadlineSchedule, assigned);
  }
  assert.equal(at(8).deadlineSchedule, undefined);
});

test("3択の得点と単位認定試験くんの好感度を反映し、共通会話へ合流する", () => {
  const expectedStates = [
    { selfManagement: 2, informationUse: 1, universityLife: 0, affection: { exam: 2 } },
    { selfManagement: -1, informationUse: 0, universityLife: 0, affection: { exam: -1 } },
    { selfManagement: -2, informationUse: -1, universityLife: 0, affection: { exam: -1 } }
  ];
  const expectedAnswerCounts = [6, 6, 11];
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
    while (scenario[index].id !== "q1-07-clear") {
      if (scenario[index].id.startsWith("q1-07-choice-")) answerCount += 1;
      if (scenario[index].id.startsWith("q1-07-final-")) finalCount += 1;
      index = resolveScenarioAdvance(scenario, index).targetIndex;
    }
    assert.equal(answerCount, expectedAnswerCounts[choiceNumber]);
    assert.equal(finalCount, 13);
    const advance = resolveScenarioAdvance(scenario, index);
    assert.equal(scenario[advance.targetIndex].id, "q1-08-time-passage");
  });
});

test("3表情のPNGとWebPを章開始時に先読みできる", async () => {
  const pngPaths = getChapterImagePaths(scenario, scenario.indexOf(passage), false);
  assert.deepEqual(pngPaths, [
    room,
    "./assets/images/characters/exam/normal.png",
    "./assets/images/characters/exam/smile.png",
    "./assets/images/characters/exam/worried.png"
  ]);
  const webpPaths = getChapterImagePaths(scenario, scenario.indexOf(passage), true);
  assert.deepEqual(webpPaths, pngPaths.map((path) => path.replace(/\.png$/, ".webp")));
  for (const path of [...pngPaths, ...webpPaths]) {
    await access(new URL(path, projectRoot));
  }
});
