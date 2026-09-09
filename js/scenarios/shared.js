export const backgrounds = {
  morning: "./assets/images/backgrounds/morning-room.png",
  night: "./assets/images/backgrounds/night-room.png",
  festival: "./assets/images/backgrounds/campus-festival.png",
  field: "./assets/images/backgrounds/op-campus.png",
  regionalProgram: "./assets/images/backgrounds/summer-seaside-town.png"
};

export const characters = {
  rishu: {
    normal: "./assets/images/characters/rishu/normal.png",
    serious: "./assets/images/characters/rishu/serious.png",
    smile: "./assets/images/characters/rishu/smile.png",
    surprised: "./assets/images/characters/rishu/surprised.png",
    troubled: "./assets/images/characters/rishu/troubled.png",
    silhouette: "./assets/images/characters/rishu/silhouette.png"
  },
  graduation: {
    normal: "./assets/images/characters/graduation/normal.png",
    smile: "./assets/images/characters/graduation/smile.png",
    guidance: "./assets/images/characters/graduation/guidance.png"
  },
  slack: {
    normal: "./assets/images/characters/slack/normal.png",
    smile: "./assets/images/characters/slack/smile.png",
    surprised: "./assets/images/characters/slack/surprised.png",
    worried: "./assets/images/characters/slack/worried.png",
    wink: "./assets/images/characters/slack/wink.png"
  },
  tsuno: {
    front: "./assets/images/characters/tsuno/front.png",
    back: "./assets/images/characters/tsuno/back.png"
  },
  gakuchika: {
    normal: "./assets/images/characters/gakuchika/normal.png",
    smile: "./assets/images/characters/gakuchika/smile.png",
    grin: "./assets/images/characters/gakuchika/grin.png",
    surprised: "./assets/images/characters/gakuchika/surprised.png",
    worried: "./assets/images/characters/gakuchika/worried.png"
  },
  report: {
    normal: "./assets/images/characters/report/normal.png",
    serious: "./assets/images/characters/report/serious.png"
  },
  exam: {
    normal: "./assets/images/characters/exam/normal.png",
    worried: "./assets/images/characters/exam/worried.png",
    smile: "./assets/images/characters/exam/smile.png"
  },
  yoshimura: {
    normal: "./assets/images/characters/yoshimura/normal.png"
  }
};

export const foregrounds = {
  slackPhone: "./assets/images/foregrounds/smartphone-slack.png",
  handPhone: "./assets/images/foregrounds/smartphone-hand01.png",
  reportDeadline: "./assets/images/foregrounds/smartphone-report-deadline.png",
  yoshimuraSlack: "./assets/images/foregrounds/smartphone-yoshimura-slack.png",
  thermometer: "./assets/images/foregrounds/thermometer.png"
};

export const audio = {
  prologue: "./assets/audio/bgm/daily.mp3",
  notification: "./assets/audio/se/notification.wav",
  thermometer: "./assets/audio/se/thermometer.mp3"
};

export const notifications = {
  slack: {
    icon: "#",
    title: "Slack · ZEN大学",
    text: "新しい通知が届いています。"
  },
  examSchedule: {
    icon: "Z",
    title: "ZENPortal",
    text: "単位認定試験の日程が公開されました"
  },
  examDate: {
    icon: "Z",
    title: "ZENPortal",
    text: "単位認定試験の受験日時が公開されました"
  },
  reportDeadline: {
    icon: "Z",
    title: "ZENPortal",
    text: "確認レポート 第1回提出締切が近づいています"
  },
  finalReportDeadline: {
    icon: "Z",
    title: "ZENPortal",
    text: "確認レポート　最終締切まであと3日"
  },
  regionalProgram: {
    icon: "Z",
    title: "ZENPortal",
    text: "地域・企業連携プログラムのお知らせ"
  },
  internationalProgram: {
    icon: "Z",
    title: "ZENPortal",
    text: "留学・国際交流プログラムのお知らせ"
  }
};

