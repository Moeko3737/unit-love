import test from "node:test";
import assert from "node:assert/strict";

import {
  createInitialState,
  createHistorySnapshot,
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
