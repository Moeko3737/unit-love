import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance } from "../js/gameLogic.js";

const projectRoot = new URL("../", import.meta.url);
const scenes = scenario.filter((scene) => scene.chapter === "Q1-04");
const passage = scenes.find((scene) => scene.id === "q1-04-time-passage");
const conversations = scenes.filter((scene) => /^q1-04-\d{3}$/.test(scene.id));
const at = (number) => scenes.find((scene) =>
  scene.id === `q1-04-${String(number).padStart(3, "0")}`
);
const room = "./assets/images/backgrounds/morning-room.png";
const festival = "./assets/images/backgrounds/campus-festival.png";

test("Q1-04は時間経過画面・原稿の49会話・CLEARで構成され、自室から会場へ移る", () => {
  assert.equal(scenes.length, 51);
  assert.equal(scenes[0], passage);
  assert.equal(passage.text, "数週間後／自室・昼");
  assert.deepEqual(passage.timePassage, {
    label: "TIME PASSES",
    title: "数週間後",
    detail: "自室・昼"
  });
  assert.equal(conversations.length, 49);
  for (let number = 1; number <= 49; number += 1) {
    assert.equal(conversations[number - 1], at(number));
    assert.equal(at(number).background, number <= 19 ? room : festival);
  }
  assert.equal(at(1).text, "ZEN大学にも、だいぶ慣れてきたかも。");
  assert.equal(at(4).text, "……“展軸祭”？");
  assert.equal(at(11).text, "オンラインで楽しめる企画もあるし、リアル会場もある。");
  assert.equal(at(33).text, "こうやって実際に来てみるのも楽しいね。");
  assert.equal(at(40).speaker, "津野先生");
  assert.equal(at(40).text, "こんにちは。");
  assert.equal(at(42).text, "画面の中に住んでるわけじゃないからね。");
  assert.equal(at(46).text, "大学生活って、授業だけじゃないから。");
  assert.equal(at(49).text, "その言い方〜！");
});

test("Q1-03 CLEARから時間経過画面と全会話を順に通り、Q1-05へ進む", () => {
  let index = scenario.findIndex((scene) => scene.id === "q1-03-clear");
  for (const expected of scenes) {
    const advance = resolveScenarioAdvance(scenario, index);
    assert.equal(advance.type, "scene");
    index = advance.targetIndex;
    assert.equal(scenario[index], expected);
  }
  assert.equal(scenario[index].id, "q1-04-clear");
  assert.equal(scenario[index].text, "Q1-04 CLEAR！");
  assert.equal(scenario[index].background, festival);
  assert.equal(scenario[index].clear, true);
  const advance = resolveScenarioAdvance(scenario, index);
  assert.equal(advance.type, "scene");
  assert.equal(scenario[advance.targetIndex].id, "q1-05-time-passage");
});

test("Q1-04には選択肢や加点がなく、通常会話だけで進む", () => {
  for (const scene of scenes) {
    assert.equal(scene.choices, undefined, scene.id);
    assert.equal(scene.effects, undefined, scene.id);
    assert.equal(scene.transition, undefined, scene.id);
  }
});

test("時間経過・一人の自室・通知・スマホ・Slackくん登場と会場到着を順に見せる", () => {
  assert.equal(passage.character, undefined);
  assert.equal(passage.background, room);
  for (let number = 1; number <= 4; number += 1) {
    assert.equal(at(number).character, undefined);
  }
  assert.equal(at(1).caption, undefined);
  assert.equal(at(2).caption, undefined);
  assert.equal(at(3).caption, undefined);
  assert.equal(at(3).notification.title, "Slack · ZEN大学");
  assert.equal(at(4).notification, undefined);
  assert.equal(at(4).foreground, "./assets/images/foregrounds/smartphone-slack.png");
  assert.equal(at(4).foregroundLayout, "phone");
  assert.equal(at(5).foreground, undefined);
  assert.equal(at(5).character, "./assets/images/characters/slack/normal.png");
  for (const number of [20, 21]) {
    assert.equal(at(number).caption, "展軸祭当日／リアル会場");
    assert.equal(at(number).character, undefined);
    assert.equal(at(number).foreground, undefined);
  }
  assert.equal(at(22).caption, undefined);
});

test("津野先生は同じ全身表示で後ろ姿から正面へ振り返り、会話後に退場する", () => {
  for (let number = 35; number <= 43; number += 1) {
    const pose = number <= 37 ? "back" : "front";
    assert.equal(at(number).character, `./assets/images/characters/tsuno/${pose}.png`);
    assert.equal(at(number).characterLayout, "full-body");
  }
  for (const number of [44, 45]) {
    assert.equal(at(number).character, undefined);
    assert.equal(at(number).characterLayout, undefined);
  }
  assert.equal(at(46).character, "./assets/images/characters/slack/smile.png");
  assert.equal(at(46).characterLayout, undefined);
  assert.equal(scenes.at(-1).character, undefined);
});

test("Slackくんの表情は会話のまとまりで固定する", () => {
  const blocks = [
    [5, 9, "normal"], [10, 15, "wink"], [16, 18, "worried"], [19, 19, "smile"],
    [22, 27, "normal"], [28, 30, "worried"], [31, 34, "wink"],
    [46, 47, "smile"], [48, 49, "wink"]
  ];
  for (const [start, end, expression] of blocks) {
    for (let number = start; number <= end; number += 1) {
      assert.equal(at(number).character, `./assets/images/characters/slack/${expression}.png`);
    }
  }
});

test("通知SEを再利用し、会場と先生の両姿を含む章内画像をPNG・WebPで先読みできる", async () => {
  const withSound = scenes.filter((scene) => scene.se);
  assert.deepEqual(withSound.map((scene) => scene.id), ["q1-04-003"]);
  assert.equal(withSound[0].se, "./assets/audio/se/notification.wav");
  assert.ok(scenes.every((scene) => scene.bgm === undefined));
  await access(new URL(withSound[0].se, projectRoot));

  const start = scenario.indexOf(scenes[0]);
  const pngPaths = getChapterImagePaths(scenario, start, false);
  assert.equal(pngPaths.length, 9);
  for (const path of [room, festival,
    "./assets/images/characters/tsuno/front.png",
    "./assets/images/characters/tsuno/back.png"
  ]) {
    assert.ok(pngPaths.includes(path));
  }
  const webpPaths = getChapterImagePaths(scenario, start, true);
  assert.deepEqual(webpPaths, pngPaths.map((path) => path.replace(/\.png$/, ".webp")));
  for (const path of [...pngPaths, ...webpPaths]) {
    await access(new URL(path, projectRoot));
  }
});
