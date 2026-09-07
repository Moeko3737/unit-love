import { scenario } from "./scenario.js?v=20260907-2";
import {
  detectWebpSupport,
  getChapterImagePaths,
  getPreferredImagePath
} from "./imageAssets.js?v=20260907-2";
import { createImageLoader, createImagePresenter } from "./imageLoader.js?v=20260907-2";
import { renderSceneDecorations } from "./sceneDecorations.js?v=20260907-2";
import { createBookmark, restoreBookmark, createBookmarkStore } from "./bookmark.js?v=20260907-2";
import {
  ENDING_ARTWORK,
  ENDING_CATALOG,
  createEndingAlbumStore
} from "./endingAlbum.js?v=20260907-2";
import {
  createInitialState,
  createNextQuarterState,
  createHistorySnapshot,
  applyScenarioEffects,
  resolveScenarioAdvance,
  resolveScenarioChoice,
  calculateQuarterGrade,
  scoreToPercent,
  getScoreMaximums,
  determineGrowthEnding
} from "./gameLogic.js?v=20260907-2";

// =========================================
// DOM
// =========================================

const titleScreen = document.getElementById("title-screen");
const gameScreen = document.getElementById("game-screen");
const openingScreen = document.getElementById("opening-screen");
const resultScreen = document.getElementById("result-screen");
const endingScreen = document.getElementById("ending-screen");

const startButton = document.getElementById("start-button");
const continueButton = document.getElementById("continue-button");
const chapterSelectButton = document.getElementById("chapter-select-button");
const chapterJumpDialog = document.getElementById("chapter-jump-dialog");
const chapterJumpSelect = document.getElementById("chapter-jump-select");
const chapterJumpCancel = document.getElementById("chapter-jump-cancel");
const chapterJumpStart = document.getElementById("chapter-jump-start");
const endingAlbumButton = document.getElementById("ending-album-button");
const endingAlbumCount = document.getElementById("ending-album-count");
const endingAlbumDialog = document.getElementById("ending-album-dialog");
const endingAlbumList = document.getElementById("ending-album-list");
const endingAlbumClose = document.getElementById("ending-album-close");
const endingArtworkDialog = document.getElementById("ending-artwork-dialog");
const endingArtworkImageWebp = document.getElementById("ending-artwork-image-webp");
const endingArtworkImage = document.getElementById("ending-artwork-image");
const endingArtworkTitle = document.getElementById("ending-artwork-title");
const endingArtworkClose = document.getElementById("ending-artwork-close");
const bookmarkInfo = document.getElementById("bookmark-info");
const bookmarkStatusElement = document.getElementById("bookmark-status");
const backButton = document.getElementById("back-button");
const titleButton = document.getElementById("title-button");
const titleReturnDialog = document.getElementById("title-return-dialog");
const titleReturnMessage = document.getElementById("title-return-message");
const titleReturnCancel = document.getElementById("title-return-cancel");
const titleReturnConfirm = document.getElementById("title-return-confirm");
const nextButton = document.getElementById("next-button");
const resultButton = document.getElementById("result-button");
const resultCloseButton = document.getElementById("result-close-button");
const soundButton = document.getElementById("sound-button");

const chapterName = document.getElementById("chapter-name");
const quarterBadge = document.getElementById("quarter-badge");
const sideQuarterItems = document.querySelectorAll("[data-quarter]");
const speakerName = document.getElementById("speaker-name");
const dialogueText = document.getElementById("dialogue-text");

const sceneElement = document.querySelector(".scene");
const backgroundPlaceholder = document.querySelector(".background-placeholder");
const dialogueBox = document.querySelector(".dialogue-box");
const tapGuide = document.querySelector(".tap-guide");
const choiceArea = document.getElementById("choice-area");
const foregroundImage = document.getElementById("foreground-image");
const characterImage = document.getElementById("character-image");
const sceneDecorationElements = {
  sceneElement,
  captionElement: document.getElementById("scene-caption"),
  notificationCard: document.getElementById("scene-notification"),
  notificationIcon: document.getElementById("scene-notification-icon"),
  notificationTitle: document.getElementById("scene-notification-title"),
  notificationText: document.getElementById("scene-notification-text"),
  deadlineScheduleCard: document.getElementById("deadline-schedule"),
  deadlineSchedulePeriod: document.getElementById("deadline-schedule-period"),
  deadlineScheduleTitle: document.getElementById("deadline-schedule-title"),
  deadlineScheduleList: document.getElementById("deadline-schedule-list"),
  myStepCard: document.getElementById("my-step-form"),
  myStepCategory: document.getElementById("my-step-category"),
  myStepSubject: document.getElementById("my-step-subject"),
  myStepFields: document.getElementById("my-step-fields"),
  strategyGuideCard: document.getElementById("strategy-guide"),
  strategyGuideTitle: document.getElementById("strategy-guide-title"),
  strategyGuideList: document.getElementById("strategy-guide-list"),
  strategyGuideAction: document.getElementById("strategy-guide-action"),
  createElement: (tagName) => document.createElement(tagName)
};