export const schedules = {
  reportDeadlines: {
    period: "2026年度 1Q",
    title: "確認レポート 締切スケジュール",
    items: [
      { label: "第1回締切", date: "5月6日", detail: "第5回分まで" },
      { label: "第2回締切", date: "5月21日", detail: "第10回分まで" },
      { label: "最終締切", date: "6月7日", detail: "第15回分まで" }
    ]
  },
  examAssigned: {
    period: "ZENPORTAL / 試験日程",
    title: "○○科目",
    items: [
      { label: "あなたの受験日時", date: "○月○日", detail: "○:○○" }
    ]
  },
  examChange: {
    period: "ZENPORTAL / 日程変更",
    title: "単位認定試験 受験日時",
    items: [
      { label: "割り当て日時", date: "候補日時 1", detail: "バイトと重複" },
      { label: "変更候補", date: "候補日時 2", detail: "選択可能" },
      { label: "変更候補", date: "候補日時 3", detail: "選択可能" }
    ]
  },
  examChanged: {
    period: "ZENPORTAL / 変更完了",
    title: "単位認定試験 受験日時",
    items: [
      { label: "変更後", date: "候補日時 2", detail: "申請済み" },
      { label: "カレンダー", date: "登録済み", detail: "予定を確認" }
    ]
  },
  examPreparation: {
    period: "EXAM PREPARATION",
    title: "受験前チェック",
    items: [
      { label: "CHECK 01", date: "PC・通信", detail: "事前の環境チェック" },
      { label: "CHECK 02", date: "カメラ・マイク", detail: "動作確認" },
      { label: "CHECK 03", date: "スマートフォン", detail: "カメラを準備" }
    ]
  },
  congestion: {
    period: "ZEN STUDY / 提出画面",
    title: "確認レポートを提出",
    items: [
      { label: "STATUS", date: "読み込み中…", detail: "アクセスが集中しています" }
    ]
  },
  examAbsence: {
    period: "ZEN大学 / FAQ",
    title: "単位認定試験を欠席した場合",
    items: [
      { label: "対象", date: "病気など", detail: "大学が認める理由" },
      { label: "手続き", date: "期間内に申請", detail: "期限を確認" },
      { label: "対応", date: "追試験", detail: "申請可能" }
    ]
  },
  makeupExam: {
    period: "ZENPORTAL / 追試験",
    title: "追試験の申請案内",
    items: [
      { label: "申請期間", date: "確認済み", detail: "期限内に手続き" },
      { label: "必要なもの", date: "確認済み", detail: "案内に従って準備" },
      { label: "申請状況", date: "受付確認", detail: "追試験を確認" }
    ]
  },
  q4Congestion: {
    period: "CALENDAR / 4Q終盤",
    title: "これからの予定",
    items: [
      { label: "確認レポート", date: "最終締切まで3日", detail: "複数件が未提出" },
      { label: "アルバイト", date: "明日", detail: "シフトあり" },
      { label: "単位認定試験", date: "締切の数日後", detail: "準備も必要" }
    ]
  },
  q4Plan: {
    period: "SCHEDULE / 予定整理",
    title: "締切・試験・予定",
    items: [
      { label: "確認レポート", date: "残り○件", detail: "今日から割り振る" },
      { label: "最終締切", date: "3日後", detail: "直前には残さない" },
      { label: "アルバイト", date: "明日", detail: "前後の時間を確認" },
      { label: "単位認定試験", date: "締切の数日後", detail: "準備時間を確保" }
    ]
  },
  graduationProgress: {
    period: "GRADUATION / CURRENT POSITION",
    title: "1年終了時点の履修状況",
    items: [
      { label: "取得状況", date: "確認", detail: "単位数と科目区分" },
      { label: "卒業要件", date: "照合", detail: "必修・区分・条件" },
      { label: "次年度", date: "計画", detail: "必要科目と学びたい科目" }
    ]
  },
  firstYearReview: {
    period: "YEAR 1 / MEMORIES",
    title: "一年間の出来事",
    items: [
      { label: "1Q", date: "履修登録・展軸祭", detail: "大学生活を知る" },
      { label: "2Q", date: "バイト・地域活動", detail: "予定と経験を広げる" },
      { label: "3Q", date: "国際交流・試験", detail: "選択肢と対処法を知る" },
      { label: "4Q", date: "振り返り", detail: "次の一年へつなげる" }
    ]
  }
};

export const myStepForms = {
  experience: {
    category: "学生時代の活動記録",
    subject: "対象授業なし",
    fields: [
      { label: "1.タイトル", value: "大学生活の経験", required: true },
      { label: "4.活動の内容", value: "何をしたか" },
      { label: "5.課題・6.工夫", value: "何を感じ、どう工夫したか" },
      { label: "7.結果と次のアクション", value: "何が変わり、次に何をするか" }
    ]
  },
  firstYear: {
    category: "学生時代の活動記録",
    subject: "対象授業なし",
    fields: [
      { label: "1.タイトル", value: "大学1年目の振り返り", required: true },
      { label: "4.活動の内容", value: "印象に残った出来事" },
      { label: "5.課題・6.工夫", value: "気づきと変えた行動" },
      { label: "7.結果と次のアクション", value: "2年目に試したいこと" }
    ]
  }
};

export function scene(chapter, data, background = backgrounds.morning) {
  return { chapter, background, ...data };
}

export function dialogue(chapter, prefix, number, speaker, text, data = {}, background) {
  return scene(chapter, {
    id: `${prefix}-${String(number).padStart(3, "0")}`,
    speaker,
    text,
    ...data
  }, background);
}

export function passage(chapter, id, title, detail, next, data = {}) {
  return scene(chapter, {
    id,
    speaker: "SYSTEM",
    text: `${title}／${detail}`,
    timePassage: {
      label: data.label ?? "TIME PASSES",
      title,
      detail
    },
    next,
    ...data
  }, data.background ?? backgrounds.morning);
}

export function guide(chapter, id, title, points, action, next, data = {}) {
  return scene(chapter, {
    id,
    speaker: "SYSTEM",
    text: title,
    strategyGuide: { title, points, action },
    next,
    ...data
  }, data.background ?? backgrounds.morning);
}
