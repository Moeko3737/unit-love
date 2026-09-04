import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";

import { scenario } from "../js/scenario.js";
import { getChapterImagePaths } from "../js/imageAssets.js";
import { resolveScenarioAdvance, resolveScenarioChoice } from "../js/gameLogic.js";

const projectRoot = new URL("../", import.meta.url);
const scenes = scenario.filter((scene) => scene.chapter === "Q2-02");
const byId = (id) => scenario.find((scene) => scene.id === id);

test("Q2-02は時間経過画面から始まり、3択後に共通場面へ合流する", () => {
  assert.equal(scenes[0].id, "q2-02-time-passage");
  assert.deepEqual(scenes[0].timePassage, {
    label: "A FEW WEEKS LATER",
    title: "2Q前半",
    detail: "自室・夕方"
  });

  const choiceIndex = scenario.findIndex((scene) => scene.id === "q2-02-choice");
  assert.deepEqual(byId("q2-02-choice").choices.map((choice) => choice.label), ["A", "B", "C"]);
  assert.deepEqual(byId("q2-02-choice").choices[0].effects, {
    selfManagement: 3,
    informationUse: 1,
    affection: { report: 2 }
  });
  assert.deepEqual(byId("q2-02-choice").choices[1].effects, {
    selfManagement: -1,
    affection: { report: -1 }
  });
  assert.deepEqual(byId("q2-02-choice").choices[2].effects, {
    selfManagement: -2,
    affection: { report: -1 }
  });

  for (let answer = 0; answer < 3; answer += 1) {
    let index = resolveScenarioChoice(scenario, choiceIndex, answer).targetIndex;
    let steps = 0;
    while (scenario[index].id !== "q2-02-clear" && steps < 100) {
      index = resolveScenarioAdvance(scenario, index).targetIndex;
      steps += 1;
    }
    assert.equal(scenario[index].id, "q2-02-clear");
  }
});

test("複数科目・私生活の予定・混雑を専用カードで伝える", () => {
  assert.equal(byId("q2-02-004").notification.text, "確認レポート 第1回提出締切が近づいています");
  assert.deepEqual(
    byId("q2-02-007").deadlineSchedule.items.map((item) => item.date),
    ["あと2回", "あと3回", "あと1回"]
  );
  assert.equal(byId("q2-02-034").deadlineSchedule.items[0].date, "合計6回");
  assert.equal(
    byId("q2-02-choice-b-008").deadlineSchedule.items[0].date,
    "読み込み中…"
  );
});

test("締切の要点を強調し、確認レポートくんの2表情を使う", () => {
  assert.equal(
    byId("q2-02-choice-c-022").text,
    "第1回締切に間に合わなかった分は、3分の1減点。"
  );
  assert.equal(byId("q2-02-choice-c-022").emphasis, true);
  assert.equal(byId("q2-02-final-016").text, "締切は、提出を始める時間じゃない。");
  assert.equal(byId("q2-02-final-016").emphasis, true);

  const characters = new Set(scenes.map((scene) => scene.character).filter(Boolean));
  assert.deepEqual(characters, new Set([
    "./assets/images/characters/report/normal.png",
    "./assets/images/characters/report/serious.png"
  ]));
});

test("確認レポートくんの画像をPNG・WebPで先読みできる", async () => {
  const room = "./assets/images/backgrounds/morning-room.png";
  const pngPaths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), false);
  assert.deepEqual(pngPaths, [
    room,
    "./assets/images/characters/report/normal.png",
    "./assets/images/characters/report/serious.png"
  ]);
  const webpPaths = getChapterImagePaths(scenario, scenario.indexOf(scenes[0]), true);
  assert.deepEqual(webpPaths, pngPaths.map((path) => path.replace(/\.png$/, ".webp")));
  for (const path of [...pngPaths, ...webpPaths]) {
    await access(new URL(path, projectRoot));
  }
});

test("Q2-02 CLEARが現在の本編終端になる", () => {
  const clearIndex = scenario.findIndex((scene) => scene.id === "q2-02-clear");
  assert.equal(byId("q2-02-clear").clear, true);
  assert.equal(resolveScenarioAdvance(scenario, clearIndex).type, "end");
});
