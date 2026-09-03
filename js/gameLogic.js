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

// 選択肢によるスコア・好感度の変化を、元の状態を変更せずに反映する。
export function applyScenarioEffects(gameState, effects = {}) {
  const nextState = {
    ...gameState,
    affection: { ...gameState.affection }
  };

  for (const scoreName of [
    "selfManagement",
    "informationUse",
    "universityLife"
  ]) {
    const amount = effects[scoreName];

    if (Number.isFinite(amount)) {
      nextState[scoreName] = addScore(nextState[scoreName], amount);
    }
  }

  for (const [characterId, amount] of Object.entries(effects.affection ?? {})) {
    if (Number.isFinite(amount)) {
      nextState.affection = addAffection(
        nextState.affection,
        characterId,
        amount
      );
    }
  }

  return nextState;
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

// シナリオ配列上の通常送りと、専用画面を挟む送りを同じ形で扱う。
// DOMに依存させないことで、スキップ時も同じ遷移先を利用できる。
export function resolveScenarioAdvance(scenario, currentIndex) {
  const currentScene = scenario[currentIndex];
  const transition = currentScene?.transition;

  // 選択前や章の終端では通常送りを許可しない。
  // ボタン以外から進行を呼び出しても、回答やCLEARを飛ばさない。
  if (currentScene?.choices?.length > 0) {
    return { type: "choice", targetIndex: currentIndex };
  }
  if (currentScene?.end === true) {
    return { type: "end", targetIndex: currentIndex };
  }

  if (transition?.type === "opening") {
    const targetIndex = scenario.findIndex(
      (scene) => scene.id === transition.target
    );

    if (targetIndex >= 0) {
      return { type: "opening", targetIndex };
    }
  }

  if (typeof currentScene?.next === "string") {
    const targetIndex = scenario.findIndex(
      (scene) => scene.id === currentScene.next
    );

    if (targetIndex >= 0) {
      return { type: "scene", targetIndex };
    }
  }

  return { type: "scene", targetIndex: currentIndex + 1 };
}

// 選んだ回答の効果と遷移先だけを返し、DOM操作は呼び出し側に任せる。
export function resolveScenarioChoice(scenario, currentIndex, choiceIndex) {
  if (!Number.isInteger(choiceIndex) || choiceIndex < 0) return null;
  const choice = scenario[currentIndex]?.choices?.[choiceIndex];

  if (!choice || typeof choice.next !== "string") return null;

  const targetIndex = scenario.findIndex((scene) => scene.id === choice.next);
  if (targetIndex < 0) return null;

  return {
    targetIndex,
    effects: choice.effects ?? {}
  };
}

export function hasValidScenarioTransitions(scenario) {
  const sceneIds = new Set(scenario.map((scene) => scene.id));

  return scenario.every((scene) => {
    const transitionIsValid =
      !scene.transition ||
      (scene.transition.type === "opening" &&
        typeof scene.transition.target === "string" &&
        sceneIds.has(scene.transition.target));
    const nextIsValid =
      scene.next === undefined ||
      (typeof scene.next === "string" && sceneIds.has(scene.next));
    const choicesAreValid =
      scene.choices === undefined ||
      (Array.isArray(scene.choices) &&
        scene.choices.length > 0 &&
        scene.choices.every(
          (choice) =>
            typeof choice.label === "string" &&
            typeof choice.text === "string" &&
            typeof choice.next === "string" &&
            sceneIds.has(choice.next)
        ));

    return transitionIsValid && nextIsValid && choicesAreValid;
  });
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
