import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const rootDirectory = resolve(fileURLToPath(new URL(".", import.meta.url)));
const host = "127.0.0.1";
const port = 4173;

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav",
  ".webp": "image/webp",
};

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url ?? "/", `http://${host}`);
  const requestPath = decodeURIComponent(requestUrl.pathname);
  const relativePath = requestPath === "/" ? "index.html" : requestPath.replace(/^\/+/, "");
  let filePath = resolve(rootDirectory, relativePath);

  if (filePath !== rootDirectory && !filePath.startsWith(`${rootDirectory}${sep}`)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const fileInfo = await stat(filePath);
    if (fileInfo.isDirectory()) {
      filePath = resolve(filePath, "index.html");
      await stat(filePath);
    }

    response.writeHead(200, {
      "Cache-Control": "no-cache",
      "Content-Type": contentTypes[extname(filePath).toLowerCase()] ?? "application/octet-stream",
    });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("ページが見つかりませんでした。");
  }
});

function openGame(gameUrl) {
  const browser = spawn("open", [gameUrl], {
    detached: true,
    stdio: "ignore",
  });
  browser.unref();
}

const gameUrl = `http://${host}:${port}`;

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.log("ゲームはすでに起動しています。ブラウザを開きます。");
    openGame(gameUrl);
    return;
  }

  console.error("ゲームを起動できませんでした。", error);
  process.exitCode = 1;
});

server.listen(port, host, () => {
  console.log(`「単位に恋して。」を起動しました: ${gameUrl}`);
  console.log("遊び終わったら、このウインドウを閉じてください。");
  openGame(gameUrl);
});
