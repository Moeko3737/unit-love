import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";
import {
  hasUniqueScenarioIds,
  isValidScenarioScene
} from "../js/gameLogic.js";

test("シナリオIDに重複がない", () => {
  assert.equal(hasUniqueScenarioIds(scenario), true);
});

test("すべてのシナリオに必要な項目がある", () => {
  for (const scene of scenario) {
    assert.equal(isValidScenarioScene(scene), true);
  }
});
