// 栞の形式・検証・保存をDOMから分離する。ブラウザごとに栞を1件だけ保持する。
export const BOOKMARK_STORAGE_KEY = "unitLoveBookmark";
const BOOKMARK_VERSION = 2;

function isRecord(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function copyGameState(state) {
  if (!isRecord(state)) return null;
  const scores = ["selfManagement", "informationUse", "universityLife"];
  if (!scores.every((key) => Number.isFinite(state[key]))) return null;
  const decisionSource = state.decisions === undefined ? {} : state.decisions;
  if (!isRecord(decisionSource)) return null;
  const decisions = Object.entries(decisionSource);
  if (!decisions.every(([key, value]) =>
    /^[a-z][a-z0-9_-]*$/i.test(key) &&
    (typeof value === "string" || typeof value === "boolean")
  )) return null;

  const copiedState = {
    selfManagement: state.selfManagement,
    informationUse: state.informationUse,
    universityLife: state.universityLife
  };
  if (state.decisions !== undefined) {
    copiedState.decisions = Object.fromEntries(decisions);
  }
  return copiedState;
}

function isQuarter(value) {
  return Number.isInteger(value) && value >= 1 && value <= 4;
}

// 配列位置ではなくシーンIDを保存し、会話の挿入による再開位置のずれを避ける。
// 末尾が現在地。選択前の状態も含む履歴を保存するので、再開後も選び直せる。
export function createBookmark(scenario, sceneHistory, savedAt = Date.now()) {
  if (!Array.isArray(sceneHistory) || sceneHistory.length === 0) return null;
  if (!Number.isFinite(savedAt) || savedAt < 0) return null;
  const history = [];
  for (const snapshot of sceneHistory) {
    if (!Number.isInteger(snapshot?.index)) return null;
    const sceneId = scenario[snapshot.index]?.id;
    const gameState = copyGameState(snapshot.gameState);
    if (typeof sceneId !== "string" || !isQuarter(snapshot.quarter) || !gameState) return null;
    history.push({ sceneId, quarter: snapshot.quarter, gameState });
  }
  return { version: BOOKMARK_VERSION, savedAt, history };
}

// 壊れた栞や未対応の形式は読み込まず、元の保存データにも手を加えない。
export function restoreBookmark(bookmark, scenario) {
  // 好感度を保存していた旧形式も読み込み、3能力と進行だけを引き継ぐ。
  if (!isRecord(bookmark) || ![1, BOOKMARK_VERSION].includes(bookmark.version)) return null;
  if (!Number.isFinite(bookmark.savedAt) || bookmark.savedAt < 0) return null;
  if (!Array.isArray(bookmark.history) || bookmark.history.length === 0) return null;
  const sceneIndices = new Map(scenario.map((scene, index) => [scene.id, index]));
  const sceneHistory = [];
  for (const entry of bookmark.history) {
    if (!isRecord(entry) || typeof entry.sceneId !== "string") return null;
    const index = sceneIndices.get(entry.sceneId);
    const gameState = copyGameState(entry.gameState);
    if (index === undefined || !isQuarter(entry.quarter) || !gameState) return null;
    sceneHistory.push({ index, quarter: entry.quarter, gameState });
  }
  const latest = sceneHistory.at(-1);
  return {
    currentIndex: latest.index,
    currentQuarter: latest.quarter,
    gameState: copyGameState(latest.gameState),
    sceneHistory,
    savedAt: bookmark.savedAt
  };
}

// localStorageの取得自体が拒否される場合もあるため、アクセスもtry内で行う。
export function createBookmarkStore({ getStorage = () => globalThis.localStorage } = {}) {
  function read() {
    let raw;
    try {
      raw = getStorage().getItem(BOOKMARK_STORAGE_KEY);
    } catch {
      return { status: "unavailable" };
    }
    if (raw === null) return { status: "empty" };
    try {
      return { status: "found", bookmark: JSON.parse(raw) };
    } catch {
      return { status: "invalid" };
    }
  }

  function write(bookmark) {
    try {
      getStorage().setItem(BOOKMARK_STORAGE_KEY, JSON.stringify(bookmark));
      return true;
    } catch {
      // 容量不足や保存禁止でも会話を止めない。呼び出し元で未保存を知らせる。
      return false;
    }
  }

  return { read, write };
}
