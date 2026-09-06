import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";
import { scenario } from "../js/scenario.js";
import * as gameLogic from "../js/gameLogic.js";
import * as imageAssets from "../js/imageAssets.js";
import { createImagePresenter } from "../js/imageLoader.js";
import { renderSceneDecorations } from "../js/sceneDecorations.js";
import * as bookmarks from "../js/bookmark.js";

// 外部ライブラリやブラウザは使わず、最小のDOM・音声・保存先でmain.jsを動かす。
// 本番の進行ハンドラを通し、保存タイミングや再開時の二重加点を確認する。
const mainSource = await readFile(new URL("../js/main.js", import.meta.url), "utf8");
const script = mainSource.replace(/^import[\s\S]*?;\n/gm, "") + `
  globalThis.flow = {
    startGame, continueGame, nextScenario, previousScenario,
    selectScenarioChoice, finishOpening,
    state: () => ({ currentIndex, gameState, sceneHistory })
  };
`;

function element() {
  const classes = new Set();
  return {
    hidden: true, disabled: false, textContent: "", dataset: {}, style: {},
    children: [], listeners: new Map(),
    classList: {
      add: (...values) => values.forEach((value) => classes.add(value)),
      remove: (...values) => values.forEach((value) => classes.delete(value)),
      contains: (value) => classes.has(value),
      toggle(value, force = !classes.has(value)) {
        if (force) classes.add(value); else classes.delete(value);
        return force;
      }
    },
    setAttribute() {}, focus() {},
    addEventListener(name, callback) { this.listeners.set(name, callback); },
    replaceChildren() { this.children = []; },
    append(...children) { this.children.push(...children); },
    querySelector() { return this.children[0] ?? null; }
  };
}

function createPage(data = new Map(), { blocked = false, confirm = true } = {}) {
  const elements = new Map();
  const getElement = (name) => {
    if (!elements.has(name)) elements.set(name, element());
    return elements.get(name);
  };
  getElement("title-screen").classList.add("screen--active");
  const storage = {
    getItem(key) {
      if (blocked) throw new Error("storage disabled");
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      if (blocked) throw new Error("storage disabled");
      data.set(key, value);
    }
  };
  const confirmation = { allowed: confirm, calls: 0 };
  const context = {
    ...gameLogic, ...imageAssets, ...bookmarks,
    scenario, renderSceneDecorations, createImagePresenter,
    createBookmarkStore: () => bookmarks.createBookmarkStore({ getStorage: () => storage }),
    detectWebpSupport: () => false,
    createImageLoader: () => ({ load: async () => null, preload: async () => {} }),
    document: {
      getElementById: getElement,
      querySelector: getElement,
      createElement: element,
      addEventListener() {}
    },
    localStorage: storage,
    window: {
      setTimeout: () => 1, clearTimeout() {},
      confirm() { confirmation.calls += 1; return confirmation.allowed; }
    },
    Audio: class {
      paused = true;
      play() { this.paused = false; return Promise.resolve(); }
      pause() { this.paused = true; }
    }
  };
  runInNewContext(script, context);
  return {
    flow: context.flow, elements, confirmation, data,
    state: () => JSON.parse(JSON.stringify(context.flow.state()))
  };
}

const sceneIndex = (id) => scenario.findIndex((scene) => scene.id === id);
function savedAt(id, state = gameLogic.createInitialState()) {
  const bookmark = bookmarks.createBookmark(scenario, [
    gameLogic.createHistorySnapshot(sceneIndex(id), 1, state)
  ]);
  return new Map([[bookmarks.BOOKMARK_STORAGE_KEY, JSON.stringify(bookmark)]]);
}
const readSaved = (page) => JSON.parse(page.data.get(bookmarks.BOOKMARK_STORAGE_KEY));

