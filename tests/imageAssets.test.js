import test from "node:test";
import assert from "node:assert/strict";
import { access, readdir } from "node:fs/promises";

import { getChapterImagePaths, getPreferredImagePath } from "../js/imageAssets.js";

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

test("先読み対象は指定した章の画像だけで、分岐も含み重複しない", () => {
  const scenes = [
    { chapter: "PROLOGUE", background: "room.png", foreground: "phone.png" },
    { chapter: "Q1-01", background: "room.png", character: "normal.png" },
    { chapter: "Q1-01", background: "room.png", character: "smile.png" },
    { chapter: "Q1-01", background: "room.png", character: "troubled.png" },
    { chapter: "Q1-02", character: "later.png" }
  ];

  assert.deepEqual(getChapterImagePaths(scenes, 1, true), [
    "room.webp", "normal.webp", "smile.webp", "troubled.webp"
  ]);
  assert.deepEqual(getChapterImagePaths(scenes, 0, false), ["room.png", "phone.png"]);
  assert.deepEqual(getChapterImagePaths(scenes, 99, true), []);
});
