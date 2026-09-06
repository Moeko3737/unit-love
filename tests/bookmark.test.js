import test from "node:test";
import assert from "node:assert/strict";
import {
  BOOKMARK_STORAGE_KEY, createBookmark, restoreBookmark, createBookmarkStore
} from "../js/bookmark.js";
import { scenario } from "../js/scenario.js";
import {
  createInitialState, createHistorySnapshot, applyScenarioEffects,
  resolveScenarioAdvance, resolveScenarioChoice
} from "../js/gameLogic.js";

const indexOf = (id) => scenario.findIndex((scene) => scene.id === id);
const snapshot = (id, state = createInitialState()) =>
  createHistorySnapshot(indexOf(id), 1, state);
const copy = (value) => JSON.parse(JSON.stringify(value));

test("栞はシーンID・能力値・好感度・選択結果・戻る履歴を独立したデータとして保存する", () => {
  const state = {
    selfManagement: 2,
    informationUse: -1,
    universityLife: 1,
    affection: { rishu: 2, slack: -1 },
    decisions: { q203Program: "participated" }
  };
  const history = [snapshot("q1-03-clear", state), snapshot("q1-04-038", state)];
  const bookmark = createBookmark(scenario, history, 1000);
  assert.equal(bookmark.version, 1);
  assert.equal(bookmark.savedAt, 1000);
  assert.equal(bookmark.history[1].sceneId, "q1-04-038");
  assert.equal(bookmark.history[1].index, undefined);

  const restored = restoreBookmark(copy(bookmark), scenario);
  assert.equal(restored.currentIndex, indexOf("q1-04-038"));
  assert.equal(restored.currentQuarter, 1);
  assert.deepEqual(restored.gameState, state);
  assert.deepEqual(restored.sceneHistory, history);
  restored.gameState.affection.slack = 99;
  assert.equal(restored.sceneHistory[1].gameState.affection.slack, -1);
  restored.gameState.decisions.q203Program = "not-participated";
  assert.equal(restored.sceneHistory[1].gameState.decisions.q203Program, "participated");
  history[1].gameState.affection.slack = 88;
  assert.equal(bookmark.history[1].gameState.affection.slack, -1);
});

test("シナリオの前に会話が挿入されても、同じシーンと履歴へ復帰する", () => {
  const history = [snapshot("q1-04-037"), snapshot("q1-04-038")];
  const bookmark = createBookmark(scenario, history);
  const updatedScenario = [{ id: "new-scene" }, ...scenario];
  const restored = restoreBookmark(bookmark, updatedScenario);
  assert.equal(updatedScenario[restored.currentIndex].id, "q1-04-038");
  assert.equal(restored.currentIndex, history[1].index + 1);
  assert.equal(updatedScenario[restored.sceneHistory[0].index].id, "q1-04-037");
});

test("選択肢での再開は回答待ちを保ち、回答後に戻って選び直しても加点が重複しない", () => {
  const choiceIndex = indexOf("q1-03-choice");
  const state = applyScenarioEffects(createInitialState(), {
    selfManagement: 2, informationUse: 1, affection: { rishu: 2 }
  });
  const waiting = restoreBookmark(createBookmark(scenario, [snapshot("q1-03-choice", state)]), scenario);
  assert.equal(resolveScenarioAdvance(scenario, waiting.currentIndex).type, "choice");
  const choiceA = resolveScenarioChoice(scenario, choiceIndex, 0);
  const answerState = applyScenarioEffects(waiting.gameState, choiceA.effects);
  const afterAnswer = restoreBookmark(createBookmark(scenario, [
    ...waiting.sceneHistory,
    createHistorySnapshot(choiceA.targetIndex, 1, answerState)
  ]), scenario);
  assert.deepEqual(afterAnswer.gameState, answerState);

  afterAnswer.sceneHistory.pop();
  const backed = restoreBookmark(createBookmark(scenario, afterAnswer.sceneHistory), scenario);
  assert.deepEqual(backed.gameState, state);
  const choiceB = resolveScenarioChoice(scenario, backed.currentIndex, 1);
  assert.deepEqual(applyScenarioEffects(backed.gameState, choiceB.effects), {
    selfManagement: 2, informationUse: 0, universityLife: 0,
    affection: { rishu: 2, slack: -1 }
  });
});

test("OP中の栞はQ1-01へ復帰し、実際の履歴には二重追加しない", () => {
  const prologueIndex = scenario.findIndex((scene) => scene.transition?.type === "opening");
  const history = [createHistorySnapshot(prologueIndex, 1, createInitialState())];
  const { targetIndex } = resolveScenarioAdvance(scenario, prologueIndex);
  const upcoming = createHistorySnapshot(targetIndex, 1, createInitialState());
  const bookmark = createBookmark(scenario, [...history, upcoming]);
  assert.equal(history.length, 1);
  const restored = restoreBookmark(bookmark, scenario);
  assert.equal(scenario[restored.currentIndex].id, "q1-01-001");
  history.push(upcoming);
  assert.deepEqual(restored.sceneHistory, history);
});

