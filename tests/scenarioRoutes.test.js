import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";

const indexById = new Map(scenario.map((scene, index) => [scene.id, index]));

function targetsFor(scene, index) {
  if (scene.end === true) return [];
  if (scene.choices) return scene.choices.map(({ next }) => next);
  if (scene.nextByDecision) {
    return [scene.nextByDecision.default, ...Object.values(scene.nextByDecision.routes)];
  }
  if (scene.nextByAffection) {
    return [scene.nextByAffection.default, ...Object.values(scene.nextByAffection.routes)];
  }
  if (scene.transition) return [scene.transition.target];
  if (scene.resultPreview) return [scene.resultPreview.target];
  if (scene.quarterEnd) return [scene.quarterEnd.target];
  if (scene.quarterAdvance) return [scene.quarterAdvance.target];
  if (scene.next) return [scene.next];
  return scenario[index + 1] ? [scenario[index + 1].id] : [];
}

const graph = new Map(
  scenario.map((scene, index) => [scene.id, [...new Set(targetsFor(scene, index))]])
);

function reachableFrom(startId) {
  const visited = new Set();
  const pending = [startId];
  while (pending.length > 0) {
    const id = pending.pop();
    if (visited.has(id)) continue;
    visited.add(id);
    pending.push(...(graph.get(id) ?? []));
  }
  return visited;
}

test("ゲーム開始から全シーンへ、いずれかの選択ルートで到達できる", () => {
  const reached = reachableFrom(scenario[0].id);
  const unreachable = scenario.map(({ id }) => id).filter((id) => !reached.has(id));
  assert.deepEqual(unreachable, []);
});

test("完結シーン以外にリンク切れや行き止まりがない", () => {
  const problems = [];
  for (const scene of scenario) {
    const targets = graph.get(scene.id);
    if (scene.end !== true && targets.length === 0) {
      problems.push(`${scene.id}: no next scene`);
    }
    for (const target of targets) {
      if (!indexById.has(target)) problems.push(`${scene.id}: missing ${target}`);
    }
  }
  assert.deepEqual(problems, []);
});

test("どの個別エンディングからも共通の完結画面へ到達できる", () => {
  const endingScenes = scenario.filter((scene) => scene.ending);
  assert.equal(endingScenes.length, 6);
  for (const endingScene of endingScenes) {
    assert.equal(
      reachableFrom(endingScene.id).has("q4-result-end"),
      true,
      endingScene.id
    );
  }
});

test("シナリオ遷移に無限ループがない", () => {
  const visiting = new Set();
  const visited = new Set();
  const cycles = [];

  function visit(id, path) {
    if (visiting.has(id)) {
      cycles.push([...path, id].join(" -> "));
      return;
    }
    if (visited.has(id)) return;

    visiting.add(id);
    for (const target of graph.get(id) ?? []) visit(target, [...path, id]);
    visiting.delete(id);
    visited.add(id);
  }

  visit(scenario[0].id, []);
  assert.deepEqual(cycles, []);
});
