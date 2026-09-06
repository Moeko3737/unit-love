import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance } from "../js/gameLogic.js";

const scenes = scenario.filter((scene) => scene.chapter === "Q3-03");
const byId = (id) => scenario.find((scene) => scene.id === id);
const at = (number) => byId("q3-03-" + String(number).padStart(3, "0"));

test("Q3-03は3Q中盤の夜として始まり、章全体で夜の自室背景を使う", () => {
  assert.equal(scenes[0].id, "q3-03-time-passage");
  assert.equal(scenes[0].timePassage.title, "3Q中盤");
  assert.equal(scenes[0].timePassage.detail, "自室・夜");
  assert.ok(scenes.every((scene) =>
    scene.background === "./assets/images/backgrounds/night-room.png"
  ));
});

test("Slack通知から吉村先生の投稿をスマホ画面で読む", () => {
  for (let number = 17; number <= 28; number += 1) {
    assert.equal(
      at(number).foreground,
      "./assets/images/foregrounds/smartphone-yoshimura-slack.png"
    );
    assert.equal(at(number).foregroundLayout, "phone");
  }
  assert.equal(at(17).se, "./assets/audio/se/notification.wav");
  assert.match(at(20).text, /句読点とか意味のない文字列/);
  assert.match(at(22).text, /評価50%/);
  assert.match(at(23).text, /試験で満点でも絶対単位とれない/);
});

test("提出の有無だけでなく内容も評価されることを伝える", () => {
  assert.equal(at(34).text, "そういうものを入れても、評価はできません。");
  assert.equal(at(36).text, "“出した”だけじゃダメ。");
  assert.equal(at(38).text, "この科目では、確認レポートが評価の50%です。");
  assert.equal(at(41).text, "試験で満点でも、単位は取れません。");
  assert.equal(at(52).text, "そこまで含めて、ちゃんと読みます。");
  assert.equal(at(70).text, "（自分の言葉でまとめるところまでが大事なんだ。）");
  assert.ok(scenes.every((scene) => !scene.choices));
});

test("確認レポートくんと吉村先生、Slack画面の素材を章内で読み込む", () => {
  const paths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), false);
  assert.ok(paths.includes("./assets/images/backgrounds/night-room.png"));
  assert.ok(paths.includes("./assets/images/characters/report/serious.png"));
  assert.ok(paths.includes("./assets/images/characters/report/normal.png"));
  assert.ok(paths.includes("./assets/images/characters/yoshimura/normal.png"));
  assert.ok(paths.includes("./assets/images/foregrounds/smartphone-yoshimura-slack.png"));
});

test("Q3-03 CLEARからQ3-04へ進む", () => {
  const clearIndex = scenario.findIndex((scene) => scene.id === "q3-03-clear");
  const next = resolveScenarioAdvance(scenario, clearIndex);
  assert.equal(scenario[next.targetIndex].id, "q3-04-time-passage");
});
