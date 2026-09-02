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
