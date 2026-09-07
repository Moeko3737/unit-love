import {
  audio,
  backgrounds,
  characters,
  dialogue,
  foregrounds,
  guide,
  notifications,
  passage,
  scene,
  schedules
} from "./shared.js";

const q101 = (number, speaker, text, data = {}) =>
  dialogue("Q1-01", "q1-01", number, speaker, text, data);
const q102 = (number, speaker, text, data = {}) =>
  dialogue("Q1-02", "q1-02", number, speaker, text, data);
const q103 = (number, speaker, text, data = {}) =>
  dialogue("Q1-03", "q1-03", number, speaker, text, data);
const q104 = (number, speaker, text, data = {}) =>
  dialogue("Q1-04", "q1-04", number, speaker, text, data);
const q104Festival = (number, speaker, text, data = {}) =>
  dialogue("Q1-04", "q1-04", number, speaker, text, data, backgrounds.festival);
const q105 = (number, speaker, text, data = {}) =>
  dialogue("Q1-05", "q1-05", number, speaker, text, data);
const q106 = (number, speaker, text, data = {}) =>
  dialogue("Q1-06", "q1-06", number, speaker, text, data);
const q107 = (number, speaker, text, data = {}) =>
  dialogue("Q1-07", "q1-07", number, speaker, text, data);
const q108 = (number, speaker, text, data = {}) =>
  dialogue("Q1-08", "q1-08", number, speaker, text, data);

