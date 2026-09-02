import { scenario } from "./scenario.js";
import {
  createInitialState,
  createHistorySnapshot,
  calculateQuarterGrade,
  scoreToPercent,
  getTopAffection
} from "./gameLogic.js";

// =========================================
// DOM
// =========================================

const titleScreen = document.getElementById("title-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");
const backButton = document.getElementById("back-button");
const titleButton = document.getElementById("title-button");
const nextButton = document.getElementById("next-button");
const resultButton = document.getElementById("result-button");
const resultCloseButton = document.getElementById("result-close-button");
const soundButton = document.getElementById("sound-button");

const chapterName = document.getElementById("chapter-name");
const speakerName = document.getElementById("speaker-name");
const dialogueText = document.getElementById("dialogue-text");

const sceneElement = document.querySelector(".scene");
const backgroundPlaceholder = document.querySelector(".background-placeholder");
const dialogueBox = document.querySelector(".dialogue-box");
const choiceArea = document.getElementById("choice-area");
const foregroundImage = document.getElementById("foreground-image");
const characterImage = document.getElementById("character-image");

const resultQuarter = document.getElementById("result-quarter");
const resultGrade = document.getElementById("result-grade");
const resultSelfManagement = document.getElementById("result-self-management");
const resultInformationUse = document.getElementById("result-information-use");
const resultUniversityLife = document.getElementById("result-university-life");
const resultSelfManagementBar = document.getElementById("result-self-management-bar");
const resultInformationUseBar = document.getElementById("result-information-use-bar");
const resultUniversityLifeBar = document.getElementById("result-university-life-bar");
const resultComment = document.getElementById("result-comment");
const resultAffection = document.getElementById("result-affection");

// =========================================
// Game state
// =========================================

let currentIndex = 0;
let currentQuarter = 1;
let gameState = createInitialState();
let screenBeforeResult = "game";
let sceneHistory = [];

// 擬人化キャラの内部IDと表示名の対応。
const characterNames = {
  rishu: "履修登録くん",
  slack: "Slackくん",
  report: "レポートくん",
  exam: "単位認定試験くん",
  graduation: "卒業要件くん",
  gakuchika: "ガクチカくん"
};

// =========================================
// Audio
// =========================================

const bgmPlayer = new Audio();
bgmPlayer.loop = true;
bgmPlayer.volume = 0.18;

const sePlayer = new Audio();
sePlayer.volume = 0.45;

const RESULT_BGM = "./assets/audio/bgm/result.wav";
const CLICK_SE = "./assets/audio/se/click.wav";

let soundEnabled = localStorage.getItem("unitLoveSound") !== "off";
let currentBgmPath = "";
let lastPlayedSeSceneId = "";

function updateSoundButton() {
  soundButton.textContent = soundEnabled ? "SOUND ON" : "SOUND OFF";
  soundButton.setAttribute("aria-pressed", String(!soundEnabled));
  soundButton.setAttribute(
    "aria-label",
    soundEnabled ? "音をオフにする" : "音をオンにする"
  );
}

async function playBgm(path) {
  if (!path) return;

  if (currentBgmPath !== path) {
    currentBgmPath = path;
    bgmPlayer.src = path;
    bgmPlayer.currentTime = 0;
  }

  if (!soundEnabled) return;

  try {
    await bgmPlayer.play();
  } catch (error) {
    // ブラウザの自動再生制限などで失敗してもゲーム進行は止めない。
    console.info("BGMを再生できませんでした。", error);
  }
}

function pauseBgm() {
  bgmPlayer.pause();
}

function playSe(path) {
  if (!soundEnabled || !path) return;

  sePlayer.src = path;
  sePlayer.currentTime = 0;
  sePlayer.play().catch(() => {
    // SEが鳴らなくてもゲーム進行には影響させない。
  });
}

function playClickSe() {
  playSe(CLICK_SE);
}

function updateAudioForScene(scene) {
  if (scene.bgm) {
    playBgm(scene.bgm);
  } else if (currentBgmPath && soundEnabled && bgmPlayer.paused) {
    playBgm(currentBgmPath);
  }

  if (scene.se && lastPlayedSeSceneId !== scene.id) {
    playSe(scene.se);
    lastPlayedSeSceneId = scene.id;
  }
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  localStorage.setItem("unitLoveSound", soundEnabled ? "on" : "off");
  updateSoundButton();

  if (soundEnabled) {
    const scene = scenario[currentIndex];
    if (resultScreen.classList.contains("screen--active")) {
      playBgm(RESULT_BGM);
    } else if (scene?.bgm) {
      playBgm(scene.bgm);
    } else if (currentBgmPath) {
      playBgm(currentBgmPath);
    }
  } else {
    pauseBgm();
    sePlayer.pause();
  }
}

// =========================================
// Screen control
// =========================================

function showScreen(screenName) {
  titleScreen.classList.toggle("screen--active", screenName === "title");
  gameScreen.classList.toggle("screen--active", screenName === "game");
  resultScreen.classList.toggle("screen--active", screenName === "result");
}

// =========================================
// Scenario
// =========================================

function saveCurrentSceneToHistory() {
  sceneHistory.push(
    createHistorySnapshot(currentIndex, currentQuarter, gameState)
  );
}

function updateBackButton() {
  backButton.disabled = sceneHistory.length <= 1;
}

