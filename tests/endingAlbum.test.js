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

test("エンディングカタログは5種類の物語タイトルを固定順で保持する", () => {
  assert.deepEqual(ENDING_CATALOG, [
    { id: "perfect", title: "ぜんぶ、私の力になった" },
    { id: "self-management", title: "自分のペースで進む" },
    { id: "information-use", title: "答えへたどり着く" },
    { id: "university-life", title: "やってみたいを育てる" },
    { id: "tight", title: "ぎりぎりでも、ここから" }
  ]);
  assert.equal(new Set(ENDING_CATALOG.map(({ id }) => id)).size, 5);
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
  assert.equal(store.isUnlocked("perfect"), false);
});

test("エンディングを解放し、一覧と保存値へ反映する", () => {
  const storage = createStorage([["unitLoveSound", "off"]]);
  const store = createEndingAlbumStore({ storage });

  assert.deepEqual(store.unlock("information-use"), ["information-use"]);
  assert.deepEqual(store.read(), ["information-use"]);
  assert.equal(store.isUnlocked("information-use"), true);
  assert.deepEqual(
    store.list().filter(({ unlocked }) => unlocked).map(({ id }) => id),
    ["information-use"]
  );
  assert.deepEqual(JSON.parse(storage.data.get(ENDING_ALBUM_STORAGE_KEY)), {
    version: 2,
    unlockedIds: ["information-use"]
  });
  assert.equal(storage.data.get("unitLoveSound"), "off");
});

test("unlockは冪等で、同じエンディングを重複保存しない", () => {
  const storage = createStorage();
  const store = createEndingAlbumStore({ storage });

  assert.deepEqual(store.unlock("self-management"), ["self-management"]);
  assert.deepEqual(store.unlock("self-management"), ["self-management"]);
  assert.equal(storage.writes, 1);
  assert.deepEqual(JSON.parse(storage.data.get(ENDING_ALBUM_STORAGE_KEY)).unlockedIds, [
    "self-management"
  ]);

  assert.deepEqual(store.unlock("perfect"), ["perfect", "self-management"]);
  assert.deepEqual(store.unlock("self-management"), ["perfect", "self-management"]);
  assert.equal(storage.writes, 2);
  assert.deepEqual(JSON.parse(storage.data.get(ENDING_ALBUM_STORAGE_KEY)).unlockedIds, [
    "perfect",
    "self-management"
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
    JSON.stringify({ version: 999, unlockedIds: ["perfect"] }),
    JSON.stringify({ version: 2, unlockedIds: "perfect" })
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
    version: 2,
    unlockedIds: ["university-life", "perfect", "perfect", "unknown", 42, null]
  });
  const storage = createStorage([[ENDING_ALBUM_STORAGE_KEY, raw]]);
  const store = createEndingAlbumStore({ storage });

  assert.deepEqual(
    store.list().filter(({ unlocked }) => unlocked).map(({ id }) => id),
    ["perfect", "university-life"]
  );
});

test("壊れた保存値からでも、新しい解放結果を正常な形式で保存し直す", () => {
  const storage = createStorage([[ENDING_ALBUM_STORAGE_KEY, "broken json"]]);
  const store = createEndingAlbumStore({ storage });

  assert.deepEqual(store.unlock("tight"), ["tight"]);
  assert.deepEqual(JSON.parse(storage.data.get(ENDING_ALBUM_STORAGE_KEY)), {
    version: 2,
    unlockedIds: ["tight"]
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
  assert.equal(unavailable.isUnlocked("perfect"), false);
  assert.deepEqual(unavailable.unlock("perfect"), []);

  const full = createEndingAlbumStore({
    storage: {
      getItem: () => JSON.stringify({ version: 2, unlockedIds: ["perfect"] }),
      setItem: () => {
        throw new Error("QuotaExceededError");
      }
    }
  });
  assert.deepEqual(full.unlock("perfect"), ["perfect"]);
  assert.deepEqual(full.unlock("information-use"), ["perfect"]);
  assert.equal(full.isUnlocked("perfect"), true);
  assert.equal(full.isUnlocked("information-use"), false);
});

test("一覧の変更が固定カタログや次回取得結果へ波及しない", () => {
  const storage = createStorage();
  const store = createEndingAlbumStore({ storage });
  const first = store.list();

  first[0].title = "変更済み";
  first[0].unlocked = true;
  first.push({ id: "extra", unlocked: true });

  assert.equal(ENDING_CATALOG[0].title, "ぜんぶ、私の力になった");
  assert.equal(store.list()[0].title, "ぜんぶ、私の力になった");
  assert.equal(store.list()[0].unlocked, false);
  assert.equal(store.list().length, 5);
});
