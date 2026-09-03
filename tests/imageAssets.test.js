import test from "node:test";
import assert from "node:assert/strict";
import { access, readdir } from "node:fs/promises";

import { getPreferredImagePath } from "../js/imageAssets.js";

const imageDirectory = new URL("../assets/images/", import.meta.url);

async function findPngFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(
    entries.map(async (entry) => {
      const entryUrl = new URL(entry.name, directory);

      if (entry.isDirectory()) {
        return findPngFiles(new URL(`${entry.name}/`, directory));
      }

      return entry.name.endsWith(".png") ? [entryUrl] : [];
    })
  );

  return nestedFiles.flat();
}

test("WebP対応環境では同名のWebPパスを返す", () => {
  const pngPath = "./assets/images/backgrounds/morning-room.png";

  assert.equal(
    getPreferredImagePath(pngPath, true),
    "./assets/images/backgrounds/morning-room.webp"
  );
  assert.equal(getPreferredImagePath(pngPath, false), pngPath);
  assert.equal(getPreferredImagePath("image.jpg", true), "image.jpg");
});

test("すべてのPNG画像にWebP版が用意されている", async () => {
  const pngFiles = await findPngFiles(imageDirectory);

  assert.ok(pngFiles.length > 0);

  for (const pngFile of pngFiles) {
    await access(new URL(pngFile.href.replace(/\.png$/, ".webp")));
  }
});

