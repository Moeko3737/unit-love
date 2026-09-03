import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";

import { scenario } from "../js/scenario.js";
import {
  applyScenarioEffects,
  createHistorySnapshot,
  createInitialState,
  resolveScenarioAdvance,
  resolveScenarioChoice
} from "../js/gameLogic.js";

const repositoryRoot = new URL("../", import.meta.url);
const q1Scenes = scenario.filter((scene) => scene.chapter === "Q1-01");
const choiceScene = q1Scenes.find((scene) => scene.id === "q1-01-choice");

test("Q1-01が仮テキストではなく指定の会話から始まる", () => {
  assert.equal(q1Scenes[0].id, "q1-01-001");
  assert.equal(q1Scenes[0].speaker, "履修登録くん");
  assert.equal(q1Scenes[0].text, "大学生活初日から、その選び方？");
  assert.equal(
    q1Scenes.some((scene) => scene.text.includes("制作中")),
    false
  );
});

test("Q1-01は選択肢の分岐も含めて主人公の自室を背景にする", () => {
  for (const scene of q1Scenes) {
    assert.equal(scene.background, "./assets/images/backgrounds/morning-room.png", scene.id);
  }
});

test("会話のまとまりの途中で表情を頻繁に切り替えない", () => {
  const expressionBlocks = [
    ["q1-01-001", "q1-01-011", "rishu/normal"],
    ["q1-01-012", "q1-01-026", "rishu/serious"],
    ["q1-01-027", "q1-01-031", "graduation/normal"],
    ["q1-01-032", "q1-01-032", "graduation/guidance"],
    ["q1-01-033", "q1-01-choice", "rishu/normal"],
    ["q1-01-choice-a-001", "q1-01-choice-a-001", "rishu/smile"],
    ["q1-01-choice-b-001", "q1-01-choice-b-002", "rishu/troubled"],
    ["q1-01-choice-c-001", "q1-01-choice-c-003", "rishu/serious"],
    ["q1-01-final-001", "q1-01-final-005", "rishu/smile"]
  ];

  for (const [startId, endId, expression] of expressionBlocks) {
    const start = q1Scenes.findIndex((scene) => scene.id === startId);
    const end = q1Scenes.findIndex((scene) => scene.id === endId);
    assert.ok(start >= 0 && end >= start, `${startId}から${endId}の会話が見つかりません`);

    for (const scene of q1Scenes.slice(start, end + 1)) {
      assert.equal(scene.character, `./assets/images/characters/${expression}.png`, scene.id);
    }
  }
});

test("Q1-01の3択に指定のスコアと好感度が設定されている", () => {
  assert.ok(choiceScene);
  assert.deepEqual(
    choiceScene.choices.map((choice) => choice.label),
    ["A", "B", "C"]
  );
  assert.deepEqual(choiceScene.choices[0].effects, {
    selfManagement: 2,
    informationUse: 1,
    affection: { rishu: 2 }
  });
  assert.deepEqual(choiceScene.choices[1].effects, {
    selfManagement: -1,
    universityLife: 1
  });
  assert.deepEqual(choiceScene.choices[2].effects, {
    selfManagement: -2,
    informationUse: -1
  });
});

test("実際の3択データから加点・減点と好感度を反映できる", () => {
  const choiceIndex = scenario.indexOf(choiceScene);
  const expectedStates = [
    { selfManagement: 2, informationUse: 1, universityLife: 0, affection: { rishu: 2 } },
    { selfManagement: -1, informationUse: 0, universityLife: 1, affection: {} },
    { selfManagement: -2, informationUse: -1, universityLife: 0, affection: {} }
  ];

  choiceScene.choices.forEach((choice, index) => {
    const selected = resolveScenarioChoice(scenario, choiceIndex, index);
    assert.equal(scenario[selected.targetIndex].id, choice.next);
    assert.deepEqual(
      applyScenarioEffects(createInitialState(), selected.effects),
      expectedStates[index]
    );
  });
});

test("選択前の履歴へ戻って別の回答を選んでも効果が重複しない", () => {
  const beforeChoice = createHistorySnapshot(
    scenario.indexOf(choiceScene), 1, createInitialState()
  );
  const stateAfterA = applyScenarioEffects(beforeChoice.gameState, choiceScene.choices[0].effects);
  const afterChoice = createHistorySnapshot(0, 1, stateAfterA);

  // 実画面も、戻るときは選択前の履歴から状態を復元してから選び直す。
  const stateAfterB = applyScenarioEffects(beforeChoice.gameState, choiceScene.choices[1].effects);
  assert.deepEqual(beforeChoice.gameState, createInitialState());
  assert.deepEqual(stateAfterB, {
    selfManagement: -1, informationUse: 0, universityLife: 1, affection: {}
  });
  assert.equal(afterChoice.gameState.affection.rishu, 2);
});

test("すべての選択肢が回答後に共通ルートへ合流する", () => {
  for (const choice of choiceScene.choices) {
    let currentIndex = scenario.findIndex((scene) => scene.id === choice.next);
    let reachedCommonRoute = false;

    for (let step = 0; step < 4; step += 1) {
      if (scenario[currentIndex].id === "q1-01-final-001") {
        reachedCommonRoute = true;
        break;
      }

      currentIndex = resolveScenarioAdvance(scenario, currentIndex).targetIndex;
    }

    assert.equal(reachedCommonRoute, true, `${choice.label}ルートが合流しません`);
  }
});

test("Q1-01のCLEARから通常送りでQ1-02へ進める", () => {
  const clearScene = q1Scenes.at(-1);

  assert.equal(clearScene.id, "q1-01-clear");
  assert.equal(clearScene.text, "Q1-01 CLEAR");
  assert.equal(clearScene.clear, true);
  assert.notEqual(clearScene.end, true);
  assert.equal(clearScene.next, "q1-02-001");
  const advance = resolveScenarioAdvance(scenario, scenario.indexOf(clearScene));
  assert.equal(advance.type, "scene");
  assert.equal(scenario[advance.targetIndex].id, "q1-02-001");
});

test("どの回答でも他の回答ルートを通らずCLEARまで到達する", () => {
  for (const choice of choiceScene.choices) {
    let index = scenario.findIndex((scene) => scene.id === choice.next);
    const visited = new Set();

    while (scenario[index]?.clear !== true) {
      const current = scenario[index];
      assert.ok(current, `${choice.label}のルートが範囲外へ進みました`);
      assert.equal(visited.has(current.id), false, "ルートが循環しています");
      visited.add(current.id);

      if (current.id.startsWith("q1-01-choice-")) {
        assert.ok(current.id.startsWith(`q1-01-choice-${choice.label.toLowerCase()}-`));
      }
      index = resolveScenarioAdvance(scenario, index).targetIndex;
    }

    assert.ok(visited.has("q1-01-final-001"));
    assert.equal(scenario[index].id, "q1-01-clear");
  }
});

test("Q1-01は音源なしで、必要な画像がすべて存在する", async () => {
  for (const scene of q1Scenes) {
    assert.equal(scene.bgm, undefined);
    assert.equal(scene.se, undefined);

    for (const imagePath of [scene.background, scene.character]) {
      if (!imagePath) continue;

      const repositoryPath = imagePath.replace(/^\.\//, "");
      await access(new URL(repositoryPath, repositoryRoot));
    }
  }
});
