import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import {
  applyScenarioEffects,
  createHistorySnapshot,
  createInitialState,
  resolveScenarioAdvance,
  resolveScenarioChoice
} from "../js/gameLogic.js";

const projectRoot = new URL("../", import.meta.url);
const scenes = scenario.filter((scene) => scene.chapter === "Q1-03");
const byId = (id) => scenes.find((scene) => scene.id === id);
const intro = (number) => byId(`q1-03-${String(number).padStart(3, "0")}`);
const choiceScene = byId("q1-03-choice");
const choiceIndex = scenario.indexOf(choiceScene);

test("Q1-03は40会話・3択・回答10会話・共通21会話・CLEARで構成される", () => {
  assert.equal(scenes.length, 73);
  scenes.slice(0, 40).forEach((scene, index) => {
    assert.equal(scene.id, `q1-03-${String(index + 1).padStart(3, "0")}`);
  });
  assert.equal(scenes[40], choiceScene);
  assert.equal(intro(1).text, "細かいことは、その都度確認すればいい。");
  assert.equal(intro(18).text, "Slackって、連絡を見るだけの場所じゃないから。");
  assert.equal(byId("q1-03-final-017").text, "情報通なんで。");
  assert.equal(byId("q1-03-final-021").text, "（思ってたより、ずっと人がいるのかも。）");

  for (const scene of scenes) {
    assert.equal(scene.background, "./assets/images/backgrounds/morning-room.png");
    assert.equal(scene.text.includes("※"), false, "制作メモは台詞に表示しない");
  }
});

test("Q1-02 CLEARから会話順に進み、選択前は通常送りを止める", () => {
  const previousClear = scenario.findIndex((scene) => scene.id === "q1-02-clear");
  let index = resolveScenarioAdvance(scenario, previousClear).targetIndex;

  for (let number = 1; number <= 40; number += 1) {
    assert.equal(scenario[index], intro(number));
    const advance = resolveScenarioAdvance(scenario, index);
    assert.equal(advance.type, "scene");
    index = advance.targetIndex;
  }
  assert.equal(index, choiceIndex);
  assert.deepEqual(resolveScenarioAdvance(scenario, index), {
    type: "choice", targetIndex: choiceIndex
  });
});

test("先輩退場・通知・チャンネル一覧・Slackくん登場の順に表示する", () => {
  assert.equal(intro(3).character, "./assets/images/characters/graduation/normal.png");
  for (let number = 4; number <= 17; number += 1) {
    assert.equal(intro(number).character, undefined);
  }
  assert.equal(intro(4).notification, undefined);
  assert.equal(intro(5).notification, undefined);
  for (let number = 6; number <= 9; number += 1) {
    assert.deepEqual(intro(number).notification, {
      title: "Slack · ZEN大学", text: "新しい通知が届いています。"
    });
    assert.equal(intro(number).foreground, undefined);
  }
  for (let number = 10; number <= 17; number += 1) {
    assert.equal(intro(number).notification, undefined);
    assert.equal(intro(number).foreground, "./assets/images/foregrounds/smartphone-slack.png");
    assert.equal(intro(number).foregroundLayout, "phone");
  }
  assert.equal(intro(16).speaker, "？？？");
  assert.equal(intro(18).speaker, "Slackくん");
  assert.equal(intro(18).character, "./assets/images/characters/slack/normal.png");
  assert.equal(intro(18).foreground, undefined);
  assert.equal(intro(18).notification, undefined);
});

test("3択は指定された能力値とSlackくん好感度の効果を持つ", () => {
  assert.equal(choiceScene.text, "Slackで最初に気をつけることは？");
  assert.deepEqual(choiceScene.choices.map((choice) => choice.label), ["A", "B", "C"]);
  assert.deepEqual(choiceScene.choices.map((choice) => choice.effects), [
    { informationUse: 2, selfManagement: 1, affection: { slack: 2 } },
    { informationUse: -1, affection: { slack: -1 } },
    { universityLife: 1, informationUse: -1, affection: { slack: -1 } }
  ]);
});

