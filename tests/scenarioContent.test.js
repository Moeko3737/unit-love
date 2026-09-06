import test from "node:test";
import assert from "node:assert/strict";

import { q1Scenario } from "../js/scenarios/q1.js";
import { q2Scenario } from "../js/scenarios/q2.js";
import { q3Scenario } from "../js/scenarios/q3.js";
import { q4Scenario } from "../js/scenarios/q4.js";

const scenarioModules = [
  ["q1Scenario", q1Scenario],
  ["q2Scenario", q2Scenario],
  ["q3Scenario", q3Scenario],
  ["q4Scenario", q4Scenario]
];

const allScenes = scenarioModules.flatMap(([, scenes]) => scenes);

function collectValues(value, predicate, path = [], result = []) {
  if (predicate(value)) {
    result.push({ value, path: path.join(".") });
  }

  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      collectValues(child, predicate, [...path, key], result);
    }
  }

  return result;
}

function searchableText(value) {
  return collectValues(value, (entry) => typeof entry === "string")
    .map(({ value: entry }) => entry)
    .join("\n");
}

function numericEffects(choice, sceneId) {
  return collectValues(
    choice.effects,
    (entry) => typeof entry === "number",
    [sceneId, choice.label, "effects"]
  );
}

test("章別シナリオは直接読み込め、全IDが一意で必須フィールドを持つ", () => {
  const seenIds = new Set();

  for (const [moduleName, scenes] of scenarioModules) {
    assert.ok(Array.isArray(scenes) && scenes.length > 0, `${moduleName} must not be empty`);

    for (const current of scenes) {
      for (const field of ["id", "chapter", "speaker", "text", "background"]) {
        assert.equal(
          typeof current[field],
          "string",
          `${moduleName}: ${current.id ?? "unknown"}.${field} must be a string`
        );
        assert.notEqual(
          current[field].trim(),
          "",
          `${moduleName}: ${current.id ?? "unknown"}.${field} must not be empty`
        );
      }

      assert.equal(seenIds.has(current.id), false, `duplicate scene id: ${current.id}`);
      seenIds.add(current.id);
    }
  }
});

test("各通常章に攻略ガイドが一つあり、その章のCLEARへつながる", () => {
  const normalChapters = [...new Set(
    allScenes
      .map((current) => current.chapter)
      .filter((chapter) => /^Q[1-4]-\d{2}$/.test(chapter))
  )];

  assert.equal(normalChapters.length, 22);

  for (const chapter of normalChapters) {
    const chapterScenes = allScenes.filter((current) => current.chapter === chapter);
    const guides = chapterScenes.filter((current) => current.strategyGuide);
    const clears = chapterScenes.filter((current) => current.clear === true);

    assert.equal(guides.length, 1, `${chapter} must have exactly one strategy guide`);
    assert.equal(clears.length, 1, `${chapter} must have exactly one CLEAR scene`);

    const [guideScene] = guides;
    const [clearScene] = clears;
    assert.equal(guideScene.next, clearScene.id, `${guideScene.id} must lead to ${clearScene.id}`);
    assert.equal(typeof guideScene.strategyGuide.title, "string");
    assert.ok(guideScene.strategyGuide.title.trim().length > 0);
    assert.ok(Array.isArray(guideScene.strategyGuide.points));
    assert.ok(guideScene.strategyGuide.points.length > 0);
    assert.ok(guideScene.strategyGuide.points.every(
      (point) => typeof point === "string" && point.trim().length > 0
    ));
    assert.equal(typeof guideScene.strategyGuide.action, "string");
    assert.ok(guideScene.strategyGuide.action.trim().length > 0);
  }
});

test("すべての選択肢の数値効果はゼロ以上で、選択を罰する減点がない", () => {
  const choiceScenes = allScenes.filter((current) => Array.isArray(current.choices));
  const negativeEffects = [];
  assert.ok(choiceScenes.length > 0);

  for (const choiceScene of choiceScenes) {
    for (const choice of choiceScene.choices) {
      assert.ok(choice.effects && typeof choice.effects === "object", `${choiceScene.id}.${choice.label}`);

      for (const { value, path } of numericEffects(choice, choiceScene.id)) {
        assert.ok(Number.isFinite(value), `${path} must be finite`);
        if (value < 0) negativeEffects.push(`${path}=${value}`);
      }
    }
  }

  assert.deepEqual(negativeEffects, [], "numeric choice effects must not be negative");
});

