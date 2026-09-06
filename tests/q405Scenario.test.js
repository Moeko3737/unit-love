import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance } from "../js/gameLogic.js";

const scenes = scenario.filter((scene) => scene.chapter === "Q4-05");
const byId = (id) => scenario.find((scene) => scene.id === id);
const at = (number) => byId("q4-05-" + String(number).padStart(3, "0"));

test("最終話は年度末の夜に一年目の完了から始まる", () => {
  assert.equal(scenes[0].id, "q4-05-time-passage");
  assert.equal(scenes[0].timePassage.title, "年度末");
  assert.equal(scenes[0].timePassage.detail, "自室・夜");
  assert.equal(at(5).text, "全部、終わったーーー！");
});

test("6人全員との会話で一年間の学びを振り返る", () => {
  const speakers = new Set(scenes.map((scene) => scene.speaker));
  for (const speaker of [
    "履修登録くん",
    "Slackくん",
    "確認レポートくん",
    "単位認定試験くん",
    "卒業要件先輩",
    "ガクチカくん"
  ]) {
    assert.ok(speakers.has(speaker));
  }
  assert.match(at(24).text, /決めてくれる人がいない/);
  assert.equal(at(34).text, "“知らなかった”で終わらせない。");
  assert.equal(at(44).text, "任せません！！");
  assert.equal(at(48).text, "38.7℃……。");
  assert.match(at(63).text, /まだ先だから知らなくていい/);
  assert.equal(at(73).text, "全部、私の大学1年目。");
});

test("自由の意味と攻略テーマへ着地する", () => {
  assert.equal(at(83).text, "自由だから。");
  assert.equal(at(84).text, "自分で選べる。");
  assert.equal(at(93).text, "自分で動かなきゃいけない。");
  assert.match(at(108).text, /全部“攻略した”とは/);
  assert.match(at(110).text, /自分で攻略する方法/);
  assert.equal(at(124).text, "攻略していきますか！");
});

test("全員の表情と夜・桜背景を使う", () => {
  const paths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), false);
  assert.ok(paths.includes("./assets/images/backgrounds/night-room.png"));
  assert.ok(paths.includes("./assets/images/backgrounds/op-campus.png"));
  assert.ok(paths.includes("./assets/images/characters/rishu/normal.png"));
  assert.ok(paths.includes("./assets/images/characters/slack/wink.png"));
  assert.ok(paths.includes("./assets/images/characters/report/serious.png"));
  assert.ok(paths.includes("./assets/images/characters/exam/smile.png"));
  assert.ok(paths.includes("./assets/images/characters/graduation/smile.png"));
  assert.ok(paths.includes("./assets/images/characters/gakuchika/smile.png"));
  assert.equal(byId("q4-05-spring").background, "./assets/images/backgrounds/op-campus.png");
});

test("テーマ文のあと4Q RESULTを表示して物語を完結する", () => {
  const clearIndex = scenario.findIndex((scene) => scene.id === "q4-05-clear");
  const themeAdvance = resolveScenarioAdvance(scenario, clearIndex);
  assert.equal(scenario[themeAdvance.targetIndex].id, "q4-05-theme");
  assert.match(byId("q4-05-theme").text, /大学生活は、自由/);
  assert.match(byId("q4-05-theme").text, /あなたは、どんな大学生活を選びますか/);

  const themeIndex = scenario.findIndex((scene) => scene.id === "q4-05-theme");
  const result = resolveScenarioAdvance(scenario, themeIndex);
  assert.equal(result.type, "quarter-result-preview");
  assert.equal(scenario[result.targetIndex].id, "q4-result-end");
  assert.equal(byId("q4-result-end").chapter, "Q4 RESULT");
  assert.equal(byId("q4-result-end").complete, true);
  assert.equal(resolveScenarioAdvance(scenario, result.targetIndex).type, "end");
});