test("Q1-01の状態を維持してQ1-03の効果を加え、選び直しても重複しない", () => {
  const firstChoice = scenario.find((scene) => scene.id === "q1-01-choice");
  const state = applyScenarioEffects(createInitialState(), firstChoice.choices[0].effects);
  const beforeChoice = createHistorySnapshot(choiceIndex, 1, state);
  const expected = [
    { selfManagement: 3, informationUse: 3, universityLife: 0, affection: { rishu: 2, slack: 2 } },
    { selfManagement: 2, informationUse: 0, universityLife: 0, affection: { rishu: 2, slack: -1 } },
    { selfManagement: 2, informationUse: 0, universityLife: 1, affection: { rishu: 2, slack: -1 } }
  ];

  // 実画面と同じく、戻った際は選択前の履歴から復元して別の回答を選ぶ。
  choiceScene.choices.forEach((choice, index) => {
    const selected = resolveScenarioChoice(scenario, choiceIndex, index);
    assert.equal(scenario[selected.targetIndex].id, choice.next);
    assert.deepEqual(applyScenarioEffects(beforeChoice.gameState, selected.effects), expected[index]);
  });
  assert.deepEqual(beforeChoice.gameState, state);
  assert.deepEqual(state.affection, { rishu: 2 });
});

test("どの回答でも他の分岐を通らず共通21会話へ合流し、CLEARからQ1-04へ進む", () => {
  for (const [choiceNumber, choice] of choiceScene.choices.entries()) {
    let index = resolveScenarioChoice(scenario, choiceIndex, choiceNumber).targetIndex;
    const visited = new Set();
    const commonIds = [];
    let answerCount = 0;

    while (scenario[index]?.clear !== true) {
      const current = scenario[index];
      assert.ok(current, "ルートが範囲外に進んでいます");
      assert.equal(current.chapter, "Q1-03");
      assert.equal(visited.has(current.id), false, "ルートが循環しています");
      visited.add(current.id);
      if (current.id.startsWith("q1-03-choice-")) {
        assert.ok(current.id.startsWith(`q1-03-choice-${choice.label.toLowerCase()}-`));
        answerCount += 1;
      } else {
        commonIds.push(current.id);
      }
      const advance = resolveScenarioAdvance(scenario, index);
      assert.equal(advance.type, "scene");
      index = advance.targetIndex;
    }

    assert.equal(answerCount, [3, 4, 3][choiceNumber]);
    assert.deepEqual(commonIds, Array.from({ length: 21 }, (_, i) =>
      `q1-03-final-${String(i + 1).padStart(3, "0")}`
    ));
    assert.equal(scenario[index].id, "q1-03-clear");
    assert.equal(scenario[index].text, "Q1-03 CLEAR！");
    assert.equal(scenario[index].clear, true);
    assert.notEqual(scenario[index].end, true);
    const advance = resolveScenarioAdvance(scenario, index);
    assert.equal(advance.type, "scene");
    assert.equal(scenario[advance.targetIndex].id, "q1-04-time-passage");
  }
});

test("会話のまとまりごとに表情を保ち、未用意の表情は既存素材で表現する", () => {
  const blocks = [
    ["q1-03-018", "q1-03-033", "normal"],
    ["q1-03-034", "q1-03-036", "smile"],
    ["q1-03-037", "q1-03-choice", "worried"],
    ["q1-03-choice-a-001", "q1-03-choice-a-003", "smile"],
    ["q1-03-choice-b-001", "q1-03-choice-b-004", "worried"],
    ["q1-03-choice-c-001", "q1-03-choice-c-003", "worried"],
    ["q1-03-final-001", "q1-03-final-008", "smile"],
    ["q1-03-final-009", "q1-03-final-021", "wink"]
  ];

  for (const [startId, endId, expression] of blocks) {
    const start = scenes.indexOf(byId(startId));
    const end = scenes.indexOf(byId(endId));
    assert.ok(start >= 0 && end >= start);
    for (const scene of scenes.slice(start, end + 1)) {
      assert.equal(scene.character, `./assets/images/characters/slack/${expression}.png`, scene.id);
    }
  }
});

test("既存の通知SEを1場面だけに設定し、使用画像のPNG・WebPが揃っている", async () => {
  const withSound = scenes.filter((scene) => scene.se);
  assert.deepEqual(withSound.map((scene) => scene.id), ["q1-03-006"]);
  assert.equal(withSound[0].se, "./assets/audio/se/notification.wav");
  assert.ok(scenes.every((scene) => scene.bgm === undefined));
  await access(new URL(withSound[0].se, projectRoot));

  const start = scenario.indexOf(scenes[0]);
  const pngPaths = getChapterImagePaths(scenario, start, false);
  assert.ok(pngPaths.includes("./assets/images/foregrounds/smartphone-slack.png"));
  for (const expression of ["normal", "smile", "worried", "wink"]) {
    assert.ok(pngPaths.includes(`./assets/images/characters/slack/${expression}.png`));
  }
  for (const path of [...pngPaths, ...getChapterImagePaths(scenario, start, true)]) {
    await access(new URL(path, projectRoot));
  }
});
