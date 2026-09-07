// 読み込み済みのImageを保持し、ダウンロードだけでなく描画の準備まで先に済ませる。
// Imageの生成を差し替えられるので、ブラウザなしでも非同期処理をテストできる。
export function createImageLoader({ createImage = () => new Image() } = {}) {
  const cache = new Map();

  function load(path) {
    if (!path) return Promise.resolve(null);
    if (cache.has(path)) return cache.get(path);

    const loading = new Promise((resolve) => {
      let image;
      let settled = false;

      function finish(result) {
        if (settled) return;
        settled = true;
        if (image) {
          image.onload = null;
          image.onerror = null;
        }
        resolve(result);
      }

      try {
        image = createImage();
        image.decoding = "async";
        image.onload = async () => {
          try {
            if (typeof image.decode === "function") await image.decode();
            finish(image);
          } catch {
            finish(null);
          }
        };
        image.onerror = () => finish(null);
        image.src = path;
      } catch {
        // 素材がない・読み込めない場合も会話や選択肢は止めない。
        finish(null);
      }
    });

    cache.set(path, loading);
    return loading;
  }

  async function preload(paths) {
    // 一斉にデコードして端末へ負荷をかけないよう、先読みは1枚ずつ行う。
    // 今すぐ表示する画像はload()を直接呼べるため、この順番待ちには入らない。
    for (const path of new Set(paths)) {
      await load(path);
    }
  }

  return { load, preload };
}

// 読み込み待ちの間は前の画像を維持し、最新の表示要求だけを反映する。
// DOM操作は呼び出し元のshowImage / hideImageに任せる。
export function createImagePresenter({ loadImage, showImage, hideImage }) {
  let requestedPath = null;
  let requestedLayout = "";
  let revision = 0;
  let pending = Promise.resolve();

  function set(path, layout = "") {
    const nextPath = path || "";
    const nextLayout = ["full-body", "contain"].includes(layout) ? layout : "";
    if (nextPath === requestedPath && nextLayout === requestedLayout) return pending;

    requestedPath = nextPath;
    requestedLayout = nextLayout;
    const requestRevision = ++revision;

    if (!nextPath) {
      hideImage();
      pending = Promise.resolve();
      return pending;
    }

    pending = Promise.resolve()
      .then(() => loadImage(nextPath))
      .then((image) => {
        // 連打・戻る・タイトル復帰後に古い画像が遅れて表示されるのを防ぐ。
        if (requestRevision !== revision) return;
        if (image) {
          // サイズ指定も画像と同時に渡し、読み込み中の前キャラを拡縮しない。
          showImage(image, nextLayout);
        } else {
          hideImage();
        }
      })
      .catch(() => {
        if (requestRevision === revision) hideImage();
      });

    return pending;
  }

  return { set };
}
