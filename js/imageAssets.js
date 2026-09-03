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

