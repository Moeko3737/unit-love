import { scenario } from "./scenario.js";

const titleScreen = document.getElementById("title-screen");
const gameScreen = document.getElementById("game-screen");

const startButton = document.getElementById("start-button");
const titleButton = document.getElementById("title-button");
const nextButton = document.getElementById("next-button");

const chapterName = document.getElementById("chapter-name");
const speakerName = document.getElementById("speaker-name");
const dialogueText = document.getElementById("dialogue-text");

let currentIndex = 0;

function showScreen(screenName) {
  titleScreen.classList.toggle("screen--active", screenName === "title");
  gameScreen.classList.toggle("screen--active", screenName === "game");
}

function renderScenario() {
  const scene = scenario[currentIndex];

  if (!scene) {
    chapterName.textContent = "BASE VERSION";
    speakerName.textContent = "SYSTEM";
    dialogueText.textContent =
      "ここまでが初回commit用のベース版です。\n" +
      "次のcommitからシナリオや機能を追加していきます。";

    sceneElement.style.backgroundImage = "";
    backgroundPlaceholder.hidden = false;
    nextButton.disabled = true;
    return;
  }

  chapterName.textContent = scene.chapter;
  speakerName.textContent = scene.speaker;
  dialogueText.textContent = scene.text;

  if (scene.background) {
    sceneElement.style.backgroundImage = `url("${scene.background}")`;
    sceneElement.style.backgroundSize = "cover";
    sceneElement.style.backgroundPosition = "center";
    sceneElement.style.backgroundRepeat = "no-repeat";
    backgroundPlaceholder.hidden = true;
  } else {
    sceneElement.style.backgroundImage = "";
    backgroundPlaceholder.hidden = false;
  }
}

function startGame() {
  currentIndex = 0;
  nextButton.disabled = false;
  showScreen("game");
  renderScenario();
}

function nextScenario() {
  currentIndex += 1;
  renderScenario();
}

startButton.addEventListener("click", startGame);
titleButton.addEventListener("click", () => showScreen("title"));
nextButton.addEventListener("click", nextScenario);

const sceneElement = document.querySelector(".scene");
const backgroundPlaceholder = document.querySelector(".background-placeholder");
