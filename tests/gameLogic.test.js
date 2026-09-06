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

test("次のQへ能力値と好感度を引き継ぐ", () => {
  const previous = {
    selfManagement: 5,
    informationUse: 3,
    universityLife: 2,
    affection: { slack: 2, exam: 1 }
  };
  const next = createNextQuarterState(previous);

  assert.deepEqual(next, {
    selfManagement: 5,
    informationUse: 3,
    universityLife: 2,
    affection: { slack: 2, exam: 1 }
  });
  next.affection.slack = 99;
  assert.equal(previous.affection.slack, 2);
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

test("物語上の選択結果をゲーム状態へ保存できる", () => {
  const state = createInitialState();
  const nextState = applyScenarioEffects(state, {
    decisions: { q203Program: "participated" }
  });

  assert.equal(state.decisions, undefined);
  assert.deepEqual(nextState.decisions, { q203Program: "participated" });
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

test("最も好感度が高い相手の個別エンディングへ進む", () => {
  const scenes = [
    {
      id: "route",
      nextByAffection: {
        routes: { rishu: "rishu-end", slack: "slack-end" },
        default: "rishu-end"
      }
    },
    { id: "rishu-end" },
    { id: "slack-end" }
  ];

  assert.equal(
    resolveScenarioAdvance(scenes, 0, { affection: { rishu: 2, slack: 5 } }).targetIndex,
    2
  );
  assert.equal(resolveScenarioAdvance(scenes, 0, { affection: {} }).targetIndex, 1);
  assert.equal(hasValidScenarioTransitions(scenes), true);
  assert.equal(hasValidScenarioTransitions([
    {
      id: "route",
      nextByAffection: { routes: { rishu: "missing" }, default: "missing" }
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
