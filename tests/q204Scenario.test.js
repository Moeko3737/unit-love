import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";
import { resolveScenarioAdvance } from "../js/gameLogic.js";

const scenes = scenario.filter((scene) => scene.chapter === "Q2-04");
const byId = (id) => scenario.find((scene) => scene.id === id);

test("Q2-04は参加・不参加の2ルートから共通場面へ合流する", () => {
  assert.ok(byId("q2-04-participated-passage").timePassage);
  assert.ok(byId("q2-04-not-participated-passage").timePassage);
  assert.equal(byId("q2-04-participated-028").next, "q2-04-common-001");
  assert.equal(byId("q2-04-not-participated-028").next, "q2-04-common-001");
});

test("実際のマイステップ登録画面に沿って振り返る項目を表示する", () => {
  const form = byId("q2-04-common-006").myStep;
  assert.equal(form.category, "学生時代の活動記録");
  assert.equal(form.subject, "対象授業なし");
  assert.deepEqual(
    form.fields.map((field) => field.label),
    ["1.タイトル", "4.活動の内容", "5.課題・6.工夫", "7.結果と次のアクション"]
  );
  assert.deepEqual(
    form.fields.slice(1).map((field) => field.value),
    ["何をしたか", "何を感じたか", "何が変わったか"]
  );
  for (let number = 6; number <= 9; number += 1) {
    assert.equal(byId("q2-04-common-" + String(number).padStart(3, "0")).myStep, form);
  }
});

test("共通ルート内の記録内容もQ2-03の選択結果で切り替わる", () => {
  const branchIndex = scenario.findIndex((scene) => scene.id === "q2-04-common-014");
  const participated = resolveScenarioAdvance(scenario, branchIndex, {
    decisions: { q203Program: "participated" }
  });
  const skipped = resolveScenarioAdvance(scenario, branchIndex, {
    decisions: { q203Program: "not-participated" }
  });

  assert.equal(scenario[participated.targetIndex].id, "q2-04-record-participated-001");
  assert.equal(scenario[skipped.targetIndex].id, "q2-04-record-not-participated-001");
  assert.equal(
    byId("q2-04-record-participated-003").next,
    "q2-04-final-001"
  );
  assert.equal(
    byId("q2-04-record-not-participated-004").next,
    "q2-04-final-001"
  );
});

test("Q2-04 CLEARから2Qの振り返りへ進む", () => {
  const clearIndex = scenario.findIndex((scene) => scene.id === "q2-04-clear");
  assert.equal(scenes.at(-1).id, "q2-04-clear");
  const advance = resolveScenarioAdvance(scenario, clearIndex);
  assert.equal(advance.type, "scene");
  assert.equal(scenario[advance.targetIndex].id, "q2-result-001");
});
