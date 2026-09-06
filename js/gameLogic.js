export const SCORE_KEYS = Object.freeze([
  "selfManagement",
  "informationUse",
  "universityLife"
]);

// 各Q終了時点で、その能力に獲得できる累積満点。
export const SCORE_MAX_BY_QUARTER = Object.freeze({
  1: Object.freeze({ selfManagement: 3, informationUse: 6, universityLife: 3 }),
  2: Object.freeze({ selfManagement: 6, informationUse: 6, universityLife: 6 }),
  3: Object.freeze({ selfManagement: 9, informationUse: 9, universityLife: 12 }),
  4: Object.freeze({ selfManagement: 13, informationUse: 13, universityLife: 13 })
});

export const ENDING_IDS = Object.freeze({
  perfect: "perfect",
  selfManagement: "self-management",
  informationUse: "information-use",
  universityLife: "university-life",
  tight: "tight"
});

export function createInitialState() {
  return {
    selfManagement: 0,
    informationUse: 0,
    universityLife: 0
  };
}

// 3能力と物語上の選択は、年間を通した成長として次のQにも引き継ぐ。
export function createNextQuarterState(gameState) {
  const nextState = {
    selfManagement: gameState?.selfManagement ?? 0,
    informationUse: gameState?.informationUse ?? 0,
    universityLife: gameState?.universityLife ?? 0
  };
  if (gameState?.decisions) {
    nextState.decisions = { ...gameState.decisions };
  }
  return nextState;
}

export function addScore(currentScore, amount) {
  return currentScore + amount;
}

// 選択肢による能力値と物語上の選択を、元の状態を変更せずに反映する。
export function applyScenarioEffects(gameState, effects = {}) {
  const nextState = { ...gameState };

  for (const scoreName of SCORE_KEYS) {
    const amount = effects[scoreName];

    if (Number.isFinite(amount)) {
      nextState[scoreName] = addScore(nextState[scoreName], amount);
    }
  }

  if (gameState.decisions || effects.decisions) {
    nextState.decisions = { ...(gameState.decisions ?? {}) };
    for (const [decisionId, value] of Object.entries(effects.decisions ?? {})) {
      if (typeof value === "string" || typeof value === "boolean") {
        nextState.decisions[decisionId] = value;
      }
    }
  }

  return nextState;
}


// 会話を戻したときに、スコアもその時点へ戻せるよう
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
export function resolveScenarioAdvance(scenario, currentIndex, gameState = {}) {
  const currentScene = scenario[currentIndex];
  const transition = currentScene?.transition;
  const quarterEnd = currentScene?.quarterEnd;
  const quarterAdvance = currentScene?.quarterAdvance;
  const resultPreview = currentScene?.resultPreview;
  const nextByDecision = currentScene?.nextByDecision;
  const nextByScore = currentScene?.nextByScore;

  // 選択前や章の終端では通常送りを許可しない。
  // ボタン以外から進行を呼び出しても、回答やCLEARを飛ばさない。
  if (currentScene?.choices?.length > 0) {
    return { type: "choice", targetIndex: currentIndex };
  }
  if (currentScene?.end === true) {
    return { type: "end", targetIndex: currentIndex };
  }

  if (quarterEnd) {
    const targetIndex = scenario.findIndex(
      (scene) => scene.id === quarterEnd.target
    );

    if (targetIndex >= 0) {
      return {
        type: "quarter-result",
        targetIndex,
        nextQuarter: quarterEnd.nextQuarter
      };
    }
  }

  if (resultPreview) {
    const targetIndex = scenario.findIndex(
      (scene) => scene.id === resultPreview.target
    );

    if (targetIndex >= 0) {
      return {
        type: "quarter-result-preview",
        targetIndex
      };
    }
  }

  if (quarterAdvance) {
    const targetIndex = scenario.findIndex(
      (scene) => scene.id === quarterAdvance.target
    );

    if (targetIndex >= 0) {
      return {
        type: "quarter-advance",
        targetIndex,
        nextQuarter: quarterAdvance.nextQuarter
      };
    }
  }

  if (nextByDecision) {
    const decisionValue = gameState?.decisions?.[nextByDecision.key];
    const targetId =
      nextByDecision.routes?.[decisionValue] ??
      nextByDecision.default;
    const targetIndex = scenario.findIndex((scene) => scene.id === targetId);

    if (targetIndex >= 0) {
      return { type: "scene", targetIndex };
    }
  }

  // 年間で育った3能力と総得点から、5種類の成長エンディングへ進む。
  if (nextByScore) {
    const endingId = determineGrowthEnding(gameState);
    const targetId =
      nextByScore.routes?.[endingId] ??
      nextByScore.default;
    const targetIndex = scenario.findIndex((scene) => scene.id === targetId);

    if (targetIndex >= 0) {
      return { type: "scene", targetIndex };
    }
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
    const quarterEndIsValid =
      scene.quarterEnd === undefined ||
      (Number.isInteger(scene.quarterEnd?.nextQuarter) &&
        scene.quarterEnd.nextQuarter >= 1 &&
        scene.quarterEnd.nextQuarter <= 4 &&
        typeof scene.quarterEnd?.target === "string" &&
        sceneIds.has(scene.quarterEnd.target));
    const resultPreviewIsValid =
      scene.resultPreview === undefined ||
      (typeof scene.resultPreview?.target === "string" &&
        sceneIds.has(scene.resultPreview.target));
    const quarterAdvanceIsValid =
      scene.quarterAdvance === undefined ||
      (Number.isInteger(scene.quarterAdvance?.nextQuarter) &&
        scene.quarterAdvance.nextQuarter >= 1 &&
        scene.quarterAdvance.nextQuarter <= 4 &&
        typeof scene.quarterAdvance?.target === "string" &&
        sceneIds.has(scene.quarterAdvance.target));
    const decisionNextIsValid =
      scene.nextByDecision === undefined ||
      (typeof scene.nextByDecision?.key === "string" &&
        scene.nextByDecision.key.length > 0 &&
        typeof scene.nextByDecision?.default === "string" &&
        sceneIds.has(scene.nextByDecision.default) &&
        scene.nextByDecision.routes !== null &&
        typeof scene.nextByDecision.routes === "object" &&
        !Array.isArray(scene.nextByDecision.routes) &&
        Object.values(scene.nextByDecision.routes).every(
          (target) => typeof target === "string" && sceneIds.has(target)
        ));
    const scoreNextIsValid =
      scene.nextByScore === undefined ||
      (typeof scene.nextByScore?.default === "string" &&
        sceneIds.has(scene.nextByScore.default) &&
        scene.nextByScore.routes !== null &&
        typeof scene.nextByScore.routes === "object" &&
        !Array.isArray(scene.nextByScore.routes) &&
        Object.values(scene.nextByScore.routes).every(
          (target) => typeof target === "string" && sceneIds.has(target)
        ));
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

    return (
      transitionIsValid &&
      nextIsValid &&
      quarterEndIsValid &&
      resultPreviewIsValid &&
      quarterAdvanceIsValid &&
      decisionNextIsValid &&
      scoreNextIsValid &&
      choicesAreValid
    );
  });
}