test("章CLEARの再開後は次の章へ進み、現時点の終端は停止したままにする", () => {
  const middle = restoreBookmark(createBookmark(scenario, [snapshot("q1-03-clear")]), scenario);
  const next = resolveScenarioAdvance(scenario, middle.currentIndex);
  assert.equal(scenario[next.targetIndex].id, "q1-04-time-passage");
  const later = restoreBookmark(createBookmark(scenario, [snapshot("q1-04-clear")]), scenario);
  const afterFestival = resolveScenarioAdvance(scenario, later.currentIndex);
  assert.equal(scenario[afterFestival.targetIndex].id, "q1-05-time-passage");
  const afterActivity = restoreBookmark(createBookmark(scenario, [snapshot("q1-05-clear")]), scenario);
  const reportStart = resolveScenarioAdvance(scenario, afterActivity.currentIndex);
  assert.equal(scenario[reportStart.targetIndex].id, "q1-06-time-passage");
  const afterReport = restoreBookmark(createBookmark(scenario, [snapshot("q1-06-clear")]), scenario);
  const examStart = resolveScenarioAdvance(scenario, afterReport.currentIndex);
  assert.equal(scenario[examStart.targetIndex].id, "q1-07-time-passage");
  const afterSchedule = restoreBookmark(createBookmark(scenario, [snapshot("q1-07-clear")]), scenario);
  const firstExamStart = resolveScenarioAdvance(scenario, afterSchedule.currentIndex);
  assert.equal(scenario[firstExamStart.targetIndex].id, "q1-08-time-passage");
  const firstQuarterEnd = restoreBookmark(createBookmark(scenario, [snapshot("q1-08-clear")]), scenario);
  const result = resolveScenarioAdvance(scenario, firstQuarterEnd.currentIndex);
  assert.equal(result.type, "quarter-result");
  assert.equal(scenario[result.targetIndex].id, "q2-start");
  const afterQ201 = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q2-01-clear"), 2, createInitialState())
  ]), scenario);
  assert.equal(afterQ201.currentQuarter, 2);
  const q202 = resolveScenarioAdvance(scenario, afterQ201.currentIndex);
  assert.equal(scenario[q202.targetIndex].id, "q2-02-time-passage");
  const afterQ202 = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q2-02-clear"), 2, createInitialState())
  ]), scenario);
  const q203 = resolveScenarioAdvance(scenario, afterQ202.currentIndex);
  assert.equal(scenario[q203.targetIndex].id, "q2-03-time-passage");
  const afterQ203 = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q2-03-clear"), 2, {
      ...createInitialState(),
      decisions: { q203Program: "not-participated" }
    })
  ]), scenario);
  const q204 = resolveScenarioAdvance(
    scenario,
    afterQ203.currentIndex,
    afterQ203.gameState
  );
  assert.equal(scenario[q204.targetIndex].id, "q2-04-not-participated-passage");
  const end = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q2-04-clear"), 2, createInitialState())
  ]), scenario);
  const q2Result = resolveScenarioAdvance(scenario, end.currentIndex);
  assert.equal(scenario[q2Result.targetIndex].id, "q2-result-001");
  const currentEnd = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q2-result-clear"), 2, createInitialState())
  ]), scenario);
  const q3Start = resolveScenarioAdvance(scenario, currentEnd.currentIndex);
  assert.equal(q3Start.type, "quarter-advance");
  assert.equal(scenario[q3Start.targetIndex].id, "q3-start");
  const afterQ301 = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q3-01-clear"), 3, createInitialState())
  ]), scenario);
  const q302 = resolveScenarioAdvance(scenario, afterQ301.currentIndex);
  assert.equal(scenario[q302.targetIndex].id, "q3-02-001");
  const afterQ302 = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q3-02-clear"), 3, createInitialState())
  ]), scenario);
  const q303 = resolveScenarioAdvance(scenario, afterQ302.currentIndex);
  assert.equal(scenario[q303.targetIndex].id, "q3-03-time-passage");
  const afterQ303 = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q3-03-clear"), 3, createInitialState())
  ]), scenario);
  const q304 = resolveScenarioAdvance(scenario, afterQ303.currentIndex);
  assert.equal(scenario[q304.targetIndex].id, "q3-04-time-passage");
  const afterQ304 = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q3-04-clear"), 3, createInitialState())
  ]), scenario);
  const q305 = resolveScenarioAdvance(scenario, afterQ304.currentIndex);
  assert.equal(scenario[q305.targetIndex].id, "q3-05-time-passage");
  const afterQ305 = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q3-05-clear"), 3, createInitialState())
  ]), scenario);
  const q3Result = resolveScenarioAdvance(scenario, afterQ305.currentIndex);
  assert.equal(scenario[q3Result.targetIndex].id, "q3-result-time-passage");
  const resultEnd = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q3-result"), 3, createInitialState())
  ]), scenario);
  const q4Start = resolveScenarioAdvance(scenario, resultEnd.currentIndex);
  assert.equal(q4Start.type, "quarter-result");
  assert.equal(q4Start.nextQuarter, 4);
  assert.equal(scenario[q4Start.targetIndex].id, "q4-start");
  const q4Opening = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q4-start"), 4, createInitialState())
  ]), scenario);
  const q401 = resolveScenarioAdvance(scenario, q4Opening.currentIndex);
  assert.equal(scenario[q401.targetIndex].id, "q4-01-001");
  const afterQ401 = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q4-01-clear"), 4, createInitialState())
  ]), scenario);
  const q402 = resolveScenarioAdvance(scenario, afterQ401.currentIndex);
  assert.equal(scenario[q402.targetIndex].id, "q4-02-time-passage");
  const afterQ402 = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q4-02-clear"), 4, createInitialState())
  ]), scenario);
  const q403 = resolveScenarioAdvance(scenario, afterQ402.currentIndex);
  assert.equal(scenario[q403.targetIndex].id, "q4-03-time-passage");
  const afterQ403 = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q4-03-clear"), 4, createInitialState())
  ]), scenario);
  const q404 = resolveScenarioAdvance(scenario, afterQ403.currentIndex);
  assert.equal(scenario[q404.targetIndex].id, "q4-04-time-passage");
  const afterQ404 = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q4-04-clear"), 4, createInitialState())
  ]), scenario);
  const q405 = resolveScenarioAdvance(scenario, afterQ404.currentIndex);
  assert.equal(scenario[q405.targetIndex].id, "q4-05-time-passage");
  const currentEnd = restoreBookmark(createBookmark(scenario, [
    createHistorySnapshot(indexOf("q4-result-end"), 4, createInitialState())
  ]), scenario);
  assert.equal(resolveScenarioAdvance(scenario, currentEnd.currentIndex).type, "end");
});

