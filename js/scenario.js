import { prologueScenario } from "./scenarios/prologue.js";
import { q1Scenario } from "./scenarios/q1.js";
import { q2Scenario } from "./scenarios/q2.js";
import { q3Scenario } from "./scenarios/q3.js";
import { q4Scenario } from "./scenarios/q4.js";

// 章ごとのファイルは単独で確認でき、ゲーム本体には一本の配列として渡す。
export const scenario = [
  ...prologueScenario,
  ...q1Scenario,
  ...q2Scenario,
  ...q3Scenario,
  ...q4Scenario
];
