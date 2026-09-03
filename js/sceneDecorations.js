// シナリオの補助UIだけを描画する。進行・音声・スコアは変更しない。
// シーンごとに状態を設定し直すため、戻る操作でも通知や前景の設定が残らない。
export function renderSceneDecorations(scene, elements) {
  const { sceneElement, captionElement, notificationCard, notificationTitle, notificationText } = elements;
  const notification = scene?.notification;

  sceneElement.dataset.foregroundLayout = scene?.foregroundLayout === "phone" ? "phone" : "";

  // 場所・日時もシーンのデータから復元し、前後移動で表示を残さない。
  const caption = scene?.caption ?? "";
  if (captionElement.textContent !== caption) captionElement.textContent = caption;
  captionElement.hidden = !caption;

  const title = notification?.title ?? "";
  const text = notification?.text ?? "";
  // 同じ通知が続く会話では、読み上げ用の内容を繰り返し更新しない。
  if (notificationTitle.textContent !== title) notificationTitle.textContent = title;
  if (notificationText.textContent !== text) notificationText.textContent = text;
  notificationCard.hidden = !notification;
}