export const q1Scenario = [
  /* Q1-01 / 履修登録ってなに？ */
  q101(1, "履修登録くん", "大学生活初日から、その選び方？", {
    character: characters.rishu.normal
  }),
  q101(2, "主人公", "……さっきの人！\nていうか、誰！？", {
    character: characters.rishu.normal
  }),
  q101(3, "履修登録くん", "僕は履修登録。君が今、勢いだけで済ませようとしてたやつ。", {
    character: characters.rishu.normal
  }),
  q101(4, "主人公", "勢いだけじゃないよ。ちゃんと面白そうな授業を選んでた！", {
    character: characters.rishu.normal
  }),
  q101(5, "主人公", "心理学に、プログラミングに、漫画……全部気になるもん。", {
    character: characters.rishu.normal
  }),
  q101(6, "履修登録くん", "興味で選ぶのはいいこと。でも、それだけじゃ足りない。", {
    character: characters.rishu.serious
  }),
  q101(7, "履修登録くん", "高校みたいに、誰かが時間割を完成させてくれるわけじゃないよ。", {
    character: characters.rishu.serious
  }),
  q101(8, "主人公", "え。大学って……時間割、自分で作るの？", {
    character: characters.rishu.serious
  }),
  q101(9, "主人公", "高校までは、月曜1限は国語って最初から決まってたのに！", {
    character: characters.rishu.serious
  }),
  q101(10, "履修登録くん", "大学では、何を、いつ学ぶかを自分で考える。", {
    character: characters.rishu.serious
  }),
  q101(11, "履修登録くん", "それが履修計画。自由だけど、選んだ結果も自分に返ってくる。", {
    character: characters.rishu.serious
  }),
  q101(12, "主人公", "自由って……思ったよりやること多くない？", {
    character: characters.rishu.serious
  }),
  q101(13, "履修登録くん", "気づくの早くてえらい。", {
    character: characters.rishu.normal
  }),
  q101(14, "主人公", "褒められてる気がしない！", {
    character: characters.rishu.normal
  }),
  q101(15, "卒業要件先輩", "それに、好きな科目だけ選べばいいわけでもない。", {
    character: characters.graduation.normal
  }),
  q101(16, "主人公", "また誰か来た！！", {
    character: characters.graduation.normal
  }),
  q101(17, "卒業要件先輩", "必修、選択必修、卒業に必要な単位。満たす条件がある。", {
    character: characters.graduation.normal
  }),
  q101(18, "主人公", "そ、卒業！？ 今日入学したばっかりなんですけど！", {
    character: characters.graduation.normal
  }),
  q101(19, "卒業要件先輩", "だから今から見るんだよ。", {
    character: characters.graduation.guidance,
    emphasis: true
  }),
  q101(20, "履修登録くん", "4年間を今日決める必要はない。今の自分に必要な条件を確認しよう。", {
    character: characters.rishu.normal
  }),
  q101(21, "履修登録くん", "分からなければ、学生便覧や公式案内を見て、CCやAAにも相談できるから。", {
    character: characters.rishu.smile
  }),
  scene("Q1-01", {
    id: "q1-01-choice",
    speaker: "SYSTEM",
    text: "どうやって授業を選ぶ？",
    character: characters.rishu.normal,
    choices: [
      {
        label: "A",
        text: "必修や卒業要件を確認してから、興味のある科目を選ぶ",
        effects: { universityLife: 3 },
        next: "q1-01-choice-a-001"
      },
      {
        label: "B",
        text: "興味のある科目を候補に並べ、必修や時間の重なりを一つずつ確認する",
        effects: { universityLife: 2 },
        next: "q1-01-choice-b-001"
      },
      {
        label: "C",
        text: "今学期の必修だけを入れ、興味のある科目はあとで考える",
        effects: { universityLife: 1 },
        next: "q1-01-choice-c-001"
      }
    ]
  }),
  dialogue("Q1-01", "q1-01-choice-a", 1, "履修登録くん", "うん。それなら安心。興味も忘れないでね。", {
    character: characters.rishu.smile,
    next: "q1-01-final-001"
  }),
  dialogue("Q1-01", "q1-01-choice-b", 1, "履修登録くん", "興味から候補を広げるのもいいね。次は条件と無理のない量を確認しよう。", {
    character: characters.rishu.smile
  }),
  dialogue("Q1-01", "q1-01-choice-b", 2, "主人公", "『好き』から始めて、続けられる時間割に整えるんだね。", {
    character: characters.rishu.smile,
    next: "q1-01-final-001"
  }),
  dialogue("Q1-01", "q1-01-choice-c", 1, "履修登録くん", "必修を先に固めるのは堅実。でも、興味のある科目を探す時間も残しておこう。", {
    character: characters.rishu.smile
  }),
  dialogue("Q1-01", "q1-01-choice-c", 2, "主人公", "必修だけで終わらせず、気になる科目も一つ探してみる！", {
    character: characters.rishu.smile,
    next: "q1-01-final-001"
  }),
  dialogue("Q1-01", "q1-01-final", 1, "履修登録くん", "好きな科目と、必要な科目。どちらも並べて考える。", {
    character: characters.rishu.smile
  }),
  dialogue("Q1-01", "q1-01-final", 2, "卒業要件先輩", "条件は、今のうちから少しずつ確認する。", {
    character: characters.graduation.smile
  }),
  dialogue("Q1-01", "q1-01-final", 3, "主人公", "選べるからこそ、自分で確かめるんだね。", {
    character: characters.rishu.smile
  }),
  dialogue("Q1-01", "q1-01-final", 4, "履修登録くん", "そう。大学生活の自由をどう使うかは、君次第。", {
    character: characters.rishu.smile
  }),
  dialogue("Q1-01", "q1-01-final", 5, "主人公", "（自由って、楽なだけじゃない。でも、ちょっと面白いかも。）", {
    character: characters.rishu.smile
  }),
  guide(
    "Q1-01",
    "q1-01-guide",
    "履修は『必要』と『興味』で選ぶ",
    [
      "必修・選択必修・卒業要件を先に確認する",
      "条件を満たす範囲で、興味のある科目を組み合わせる",
      "分からない点は公式案内やCC・AAで確認する"
    ],
    "履修登録期間を確認し、まず今学期の候補を一覧にしよう。",
    "q1-01-clear"
  ),
  scene("Q1-01", {
    id: "q1-01-clear",
    speaker: "SYSTEM",
    text: "Q1-01 CLEAR",
    clear: true,
    next: "q1-02-001"
  }),

  /* Q1-02 / 卒業までの道、見えてる？ */
  q102(1, "履修登録くん", "じゃあ、僕からは一旦ここまで。履修登録の期間だけは忘れないでね。", {
    character: characters.rishu.normal
  }),
  q102(2, "主人公", "はーい！", {
    character: characters.rishu.normal
  }),
  q102(3, "履修登録くん", "……その返事、不安だな。", {
    character: characters.rishu.troubled
  }),
  q102(4, "主人公", "ふぅ。履修登録だけでも、思ったより考えること多いんだなぁ。"),
  q102(5, "卒業要件先輩", "…………。", {
    character: characters.graduation.normal
  }),
  q102(6, "主人公", "あれ、先輩まだいたんですか？", {
    character: characters.graduation.normal
  }),
  q102(7, "卒業要件先輩", "僕の話はまだ終わってない。履修を考えるなら、その先も見ておこう。", {
    character: characters.graduation.normal
  }),
  q102(8, "主人公", "でも卒業って、まだ4年後ですよ？", {
    character: characters.graduation.normal
  }),
  q102(9, "卒業要件先輩", "だから今から見るんだ。", {
    character: characters.graduation.guidance
  }),
  q102(10, "卒業要件先輩", "卒業には124単位以上。しかも、科目区分ごとの条件がある。"),
  q102(11, "主人公", "待って、科目区分の条件まで一気には覚えられない！", {
    character: characters.graduation.guidance
  }),
  q102(12, "卒業要件先輩", "全部暗記しなくていい。", {
    character: characters.graduation.normal
  }),
  q102(13, "卒業要件先輩", "必要なときに、学生便覧やZEN Portalの最新案内を確認できればいい。", {
    character: characters.graduation.normal
  }),
  q102(14, "卒業要件先輩", "今、覚えるのは二つ。卒業要件があること。", {
    character: characters.graduation.normal,
    emphasis: true
  }),
  q102(15, "卒業要件先輩", "そして、4年生へ進むための進級要件があること。", {
    character: characters.graduation.normal,
    emphasis: true
  }),
  q102(16, "卒業要件先輩", "3年生までに90単位。卒業に必要な124単位とは別の目印だ。", {
    character: characters.graduation.normal
  }),
  q102(17, "主人公", "進級と卒業、同じ数字じゃないんだね。", {
    character: characters.graduation.normal
  }),
  q102(18, "卒業要件先輩", "そう。数字だけでなく、修得した科目の区分も見る。", {
    character: characters.graduation.normal
  }),
  q102(19, "卒業要件先輩", "学期の節目に、今の単位と条件を照らして現在地を確認する。", {
    character: characters.graduation.normal
  }),
  q102(20, "主人公", "卒業直前に初めて見るものじゃないんだ。", {
    character: characters.graduation.normal
  }),
  q102(21, "卒業要件先輩", "迷ったら、CCやAAに相談していい。公式の窓口を頼るのも自己管理だよ。", {
    character: characters.graduation.normal
  }),
  q102(22, "主人公", "全部、一人で解かなきゃいけないわけじゃないんだね。", {
    character: characters.graduation.normal
  }),
  q102(23, "卒業要件先輩", "確認して、分からなければ聞く。それでいい。", {
    character: characters.graduation.smile
  }),
  q102(24, "主人公", "（怖そうなのに、ちゃんと最後まで面倒を見てくれそうな先輩だな……。）", {
    character: characters.graduation.smile
  }),
  guide(
    "Q1-02",
    "q1-02-guide",
    "卒業までの現在地は定期的に確認する",
    [
      "卒業には単位数だけでなく科目区分の条件もある",
      "進級要件と卒業要件は分けて確認する",
      "条件は暗記せず、最新版を調べて必要なら相談する"
    ],
    "学期の節目に、修得単位・科目区分・残りの条件を確認しよう。",
    "q1-02-clear"
  ),
  scene("Q1-02", {
    id: "q1-02-clear",
    speaker: "SYSTEM",
    text: "Q1-02 CLEAR",
    clear: true,
    next: "q1-03-001"
  }),

  /* Q1-03 / Slackデビュー！ */
  q103(1, "主人公", "確認して、分からなければ聞く……か。大学って自分で調べることが多いなぁ。"),
  q103(2, "主人公", "ん？ Slackから通知？", {
    notification: notifications.slack,
    se: audio.notification
  }),
  q103(3, "主人公", "そういえば、大学用のSlackがあるんだった。開いてみよ。", {
    notification: notifications.slack
  }),
  q103(4, "主人公", "…………多っ！！", {
    foreground: foregrounds.slackPhone,
    foregroundLayout: "phone"
  }),
  q103(5, "主人公", "大学からのお知らせ、授業、サークル、趣味の話まである……。", {
    foreground: foregrounds.slackPhone,
    foregroundLayout: "phone"
  }),
  q103(6, "主人公", "雑談してるチャンネルまであるんだけど！？", {
    foreground: foregrounds.slackPhone,
    foregroundLayout: "phone"
  }),
  q103(7, "？？？", "そりゃあるでしょ。", {
    foreground: foregrounds.slackPhone,
    foregroundLayout: "phone"
  }),
  q103(8, "主人公", "！？ また出た！", {
    character: characters.slack.normal
  }),
  q103(9, "Slackくん", "Slackって、連絡を見るだけの場所じゃないから。", {
    character: characters.slack.normal
  }),
  q103(10, "主人公", "あなたは……？", {
    character: characters.slack.normal
  }),
  q103(11, "Slackくん", "俺はSlack。", {
    character: characters.slack.normal
  }),
  q103(12, "主人公", "今日こういう人に会うの、もう3人目なんだけど。", {
    character: characters.slack.normal
  }),
  q103(13, "Slackくん", "へえ。大学生活、順調そうじゃん。", {
    character: characters.slack.normal
  }),
  q103(14, "主人公", "どこが！？", {
    character: characters.slack.normal
  }),
  q103(15, "Slackくん", "大学からのお知らせを確認したり、分からないことを質問したり。", {
    character: characters.slack.normal
  }),
  q103(16, "Slackくん", "授業を話し合ったり、サークルや同じ趣味の人とつながったりもできる。", {
    character: characters.slack.normal
  }),
  q103(17, "Slackくん", "自分のtimesを作ってる人もいるよ。", {
    character: characters.slack.normal
  }),
  q103(18, "主人公", "times？", {
    character: characters.slack.normal
  }),
  q103(19, "Slackくん", "自分用のチャンネルみたいなもの。勉強の記録も雑談も、自分のペースで書ける。", {
    character: characters.slack.smile
  }),
  q103(20, "主人公", "オンライン大学でも、ちゃんと人と交流できるんだ。", {
    character: characters.slack.smile
  }),
  q103(21, "主人公", "じゃあ、とりあえず色んなところに書き込んでみよ！", {
    character: characters.slack.smile
  }),
  q103(22, "Slackくん", "待った待った。チャンネルごとに目的が違うから。", {
    character: characters.slack.worried
  }),
  q103(23, "Slackくん", "投稿前にルールと雰囲気を見れば、情報も交流もずっと使いやすい。", {
    character: characters.slack.worried
  }),
  q103(24, "Slackくん", "画面の向こうにも人がいる。通知の使い方と、投稿への責任も忘れないで。", {
    character: characters.slack.worried
  }),
  scene("Q1-03", {
    id: "q1-03-choice",
    speaker: "SYSTEM",
    text: "Slackで最初に気をつけることは？",
    character: characters.slack.worried,
    choices: [
      {
        label: "A",
        text: "チャンネルのルールや雰囲気を確認してから投稿する",
        effects: { informationUse: 2 },
        next: "q1-03-choice-a-001"
      },
      {
        label: "B",
        text: "目についたチャンネルで、すぐ質問する",
        effects: { informationUse: 1 },
        next: "q1-03-choice-b-001"
      },
      {
        label: "C",
        text: "検索して質問を整理し、目的に合うチャンネルで投稿する",
        effects: { informationUse: 3 },
        next: "q1-03-choice-c-001"
      }
    ]
  }),
  dialogue("Q1-03", "q1-03-choice-a", 1, "Slackくん", "いいね。最初にちょっと見るだけで、だいぶ安心。", {
    character: characters.slack.smile
  }),
  dialogue("Q1-03", "q1-03-choice-a", 2, "主人公", "まず読む。それから参加する！", {
    character: characters.slack.smile,
    next: "q1-03-final-001"
  }),
  dialogue("Q1-03", "q1-03-choice-b", 1, "Slackくん", "質問する前に、そのチャンネルの説明とピン留めも見てみよう。", {
    character: characters.slack.smile
  }),
  dialogue("Q1-03", "q1-03-choice-b", 2, "Slackくん", "同じ質問が見つかったり、もっと合う相談先が分かったりするよ。", {
    character: characters.slack.smile
  }),
  dialogue("Q1-03", "q1-03-choice-b", 3, "主人公", "まず検索して、質問する場所を確かめるね。", {
    character: characters.slack.smile,
    next: "q1-03-final-001"
  }),
  dialogue("Q1-03", "q1-03-choice-c", 1, "Slackくん", "検索して、質問を整理して、投稿先まで確認。ばっちり。", {
    character: characters.slack.smile
  }),
  dialogue("Q1-03", "q1-03-choice-c", 2, "Slackくん", "相手にも伝わりやすいし、必要な答えへ早くたどり着けるよ。", {
    character: characters.slack.smile
  }),
  dialogue("Q1-03", "q1-03-choice-c", 3, "主人公", "読んだ人が答えやすい形にして、合う場所で聞いてみる！", {
    character: characters.slack.smile,
    next: "q1-03-final-001"
  }),
  dialogue("Q1-03", "q1-03-final", 1, "主人公", "Slackは、情報を見る場所でも、人とつながる場所でもある。", {
    character: characters.slack.smile
  }),
  dialogue("Q1-03", "q1-03-final", 2, "主人公", "まず大事なお知らせを確認して。", {
    character: characters.slack.smile
  }),
  dialogue("Q1-03", "q1-03-final", 3, "主人公", "質問するときは、合うチャンネルや窓口を探す。", {
    character: characters.slack.smile
  }),
  dialogue("Q1-03", "q1-03-final", 4, "Slackくん", "いいね。最初は一つ、気になる場所を覗くところからで十分。", {
    character: characters.slack.smile
  }),
  dialogue("Q1-03", "q1-03-final", 5, "Slackくん", "あとは、Slackを見る習慣をつけな。", {
    character: characters.slack.wink
  }),
  dialogue("Q1-03", "q1-03-final", 6, "主人公", "はーい！", {
    character: characters.slack.wink
  }),
  dialogue("Q1-03", "q1-03-final", 7, "Slackくん", "さっき履修登録にも同じ返事してなかった？", {
    character: characters.slack.wink
  }),
  dialogue("Q1-03", "q1-03-final", 8, "主人公", "なんで知ってんの！？", {
    character: characters.slack.wink
  }),
  dialogue("Q1-03", "q1-03-final", 9, "Slackくん", "情報通なんで。", {
    character: characters.slack.wink
  }),
  guide(
    "Q1-03",
    "q1-03-guide",
    "Slackは情報収集と交流の入口",
    [
      "重要なお知らせを定期的に確認する",
      "チャンネルの目的・ルール・雰囲気を読んでから参加する",
      "相手と通知範囲を意識して投稿する"
    ],
    "重要チャンネルを確認し、気になる交流先を一つ見つけよう。",
    "q1-03-clear"
  ),
  scene("Q1-03", {
    id: "q1-03-clear",
    speaker: "SYSTEM",
    text: "Q1-03 CLEAR！",
    clear: true,
    next: "q1-04-time-passage"
  }),

  /* Q1-04 / 展軸祭のお知らせ！ */
  passage(
    "Q1-04",
    "q1-04-time-passage",
    "数週間後",
    "自室・昼",
    "q1-04-001",
    { label: "TIME PASSES" }
  ),
  q104(1, "主人公", "ZEN大学にも、だいぶ慣れてきたかも。授業を見て、Slackも確認して……。"),
  q104(2, "主人公", "ん？ 『展軸祭』のお知らせ？", {
    notification: notifications.slack,
    se: audio.notification
  }),
  q104(3, "主人公", "オンライン企画、リアル会場……これって何のイベント？", {
    foreground: foregrounds.slackPhone,
    foregroundLayout: "phone"
  }),
  q104(4, "Slackくん", "お、見つけた？ 大学祭だよ。", {
    character: characters.slack.normal
  }),
  q104(5, "主人公", "ZEN大学って学園祭あるの！？", {
    character: characters.slack.normal
  }),
  q104(6, "Slackくん", "あるよ。オンラインで楽しめる企画も、リアル会場もある。", {
    character: characters.slack.wink
  }),
  q104(7, "主人公", "現地も！？ オンライン大学だから、そういうのないと思ってた。", {
    character: characters.slack.wink
  }),
  q104(8, "Slackくん", "参加の仕方を選べるのも、オンライン大学のいいところでしょ。", {
    character: characters.slack.wink
  }),
  q104(9, "主人公", "オンラインで覗くのも楽しそう。でも、今回は現地に行ってみようかな。", {
    character: characters.slack.smile
  }),
  q104(10, "Slackくん", "いいじゃん。行ってみよ。", {
    character: characters.slack.smile
  }),
  q104Festival(11, "主人公", "…………人いる……。", {
    caption: "展軸祭当日／リアル会場"
  }),
  q104Festival(12, "Slackくん", "いるよ。", {
    character: characters.slack.normal
  }),
  q104Festival(13, "主人公", "オンラインでしか会ったことない人たちが、普通に歩いてる……！", {
    character: characters.slack.normal
  }),
  scene("Q1-04", {
    id: "q1-04-festival-reality",
    speaker: "Slackくん",
    text: "そりゃ、みんな歩いてるよ。同じ大学の仲間たちのこと、何だと思ってたの？",
    character: characters.slack.normal
  }, backgrounds.festival),
  q104Festival(14, "主人公", "もっとこう、みんな概念みたいな……。", {
    character: characters.slack.normal
  }),
  q104Festival(15, "Slackくん", "失礼すぎる。", {
    character: characters.slack.worried
  }),
  q104Festival(16, "主人公", "ステージもブースもいっぱい。普通に大学祭だ！", {
    character: characters.slack.worried
  }),
  q104Festival(17, "Slackくん", "だから最初からそう言ってるって。", {
    character: characters.slack.wink
  }),
  q104Festival(18, "主人公", "オンライン参加もいいけど、実際に来ると空気まで分かって楽しいね。", {
    character: characters.slack.wink
  }),
  q104Festival(19, "主人公", "……あれ？ あのオレンジのパーカー、見覚えが……。", {
    character: characters.tsuno.back,
    characterLayout: "full-body"
  }),
  q104Festival(20, "主人公", "あっ！ 授業で見た先生！！", {
    character: characters.tsuno.front,
    characterLayout: "full-body"
  }),
  q104Festival(21, "津野先生", "こんにちは。", {
    character: characters.tsuno.front,
    characterLayout: "full-body"
  }),
  q104Festival(22, "主人公", "本人いた！！！", {
    character: characters.tsuno.front,
    characterLayout: "full-body"
  }),
  q104Festival(23, "Slackくん", "画面の中に住んでるわけじゃないからね。", {
    character: characters.tsuno.front,
    characterLayout: "full-body"
  }),
  q104Festival(24, "主人公", "分かってるって！！", {
    character: characters.tsuno.front,
    characterLayout: "full-body"
  }),
  q104Festival(25, "主人公", "オンライン大学って、一人で完結すると思ってた。でも、会える場所もあるんだ。"),
  q104Festival(26, "Slackくん", "大学生活って、授業だけじゃないから。", {
    character: characters.slack.smile
  }),
  q104Festival(27, "Slackくん", "やっと気づいた？", {
    character: characters.slack.wink
  }),
  guide(
    "Q1-04",
    "q1-04-guide",
    "イベントは自分に合う参加方法を選べる",
    [
      "大学祭にはオンライン企画とリアル会場がある",
      "情報を見て、場所・日時・参加方法を確認する",
      "参加するなら、無理のない方法を自分で選ぶ"
    ],
    "気になる企画を一つ保存し、参加方法を確認してみよう。",
    "q1-04-clear",
    { background: backgrounds.festival }
  ),
  scene("Q1-04", {
    id: "q1-04-clear",
    speaker: "SYSTEM",
    text: "Q1-04 CLEAR！",
    clear: true,
    next: "q1-05-time-passage"
  }, backgrounds.festival),

  /* Q1-05 / 授業だけが大学生活じゃない？ */
  passage(
    "Q1-05",
    "q1-05-time-passage",
    "展軸祭の数日後",
    "自室・昼",
    "q1-05-001",
    { label: "A FEW DAYS LATER" }
  ),
  q105(1, "主人公", "展軸祭、楽しかったなぁ。"),
  q105(2, "主人公", "サークルや企画を作ってる人もいたし、授業以外にも色んな過ごし方があるんだ。"),
  q105(3, "主人公", "私も何かやってみようかな。"),
  q105(4, "？？？", "いいじゃん。"),
  q105(5, "主人公", "また知らない人！", {
    character: characters.gakuchika.normal
  }),
  q105(6, "ガクチカくん", "俺、ガクチカ。", {
    character: characters.gakuchika.normal
  }),
  q105(7, "主人公", "『学生時代に力を入れたこと』の？", {
    character: characters.gakuchika.normal
  }),
  q105(8, "主人公", "でも私、そんなすごいことできる気がしないよ？", {
    character: characters.gakuchika.normal
  }),
  q105(9, "ガクチカくん", "別に、最初からすごいことでなくていいじゃん。", {
    character: characters.gakuchika.smile
  }),
  q105(10, "ガクチカくん", "イベントを覗く、誰かと作る、知らない分野を知る。小さく試せばいい。", {
    character: characters.gakuchika.smile
  }),
  q105(11, "主人公", "そのくらいでもいいの？", {
    character: characters.gakuchika.smile
  }),
  q105(12, "ガクチカくん", "大事なのは大きさより、なぜ動いて、何を感じたか。", {
    character: characters.gakuchika.smile
  }),
  q105(13, "ガクチカくん", "大学では、自由な時間を何に使うかも君が選べる。", {
    character: characters.gakuchika.smile
  }),
  q105(14, "主人公", "『すごいガクチカを作らなきゃ』って力まなくていいんだ。", {
    character: characters.gakuchika.smile
  }),
  q105(15, "ガクチカくん", "そう。で、今なにか気になることある？", {
    character: characters.gakuchika.grin
  }),
  q105(16, "主人公", "うーん……まだ分かんない！", {
    character: characters.gakuchika.grin
  }),
  scene("Q1-05", {
    id: "q1-05-activity-search-question",
    speaker: "主人公",
    text: "そもそも、気になった募集ってどこから探すの？",
    character: characters.gakuchika.grin
  }),
  q105(17, "ガクチカくん", "SlackやZEN Portalのお知らせを見てみな。学生同士の交流会や、サークルの体験企画もある。", {
    character: characters.gakuchika.grin
  }),
  scene("Q1-05", {
    id: "q1-05-activity-save-advice",
    speaker: "ガクチカくん",
    text: "まずは一つ保存して、内容と日程を見てから決めればいい。",
    character: characters.gakuchika.grin
  }),
  q105(18, "主人公", "保存なら今できる。参加するかは、内容と予定を見て決めよう。", {
    character: characters.gakuchika.grin
  }),
  q105(19, "主人公", "（何を経験するかも、自分で選べるんだ。）", {
    character: characters.gakuchika.grin
  }),
  guide(
    "Q1-05",
    "q1-05-guide",
    "経験は小さな興味から始める",
    [
      "立派な実績を最初から作る必要はない",
      "気になる活動の内容と予定を確認する",
      "参加したら、動いた理由と気づきを残す"
    ],
    "気になる活動を一つ保存し、参加を検討する日を決めよう。",
    "q1-05-clear"
  ),
  scene("Q1-05", {
    id: "q1-05-clear",
    speaker: "SYSTEM",
    text: "Q1-05 CLEAR！",
    clear: true,
    next: "q1-06-time-passage"
  }),

  /* Q1-06 / はじめまして、確認レポートくん */
  passage(
    "Q1-06",
    "q1-06-time-passage",
    "1Q中盤",
    "自室・昼",
    "q1-06-001",
    { label: "MID QUARTER" }
  ),
  q106(1, "主人公", "よし、今日の授業も終わり！ 次は……確認レポート？"),
  q106(2, "主人公", "第1回締切は5月6日。でも最終締切は6月7日か。", {
    foreground: foregrounds.reportDeadline,
    foregroundLayout: "phone"
  }),
  q106(3, "主人公", "じゃあ、6月7日までにまとめて出せば余裕じゃん！", {
    foreground: foregrounds.reportDeadline,
    foregroundLayout: "phone"
  }),
  q106(4, "？？？", "その考え方、やめた方がいい。", {
    foreground: foregrounds.reportDeadline,
    foregroundLayout: "phone"
  }),
  q106(5, "主人公", "また知らない人！", {
    character: characters.report.normal
  }),
  q106(6, "確認レポートくん", "確認レポート。", {
    character: characters.report.normal
  }),
  q106(7, "主人公", "名前からして締切に厳しそう……。", {
    character: characters.report.normal
  }),
  q106(8, "確認レポートくん", "実際、厳しい。オンデマンド科目では、基本的に各授業回ごとに提出する。", {
    character: characters.report.serious
  }),
  q106(9, "主人公", "毎回！？", {
    character: characters.report.serious
  }),
  q106(10, "確認レポートくん", "2026年度1Qは、5回分ずつ三つの締切が設定されている。", {
    deadlineSchedule: schedules.reportDeadlines
  }),
  q106(11, "主人公", "5月6日、5月21日、最後が6月7日……三段階なんだ。", {
    character: characters.report.serious
  }),
  q106(12, "確認レポートくん", "途中締切を過ぎた分も、最終締切までは提出できる。", {
    character: characters.report.serious
  }),
  q106(13, "確認レポートくん", "ただし、間に合わなかった分は3分の1減点。", {
    character: characters.report.serious,
    emphasis: true
  }),
  q106(14, "主人公", "3分の1！？", {
    character: characters.report.serious
  }),
  q106(15, "確認レポートくん", "だから途中の締切にも意味がある。", {
    character: characters.report.serious
  }),
  q106(16, "確認レポートくん", "しかも最終締切までに、必要な確認レポートや課題を全部出せなければ――", {
    character: characters.report.serious
  }),
  q106(17, "確認レポートくん", "単位認定試験は受けられない。", {
    character: characters.report.serious,
    emphasis: true
  }),
  q106(18, "主人公", "ってことは、その科目の単位も取れない……。重っ！", {
    character: characters.report.serious
  }),
  q106(19, "主人公", "試験で頑張る以前の問題じゃん。", {
    character: characters.report.serious
  }),
  q106(20, "確認レポートくん", "確認レポートは、単位を取るまでの道の途中にある。", {
    character: characters.report.serious
  }),
  q106(21, "確認レポートくん", "提出できる回は前倒しできる。できる分から進めて。", {
    character: characters.report.serious
  }),
  q106(22, "確認レポートくん", "締切前後はアクセスが集中し、ZEN Studyにつながりにくいこともある。", {
    character: characters.report.serious
  }),
  q106(23, "確認レポートくん", "未来の自分に任せすぎないこと。", {
    character: characters.report.serious
  }),
  q106(24, "主人公", "じゃあ、どう予定を立てればいい？", {
    character: characters.report.serious
  }),
  q106(25, "確認レポートくん", "まず、科目ごとの締切と残っている回数を一覧にする。", {
    character: characters.report.serious
  }),
  q106(26, "確認レポートくん", "次に、自分の予定を見て、作業を日ごとに分ける。", {
    character: characters.report.serious
  }),
  q106(27, "主人公", "締切と作業日をカレンダーに入れれば、忘れにくいね。", {
    character: characters.report.serious
  }),
  q106(28, "確認レポートくん", "分からない条件があれば公式案内を確認。難しければCCやAAにも相談する。", {
    character: characters.report.serious
  }),
  q106(29, "主人公", "全部抱えるんじゃなくて、確認して助けも借りるんだ。", {
    character: characters.report.serious
  }),
  q106(30, "確認レポートくん", "で。君は今からどうする？", {
    character: characters.report.serious
  }),
  scene("Q1-06", {
    id: "q1-06-choice",
    speaker: "SYSTEM",
    text: "確認レポート、どう進める？",
    character: characters.report.serious,
    choices: [
      {
        label: "A",
        text: "締切当日に、残っている分をまとめて進める",
        effects: { selfManagement: 1 },
        next: "q1-06-choice-a-001"
      },
      {
        label: "B",
        text: "締切ごとに集中する日を決め、前日までにまとめて終える",
        effects: { selfManagement: 3 },
        next: "q1-06-choice-b-001"
      },
      {
        label: "C",
        text: "残り回数と予定を一覧にし、難しいところはCCやAAに相談する",
        effects: { selfManagement: 2 },
        next: "q1-06-choice-c-001"
      }
    ]
  }),
  dialogue("Q1-06", "q1-06-choice-a", 1, "確認レポートくん", "締切当日に全部残すと、見直しや通信トラブルへ対応できない。", {
    character: characters.report.normal
  }),
  dialogue("Q1-06", "q1-06-choice-a", 2, "主人公", "そっか。今日から一回分だけでも始めよう。", {
    character: characters.report.normal
  }),
  dialogue("Q1-06", "q1-06-choice-a", 3, "確認レポートくん", "締切日は提出済みか確認する日にできると安心だよ。", {
    character: characters.report.normal,
    next: "q1-06-final-001"
  }),
  dialogue("Q1-06", "q1-06-choice-b", 1, "確認レポートくん", "まとまった時間に集中する方法だね。", {
    character: characters.report.normal
  }),
  dialogue("Q1-06", "q1-06-choice-b", 2, "確認レポートくん", "提出日一日に集めず、確認や通信トラブルのための予備日も残して。", {
    character: characters.report.normal
  }),
  dialogue("Q1-06", "q1-06-choice-b", 3, "主人公", "各締切の前日までに終える日を決めて、最後は見直し日にする！", {
    character: characters.report.normal,
    next: "q1-06-final-001"
  }),
  dialogue("Q1-06", "q1-06-choice-c", 1, "確認レポートくん", "状況を見える化してから相談する。それも計画の一つ。", {
    character: characters.report.normal
  }),
  dialogue("Q1-06", "q1-06-choice-c", 2, "主人公", "抱えたままにせず、何が難しいか整理して聞いてみる。", {
    character: characters.report.normal
  }),
  dialogue("Q1-06", "q1-06-choice-c", 3, "確認レポートくん", "うん。相談を待つ間にも、今日できる一回分は進められる。", {
    character: characters.report.normal,
    next: "q1-06-final-001"
  }),
  dialogue("Q1-06", "q1-06-final", 1, "確認レポートくん", "授業を見るところから、もう単位取得は始まってる。", {
    character: characters.report.normal
  }),
  dialogue("Q1-06", "q1-06-final", 2, "主人公", "まず、今日できる一回分を終わらせる。", {
    character: characters.report.normal
  }),
  dialogue("Q1-06", "q1-06-final", 3, "主人公", "それから次の締切と作業日を、カレンダーに登録！", {
    character: characters.report.normal
  }),
  dialogue("Q1-06", "q1-06-final", 4, "確認レポートくん", "……分かってるじゃん。", {
    character: characters.report.normal
  }),
  dialogue("Q1-06", "q1-06-final", 5, "主人公", "厳しいけど、ちゃんと進め方も教えてくれるんだね。", {
    character: characters.report.normal
  }),
  dialogue("Q1-06", "q1-06-final", 6, "確認レポートくん", "厳しいんじゃなくて、事実を言ってるだけ。", {
    character: characters.report.normal
  }),
  guide(
    "Q1-06",
    "q1-06-guide",
    "確認レポートは締切から逆算する",
    [
      "途中締切を過ぎた分は3分の1減点になる",
      "必要な提出が最終締切に間に合わないと試験を受けられない",
      "残り回数と予定を並べ、前倒しで進める"
    ],
    "締切と残り回数を確認し、今日やる一回分を決めよう。",
    "q1-06-clear"
  ),
  scene("Q1-06", {
    id: "q1-06-clear",
    speaker: "SYSTEM",
    text: "Q1-06 CLEAR！",
    clear: true,
    next: "q1-07-time-passage"
  }),

  /* Q1-07 / 試験日程が公開されました */
  passage(
    "Q1-07",
    "q1-07-time-passage",
    "1Q後半",
    "自室・昼",
    "q1-07-001",
    { label: "LATE QUARTER" }
  ),
  q107(1, "主人公", "ん？ 単位認定試験の日程が公開された！", {
    notification: notifications.examSchedule,
    se: audio.notification
  }),
  q107(2, "主人公", "もう私の受験日時が表示されてる。", {
    deadlineSchedule: schedules.examAssigned
  }),
  q107(3, "主人公", "じゃあ、その日に受ければいいのね。"),
  q107(4, "？？？", "予定は？"),
  q107(5, "主人公", "また知らない人来た！", {
    character: characters.exam.normal
  }),
  q107(6, "単位認定試験くん", "単位認定試験。", {
    character: characters.exam.normal
  }),
  q107(7, "単位認定試験くん", "その日、空いてる？", {
    character: characters.exam.normal
  }),
  q107(8, "主人公", "……まだ自分の予定を見てない。", {
    character: characters.exam.normal
  }),
  q107(9, "単位認定試験くん", "今、確認して。", {
    character: characters.exam.normal
  }),
  q107(10, "主人公", "でも、表示された日時で受けるしかないんでしょ？", {
    character: characters.exam.normal
  }),
  q107(11, "単位認定試験くん", "各科目、候補日時は三つ。", {
    character: characters.exam.normal,
    emphasis: true
  }),
  q107(12, "単位認定試験くん", "その中から一つが、最初にランダムで割り当てられる。", {
    character: characters.exam.normal
  }),
  q107(13, "主人公", "じゃあ、この日時が絶対ってわけじゃないんだ。", {
    character: characters.exam.normal
  }),
  q107(14, "単位認定試験くん", "予定が合えばそのまま。合わなければ、残り二つから選ぶ。", {
    character: characters.exam.normal,
    emphasis: true
  }),
  q107(15, "単位認定試験くん", "変更はZEN Portalから申請できる。", {
    character: characters.exam.normal
  }),
  q107(16, "主人公", "だったら、試験が近くなってから確認しても――", {
    character: characters.exam.normal
  }),
  q107(17, "単位認定試験くん", "今見て。", {
    character: characters.exam.normal
  }),
  q107(18, "主人公", "食い気味！", {
    character: characters.exam.normal
  }),
  q107(19, "単位認定試験くん", "バイト、私用、他の試験。重なってから気づくと困る。", {
    character: characters.exam.worried
  }),
  q107(20, "単位認定試験くん", "公開されたら、まず日程を確認する。", {
    character: characters.exam.worried
  }),
  q107(21, "単位認定試験くん", "自分の予定と照らし、必要なら早めに変更する。", {
    character: characters.exam.worried
  }),
  q107(22, "主人公", "手順が分からなければ、公式案内やCC・AAにも確認すればいいんだね。", {
    character: characters.exam.normal
  }),
  q107(23, "単位認定試験くん", "そう。で、今届いた日程をどうする？", {
    character: characters.exam.normal
  }),
  scene("Q1-07", {
    id: "q1-07-choice",
    speaker: "SYSTEM",
    text: "試験日程が届いた！どうする？",
    character: characters.exam.normal,
    choices: [
      {
        label: "A",
        text: "通知だけ確認し、予定への登録はあとで行う",
        effects: { informationUse: 1 },
        next: "q1-07-choice-a-001"
      },
      {
        label: "B",
        text: "全科目の日時を一覧にし、今日まとめて予定と照らし合わせる",
        effects: { informationUse: 2 },
        next: "q1-07-choice-b-001"
      },
      {
        label: "C",
        text: "割り当て日時と残りの候補、変更方法まで確認する",
        effects: { informationUse: 3 },
        next: "q1-07-choice-c-001"
      }
    ]
  }),
  dialogue("Q1-07", "q1-07-choice-a", 1, "主人公", "日時は見たし、予定への登録はあとでいいかな。", {
    character: characters.exam.smile
  }),
  dialogue("Q1-07", "q1-07-choice-a", 2, "単位認定試験くん", "見ただけだと忘れやすい。今、カレンダーとも照らし合わせよう。", {
    character: characters.exam.smile
  }),
  dialogue("Q1-07", "q1-07-choice-a", 3, "主人公", "通知を閉じる前に、予定まで確認しておく！", {
    character: characters.exam.smile,
    next: "q1-07-final-001"
  }),
  dialogue("Q1-07", "q1-07-choice-b", 1, "単位認定試験くん", "全科目を一覧にするのはいい。見落としを減らせる。", {
    character: characters.exam.smile
  }),
  dialogue("Q1-07", "q1-07-choice-b", 2, "主人公", "一科目ずつ確認するより、重なりも見つけやすそう。", {
    character: characters.exam.smile
  }),
  dialogue("Q1-07", "q1-07-choice-b", 3, "単位認定試験くん", "一覧を作るだけで終わらず、今日のうちに予定との照合まで済ませて。", {
    character: characters.exam.smile,
    next: "q1-07-final-001"
  }),
  dialogue("Q1-07", "q1-07-choice-c", 1, "単位認定試験くん", "割り当て日時だけでなく、残りの候補と変更方法まで確認できたね。", {
    character: characters.exam.smile
  }),
  dialogue("Q1-07", "q1-07-choice-c", 2, "主人公", "残り二つから空いている日時を選べば、すぐ解決できるね。", {
    character: characters.exam.smile
  }),
  dialogue("Q1-07", "q1-07-choice-c", 3, "単位認定試験くん", "変更後に、ほかの科目も含めて日時をもう一度確認して。", {
    character: characters.exam.smile,
    next: "q1-07-final-001"
  }),
  dialogue("Q1-07", "q1-07-final", 1, "主人公", "あっ。割り当てられた日時、バイトと重なってる！"),
  dialogue("Q1-07", "q1-07-final", 2, "主人公", "候補日時2なら空いてる。これを選べばいいんだね。"),
  dialogue("Q1-07", "q1-07-final", 3, "主人公", "ZEN Portalから、日程変更を申請……。"),
  dialogue("Q1-07", "q1-07-final", 4, "主人公", "変更完了！ カレンダーにも登録した。"),
  dialogue("Q1-07", "q1-07-final", 5, "単位認定試験くん", "それでいい。", {
    character: characters.exam.smile
  }),
  dialogue("Q1-07", "q1-07-final", 6, "主人公", "日程を見る。予定と照らす。必要なら変更して、記録する。", {
    character: characters.exam.smile
  }),
  dialogue("Q1-07", "q1-07-final", 7, "単位認定試験くん", "……分かってる。", {
    character: characters.exam.smile
  }),
  dialogue("Q1-07", "q1-07-final", 8, "主人公", "ここでも自己管理！ 大学の自由、油断できないなぁ。", {
    character: characters.exam.smile
  }),
  guide(
    "Q1-07",
    "q1-07-guide",
    "試験日程は公開されたらすぐ確認する",
    [
      "各科目に候補日時が三つあり、一つが最初にランダムで割り当てられる",
      "割り当て日時と自分の予定を照らし合わせる",
      "合わなければ残りの候補から選び、ZEN Portalで変更する"
    ],
    "確定した受験日時をカレンダーに登録しよう。",
    "q1-07-clear"
  ),
  scene("Q1-07", {
    id: "q1-07-clear",
    speaker: "SYSTEM",
    text: "Q1-07 CLEAR！",
    clear: true,
    next: "q1-08-time-passage"
  }),

  /* Q1-08 / 初めての単位認定試験 */
  passage(
    "Q1-08",
    "q1-08-time-passage",
    "1Q末",
    "単位認定試験・前日",
    "q1-08-001",
    { label: "END OF QUARTER" }
  ),
  q108(1, "主人公", "明日は、初めての単位認定試験……。"),
  q108(2, "主人公", "受験日時は確認した。勉強も一応した。"),
  q108(3, "主人公", "でも心配〜〜〜！！"),
  q108(4, "？？？", "何が？"),
  q108(5, "主人公", "単位認定試験くん！", {
    character: characters.exam.normal
  }),
  q108(6, "単位認定試験くん", "明日の準備は？", {
    character: characters.exam.normal
  }),
  q108(7, "主人公", "勉強なら――", {
    character: characters.exam.normal
  }),
  q108(8, "単位認定試験くん", "受験環境も確認して。", {
    character: characters.exam.normal
  }),
  q108(9, "主人公", "PCと通信、カメラとマイク、スマートフォン……チェック項目がある。", {
    deadlineSchedule: schedules.examPreparation
  }),
  q108(10, "単位認定試験くん", "実際に受験するPCと通信環境で、事前の動作確認をする。", {
    character: characters.exam.normal
  }),
  q108(11, "単位認定試験くん", "Webカメラとマイクも、正しく動くか確認。", {
    character: characters.exam.normal
  }),
  q108(12, "単位認定試験くん", "PCに加えて、スマートフォンかタブレットのカメラも準備する。", {
    character: characters.exam.normal
  }),
  q108(13, "主人公", "思ってたより本格的……！", {
    character: characters.exam.normal
  }),
  q108(14, "単位認定試験くん", "机の上と周囲も、案内された受験環境に整える。", {
    character: characters.exam.normal
  }),
  q108(15, "主人公", "計算やメモをしたくなったら、どうするの？", {
    character: characters.exam.normal
  }),
  q108(16, "単位認定試験くん", "白紙と筆記用具。", {
    character: characters.exam.normal
  }),
  q108(17, "単位認定試験くん", "2026年度は全授業科目共通で、白紙は30枚まで。筆記用具は持ち込み可。", {
    character: characters.exam.normal,
    emphasis: true
  }),
  q108(18, "主人公", "30枚！ 必要な分だけ用意しておこう。", {
    character: characters.exam.normal
  }),
  q108(19, "単位認定試験くん", "ほかの持ち込みや受験ルールも、学生便覧やZEN Portalの最新案内で確認する。", {
    character: characters.exam.normal
  }),
  q108(20, "主人公", "受験日時、PC、通信、カメラとマイク、スマホ、机、白紙と筆記用具。", {
    character: characters.exam.normal
  }),
  q108(21, "単位認定試験くん", "そこまで準備できれば、かなり安心。", {
    character: characters.exam.smile
  }),
  q108(22, "主人公", "『かなり』！？ あとは勉強かぁ……。", {
    character: characters.exam.smile
  }),
  q108(23, "Slackくん", "一人で煮詰まってるなら、Slackも見た？", {
    character: characters.slack.smile
  }),
  q108(24, "主人公", "試験勉強にも使えるの？", {
    character: characters.slack.smile
  }),
  q108(25, "Slackくん", "授業内容を話し合ったり、学びを深めたりするチャンネルもあるよ。", {
    character: characters.slack.smile
  }),
  q108(26, "Slackくん", "学生同士で自作問題を出し合ったり、授業を復習したりもできる。", {
    character: characters.slack.smile
  }),
  q108(27, "Slackくん", "ただし、実際に出た試験問題や解答を共有するのはダメ。ルールの範囲でね。", {
    character: characters.slack.worried
  }),
  q108(28, "主人公", "自作問題と授業の復習なら、オンラインでも一緒に勉強できるんだ。", {
    character: characters.slack.smile
  }),
  q108(29, "単位認定試験くん", "本番は自分で受けるけど。", {
    character: characters.exam.normal
  }),
  q108(30, "主人公", "今ちょっと安心したところだったのに！", {
    character: characters.exam.normal,
    next: "q1-08-exam-day"
  }),
  passage(
    "Q1-08",
    "q1-08-exam-day",
    "受験当日",
    "単位認定試験・開始前",
    "q1-08-031",
    { label: "EXAM DAY" }
  ),
  q108(31, "主人公", "受験日時、機器、机、白紙と筆記用具。準備OK。"),
  q108(32, "主人公", "最新の受験ルールも、もう一度確認した。"),
  q108(33, "主人公", "……それでも緊張する。"),
  q108(34, "単位認定試験くん", "準備したから。", {
    character: characters.exam.smile
  }),
  q108(35, "主人公", "準備しても、不安がゼロになるわけじゃないんだね。", {
    character: characters.exam.smile
  }),
  q108(36, "単位認定試験くん", "ゼロにしなくていい。落ち着いて、案内どおりに進めて。", {
    character: characters.exam.smile
  }),
  q108(37, "主人公", "深呼吸して……よし。", {
    character: characters.exam.smile
  }),
  q108(38, "主人公", "行ってきます！", {
    character: characters.exam.smile,
    next: "q1-08-after-exam"
  }),
  passage(
    "Q1-08",
    "q1-08-after-exam",
    "試験終了後",
    "少しして",
    "q1-08-039",
    { label: "AFTER THE EXAM" }
  ),
  q108(39, "主人公", "――終わったああああ！！ 初めての単位認定試験、終了！"),
  q108(40, "主人公", "緊張したけど、機器や机で慌てずに済んだ。準備しておいてよかった。"),
  q108(41, "Slackくん", "おつかれ！", {
    character: characters.slack.smile
  }),
  q108(42, "単位認定試験くん", "事前に確認して、自分で準備した結果。", {
    character: characters.exam.smile
  }),
  q108(43, "単位認定試験くん", "ただし、今日覚えたルールがずっと同じとは限らない。", {
    character: characters.exam.normal
  }),
  q108(44, "単位認定試験くん", "次に受けるときも、学生便覧やZEN Portalで最新情報を確認して。", {
    character: characters.exam.normal,
    emphasis: true
  }),
  q108(45, "Slackくん", "分からないことは、CCやAA、公式窓口に聞けばいいしね。", {
    character: characters.slack.smile
  }),
  q108(46, "主人公", "自分で確認して、分からなければちゃんと頼る。", {
    character: characters.exam.smile
  }),
  q108(47, "主人公", "履修登録も、Slackも、確認レポートも、試験も。全部やり方は違うけど――", {
    character: characters.exam.smile
  }),
  q108(48, "主人公", "自分で選んで、確かめて、動くことには少し慣れてきたかも。", {
    character: characters.exam.smile
  }),
  guide(
    "Q1-08",
    "q1-08-guide",
    "試験は学習と受験環境の両方を準備する",
    [
      "PC・通信・Webカメラ・マイクを事前に動作確認する",
      "スマートフォンまたはタブレット、机上、許可された持ち物を準備する",
      "2026年度は白紙30枚までと筆記用具を使用できる",
      "受験ごとに最新案内を確認し、分からなければ相談する"
    ],
    "試験前チェックをカレンダーに入れ、前日までに完了しよう。",
    "q1-08-clear"
  ),
  scene("Q1-08", {
    id: "q1-08-clear",
    speaker: "SYSTEM",
    text: "Q1-08 CLEAR！",
    clear: true,
    quarterEnd: {
      nextQuarter: 2,
      target: "q2-start"
    }
  })
// Q1-03は、Slackくんが横へ伸ばしたスマホまで画面内に収める。
].map((current) => current.chapter === "Q1-03" && current.character
  ? { ...current, characterLayout: "contain" }
  : current);
