import test from "node:test";
import assert from "node:assert/strict";
import { access } from "node:fs/promises";

import { scenario } from "../js/scenario.js";
import { resolveScenarioAdvance } from "../js/gameLogic.js";
import { getChapterImagePaths } from "../js/imageAssets.js";

const repositoryRoot = new URL("../", import.meta.url);
const q102Scenes = scenario.filter((scene) => scene.chapter === "Q1-02");
const findScene = (number) => q102Scenes.find(
  (scene) => scene.id === `q1-02-${String(number).padStart(3, "0")}`
);

test("Q1-02は原稿の42会話とCLEARで構成される", () => {
  assert.equal(q102Scenes.length, 43);
  assert.equal(q102Scenes[0].speaker, "履修登録くん");
  assert.equal(q102Scenes[0].text, "じゃあ、僕からは一旦ここまで。");

  q102Scenes.slice(0, -1).forEach((scene, index) => {
    assert.equal(scene.id, `q1-02-${String(index + 1).padStart(3, "0")}`);
    assert.equal(scene.text.includes("**"), false);
  });
  assert.equal(findScene(41).text, "……それでいい。");
  assert.equal(
    findScene(42).text,
    "（怖そうなのに、ちゃんと最後まで面倒見てくれそうな先輩だな……。）"
  );
});

test("履修登録くんの退場後は自室だけを見せ、卒業要件先輩へ切り替わる", () => {
  assert.equal(findScene(4).character, "./assets/images/characters/rishu/normal.png");
  assert.equal(findScene(5).character, undefined);
  assert.equal(findScene(6).character, undefined);
  assert.equal(findScene(7).character, "./assets/images/characters/graduation/normal.png");
  assert.equal(findScene(7).speaker, "卒業要件先輩");
});

test("Q1-02の表情は会話の節目だけで変更し、最後は笑顔にする", () => {
  const blocks = [
    [1, 4, "rishu/normal"],
    [7, 16, "graduation/normal"],
    [17, 24, "graduation/guidance"],
    [25, 40, "graduation/normal"],
    [41, 42, "graduation/smile"]
  ];

  for (const [start, end, expression] of blocks) {
    for (let number = start; number <= end; number += 1) {
      const scene = findScene(number);
      assert.equal(scene.character, `./assets/images/characters/${expression}.png`, scene.id);
    }
  }
});

test("卒業要件の数値と4年生への進級条件を区別して伝える", () => {
  assert.equal(
    findScene(17).text,
    "卒業には124単位以上。導入科目から14単位、基礎科目は各科目群から――"
  );
  assert.equal(
    findScene(18).text,
    "展開科目は74単位以上。その中でも基盤リテラシー、多言語情報理解――"
  );
  assert.equal(findScene(29).text, "卒業要件があること。");
  assert.equal(findScene(29).emphasis, true);
  assert.equal(findScene(30).text, "そして、4年生へ進むための進級要件があること。");
  assert.equal(findScene(30).emphasis, true);
  assert.equal(findScene(32).text, "3年生までに90単位。");
  assert.equal(findScene(27).text, "詳細は、必要なときに学生便覧などで確認すればいい。");
});

test("Q1-01 CLEARから全会話を順番に通り、Q1-02 CLEARの次はQ1-03へ進む", () => {
  const previousClear = scenario.findIndex((scene) => scene.id === "q1-01-clear");
  let index = resolveScenarioAdvance(scenario, previousClear).targetIndex;

  for (const expectedScene of q102Scenes) {
    assert.equal(scenario[index].id, expectedScene.id);
    const advance = resolveScenarioAdvance(scenario, index);

    if (expectedScene.id === "q1-02-clear") {
      assert.equal(expectedScene.text, "Q1-02 CLEAR");
      assert.equal(expectedScene.clear, true);
      assert.notEqual(expectedScene.end, true);
      assert.equal(expectedScene.next, "q1-03-001");
      assert.equal(advance.type, "scene");
      assert.equal(scenario[advance.targetIndex].id, "q1-03-001");
    } else {
      assert.equal(advance.type, "scene");
      index = advance.targetIndex;
    }
  }
});

test("Q1-02では選択肢・能力値変化・追加音源を設定せず、自室背景を保つ", () => {
  for (const scene of q102Scenes) {
    assert.equal(scene.choices, undefined);
    assert.equal(scene.effects, undefined);
    assert.equal(scene.bgm, undefined);
    assert.equal(scene.se, undefined);
    assert.equal(scene.background, "./assets/images/backgrounds/morning-room.png");
  }
});

test("Q1-02の先読みには最後の笑顔も含み、PNG・WebPとも既存画像を使う", async () => {
  const start = scenario.indexOf(q102Scenes[0]);
  const pngPaths = getChapterImagePaths(scenario, start, false);
  assert.deepEqual(pngPaths, [
    "./assets/images/backgrounds/morning-room.png",
    "./assets/images/characters/rishu/normal.png",
    "./assets/images/characters/graduation/normal.png",
    "./assets/images/characters/graduation/guidance.png",
    "./assets/images/characters/graduation/smile.png"
  ]);
  const webpPaths = getChapterImagePaths(scenario, start, true);

  for (const path of [...pngPaths, ...webpPaths]) {
    await access(new URL(path, repositoryRoot));
  }
});