const resultQuarter = document.getElementById("result-quarter");
const resultGrade = document.getElementById("result-grade");
const resultCard = document.querySelector(".result-card");
const resultSelfManagement = document.getElementById("result-self-management");
const resultInformationUse = document.getElementById("result-information-use");
const resultUniversityLife = document.getElementById("result-university-life");
const resultSelfManagementBar = document.getElementById("result-self-management-bar");
const resultInformationUseBar = document.getElementById("result-information-use-bar");
const resultUniversityLifeBar = document.getElementById("result-university-life-bar");
const resultComment = document.getElementById("result-comment");
const resultCloseLabel = document.getElementById("result-close-label");
const resultSheetNumber = document.getElementById("result-sheet-number");

const endingVisual = document.getElementById("ending-visual");
const endingImageWebp = document.getElementById("ending-image-webp");
const endingImage = document.getElementById("ending-image");
const endingUnlockedLabel = document.getElementById("ending-unlocked-label");
const endingStoryTitle = document.getElementById("ending-story-title");
const endingSelfManagement = document.getElementById("ending-self-management");
const endingInformationUse = document.getElementById("ending-information-use");
const endingUniversityLife = document.getElementById("ending-university-life");
const endingTitleButton = document.getElementById("ending-title-button");
const endingSaveNote = document.getElementById("ending-save-note");

const FALLBACK_ENDING_ARTWORK = Object.freeze({
  png: "./assets/images/backgrounds/op-campus.png",
  webp: "./assets/images/backgrounds/op-campus.webp",
  alt: "桜が咲く大学キャンパス"
});

// =========================================
// Game state
// =========================================

let currentIndex = 0;
let currentQuarter = 1;
let gameState = createInitialState();
let screenBeforeResult = "game";
let pendingQuarterAdvance = null;
let sceneHistory = [];
let openingTargetIndex = null;
let openingStartTimer = null;
const supportsWebp = detectWebpSupport(document);
const imageLoader = createImageLoader();
const preloadedChapters = new Set();
const foregroundPresenter = createSceneImagePresenter(foregroundImage);
const characterPresenter = createSceneImagePresenter(characterImage);
const bookmarkStore = createBookmarkStore();
const endingAlbumStore = createEndingAlbumStore();
let currentBookmark = null;
let bookmarkStatus = "empty";
let lastEndingArtworkTrigger = null;
let hasStoredBookmark = false;

function getTestStartState(sceneId) {
  const sceneIndex = scenario.findIndex((scene) => scene.id === sceneId);
  if (sceneIndex < 0) return null;

  const quarterMatch = scenario[sceneIndex].chapter.match(/^Q([1-4])/);
  const quarter = quarterMatch ? Number(quarterMatch[1]) : 1;
  const state = createInitialState();
  if (sceneId === "q2-04-participated-passage") {
    state.decisions = { q203Program: "participated" };
  } else if (sceneId === "q2-04-not-participated-passage") {
    state.decisions = { q203Program: "not-participated" };
  }

  return { sceneIndex, quarter, state };
}

// =========================================
// Bookmark / continue
// =========================================

function updateBookmarkStatus() {
  const sceneId = currentBookmark?.history.at(-1)?.sceneId;
  const bookmarkedScene = scenario.find((scene) => scene.id === sceneId);
  continueButton.disabled = !bookmarkedScene;
  continueButton.setAttribute("aria-label", bookmarkedScene
    ? `${bookmarkedScene.chapter}の栞から再開する`
    : "つづきから（再開できる栞がありません）"
  );

  let titleMessage = "このブラウザに栞を自動保存します";
  let gameMessage = "";
  if (bookmarkedScene) {
    const saved = bookmarkStatus === "saved";
    titleMessage = `栞：${bookmarkedScene.chapter}（${saved ? "自動保存済み" : "この画面を閉じるまで有効"}）`;
    gameMessage = saved
      ? "栞を自動保存しました"
      : "栞を保存できません。この画面を閉じないでください。";
  } else if (bookmarkStatus === "invalid") {
    titleMessage = "以前の栞を読み込めません。「はじめから」で新しく保存できます。";
  } else if (bookmarkStatus === "unavailable") {
    titleMessage = "この環境では栞を保存できません。画面を閉じると進行が失われます。";
  }
  // 会話を送るたびに同じ保存メッセージを読み上げない。
  if (bookmarkInfo.textContent !== titleMessage) bookmarkInfo.textContent = titleMessage;
  if (bookmarkStatusElement.textContent !== gameMessage) bookmarkStatusElement.textContent = gameMessage;
  const warning = ["invalid", "unavailable", "session"].includes(bookmarkStatus);
  bookmarkInfo.dataset.warning = String(warning);
  bookmarkStatusElement.dataset.warning = String(warning);
}

