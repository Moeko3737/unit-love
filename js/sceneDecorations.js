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
    myStepCard,
    myStepCategory,
    myStepSubject,
    myStepFields,
    strategyGuideCard,
    strategyGuideTitle,
    strategyGuideList,
    strategyGuideAction,
    createElement
  } = elements;
  const notification = scene?.notification;
  const deadlineSchedule = scene?.deadlineSchedule;
  const myStep = scene?.myStep;
  const strategyGuide = scene?.strategyGuide;

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

  if (myStepCard) {
    const myStepKey = myStep ? JSON.stringify(myStep) : "";
    if (myStepCard.dataset.formKey !== myStepKey) {
      myStepCard.dataset.formKey = myStepKey;
      myStepCategory.textContent = myStep?.category ?? "";
      myStepSubject.textContent = myStep?.subject ?? "";
      myStepFields.replaceChildren();

      for (const field of myStep?.fields ?? []) {
        const row = createElement("div");
        const heading = createElement("div");
        const label = createElement("strong");
        const value = createElement("span");

        row.className = "my-step-field";
        heading.className = "my-step-field-heading";
        label.className = "my-step-field-label";
        label.textContent = field.label;
        heading.append(label);

        if (field.required) {
          const required = createElement("b");
          required.className = "my-step-required";
          required.textContent = "必須";
          heading.append(required);
        }

        value.className = "my-step-field-value";
        value.textContent = field.value;
        row.append(heading, value);
        myStepFields.append(row);
      }
    }
    myStepCard.hidden = !myStep;
  }

  if (strategyGuideCard) {
    const guideKey = strategyGuide ? JSON.stringify(strategyGuide) : "";
    if (strategyGuideCard.dataset.guideKey !== guideKey) {
      strategyGuideCard.dataset.guideKey = guideKey;
      strategyGuideTitle.textContent = strategyGuide?.title ?? "";
      strategyGuideAction.textContent = strategyGuide?.action ?? "";
      strategyGuideList.replaceChildren();

      for (const point of strategyGuide?.points ?? []) {
        const item = createElement("li");
        item.textContent = point;
        strategyGuideList.append(item);
      }
    }
    strategyGuideCard.hidden = !strategyGuide;
  }
}
