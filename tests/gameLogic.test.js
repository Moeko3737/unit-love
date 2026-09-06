import test from "node:test";
import assert from "node:assert/strict";

import {
  createInitialState,
  createNextQuarterState,
  createHistorySnapshot,
  applyScenarioEffects,
  resolveScenarioAdvance,
  resolveScenarioChoice,
  hasValidScenarioTransitions,
  addScore,
  calculateQuarterGrade,
  scoreToPercent,
  getScoreMaximums,
  determineGrowthEnding,
  ENDING_IDS
} from "../js/gameLogic.js";

test("初期スコアはすべて0", () => {
  const state = createInitialState();

  assert.equal(state.selfManagement, 0);
  assert.equal(state.informationUse, 0);
  assert.equal(state.universityLife, 0);
});

test("次のQへ能力値と物語上の選択を引き継ぐ", () => {
  const previous = {
    selfManagement: 5,
    informationUse: 3,
    universityLife: 2,
    decisions: { q203Program: "participated" }
  };
  const next = createNextQuarterState(previous);

  assert.deepEqual(next, {
    selfManagement: 5,
    informationUse: 3,
    universityLife: 2,
    decisions: { q203Program: "participated" }
  });
  next.decisions.q203Program = "not-participated";
  assert.equal(previous.decisions.q203Program, "participated");
});

test("スコアを加算できる", () => {
  assert.equal(addScore(0, 2), 2);
  assert.equal(addScore(3, -1), 2);
});

test("選択肢の効果を元のゲーム状態を変えずに反映できる", () => {
  const state = createInitialState();
  const nextState = applyScenarioEffects(state, {
    selfManagement: 2,
    informationUse: 1
  });

  assert.deepEqual(state, createInitialState());
  assert.equal(nextState.selfManagement, 2);
  assert.equal(nextState.informationUse, 1);
  assert.equal(nextState.universityLife, 0);
});

test("物語上の選択結果をゲーム状態へ保存できる", () => {
  const state = createInitialState();
  const nextState = applyScenarioEffects(state, {
    decisions: { q203Program: "participated" }
  });

  assert.equal(state.decisions, undefined);
  assert.deepEqual(nextState.decisions, { q203Program: "participated" });
});

test("Q成績の評価を判定できる", () => {
  const maximums = getScoreMaximums(2);
  assert.equal(calculateQuarterGrade({ selfManagement: 0, informationUse: 0, universityLife: 0 }, maximums), "—");
  assert.equal(calculateQuarterGrade({ selfManagement: 3, informationUse: 3, universityLife: 3 }, maximums), "C");
  assert.equal(calculateQuarterGrade({ selfManagement: 4, informationUse: 4, universityLife: 3 }, maximums), "B");
  assert.equal(calculateQuarterGrade({ selfManagement: 5, informationUse: 5, universityLife: 4 }, maximums), "A");
  assert.equal(calculateQuarterGrade({ selfManagement: 6, informationUse: 6, universityLife: 6 }, maximums), "S");
});

test("スコアを0〜100%に変換できる", () => {
  assert.equal(scoreToPercent(3, 6), 50);
  assert.equal(scoreToPercent(14, 13), 100);
  assert.equal(scoreToPercent(-2, 3), 0);
});

test("年間得点から5種類の成長エンディングを判定できる", () => {
  assert.equal(determineGrowthEnding({ selfManagement: 13, informationUse: 12, universityLife: 12 }), ENDING_IDS.perfect);
  assert.equal(determineGrowthEnding({ selfManagement: 5, informationUse: 4, universityLife: 4 }), ENDING_IDS.tight);
  assert.equal(determineGrowthEnding({ selfManagement: 10, informationUse: 7, universityLife: 6 }), ENDING_IDS.selfManagement);
  assert.equal(determineGrowthEnding({ selfManagement: 7, informationUse: 10, universityLife: 6 }), ENDING_IDS.informationUse);
  assert.equal(determineGrowthEnding({ selfManagement: 7, informationUse: 6, universityLife: 10 }), ENDING_IDS.universityLife);
  assert.equal(determineGrowthEnding({
    selfManagement: 8,
    informationUse: 8,
    universityLife: 7,
    decisions: { q404Reflection: "recovery" }
  }), ENDING_IDS.informationUse);
  assert.equal(determineGrowthEnding({
    selfManagement: 8,
    informationUse: 8,
    universityLife: 7,
    decisions: { q404Reflection: "experience" }
  }), ENDING_IDS.selfManagement);
});