function renderScenario() {
  const scene = scenario[currentIndex];

  if (!scene) {
    chapterName.textContent = "COMING SOON";
    speakerName.hidden = true;
    dialogueText.textContent =
      "ここから先のシナリオは制作中です。\n" +
      "次は1Q本編を追加していきます。";

    sceneElement.style.backgroundImage = "";
    backgroundPlaceholder.hidden = false;
    foregroundImage.hidden = true;
    characterImage.hidden = true;
    nextButton.disabled = true;
    updateBackButton();
    return;
  }

  chapterName.textContent = scene.chapter;

  if (scene.speaker === "SYSTEM") {
    speakerName.hidden = true;
  } else {
    speakerName.hidden = false;
    speakerName.textContent = scene.speaker;
  }

  dialogueText.textContent = scene.text;

  if (scene.background) {
    sceneElement.style.backgroundImage = `url("${scene.background}")`;
    backgroundPlaceholder.hidden = true;
  } else {
    sceneElement.style.backgroundImage = "";
    backgroundPlaceholder.hidden = false;
  }

  if (scene.foreground) {
    foregroundImage.src = scene.foreground;
    foregroundImage.hidden = false;
  } else {
    foregroundImage.src = "";
    foregroundImage.hidden = true;
  }

  if (scene.character) {
    characterImage.src = scene.character;
    characterImage.hidden = false;
  } else {
    characterImage.src = "";
    characterImage.hidden = true;
  }

  updateAudioForScene(scene);
  updateBackButton();
}

function startGame() {
  currentIndex = 0;
  currentQuarter = 1;
  gameState = createInitialState();
  sceneHistory = [];
  lastPlayedSeSceneId = "";
  nextButton.disabled = false;
  showScreen("game");
  saveCurrentSceneToHistory();
  renderScenario();
}

function nextScenario() {
  currentIndex += 1;
  saveCurrentSceneToHistory();
  renderScenario();
}

function previousScenario() {
  if (sceneHistory.length <= 1) return;

  // 現在の場面を履歴から外し、一つ前の場面とゲーム状態を復元する。
  sceneHistory.pop();
  const previous = sceneHistory[sceneHistory.length - 1];

  currentIndex = previous.index;
  currentQuarter = previous.quarter;
  gameState = JSON.parse(JSON.stringify(previous.gameState));
  nextButton.disabled = false;

  renderScenario();
}

// =========================================
// Quarter result
// =========================================

function getResultComment(grade) {
  const comments = {
    S: "最高のスタート！ 自分で選び、調べ、動く力がしっかり身についてる！",
    A: "かなりいい感じ！ この調子で、自分に合った大学生活を作っていこう。",
    B: "順調なスタート！ 少しずつ自分のペースをつかんでいこう。",
    C: "失敗しても大丈夫。次のQで一つずつ攻略していこう！",
    "—": "まだ始まったばかり。ここから自分らしい大学生活を作っていこう！"
  };

  return comments[grade] ?? comments["—"];
}

function renderQuarterResult(quarter = currentQuarter) {
  const grade = calculateQuarterGrade(gameState);
  const topAffection = getTopAffection(gameState.affection);

  resultQuarter.textContent = `${quarter}Q`;
  resultGrade.textContent = grade;

  resultSelfManagement.textContent = gameState.selfManagement;
  resultInformationUse.textContent = gameState.informationUse;
  resultUniversityLife.textContent = gameState.universityLife;

  resultSelfManagementBar.style.width = `${scoreToPercent(gameState.selfManagement)}%`;
  resultInformationUseBar.style.width = `${scoreToPercent(gameState.informationUse)}%`;
  resultUniversityLifeBar.style.width = `${scoreToPercent(gameState.universityLife)}%`;

  resultComment.textContent = getResultComment(grade);

  if (topAffection) {
    const [characterId] = topAffection;
    resultAffection.textContent = characterNames[characterId] ?? characterId;
  } else {
    resultAffection.textContent = "まだこれから";
  }
}

function openQuarterResult() {
  screenBeforeResult = gameScreen.classList.contains("screen--active")
    ? "game"
    : "title";

  renderQuarterResult(currentQuarter);
  showScreen("result");
  playBgm(RESULT_BGM);
}

function closeQuarterResult() {
  showScreen(screenBeforeResult);

  if (screenBeforeResult === "game") {
    const scene = scenario[currentIndex];
    if (scene?.bgm) {
      playBgm(scene.bgm);
    } else {
      // 現在のシーン自身に指定がなくても、プロローグのBGMへ戻す。
      playBgm("./assets/audio/bgm/prologue.wav");
    }
  } else {
    pauseBgm();
  }
}

// =========================================
// Events
// =========================================

startButton.addEventListener("click", () => {
  playClickSe();
  startGame();
});

backButton.addEventListener("click", () => {
  if (backButton.disabled) return;

  playClickSe();
  previousScenario();
});

titleButton.addEventListener("click", () => {
  playClickSe();
  pauseBgm();
  showScreen("title");
});

nextButton.addEventListener("click", () => {
  playClickSe();
  nextScenario();
});

resultButton.addEventListener("click", () => {
  playClickSe();
  openQuarterResult();
});

resultCloseButton.addEventListener("click", () => {
  playClickSe();
  closeQuarterResult();
});

soundButton.addEventListener("click", toggleSound);

dialogueBox.addEventListener("click", (event) => {
  if (event.target.closest("button")) return;
  if (!choiceArea.hidden) return;
  if (nextButton.disabled) return;

  playClickSe();
  nextScenario();
});

updateSoundButton();
