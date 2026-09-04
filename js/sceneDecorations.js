// シナリオの補助UIだけを描画する。進行・音声・スコアは変更しない。
// シーンごとに状態を設定し直すため、戻る操作でも通知や前景の設定が残らない。
export function renderSceneDecorations(scene, elements) {
  const {
    sceneElement,
    captionElement,
    notificationCard,
    notificationIcon,
    notificationTitle,
    notificationText,
    deadlineScheduleCard,
    deadlineSchedulePeriod,
    deadlineScheduleTitle,
    deadlineScheduleList,
    createElement
  } = elements;
  const notification = scene?.notification;
  const deadlineSchedule = scene?.deadlineSchedule;

  sceneElement.dataset.foregroundLayout = scene?.foregroundLayout === "phone" ? "phone" : "";
  sceneElement.dataset.sceneLayout = scene?.timePassage ? "time-passage" : "";

  // 場所・日時もシーンのデータから復元し、前後移動で表示を残さない。
  const caption = scene?.caption ?? "";
  if (captionElement.textContent !== caption) captionElement.textContent = caption;
  captionElement.hidden = !caption;

  const title = notification?.title ?? "";
  const text = notification?.text ?? "";
  const icon = notification?.icon ?? "#";
  // 同じ通知が続く会話では、読み上げ用の内容を繰り返し更新しない。
  if (notificationIcon && notificationIcon.textContent !== icon) {
    notificationIcon.textContent = icon;
  }
  if (notificationTitle.textContent !== title) notificationTitle.textContent = title;
  if (notificationText.textContent !== text) notificationText.textContent = text;
  notificationCard.hidden = !notification;

  const scheduleKey = deadlineSchedule ? JSON.stringify(deadlineSchedule) : "";
  if (deadlineScheduleCard.dataset.scheduleKey !== scheduleKey) {
    deadlineScheduleCard.dataset.scheduleKey = scheduleKey;
    deadlineSchedulePeriod.textContent = deadlineSchedule?.period ?? "";
    deadlineScheduleTitle.textContent = deadlineSchedule?.title ?? "";
    deadlineScheduleList.replaceChildren();

    for (const item of deadlineSchedule?.items ?? []) {
      const row = createElement("div");
      const label = createElement("span");
      const date = createElement("strong");
      const detail = createElement("span");

      row.className = "deadline-schedule-row";
      label.className = "deadline-schedule-label";
      label.textContent = item.label;
      date.className = "deadline-schedule-date";
      date.textContent = item.date;
      detail.className = "deadline-schedule-detail";
      detail.textContent = item.detail;
      row.append(label, date, detail);
      deadlineScheduleList.append(row);
    }
  }
  deadlineScheduleCard.hidden = !deadlineSchedule;
}