test("起動だけでは栞を書かず、会話を送った最新位置から別ページでも再開する", () => {
  const first = createPage();
  assert.equal(first.elements.get("continue-button").disabled, true);
  assert.equal(first.data.has(bookmarks.BOOKMARK_STORAGE_KEY), false);
  first.flow.startGame();
  first.flow.nextScenario();
  assert.equal(readSaved(first).history.at(-1).sceneId, scenario[1].id);
  const reopened = createPage(first.data);
  assert.equal(reopened.elements.get("continue-button").disabled, false);
  reopened.flow.continueGame();
  assert.equal(reopened.state().currentIndex, 1);
  assert.equal(reopened.state().sceneHistory.length, 2);
  assert.equal(reopened.elements.get("game-screen").classList.contains("screen--active"), true);
});

test("回答後に閉じて再開・戻る・選び直す操作でも点数を重ねない", () => {
  const before = { selfManagement: 2, informationUse: 1, universityLife: 0, affection: { rishu: 2 } };
  const page = createPage(savedAt("q1-03-choice", before));
  page.flow.continueGame();
  assert.equal(page.elements.get("choice-area").children.length, 3);
  assert.equal(page.elements.get("next-button").disabled, true);
  page.flow.selectScenarioChoice(0);
  const afterA = page.state().gameState;
  const reopened = createPage(page.data);
  reopened.flow.continueGame();
  assert.deepEqual(reopened.state().gameState, afterA);
  assert.equal(reopened.state().sceneHistory.length, 2);
  reopened.flow.previousScenario();
  assert.deepEqual(reopened.state().gameState, before);
  assert.equal(readSaved(reopened).history.at(-1).sceneId, "q1-03-choice");
  reopened.flow.selectScenarioChoice(1);
  assert.deepEqual(reopened.state().gameState, {
    selfManagement: 2, informationUse: 0, universityLife: 0,
    affection: { rishu: 2, slack: -1 }
  });
});

test("はじめからの確認を取り消すと栞を保ち、承認したときだけ上書きする", () => {
  const page = createPage(savedAt("q1-04-038"), { confirm: false });
  const previous = page.data.get(bookmarks.BOOKMARK_STORAGE_KEY);
  page.flow.startGame();
  assert.equal(page.confirmation.calls, 1);
  assert.equal(page.data.get(bookmarks.BOOKMARK_STORAGE_KEY), previous);
  assert.equal(page.state().sceneHistory.length, 0);
  page.confirmation.allowed = true;
  page.flow.startGame();
  assert.equal(readSaved(page).history.at(-1).sceneId, scenario[0].id);
  assert.equal(page.state().sceneHistory.length, 1);
});

test("OP中の再読み込みはQ1-01へ進み、OP完了でも履歴を二重に増やさない", () => {
  const lastPrologue = scenario.find((scene) => scene.transition?.type === "opening");
  const page = createPage(savedAt(lastPrologue.id));
  page.flow.continueGame();
  page.flow.nextScenario();
  assert.equal(readSaved(page).history.at(-1).sceneId, "q1-01-001");
  const reopened = createPage(page.data);
  reopened.flow.continueGame();
  assert.equal(reopened.state().currentIndex, sceneIndex("q1-01-001"));
  assert.equal(reopened.state().sceneHistory.length, 2);
  page.flow.finishOpening();
  assert.equal(page.state().sceneHistory.length, 2);
});

test("保存禁止でも遊べて、タイトルへ戻った後はページ内の栞を使える", () => {
  const page = createPage(new Map(), { blocked: true });
  assert.match(page.elements.get("bookmark-info").textContent, /保存できません/);
  page.flow.startGame();
  page.flow.nextScenario();
  assert.equal(page.data.has(bookmarks.BOOKMARK_STORAGE_KEY), false);
  assert.match(page.elements.get("bookmark-status").textContent, /保存できません/);
  page.elements.get("title-button").listeners.get("click")();
  page.flow.continueGame();
  assert.equal(page.state().currentIndex, 1);
});

test("破損した栞を勝手に削除せず、再開ボタンを無効にして知らせる", () => {
  const page = createPage(new Map([[bookmarks.BOOKMARK_STORAGE_KEY, "broken"]]), { confirm: false });
  assert.equal(page.elements.get("continue-button").disabled, true);
  assert.match(page.elements.get("bookmark-info").textContent, /読み込めません/);
  page.flow.continueGame();
  page.flow.startGame();
  assert.equal(page.data.get(bookmarks.BOOKMARK_STORAGE_KEY), "broken");
});
