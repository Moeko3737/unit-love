import test from "node:test";
import assert from "node:assert/strict";

import {
  createInitialState,
  addScore,
  addAffection
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
  const first = addAffection({}, "registration", 2);
  const second = addAffection(first, "registration", 1);

  assert.equal(first.registration, 2);
  assert.equal(second.registration, 3);
});
