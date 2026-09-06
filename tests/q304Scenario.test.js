import test from "node:test";
import assert from "node:assert/strict";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance } from "../js/gameLogic.js";

const scenes = scenario.filter((scene) => scene.chapter === "Q3-04");
const byId = (id) => scenario.find((scene) => scene.id === id);
const at = (number) => byId("q3-04-" + String(number).padStart(3, "0"));

test("Q3-04は3Q後半の試験日程通知から始まる", () => {
  assert.equal(scenes[0].id, "q3-04-time-passage");
  assert.equal(scenes[0].timePassage.title, "3Q後半");
  assert.equal(scenes[0].timePassage.detail, "自室・昼");
  assert.equal(at(1).notification.title, "ZEN Portal");
  assert.equal(at(1).notification.text, "単位認定試験の受験日時が公開されました");
  assert.equal(at(1).se, "./assets/audio/se/notification.wav");
});

test("3つの候補日時と変更申請の流れを主人公が思い出す", () => {
  assert.equal(at(9).text, "各科目、受験できる日時が3つあって。");
  assert.equal(at(10).text, "そのうち1つが最初に割り当てられる。");
  assert.equal(at(18).text, "残り2つの日程を確認して。");
  assert.equal(at(19).text, "都合のいい日を選んで、ZEN Portalから変更申請！");
});

test("日程変更画面から変更完了とカレンダー登録へ切り替わる", () => {
  assert.equal(at(24).deadlineSchedule.period, "ZEN PORTAL / 日程変更");
  assert.equal(at(24).deadlineSchedule.items.length, 3);
  assert.equal(at(26).deadlineSchedule.period, "ZEN PORTAL / 変更完了");
  assert.equal(at(28).deadlineSchedule.items[1].date, "登録済み");
});

test("単位認定試験くんの通常と笑顔素材を使い、選択肢はない", () => {
  const paths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), false);
  assert.ok(paths.includes("./assets/images/backgrounds/morning-room.png"));
  assert.ok(paths.includes("./assets/images/characters/exam/normal.png"));
  assert.ok(paths.includes("./assets/images/characters/exam/smile.png"));
  assert.ok(scenes.every((scene) => !scene.choices));
});

test("Q3-04 CLEARからQ3-05へ進む", () => {
  const clearIndex = scenario.findIndex((scene) => scene.id === "q3-04-clear");
  const next = resolveScenarioAdvance(scenario, clearIndex);
  assert.equal(scenario[next.targetIndex].id, "q3-05-time-passage");
});