test("戻る機能用の履歴はゲーム状態を独立して保存する", () => {
  const state = createInitialState();
  state.selfManagement = 2;
  state.decisions = { q203Program: "participated" };

  const snapshot = createHistorySnapshot(4, 1, state);

  state.selfManagement = 9;
  state.decisions.q203Program = "not-participated";

  assert.equal(snapshot.index, 4);
  assert.equal(snapshot.quarter, 1);
  assert.equal(snapshot.gameState.selfManagement, 2);
  assert.equal(snapshot.gameState.decisions.q203Program, "participated");
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

test("保存した選択結果に応じて次のルートを切り替える", () => {
  const scenes = [
    {
      id: "clear",
      nextByDecision: {
        key: "program",
        routes: {
          participated: "joined",
          skipped: "not-joined"
        },
        default: "joined"
      }
    },
    { id: "joined" },
    { id: "not-joined" }
  ];

  assert.equal(
    resolveScenarioAdvance(scenes, 0, {
      decisions: { program: "participated" }
    }).targetIndex,
    1
  );
  assert.equal(
    resolveScenarioAdvance(scenes, 0, {
      decisions: { program: "skipped" }
    }).targetIndex,
    2
  );
  assert.equal(resolveScenarioAdvance(scenes, 0).targetIndex, 1);
  assert.equal(hasValidScenarioTransitions(scenes), true);
});

test("年間得点に対応する成長エンディングへ進む", () => {
  const scenes = [
    {
      id: "route",
      nextByScore: {
        routes: {
          "self-management": "self-end",
          "information-use": "information-end"
        },
        default: "self-end"
      }
    },
    { id: "self-end" },
    { id: "information-end" }
  ];

  assert.equal(
    resolveScenarioAdvance(scenes, 0, {
      selfManagement: 6,
      informationUse: 9,
      universityLife: 5
    }).targetIndex,
    2
  );
  assert.equal(resolveScenarioAdvance(scenes, 0, {
    selfManagement: 9,
    informationUse: 6,
    universityLife: 5
  }).targetIndex, 1);
  assert.equal(hasValidScenarioTransitions(scenes), true);
  assert.equal(hasValidScenarioTransitions([
    {
      id: "route",
      nextByScore: { routes: { perfect: "missing" }, default: "missing" }
    }
  ]), false);
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

test("Q終了時は成績表示を経由して次のQへ進む", () => {
  const scenes = [
    {
      id: "q1-clear",
      quarterEnd: { nextQuarter: 2, target: "q2-start" }
    },
    { id: "q2-start", end: true }
  ];

  assert.deepEqual(resolveScenarioAdvance(scenes, 0), {
    type: "quarter-result",
    targetIndex: 1,
    nextQuarter: 2
  });
  assert.equal(hasValidScenarioTransitions(scenes), true);
  assert.equal(hasValidScenarioTransitions([
    { id: "q1-clear", quarterEnd: { nextQuarter: 5, target: "missing" } }
  ]), false);
});

test("Q内の成績表示は能力値とQを変えず、指定した続きへ戻る", () => {
  const scenes = [
    {
      id: "q2-result-before",
      resultPreview: { target: "q2-result-after" }
    },
    { id: "q2-result-after", end: true }
  ];

  assert.deepEqual(resolveScenarioAdvance(scenes, 0), {
    type: "quarter-result-preview",
    targetIndex: 1
  });
  assert.equal(hasValidScenarioTransitions(scenes), true);
  assert.equal(hasValidScenarioTransitions([
    { id: "broken", resultPreview: { target: "missing" } }
  ]), false);
});

test("表示済みの成績後は、能力値を保ったまま次のQへ進む遷移を返す", () => {
  const scenes = [
    {
      id: "q2-clear",
      quarterAdvance: { nextQuarter: 3, target: "q3-start" }
    },
    { id: "q3-start", end: true }
  ];

  assert.deepEqual(resolveScenarioAdvance(scenes, 0), {
    type: "quarter-advance",
    targetIndex: 1,
    nextQuarter: 3
  });
  assert.equal(hasValidScenarioTransitions(scenes), true);
  assert.equal(hasValidScenarioTransitions([
    { id: "broken", quarterAdvance: { nextQuarter: 5, target: "missing" } }
  ]), false);
});