function loadBookmark() {
  const result = bookmarkStore.read();
  hasStoredBookmark = result.status === "found" || result.status === "invalid";
  if (result.status === "found") {
    const restored = restoreBookmark(result.bookmark, scenario);
    currentBookmark = restored ? result.bookmark : null;
    bookmarkStatus = restored ? "saved" : "invalid";
  } else {
    currentBookmark = null;
    bookmarkStatus = result.status;
  }
  updateBookmarkStatus();
}

function saveBookmark(history = sceneHistory) {
  const bookmark = createBookmark(scenario, history);
  if (!bookmark) return;

  // 永続保存に失敗しても、ページを開いている間は最新の栞から再開できる。
  currentBookmark = bookmark;
  const saved = bookmarkStore.write(bookmark);
  bookmarkStatus = saved ? "saved" : "session";
  if (saved) hasStoredBookmark = true;
  updateBookmarkStatus();
}

function continueGame() {
  const restored = restoreBookmark(currentBookmark, scenario);
  if (!restored) return;

  cancelOpening();
  pauseBgm();
  currentBgmPath = "";
  currentIndex = restored.currentIndex;
  currentQuarter = restored.currentQuarter;
  pendingQuarterAdvance = null;
  gameState = restored.gameState;
  sceneHistory = restored.sceneHistory;
  // 再開時に同じ通知音を鳴らし直したり、履歴・選択効果を重ねたりしない。
  lastPlayedSeSceneId = scenario[currentIndex].id;
  showScreen("game");
  renderScenario();
  if (endingScreen.classList.contains("screen--active")) return;
  const focusTarget = choiceArea.querySelector("button")
    ?? (nextButton.disabled ? backButton : nextButton);
  focusTarget.focus({ preventScroll: true });
}

function openChapterJump() {
  chapterJumpDialog.hidden = false;
  chapterJumpSelect.focus({ preventScroll: true });
}

function closeChapterJump() {
  chapterJumpDialog.hidden = true;
  chapterSelectButton.focus({ preventScroll: true });
}

function updateEndingAlbumSummary() {
  const unlockedCount = endingAlbumStore.read().length;
  endingAlbumCount.textContent = `${unlockedCount} / ${ENDING_CATALOG.length}`;
}

function renderEndingAlbum() {
  const endings = endingAlbumStore.list();
  endingAlbumList.replaceChildren();

  endings.forEach((ending, index) => {
    const entry = document.createElement(ending.unlocked ? "button" : "article");
    const number = document.createElement("span");
    const storyTitle = document.createElement("strong");
    const storyLabel = document.createElement("span");

    entry.className = "ending-album-entry";
    entry.dataset.unlocked = String(ending.unlocked);
    entry.setAttribute(
      "aria-label",
      ending.unlocked
        ? `${ending.title}の一枚絵を見る`
        : `物語${index + 1}、未解放`
    );
    if (ending.unlocked) {
      entry.type = "button";
      entry.addEventListener("click", () => {
        playClickSe();
        openEndingArtwork(ending, entry);
      });
    }
    number.className = "ending-album-entry-number";
    number.textContent = `STORY ${String(index + 1).padStart(2, "0")}`;
    storyTitle.textContent = ending.unlocked ? ending.title : "？？？";
    storyLabel.textContent = ending.unlocked ? "一枚絵を見る" : "まだ見ていない物語";

    entry.append(number, storyTitle, storyLabel);
    endingAlbumList.append(entry);
  });
  updateEndingAlbumSummary();
}

function openEndingArtwork(ending, trigger) {
  const artwork = ENDING_ARTWORK[ending.id];
  if (!artwork) return;

  lastEndingArtworkTrigger = trigger;
  endingArtworkImageWebp.srcset = artwork.webp;
  endingArtworkImage.src = artwork.png;
  endingArtworkImage.alt = artwork.alt;
  endingArtworkTitle.textContent = ending.title;
  endingAlbumDialog.inert = true;
  endingArtworkDialog.hidden = false;
  endingArtworkClose.focus({ preventScroll: true });
}

function closeEndingArtwork() {
  if (endingArtworkDialog.hidden) return;

  endingArtworkDialog.hidden = true;
  endingAlbumDialog.inert = false;
  lastEndingArtworkTrigger?.focus({ preventScroll: true });
  lastEndingArtworkTrigger = null;
}

function openEndingAlbum() {
  renderEndingAlbum();
  endingAlbumDialog.hidden = false;
  endingAlbumClose.focus({ preventScroll: true });
}

function closeEndingAlbum() {
  endingAlbumDialog.hidden = true;
  endingAlbumButton.focus({ preventScroll: true });
}

