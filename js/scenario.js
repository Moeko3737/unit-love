import { prologueScenario } from "./scenarios/prologue.js?v=20260907-8";
import { q1Scenario } from "./scenarios/q1.js?v=20260907-8";
import { q2Scenario } from "./scenarios/q2.js?v=20260907-8";
import { q3Scenario } from "./scenarios/q3.js?v=20260907-8";
import { q4Scenario } from "./scenarios/q4.js?v=20260907-8";

// 章ごとのファイルは単独で確認でき、ゲーム本体には一本の配列として渡す。
export const scenario = [
  ...prologueScenario,
  ...q1Scenario,
  ...q2Scenario,
  ...q3Scenario,
  ...q4Scenario
];
