import test from "node:test";
import assert from "node:assert/strict";

import {
  createInitialState,
  createHistorySnapshot,
  applyScenarioEffects,
  resolveScenarioAdvance,
  resolveScenarioChoice,
  hasValidScenarioTransitions,
  addScore,
  addAffection,
  calculateQuarterGrade,
  scoreToPercent,
  getTopAffection
} from "../js/gameLogic.js";

test("初期スコアはすべて0", () => {
  const state = createInitialState();

  assert.equal(state.selfManagement, 0);
  assert.equal(state.informationUse, 0);
  assert.equal(state.universityLife, 0);
});

test("スコアを加算できる", () => {
  assert.equal(addScore(0, 2), 2);
  assert.equal(addScore(3, -1), 2);
});

test("キャラクター好感度を加算できる", () => {
  const first = addAffection({}, "rishu", 2);
  const second = addAffection(first, "rishu", 1);

  assert.equal(first.rishu, 2);
  assert.equal(second.rishu, 3);
});

test("選択肢の効果を元のゲーム状態を変えずに反映できる", () => {
  const state = createInitialState();
  const nextState = applyScenarioEffects(state, {
    selfManagement: 2,
    informationUse: 1,
    affection: { rishu: 2 }
  });

  assert.deepEqual(state, createInitialState());
  assert.equal(nextState.selfManagement, 2);
  assert.equal(nextState.informationUse, 1);
  assert.equal(nextState.universityLife, 0);
  assert.equal(nextState.affection.rishu, 2);
});

test("Q成績の評価を判定できる", () => {
  assert.equal(calculateQuarterGrade({ selfManagement: 0, informationUse: 0, universityLife: 0 }), "—");
  assert.equal(calculateQuarterGrade({ selfManagement: 3, informationUse: 3, universityLife: 3 }), "C");
  assert.equal(calculateQuarterGrade({ selfManagement: 4, informationUse: 4, universityLife: 4 }), "B");
  assert.equal(calculateQuarterGrade({ selfManagement: 6, informationUse: 6, universityLife: 6 }), "A");
  assert.equal(calculateQuarterGrade({ selfManagement: 8, informationUse: 8, universityLife: 8 }), "S");
});

test("スコアを0〜100%に変換できる", () => {
  assert.equal(scoreToPercent(5), 50);
  assert.equal(scoreToPercent(12), 100);
  assert.equal(scoreToPercent(-2), 0);
});

test("最も好感度が高いキャラクターを取得できる", () => {
  assert.deepEqual(getTopAffection({ rishu: 3, slack: 5, report: 2 }), ["slack", 5]);
  assert.equal(getTopAffection({}), null);
});


test("戻る機能用の履歴はゲーム状態を独立して保存する", () => {
  const state = createInitialState();
  state.selfManagement = 2;
  state.affection.rishu = 3;

  const snapshot = createHistorySnapshot(4, 1, state);

  state.selfManagement = 9;
  state.affection.rishu = 10;

  assert.equal(snapshot.index, 4);
  assert.equal(snapshot.quarter, 1);
  assert.equal(snapshot.gameState.selfManagement, 2);
  assert.equal(snapshot.gameState.affection.rishu, 3);
});

test("通常シーンは次の配列位置へ進む", () => {
  const scenes = [{ id: "scene-1" }, { id: "scene-2" }];

  assert.deepEqual(resolveScenarioAdvance(scenes, 0), {
    type: "scene",
    targetIndex: 1
  });
});

test("回答待ちとCLEAR終端は通常送りでは飛ばせない", () => {
  const scenes = [
    { id: "choice", choices: [{ next: "clear" }] },
    { id: "clear", end: true }
  ];

  assert.deepEqual(resolveScenarioAdvance(scenes, 0), {
    type: "choice", targetIndex: 0
  });
  assert.deepEqual(resolveScenarioAdvance(scenes, 1), {
    type: "end", targetIndex: 1
  });
});

test("next指定があるシーンは共通ルートへ合流できる", () => {
  const scenes = [
    { id: "branch-end", next: "common" },
    { id: "unused-scene" },
    { id: "common" }
  ];

  assert.deepEqual(resolveScenarioAdvance(scenes, 0), {
    type: "scene",
    targetIndex: 2
  });
});

test("選択肢から効果と遷移先を取得できる", () => {
  const scenes = [
    {
      id: "choice",
      choices: [
        {
          label: "A",
          text: "回答A",
          effects: { selfManagement: 2 },
          next: "answer-a"
        }
      ]
    },
    { id: "answer-a" }
  ];

  assert.deepEqual(resolveScenarioChoice(scenes, 0, 0), {
    targetIndex: 1,
    effects: { selfManagement: 2 }
  });
  assert.equal(resolveScenarioChoice(scenes, 0, 1), null);
  assert.equal(resolveScenarioChoice(scenes, 0, -1), null);
  assert.equal(resolveScenarioChoice(scenes, 0, 0.5), null);
  assert.equal(resolveScenarioChoice(scenes, 1, 0), null);
});

test("存在しない分岐先や合流先を検出できる", () => {
  assert.equal(hasValidScenarioTransitions([
    { id: "choice", choices: [{ label: "A", text: "回答", next: "missing" }] }
  ]), false);
  assert.equal(hasValidScenarioTransitions([
    { id: "branch", next: "missing" }
  ]), false);
  assert.equal(resolveScenarioChoice([
    { id: "choice", choices: [{ next: "missing" }] }
  ], 0, 0), null);
});

test("OP遷移は指定したシーンの位置を返す", () => {
  const scenes = [
    {
      id: "prologue-end",
      transition: { type: "opening", target: "q1-01-001" }
    },
    { id: "unused-scene" },
    { id: "q1-01-001" }
  ];

  assert.deepEqual(resolveScenarioAdvance(scenes, 0), {
    type: "opening",
    targetIndex: 2
  });
});