function startChapterTest() {
  const testStart = getTestStartState(chapterJumpSelect.value);
  if (!testStart) return;

  if ((currentBookmark || hasStoredBookmark) && !window.confirm(
    "現在の栞は上書きされ、これまでの進行状況と得点はすべてリセットされます。\n\n選んだ章からテストを始めますか？"
  )) return;

  cancelOpening();
  pauseBgm();
  currentBgmPath = "";
  currentIndex = testStart.sceneIndex;
  currentQuarter = testStart.quarter;
  pendingQuarterAdvance = null;
  gameState = testStart.state;
  sceneHistory = [];
  lastPlayedSeSceneId = "";
  chapterJumpDialog.hidden = true;
  showScreen("game");
  saveCurrentSceneToHistory();
  renderScenario();
}

// =========================================
// Image preparation / DOM display
// =========================================

function preloadChapterImages(index) {
  const chapter = scenario[index]?.chapter;
  if (!chapter || preloadedChapters.has(chapter)) return;

  preloadedChapters.add(chapter);
  void imageLoader.preload(getChapterImagePaths(scenario, index, supportsWebp));
}

function createSceneImagePresenter(element) {
  let displayedImage = element;

  return createImagePresenter({
    loadImage: imageLoader.load,
    showImage(image, layout) {
      image.dataset.layout = layout;
      if (image !== displayedImage) {
        image.id = displayedImage.id;
        image.className = displayedImage.className;
        image.alt = displayedImage.alt;
        image.hidden = false;
        // srcだけを変更せず、描画準備済みのImageそのものを差し替える。
        displayedImage.replaceWith(image);
        displayedImage = image;
      } else {
        displayedImage.hidden = false;
      }
    },
    hideImage() {
      displayedImage.hidden = true;
    }
  });
}

// =========================================
// Audio
// =========================================

const bgmPlayer = new Audio();
bgmPlayer.loop = true;
bgmPlayer.volume = 0.18;

const sePlayer = new Audio();
sePlayer.volume = 0.45;

const RESULT_BGM = "./assets/audio/bgm/result.wav";
const OPENING_BGM = "./assets/audio/bgm/opening.wav";
const CLICK_SE = "./assets/audio/se/click.wav";
const CLEAR_SE = "./assets/audio/se/clear.mp3";
const OPENING_LEAD_IN_MS = 420;

let soundEnabled = true;
try {
  soundEnabled = localStorage.getItem("unitLoveSound") !== "off";
} catch {
  // 保存が禁止されていても、栞の警告とゲーム画面までは表示できるようにする。
}
let currentBgmPath = "";
let lastPlayedSeSceneId = "";

function updateSoundButton() {
  soundButton.classList.toggle("sound-button--off", !soundEnabled);
  soundButton.dataset.sound = soundEnabled ? "on" : "off";
  soundButton.setAttribute("aria-pressed", String(soundEnabled));
  soundButton.setAttribute(
    "aria-label",
    soundEnabled ? "音をオフにする" : "音をオンにする"
  );
  soundButton.title = soundEnabled ? "サウンド：オン" : "サウンド：オフ";
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
  const chapterBgm = findChapterBgm(currentIndex);

  if (
    chapterBgm &&
    (currentBgmPath !== chapterBgm || (soundEnabled && bgmPlayer.paused))
  ) {
    playBgm(chapterBgm);
  }

  const sceneSe = scene.se || (scene.clear && scene.text?.includes("CLEAR") ? CLEAR_SE : "");
  if (sceneSe && lastPlayedSeSceneId !== scene.id) {
    playSe(sceneSe);
    lastPlayedSeSceneId = scene.id;
  }
}

function findChapterBgm(index) {
  const chapter = scenario[index]?.chapter;

  for (let sceneIndex = index; sceneIndex >= 0; sceneIndex -= 1) {
    const scene = scenario[sceneIndex];
    if (scene.chapter !== chapter) break;
    if (scene.bgm) return scene.bgm;
  }

  return "";
}

