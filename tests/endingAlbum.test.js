import test from "node:test";
import assert from "node:assert/strict";

import {
  ENDING_ALBUM_STORAGE_KEY,
  ENDING_CATALOG,
  createEndingAlbumStore
} from "../js/endingAlbum.js";

function createStorage(initialEntries = []) {
  const data = new Map(initialEntries);
  let writes = 0;

  return {
    data,
    get writes() {
      return writes;
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      writes += 1;
      data.set(key, value);
    }
  };
}

test("エンディングカタログは6人を固定順で保持する", () => {
  assert.deepEqual(ENDING_CATALOG, [
    { id: "rishu", name: "履修登録くん", title: "君が選ぶ時間割" },
    { id: "slack", name: "Slackくん", title: "君への特別な通知" },
    { id: "report", name: "確認レポートくん", title: "未来の私との約束" },
    { id: "exam", name: "単位認定試験くん", title: "万全な日に会おう" },
    { id: "graduation", name: "卒業要件先輩", title: "卒業まで隣で" },
    { id: "gakuchika", name: "ガクチカくん", title: "次のページも一緒に" }
  ]);
  assert.equal(new Set(ENDING_CATALOG.map(({ id }) => id)).size, 6);
  assert.equal(Object.isFrozen(ENDING_CATALOG), true);
  assert.equal(ENDING_CATALOG.every(Object.isFrozen), true);
});

test("未保存時は固定カタログをすべて未解放として取得する", () => {
  const storage = createStorage();
  const store = createEndingAlbumStore({ storage });

  assert.deepEqual(store.read(), []);
  assert.deepEqual(
    store.list(),
    ENDING_CATALOG.map((ending) => ({ ...ending, unlocked: false }))
  );
  assert.equal(store.isUnlocked("rishu"), false);
});

test("エンディングを解放し、一覧と保存値へ反映する", () => {
  const storage = createStorage([["unitLoveSound", "off"]]);
  const store = createEndingAlbumStore({ storage });

  assert.deepEqual(store.unlock("report"), ["report"]);
  assert.deepEqual(store.read(), ["report"]);
  assert.equal(store.isUnlocked("report"), true);
  assert.deepEqual(
    store.list().filter(({ unlocked }) => unlocked).map(({ id }) => id),
    ["report"]
  );
  assert.deepEqual(JSON.parse(storage.data.get(ENDING_ALBUM_STORAGE_KEY)), {
    version: 1,
    unlockedIds: ["report"]
  });
  assert.equal(storage.data.get("unitLoveSound"), "off");
});

test("unlockは冪等で、同じエンディングを重複保存しない", () => {
  const storage = createStorage();
  const store = createEndingAlbumStore({ storage });

  assert.deepEqual(store.unlock("slack"), ["slack"]);
  assert.deepEqual(store.unlock("slack"), ["slack"]);
  assert.equal(storage.writes, 1);
  assert.deepEqual(JSON.parse(storage.data.get(ENDING_ALBUM_STORAGE_KEY)).unlockedIds, [
    "slack"
  ]);

  assert.deepEqual(store.unlock("rishu"), ["rishu", "slack"]);
  assert.deepEqual(store.unlock("slack"), ["rishu", "slack"]);
  assert.equal(storage.writes, 2);
  assert.deepEqual(JSON.parse(storage.data.get(ENDING_ALBUM_STORAGE_KEY)).unlockedIds, [
    "rishu",
    "slack"
  ]);
});

test("未知のIDは解放せず、保存値も変更しない", () => {
  const storage = createStorage();
  const store = createEndingAlbumStore({ storage });

  assert.deepEqual(store.unlock("unknown"), []);
  assert.deepEqual(store.unlock(null), []);
  assert.equal(storage.writes, 0);
  assert.equal(storage.data.has(ENDING_ALBUM_STORAGE_KEY), false);
});

test("壊れたJSONや未対応形式は例外にせず、全件未解放として扱う", () => {
  const brokenValues = [
    "broken json",
    "null",
    "[]",
    "{}",
    JSON.stringify({ version: 999, unlockedIds: ["rishu"] }),
    JSON.stringify({ version: 1, unlockedIds: "rishu" })
  ];

  for (const raw of brokenValues) {
    const storage = createStorage([[ENDING_ALBUM_STORAGE_KEY, raw]]);
    const store = createEndingAlbumStore({ storage });
    assert.equal(
      store.list().every(({ unlocked }) => unlocked === false),
      true,
      raw
    );
  }
});

test("保存配列の正常なIDを救済し、重複や未知の値を除いて一覧化する", () => {
  const raw = JSON.stringify({
    version: 1,
    unlockedIds: ["gakuchika", "rishu", "rishu", "unknown", 42, null]
  });
  const storage = createStorage([[ENDING_ALBUM_STORAGE_KEY, raw]]);
  const store = createEndingAlbumStore({ storage });

  assert.deepEqual(
    store.list().filter(({ unlocked }) => unlocked).map(({ id }) => id),
    ["rishu", "gakuchika"]
  );
});

test("壊れた保存値からでも、新しい解放結果を正常な形式で保存し直す", () => {
  const storage = createStorage([[ENDING_ALBUM_STORAGE_KEY, "broken json"]]);
  const store = createEndingAlbumStore({ storage });

  assert.deepEqual(store.unlock("exam"), ["exam"]);
  assert.deepEqual(JSON.parse(storage.data.get(ENDING_ALBUM_STORAGE_KEY)), {
    version: 1,
    unlockedIds: ["exam"]
  });
});

test("localStorage取得禁止や容量不足でも例外を出さない", () => {
  const unavailable = createEndingAlbumStore({
    getStorage: () => {
      throw new Error("SecurityError");
    }
  });
  assert.equal(unavailable.list().every(({ unlocked }) => !unlocked), true);
  assert.deepEqual(unavailable.read(), []);
  assert.equal(unavailable.isUnlocked("rishu"), false);
  assert.deepEqual(unavailable.unlock("rishu"), []);

  const full = createEndingAlbumStore({
    storage: {
      getItem: () => JSON.stringify({ version: 1, unlockedIds: ["rishu"] }),
      setItem: () => {
        throw new Error("QuotaExceededError");
      }
    }
  });
  assert.deepEqual(full.unlock("rishu"), ["rishu"]);
  assert.deepEqual(full.unlock("slack"), ["rishu"]);
  assert.equal(full.isUnlocked("rishu"), true);
  assert.equal(full.isUnlocked("slack"), false);
});

test("一覧の変更が固定カタログや次回取得結果へ波及しない", () => {
  const storage = createStorage();
  const store = createEndingAlbumStore({ storage });
  const first = store.list();

  first[0].title = "変更済み";
  first[0].unlocked = true;
  first.push({ id: "extra", unlocked: true });

  assert.equal(ENDING_CATALOG[0].title, "君が選ぶ時間割");
  assert.equal(store.list()[0].title, "君が選ぶ時間割");
  assert.equal(store.list()[0].unlocked, false);
  assert.equal(store.list().length, 6);
});
