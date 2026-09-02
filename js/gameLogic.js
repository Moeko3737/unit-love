export const QUARTER_SCORE_MAX = 10;

export function createInitialState() {
  return {
    selfManagement: 0,
    informationUse: 0,
    universityLife: 0,
    affection: {}
  };
}

export function addScore(currentScore, amount) {
  return currentScore + amount;
}

export function addAffection(affection, characterId, amount) {
  return {
    ...affection,
    [characterId]: (affection[characterId] ?? 0) + amount
  };
}


// 会話を戻したときに、スコアや好感度もその時点へ戻せるよう
// ゲーム状態を独立したコピーとして保存する。
export function createHistorySnapshot(index, quarter, gameState) {
  return {
    index,
    quarter,
    gameState: JSON.parse(JSON.stringify(gameState))
  };
}

export function hasUniqueScenarioIds(scenario) {
  const ids = scenario.map((scene) => scene.id);
  return new Set(ids).size === ids.length;
}

export function isValidScenarioScene(scene) {
  return (
    typeof scene?.id === "string" &&
    scene.id.length > 0 &&
    typeof scene?.chapter === "string" &&
    typeof scene?.speaker === "string" &&
    typeof scene?.text === "string"
  );
}

// 3項目を各10点満点として、Q終了時の評価を返す。
// 閾値はシナリオ量が固まったら調整しやすいように一か所へまとめている。
export function calculateQuarterGrade(scores) {
  const total =
    scores.selfManagement +
    scores.informationUse +
    scores.universityLife;

  if (total === 0) return "—";
  if (total >= 24) return "S";
  if (total >= 18) return "A";
  if (total >= 12) return "B";
  return "C";
}

export function scoreToPercent(score, max = QUARTER_SCORE_MAX) {
  if (max <= 0) return 0;
  return Math.max(0, Math.min(100, (score / max) * 100));
}

export function getTopAffection(affection) {
  const entries = Object.entries(affection);
  if (entries.length === 0) return null;

  return entries.reduce((top, current) => {
    return current[1] > top[1] ? current : top;
  });
}