function toggleSound() {
  soundEnabled = !soundEnabled;
  try {
    localStorage.setItem("unitLoveSound", soundEnabled ? "on" : "off");
  } catch {
    // 音の切替自体は、このプレイ中も使える。
  }
  updateSoundButton();

  if (soundEnabled) {
    const scene = scenario[currentIndex];
    if (openingScreen.classList.contains("screen--active")) {
      playBgm(OPENING_BGM);
    } else if (resultScreen.classList.contains("screen--active")) {
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
  if (screenName === "title") {
    foregroundPresenter.set(null);
    characterPresenter.set(null);
  }

  titleScreen.classList.toggle("screen--active", screenName === "title");
  gameScreen.classList.toggle("screen--active", screenName === "game");
  openingScreen.classList.toggle("screen--active", screenName === "opening");
  resultScreen.classList.toggle("screen--active", screenName === "result");
  endingScreen.classList.toggle("screen--active", screenName === "ending");
}

// =========================================
// Scenario
// =========================================

function saveCurrentSceneToHistory() {
  sceneHistory.push(
    createHistorySnapshot(currentIndex, currentQuarter, gameState)
  );
  saveBookmark();
}

function updateBackButton() {
  backButton.disabled = sceneHistory.length <= 1;
}

function renderChoices(scene) {
  choiceArea.replaceChildren();

  const hasChoices = Array.isArray(scene.choices) && scene.choices.length > 0;
  const isEnding = scene.end === true;
  const isTimePassage = Boolean(scene.timePassage);

  choiceArea.hidden = !hasChoices;
  nextButton.disabled = hasChoices || isEnding;
  nextButton.hidden = hasChoices || isEnding || isTimePassage;
  tapGuide.textContent = hasChoices
    ? "SELECT YOUR ANSWER"
    : isEnding
      ? scene.complete === true
        ? "STORY COMPLETE"
        : "TO BE CONTINUED"
      : isTimePassage
        ? "TAP ANYWHERE TO CONTINUE"
      : scene.quarterEnd
        ? `VIEW ${currentQuarter}Q RESULT`
      : "TAP TO NEXT";
  nextButton.setAttribute(
    "aria-label",
    scene.quarterEnd ? `${currentQuarter}Qの成績を見る` : "次へ"
  );

  dialogueBox.classList.toggle("dialogue-box--choice", hasChoices);
  dialogueBox.classList.toggle("dialogue-box--clear", scene.clear === true);
  dialogueBox.classList.toggle("dialogue-box--time-passage", Boolean(scene.timePassage));
  dialogueText.classList.toggle("dialogue-text--emphasis", scene.emphasis === true);
  dialogueText.classList.toggle("dialogue-text--time-passage", Boolean(scene.timePassage));

  if (!hasChoices) return;

  scene.choices.forEach((choice, choiceIndex) => {
    const button = document.createElement("button");
    const label = document.createElement("span");
    const text = document.createElement("span");

    button.type = "button";
    button.className = "choice-button";
    button.dataset.choiceIndex = String(choiceIndex);
    button.setAttribute("aria-label", `${choice.label} ${choice.text}`);

    label.className = "choice-label";
    label.textContent = choice.label;
    text.className = "choice-text";
    text.textContent = choice.text;

    button.append(label, text);
    choiceArea.append(button);
  });
}

function renderDialogueText(scene) {
  if (!scene.timePassage) {
    // 攻略ガイドの要点だと分かるよう、会話欄だけにTipsを付ける。
    dialogueText.textContent = scene.strategyGuide
      ? `Tips：${scene.text}`
      : scene.text;
    return;
  }

  const label = document.createElement("span");
  const title = document.createElement("strong");
  const detail = document.createElement("span");

  label.className = "time-passage-label";
  label.textContent = scene.timePassage.label;
  title.className = "time-passage-title";
  title.textContent = scene.timePassage.title;
  detail.className = "time-passage-detail";
  detail.textContent = scene.timePassage.detail;
  dialogueText.replaceChildren(label, title, detail);
}

function renderEndingScreen() {
  const endingId = determineGrowthEnding(gameState);
  const ending = ENDING_CATALOG.find(({ id }) => id === endingId)
    ?? ENDING_CATALOG[ENDING_CATALOG.length - 1];
  const artwork = ENDING_ARTWORK[endingId];
  const displayedArtwork = artwork ?? FALLBACK_ENDING_ARTWORK;
  const maximums = getScoreMaximums(4);

  // 直接再開した場合も、到達した物語をアルバムへ記録する。
  const wasUnlocked = endingAlbumStore.isUnlocked(ending.id);
  endingAlbumStore.unlock(ending.id);
  const isUnlocked = endingAlbumStore.isUnlocked(ending.id);
  updateEndingAlbumSummary();

  endingScreen.dataset.ending = ending.id;
  endingVisual.dataset.hasArtwork = String(Boolean(artwork));
  endingImageWebp.srcset = displayedArtwork.webp;
  endingImage.src = displayedArtwork.png;
  endingImage.alt = displayedArtwork.alt;
  endingUnlockedLabel.textContent = wasUnlocked || !isUnlocked
    ? "STORY COMPLETED"
    : "STORY UNLOCKED";
  endingStoryTitle.textContent = ending.title;

  endingSelfManagement.textContent = `${gameState.selfManagement ?? 0} / ${maximums.selfManagement}`;
  endingInformationUse.textContent = `${gameState.informationUse ?? 0} / ${maximums.informationUse}`;
  endingUniversityLife.textContent = `${gameState.universityLife ?? 0} / ${maximums.universityLife}`;
  endingSaveNote.textContent = isUnlocked
    ? wasUnlocked
      ? "この物語はエンディングアルバムに記録されています"
      : "この物語はエンディングアルバムに記録されました"
    : "この環境ではアルバムへ保存できません。画面を閉じる前に物語を確認してください";

  showScreen("ending");
  endingStoryTitle.focus({ preventScroll: true });
}

function renderScenario() {
  const scene = scenario[currentIndex];

  if (scene?.ending?.id) {
    endingAlbumStore.unlock(scene.ending.id);
    updateEndingAlbumSummary();
  }
  renderSceneDecorations(scene, sceneDecorationElements);
  gameScreen.classList.toggle("game-screen--time-passage", Boolean(scene?.timePassage));

  quarterBadge.textContent = `${currentQuarter}Q`;
  for (const item of sideQuarterItems) {
    item.classList.toggle(
      "quarter-item--current",
      Number(item.dataset.quarter) === currentQuarter
    );
  }

  if (!scene) {
    chapterName.textContent = "COMING SOON";
    speakerName.hidden = true;
    dialogueText.textContent =
      "ここから先のシナリオは制作中です。\n" +
      "次は1Q本編を追加していきます。";

    sceneElement.style.backgroundImage = "";
    backgroundPlaceholder.hidden = false;
    foregroundPresenter.set(null);
    characterPresenter.set(null);
    renderChoices({ end: true });
    nextButton.disabled = true;
    updateBackButton();
    return;
  }

  if (scene.complete === true) {
    renderEndingScreen();
    return;
  }

  chapterName.textContent = scene.chapter;

  if (scene.speaker === "SYSTEM") {
    speakerName.hidden = true;
  } else {
    speakerName.hidden = false;
    speakerName.textContent = scene.speaker;
  }

  renderDialogueText(scene);

  if (scene.background) {
    const backgroundPath = getPreferredImagePath(
      scene.background,
      supportsWebp
    );
    sceneElement.style.backgroundImage = `url("${backgroundPath}")`;
    backgroundPlaceholder.hidden = true;
  } else {
    sceneElement.style.backgroundImage = "";
    backgroundPlaceholder.hidden = false;
  }

  foregroundPresenter.set(getPreferredImagePath(scene.foreground, supportsWebp));
  characterPresenter.set(
    getPreferredImagePath(scene.character, supportsWebp),
    scene.characterLayout
  );
  preloadChapterImages(currentIndex);
  const decisionAdvance = scene.nextByDecision
    ? resolveScenarioAdvance(scenario, currentIndex, gameState)
    : null;
  const nextChapterId =
    scene.next ??
    scene.quarterEnd?.target ??
    scenario[decisionAdvance?.targetIndex]?.id;
  if (scene.clear && nextChapterId) {
    // CLEAR表示中に次の章を先読みする。戻る操作やスコアには影響させない。
    const nextChapterIndex = scenario.findIndex((entry) => entry.id === nextChapterId);
    preloadChapterImages(nextChapterIndex);
  }

  renderChoices(scene);
  updateAudioForScene(scene);
  updateBackButton();
}

function startGame() {
  if ((currentBookmark || hasStoredBookmark) && !window.confirm(
    "現在の栞は上書きされ、これまでの進行状況と得点はすべてリセットされます。\n\n最初から始めますか？"
  )) return;

  cancelOpening();
  pauseBgm();
  currentBgmPath = "";
  currentIndex = 0;
  currentQuarter = 1;
  pendingQuarterAdvance = null;
  gameState = createInitialState();
  sceneHistory = [];
  lastPlayedSeSceneId = "";
  nextButton.disabled = false;
  showScreen("game");
  saveCurrentSceneToHistory();
  renderScenario();
}

function nextScenario() {
  const advance = resolveScenarioAdvance(scenario, currentIndex, gameState);

  if (advance.type === "choice" || advance.type === "end") return;

  if (advance.type === "opening") {
    startOpening(advance.targetIndex);
    return;
  }

  if (
    advance.type === "quarter-result" ||
    advance.type === "quarter-result-preview"
  ) {
    openQuarterResult(advance);
    return;
  }

  if (advance.type === "quarter-advance") {
    currentQuarter = advance.nextQuarter;
    gameState = createNextQuarterState(gameState);
  }

  currentIndex = advance.targetIndex;
  saveCurrentSceneToHistory();
  renderScenario();
}

function selectScenarioChoice(choiceIndex) {
  const choice = resolveScenarioChoice(scenario, currentIndex, choiceIndex);
  if (!choice) return;

  gameState = applyScenarioEffects(gameState, choice.effects);
  currentIndex = choice.targetIndex;
  // 選択シーンの履歴は選択前のまま残す。戻れば加点も取り消される。
  saveCurrentSceneToHistory();
  renderScenario();
  nextButton.focus({ preventScroll: true });
}

// =========================================
// Opening
// =========================================

function clearOpeningTimers() {
  window.clearTimeout(openingStartTimer);
  openingStartTimer = null;
}

function cancelOpening() {
  clearOpeningTimers();
  openingTargetIndex = null;
  gameScreen.classList.remove("game-screen--leaving");
  openingScreen.classList.remove("opening-screen--playing");
}

function startOpening(targetIndex) {
  if (openingTargetIndex !== null) return;

  openingTargetIndex = targetIndex;
  // OP中に閉じた場合も、再開先はQ1-01。実際の履歴には完了時に一度だけ追加する。
  saveBookmark([
    ...sceneHistory,
    createHistorySnapshot(targetIndex, currentQuarter, gameState)
  ]);
  // OPの演出中に次の章を準備する。スキップ操作は読み込みを待たせない。
  preloadChapterImages(targetIndex);
  pauseBgm();
  playBgm(OPENING_BGM);
  gameScreen.classList.add("game-screen--leaving");

  openingStartTimer = window.setTimeout(() => {
    gameScreen.classList.remove("game-screen--leaving");
    showScreen("opening");

    // 戻って再度OPに入った場合もCSSアニメーションを最初から再生する。
    openingScreen.classList.remove("opening-screen--playing");
    void openingScreen.offsetWidth;
    openingScreen.classList.add("opening-screen--playing");
  }, OPENING_LEAD_IN_MS);
}

function finishOpening() {
  if (openingTargetIndex === null) return;

  const targetIndex = openingTargetIndex;
  clearOpeningTimers();
  openingTargetIndex = null;
  openingScreen.classList.remove("opening-screen--playing");

  // OP専用BGMは本編へ持ち越さない。未配置による再生失敗もここで終了する。
  pauseBgm();
  currentBgmPath = "";

  currentIndex = targetIndex;
  saveCurrentSceneToHistory();
  showScreen("game");
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

  saveBookmark();
  renderScenario();
}

// =========================================
// Quarter result
// =========================================

function getResultComment(grade, quarter = currentQuarter) {
  const defaultComments = {
    S: "最高のスタート！ 自分で選び、調べ、動く力がしっかり身についてる！",
    A: "かなりいい感じ！ この調子で、自分に合った大学生活を作っていこう。",
    B: "順調なスタート！ 少しずつ自分のペースをつかんでいこう。",
    C: "失敗しても大丈夫。次のQで一つずつ攻略していこう！",
    "—": "まだ始まったばかり。ここから自分らしい大学生活を作っていこう！"
  };
  const secondQuarterComments = {
    S: "忙しい中でも、自分で予定と経験を組み立てる力がしっかり育ってる！",
    A: "大学もバイトもいい感じ！ 自分に合うペースが見えてきたね。",
    B: "忙しさも学びの一つ。次のQでは、もう少し余裕を作っていこう。",
    C: "予定が崩れても大丈夫。今回の気づきを次のQに生かそう！",
    "—": "2Qで増えた経験を、ここから自分の力に変えていこう！"
  };
  const comments = quarter === 2 ? secondQuarterComments : defaultComments;

  return comments[grade] ?? comments["—"];
}

function renderQuarterResult(quarter = currentQuarter) {
  const maximums = getScoreMaximums(quarter);
  const grade = calculateQuarterGrade(gameState, maximums);

  resultQuarter.textContent = `${quarter}Q`;
  resultSheetNumber.textContent = `STUDENT LIFE REPORT / ${String(quarter).padStart(2, "0")}`;
  resultGrade.textContent = grade;
  resultCard.dataset.grade = grade;

  resultSelfManagement.textContent = `${gameState.selfManagement} / ${maximums.selfManagement}`;
  resultInformationUse.textContent = `${gameState.informationUse} / ${maximums.informationUse}`;
  resultUniversityLife.textContent = `${gameState.universityLife} / ${maximums.universityLife}`;

  resultSelfManagementBar.style.width = `${scoreToPercent(gameState.selfManagement, maximums.selfManagement)}%`;
  resultInformationUseBar.style.width = `${scoreToPercent(gameState.informationUse, maximums.informationUse)}%`;
  resultUniversityLifeBar.style.width = `${scoreToPercent(gameState.universityLife, maximums.universityLife)}%`;

  resultComment.textContent = getResultComment(grade, quarter);
}

function openQuarterResult(quarterAdvance = null) {
  screenBeforeResult = gameScreen.classList.contains("screen--active")
    ? "game"
    : "title";
  pendingQuarterAdvance = quarterAdvance;

  renderQuarterResult(currentQuarter);
  const isPreview = quarterAdvance?.type === "quarter-result-preview";
  resultCloseLabel.textContent = isPreview
    ? "続きを見る"
    : quarterAdvance
      ? `${quarterAdvance.nextQuarter}Qへ進む`
      : "ゲームに戻る";
  resultCloseButton.setAttribute(
    "aria-label",
    isPreview
      ? `${currentQuarter}Qの振り返りの続きを見る`
      : quarterAdvance
        ? `${quarterAdvance.nextQuarter}Qへ進む`
        : "ゲームに戻る"
  );
  showScreen("result");
  playBgm(RESULT_BGM);
}

function closeQuarterResult() {
  const quarterAdvance = pendingQuarterAdvance;
  pendingQuarterAdvance = null;

  if (quarterAdvance) {
    pauseBgm();
    currentBgmPath = "";
    if (quarterAdvance.type !== "quarter-result-preview") {
      currentQuarter = quarterAdvance.nextQuarter;
      gameState = createNextQuarterState(gameState);
    }
    currentIndex = quarterAdvance.targetIndex;
    saveCurrentSceneToHistory();
    showScreen("game");
    renderScenario();
    return;
  }

  showScreen(screenBeforeResult);

  if (screenBeforeResult === "game") {
    const chapterBgm = findChapterBgm(currentIndex);
    if (chapterBgm) {
      playBgm(chapterBgm);
    } else {
      // BGM未設定の章では、リザルト曲を本編へ持ち越さない。
      pauseBgm();
      currentBgmPath = "";
    }
  } else {
    pauseBgm();
  }
}

function openTitleReturnDialog() {
  const isSaved = bookmarkStatus === "saved" && currentBookmark;
  titleReturnMessage.textContent = isSaved
    ? "これまでのデータは自動保存されています。「つづきから」で再開できます。"
    : "この環境ではデータを保存できません。タイトルへ戻ると、現在の進行を再開できない場合があります。";
  titleReturnMessage.dataset.warning = String(!isSaved);
  titleReturnDialog.hidden = false;
  titleReturnConfirm.focus({ preventScroll: true });
}

function closeTitleReturnDialog({ restoreFocus = true } = {}) {
  titleReturnDialog.hidden = true;
  if (restoreFocus) titleButton.focus({ preventScroll: true });
}

function returnToTitle() {
  cancelOpening();
  pauseBgm();
  closeTitleReturnDialog({ restoreFocus: false });
  showScreen("title");
  updateBookmarkStatus();
}

// =========================================
// Events
// =========================================

startButton.addEventListener("click", () => {
  playClickSe();
  startGame();
});

continueButton.addEventListener("click", () => {
  if (continueButton.disabled) return;
  playClickSe();
  continueGame();
});

chapterSelectButton.addEventListener("click", () => {
  playClickSe();
  openChapterJump();
});

chapterJumpCancel.addEventListener("click", () => {
  playClickSe();
  closeChapterJump();
});

chapterJumpStart.addEventListener("click", () => {
  playClickSe();
  startChapterTest();
});

chapterJumpDialog.addEventListener("click", (event) => {
  if (event.target !== chapterJumpDialog) return;
  playClickSe();
  closeChapterJump();
});

endingAlbumButton.addEventListener("click", () => {
  playClickSe();
  openEndingAlbum();
});

endingAlbumClose.addEventListener("click", () => {
  playClickSe();
  closeEndingAlbum();
});

endingAlbumDialog.addEventListener("click", (event) => {
  if (event.target !== endingAlbumDialog) return;
  playClickSe();
  closeEndingAlbum();
});

endingArtworkClose.addEventListener("click", () => {
  playClickSe();
  closeEndingArtwork();
});

endingArtworkDialog.addEventListener("click", (event) => {
  if (event.target !== endingArtworkDialog) return;
  playClickSe();
  closeEndingArtwork();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!titleReturnDialog.hidden) {
    closeTitleReturnDialog();
  } else if (!endingArtworkDialog.hidden) {
    closeEndingArtwork();
  } else if (!endingAlbumDialog.hidden) {
    closeEndingAlbum();
  } else if (!chapterJumpDialog.hidden) {
    closeChapterJump();
  }
});

backButton.addEventListener("click", () => {
  if (backButton.disabled) return;

  playClickSe();
  previousScenario();
});

titleButton.addEventListener("click", () => {
  playClickSe();
  openTitleReturnDialog();
});

titleReturnCancel.addEventListener("click", () => {
  playClickSe();
  closeTitleReturnDialog();
});

titleReturnConfirm.addEventListener("click", () => {
  playClickSe();
  returnToTitle();
});

titleReturnDialog.addEventListener("click", (event) => {
  if (event.target !== titleReturnDialog) return;
  closeTitleReturnDialog();
});

endingTitleButton.addEventListener("click", () => {
  playClickSe();
  returnToTitle();
});

nextButton.addEventListener("click", () => {
  playClickSe();
  nextScenario();
});

choiceArea.addEventListener("click", (event) => {
  const button = event.target.closest("[data-choice-index]");
  if (!button) return;

  playClickSe();
  selectScenarioChoice(Number(button.dataset.choiceIndex));
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

openingScreen.addEventListener("click", () => {
  playClickSe();
  finishOpening();
});

dialogueBox.addEventListener("click", (event) => {
  if (event.target.closest("button")) return;
  if (!choiceArea.hidden) return;
  if (nextButton.disabled) return;

  playClickSe();
  nextScenario();
});

updateSoundButton();
loadBookmark();
updateEndingAlbumSummary();
// タイトルを見ている間にプロローグの背景・スマホ・シルエットを準備する。
preloadChapterImages(0);
