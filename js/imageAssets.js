// PNGをフォールバックとして残し、対応環境だけ同名のWebPを使う。
export function getPreferredImagePath(path, supportsWebp) {
  if (!supportsWebp || typeof path !== "string" || !path.endsWith(".png")) {
    return path;
  }

  return `${path.slice(0, -4)}.webp`;
}

export function detectWebpSupport(documentObject) {
  try {
    const canvas = documentObject.createElement("canvas");
    return canvas.toDataURL("image/webp").startsWith("data:image/webp");
  } catch {
    return false;
  }
}

// 全シナリオではなく、今から読む章で使う画像だけを登場順に集める。
export function getChapterImagePaths(scenario, index, supportsWebp) {
  const chapter = scenario[index]?.chapter;
  if (!chapter) return [];

  const paths = scenario
    .filter((scene) => scene.chapter === chapter)
    .flatMap((scene) => [scene.background, scene.foreground, scene.character])
    .filter((path) => typeof path === "string" && path.length > 0)
    .map((path) => getPreferredImagePath(path, supportsWebp));

  return [...new Set(paths)];
}
