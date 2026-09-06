// エンディングの定義と保存処理をDOMから分離する。
// カタログ順はアルバム画面での表示順として固定する。
export const ENDING_ALBUM_STORAGE_KEY = "unitLoveEndingAlbum";

const ENDING_ALBUM_VERSION = 1;

export const ENDING_CATALOG = Object.freeze([
  Object.freeze({
    id: "rishu",
    name: "履修登録くん",
    title: "君が選ぶ時間割"
  }),
  Object.freeze({
    id: "slack",
    name: "Slackくん",
    title: "君への特別な通知"
  }),
  Object.freeze({
    id: "report",
    name: "確認レポートくん",
    title: "未来の私との約束"
  }),
  Object.freeze({
    id: "exam",
    name: "単位認定試験くん",
    title: "万全な日に会おう"
  }),
  Object.freeze({
    id: "graduation",
    name: "卒業要件先輩",
    title: "卒業まで隣で"
  }),
  Object.freeze({
    id: "gakuchika",
    name: "ガクチカくん",
    title: "次のページも一緒に"
  })
]);

const endingIds = new Set(ENDING_CATALOG.map(({ id }) => id));

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

// 認識できるIDだけをカタログ順で復元する。
// 配列内の重複・未知のID・不正な要素は無視し、残っている正常値を救済する。
function parseUnlockedIds(raw) {
  if (raw === null) return [];

  let saved;
  try {
    saved = JSON.parse(raw);
  } catch {
    return [];
  }

  if (
    !isRecord(saved) ||
    saved.version !== ENDING_ALBUM_VERSION ||
    !Array.isArray(saved.unlockedIds)
  ) {
    return [];
  }

  const savedIds = new Set(
    saved.unlockedIds.filter((id) => typeof id === "string" && endingIds.has(id))
  );
  return ENDING_CATALOG
    .map(({ id }) => id)
    .filter((id) => savedIds.has(id));
}

export function createEndingAlbumStore({
  storage,
  getStorage = () => globalThis.localStorage
} = {}) {
  const resolveStorage = () => storage === undefined ? getStorage() : storage;

  function readUnlockedIds() {
    try {
      return parseUnlockedIds(
        resolveStorage().getItem(ENDING_ALBUM_STORAGE_KEY)
      );
    } catch {
      // localStorageへのアクセス禁止や読み込み失敗でも、ゲーム進行を止めない。
      return [];
    }
  }

  function read() {
    return readUnlockedIds();
  }

  function list() {
    const unlockedIds = new Set(read());
    return ENDING_CATALOG.map((ending) => ({
      ...ending,
      unlocked: unlockedIds.has(ending.id)
    }));
  }

  function isUnlocked(endingId) {
    return endingIds.has(endingId) && read().includes(endingId);
  }

  function unlock(endingId) {
    if (!endingIds.has(endingId)) return read();

    let targetStorage;
    try {
      targetStorage = resolveStorage();
    } catch {
      return [];
    }

    let unlockedIds;
    try {
      unlockedIds = parseUnlockedIds(
        targetStorage.getItem(ENDING_ALBUM_STORAGE_KEY)
      );
    } catch {
      unlockedIds = [];
    }

    // 同じエンディングへ再到達しても保存値を書き換えず、成功として扱う。
    if (unlockedIds.includes(endingId)) return [...unlockedIds];

    const nextIds = new Set([...unlockedIds, endingId]);
    const orderedIds = ENDING_CATALOG
      .map(({ id }) => id)
      .filter((id) => nextIds.has(id));

    try {
      targetStorage.setItem(ENDING_ALBUM_STORAGE_KEY, JSON.stringify({
        version: ENDING_ALBUM_VERSION,
        unlockedIds: orderedIds
      }));
      return orderedIds;
    } catch {
      // 保存禁止や容量不足でも例外を外へ出さない。
      return [...unlockedIds];
    }
  }

  return { read, list, isUnlocked, unlock };
}
