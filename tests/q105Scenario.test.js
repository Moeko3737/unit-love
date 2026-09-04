import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance } from "../js/gameLogic.js";

const projectRoot = new URL("../", import.meta.url);
const scenes = scenario.filter((scene) => scene.chapter === "Q1-05");
const passage = scenes.find((scene) => scene.id === "q1-05-time-passage");
const conversations = scenes.filter((scene) => /^q1-05-\d{3}$/.test(scene.id));
const at = (number) => scenes.find((scene) =>
  scene.id === `q1-05-${String(number).padStart(3, "0")}`
);
const room = "./assets/images/backgrounds/morning-room.png";

test("Q1-05は時間経過画面・原稿の34会話・CLEARで構成される", () => {
  assert.equal(scenes.length, 36);
  assert.equal(scenes[0], passage);
  assert.equal(passage.text, "展軸祭の数日後／自室・昼");
  assert.deepEqual(passage.timePassage, {
    label: "A FEW DAYS LATER",
    title: "展軸祭の数日後",
    detail: "自室・昼"
  });
  assert.equal(conversations.length, 34);
  for (let number = 1; number <= 34; number += 1) {
    assert.equal(conversations[number - 1], at(number));
    assert.equal(at(number).background, room);
  }
  assert.equal(at(1).text, "展軸祭、楽しかったなぁ。");
  assert.equal(at(8).text, "俺、ガクチカ。");
  assert.equal(at(21).text, "大学って、授業だけじゃないし。");
  assert.equal(at(34).text, "（何を経験するかも、自分で選べるんだ。）");
});

test("Q1-04 CLEARから時間経過画面と全会話を順に通り、Q1-06へ進む", () => {
  let index = scenario.findIndex((scene) => scene.id === "q1-04-clear");
  for (const expected of scenes) {
    const advance = resolveScenarioAdvance(scenario, index);
    assert.equal(advance.type, "scene");
    index = advance.targetIndex;
    assert.equal(scenario[index], expected);
  }
  assert.equal(scenario[index].id, "q1-05-clear");
  assert.equal(scenario[index].text, "Q1-05 CLEAR！");
  assert.equal(scenario[index].clear, true);
  const advance = resolveScenarioAdvance(scenario, index);
  assert.equal(advance.type, "scene");
  assert.equal(scenario[advance.targetIndex].id, "q1-06-time-passage");
});

test("登場前は一人で、登場後の表情は3つの会話まとまりで固定する", () => {
  for (let number = 1; number <= 5; number += 1) {
    assert.equal(at(number).character, undefined);
  }
  const blocks = [
    [6, 10, "normal"],
    [11, 26, "smile"],
    [27, 34, "grin"]
  ];
  for (const [start, end, expression] of blocks) {
    for (let number = start; number <= end; number += 1) {
      assert.equal(
        at(number).character,
        `./assets/images/characters/gakuchika/${expression}.png`,
        at(number).id
      );
    }
  }
});

test("Q1-05には選択肢・加点・音声がなく、3表情をPNG・WebPで先読みできる", async () => {
  for (const scene of scenes) {
    assert.equal(scene.choices, undefined, scene.id);
    assert.equal(scene.effects, undefined, scene.id);
    assert.equal(scene.se, undefined, scene.id);
    assert.equal(scene.bgm, undefined, scene.id);
  }

  const start = scenario.indexOf(passage);
  const pngPaths = getChapterImagePaths(scenario, start, false);
  assert.deepEqual(pngPaths, [
    room,
    "./assets/images/characters/gakuchika/normal.png",
    "./assets/images/characters/gakuchika/smile.png",
    "./assets/images/characters/gakuchika/grin.png"
  ]);
  const webpPaths = getChapterImagePaths(scenario, start, true);
  assert.deepEqual(webpPaths, pngPaths.map((path) => path.replace(/\.png$/, ".webp")));
  for (const path of [...pngPaths, ...webpPaths]) {
    await access(new URL(path, projectRoot));
  }
});