test("壊れた形式・不正な値・存在しないシーンの栞を拒否する", () => {
  const valid = createBookmark(scenario, [snapshot("q1-04-001")]);
  const changes = [
    (data) => { data.version = 999; },
    (data) => { data.savedAt = "yesterday"; },
    (data) => { data.history = []; },
    (data) => { data.history[0] = null; },
    (data) => { data.history[0].sceneId = "missing"; },
    (data) => { data.history[0].quarter = 5; },
    (data) => { data.history[0].quarter = 1.5; },
    (data) => { data.history[0].gameState.selfManagement = "2"; },
    (data) => { data.history[0].gameState.informationUse = Infinity; },
    (data) => { data.history[0].gameState.affection = []; },
    (data) => { data.history[0].gameState.affection.slack = null; },
    (data) => { data.history[0].gameState.decisions = []; },
    (data) => { data.history[0].gameState.decisions = { q203Program: null }; }
  ];
  for (const mutate of changes) {
    const damaged = copy(valid);
    mutate(damaged);
    assert.equal(restoreBookmark(damaged, scenario), null);
  }
  for (const value of [null, undefined, "invalid", [], {}]) {
    assert.equal(restoreBookmark(value, scenario), null);
  }
  assert.equal(createBookmark(scenario, []), null);
  assert.equal(createBookmark(scenario, [{ index: -1, quarter: 1, gameState: createInitialState() }]), null);
});

test("栞の保存と読み込みは専用キーだけを使い、ほかの設定を変更しない", () => {
  const data = new Map([["unitLoveSound", "off"]]);
  const storage = {
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => data.set(key, value)
  };
  const store = createBookmarkStore({ getStorage: () => storage });
  assert.deepEqual(store.read(), { status: "empty" });
  const bookmark = createBookmark(scenario, [snapshot("q1-04-038")]);
  assert.equal(store.write(bookmark), true);
  assert.deepEqual(store.read(), { status: "found", bookmark });
  assert.equal(data.get("unitLoveSound"), "off");
  assert.equal(data.size, 2);

  data.set(BOOKMARK_STORAGE_KEY, "broken json");
  assert.deepEqual(store.read(), { status: "invalid" });
  assert.equal(data.get(BOOKMARK_STORAGE_KEY), "broken json");
});

test("保存禁止・容量不足でも例外を出さず、既存の栞を削除しない", () => {
  const blocked = createBookmarkStore({ getStorage: () => { throw new Error("SecurityError"); } });
  assert.deepEqual(blocked.read(), { status: "unavailable" });
  assert.equal(blocked.write({}), false);
  const full = createBookmarkStore({ getStorage: () => ({
    getItem: () => '{"previous":true}',
    setItem: () => { throw new Error("QuotaExceededError"); }
  }) });
  assert.equal(full.write({ replacement: true }), false);
  assert.deepEqual(full.read(), { status: "found", bookmark: { previous: true } });
});