test("Q1-07とQ3-04は三つの候補と初期割り当てを文言・日程データの両方で示す", () => {
  const chapters = [
    ["Q1-07", q1Scenario],
    ["Q3-04", q3Scenario]
  ];

  for (const [chapter, scenes] of chapters) {
    const chapterScenes = scenes.filter((current) => current.chapter === chapter);
    const content = searchableText(chapterScenes);

    assert.match(content, /候補日時.{0,12}三つ|三つの候補/, `${chapter}: three candidates`);
    assert.match(content, /一つ.{0,30}最初に.{0,30}割り当て/, `${chapter}: initial assignment`);

    const schedules = chapterScenes
      .map((current) => current.deadlineSchedule)
      .filter(Boolean);
    const candidateSchedule = schedules.find(
      (schedule) => Array.isArray(schedule.items) && schedule.items.length === 3
    );

    assert.ok(candidateSchedule, `${chapter} must show a three-item candidate schedule`);
    assert.match(searchableText(candidateSchedule), /割り当て/, `${chapter}: assigned candidate data`);
  }
});

test("Q1-08は試験に必要な機器と2026年度の白紙30枚ルールを伝える", () => {
  const content = searchableText(
    q1Scenario.filter((current) => current.chapter === "Q1-08")
  );

  assert.match(content, /PC/);
  assert.match(content, /スマートフォン|スマホ/);
  assert.match(content, /タブレット/);
  assert.match(content, /Webカメラ/);
  assert.match(content, /マイク/);
  assert.match(content, /白紙.{0,12}30枚/);
});

test("Q3-03の50％は『この科目』だけの例で、科目ごとのシラバス確認を促す", () => {
  const chapterScenes = q3Scenario.filter((current) => current.chapter === "Q3-03");
  const percentageScenes = chapterScenes.filter((current) => /50[%％]/.test(current.text));

  assert.equal(percentageScenes.length, 1, "50% should be explained only once");
  assert.match(percentageScenes[0].text, /この科目/);
  assert.ok(
    chapterScenes.some((current) => /評価方法.*科目ごと.*シラバス.*確認/.test(current.text)),
    "Q3-03 must tell the player to check each subject's syllabus"
  );
});

test("Q2でプログラム不参加を選んでも能力値・好感度は減点されない", () => {
  const choices = q2Scenario.flatMap((current) =>
    (current.choices ?? []).map((choice) => ({ sceneId: current.id, choice }))
  );
  const notParticipating = choices.filter(({ choice }) =>
    Object.values(choice.effects?.decisions ?? {}).includes("not-participated")
  );

  assert.equal(notParticipating.length, 1);
  const [{ sceneId, choice }] = notParticipating;
  assert.match(choice.text, /見送る|参加しない/);

  for (const { value, path } of numericEffects(choice, sceneId)) {
    assert.ok(value >= 0, `${path} must not penalize non-participation: ${value}`);
  }

  assert.ok(
    q2Scenario.some((current) => /参加しないことも、自分で考えて選んだ答え/.test(current.text)),
    "the non-participation route should explicitly respect the player's decision"
  );
});

test("Q4-05は好感度から到達できる6種類の個別エンディングを持つ", () => {
  const expectedIds = ["exam", "gakuchika", "graduation", "report", "rishu", "slack"];
  const endingScenes = q4Scenario.filter((current) => current.ending);
  const endingIds = endingScenes.map((current) => current.ending.id).sort();

  assert.equal(endingScenes.length, 6);
  assert.deepEqual(endingIds, expectedIds);
  assert.ok(endingScenes.every(
    (current) => typeof current.ending.title === "string" && current.ending.title.trim().length > 0
  ));
  assert.equal(new Set(endingScenes.map((current) => current.ending.title)).size, 6);
  assert.ok(endingScenes.every((current) => current.next === "q4-05-common-001"));

  const routeScene = q4Scenario.find((current) => current.id === "q4-05-route");
  assert.ok(routeScene?.nextByAffection);
  assert.deepEqual(Object.keys(routeScene.nextByAffection.routes).sort(), expectedIds);

  const q4Ids = new Set(q4Scenario.map((current) => current.id));
  for (const target of Object.values(routeScene.nextByAffection.routes)) {
    assert.equal(q4Ids.has(target), true, `missing ending route target: ${target}`);
  }
});