export function getScoreMaximums(quarter) {
  return { ...(SCORE_MAX_BY_QUARTER[quarter] ?? SCORE_MAX_BY_QUARTER[4]) };
}

// そのQまでに獲得できる累積満点に対する割合で評価する。
export function calculateQuarterGrade(scores, maximums = SCORE_MAX_BY_QUARTER[4]) {
  const total = SCORE_KEYS.reduce((sum, key) => sum + (scores?.[key] ?? 0), 0);
  const maximumTotal = SCORE_KEYS.reduce(
    (sum, key) => sum + (maximums?.[key] ?? 0),
    0
  );

  if (total === 0) return "—";
  if (maximumTotal <= 0) return "—";

  const ratio = total / maximumTotal;
  if (ratio >= 0.9) return "S";
  if (ratio >= 0.75) return "A";
  if (ratio >= 0.6) return "B";
  return "C";
}

export function scoreToPercent(score, max) {
  if (max <= 0) return 0;
  return Math.max(0, Math.min(100, (score / max) * 100));
}

export function determineGrowthEnding(gameState = {}) {
  const scores = Object.fromEntries(
    SCORE_KEYS.map((key) => [key, gameState[key] ?? 0])
  );
  const total = SCORE_KEYS.reduce((sum, key) => sum + scores[key], 0);

  // 12問がすべて3点なら36点、すべて1点なら12点。
  // Q4-04の振り返りで、どちらのルートにもさらに1点だけ加わる。
  if (total >= 37 && SCORE_KEYS.every((key) => scores[key] >= 12)) {
    return ENDING_IDS.perfect;
  }
  if (total <= 13 && SCORE_KEYS.every((key) => scores[key] <= 5)) {
    return ENDING_IDS.tight;
  }

  const highest = Math.max(...Object.values(scores));
  const topSkills = SCORE_KEYS.filter((key) => scores[key] === highest);
  if (topSkills.length === 1) return ENDING_IDS[topSkills[0]];

  const reflectionSkill = {
    planning: "selfManagement",
    recovery: "informationUse",
    experience: "universityLife"
  }[gameState.decisions?.q404Reflection];

  // 最高点が同じ能力の中に、最後に記録へ残した成長があれば優先する。
  const selectedTopSkill = topSkills.includes(reflectionSkill)
    ? reflectionSkill
    : topSkills[0];
  return ENDING_IDS[selectedTopSkill];
}
