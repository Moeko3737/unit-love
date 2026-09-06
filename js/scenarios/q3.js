import {
  audio,
  backgrounds,
  characters,
  foregrounds,
  guide,
  notifications,
  passage,
  scene,
  schedules
} from "./shared.js";

const room = (chapter, data) => scene(chapter, data);
const night = (chapter, data) => scene(chapter, data, backgrounds.night);

const q301 = (data) => room("Q3-01", data);
const q302 = (data) => room("Q3-02", data);
const q303 = (data) => night("Q3-03", data);
const q304 = (data) => room("Q3-04", data);
const q305 = (data) => room("Q3-05", data);

export const q3Scenario = [
  /* Q3-01：今の興味と、少し先の学びをつなげて履修を考える。 */
  passage("Q3-01", "q3-start", "3Q START", "3Q序盤・自室／昼", "q3-01-001", {
    label: "NEXT QUARTER"
  }),
  q301({ id: "q3-01-001", speaker: "主人公", text: "今日から3Q！\n3Qと4Qの履修も、今度こそ一人で組めるはず。" }),
  q301({ id: "q3-01-007", speaker: "？？？", text: "ちょっと待って。" }),
  q301({ id: "q3-01-009", speaker: "主人公", text: "半年ぶりの、その台詞！", character: characters.rishu.normal }),
  q301({ id: "q3-01-013", speaker: "履修登録くん", text: "今回は、興味のある科目だけで決めないよね？", character: characters.rishu.normal }),
  q301({ id: "q3-01-017", speaker: "履修登録くん", text: "まず確認するのは？", character: characters.rishu.normal }),
  q301({ id: "q3-01-018", speaker: "主人公", text: "必修と選択必修。それから、授業が重ならないか！", character: characters.rishu.smile }),
  q301({ id: "q3-01-029", speaker: "履修登録くん", text: "もう一つ。来年以降に学びたい科目も少し見てみて。", character: characters.rishu.normal }),
  q301({ id: "q3-01-033", speaker: "履修登録くん", text: "科目によっては、先に学んでおきたい前提科目があるから。", character: characters.rishu.normal }),
  q301({ id: "q3-01-041", speaker: "主人公", text: "今の時間割だけじゃなく、少し先まで見るんだ。", character: characters.rishu.normal }),
  q301({
    id: "q3-01-choice",
    speaker: "SYSTEM",
    text: "3Q・4Qの履修を、どこから組み立てる？",
    character: characters.rishu.normal,
    choices: [
      {
        label: "A",
        text: "必修・選択必修と、気になる科目の前提科目を確認する",
        next: "q3-01-a-001",
        effects: { selfManagement: 2, informationUse: 1, affection: { rishu: 2 } }
      },
      {
        label: "B",
        text: "必修を置いたあと、興味のある分野を広げてみる",
        next: "q3-01-b-001",
        effects: { selfManagement: 1, universityLife: 1, affection: { rishu: 1 } }
      },
      {
        label: "C",
        text: "来年学びたいことから逆算し、必要な科目を探す",
        next: "q3-01-c-001",
        effects: { informationUse: 2, universityLife: 1, affection: { rishu: 1 } }
      }
    ]
  }),
  q301({ id: "q3-01-a-001", speaker: "主人公", text: "必修を確認して、未来の選択肢も閉じないように前提科目を見る。" }),
  q301({ id: "q3-01-a-004", speaker: "履修登録くん", text: "いい組み立て方。興味との両立も忘れずに。", character: characters.rishu.smile, next: "q3-01-common-001" }),
  q301({ id: "q3-01-b-001", speaker: "主人公", text: "必要な科目を押さえたら、今の興味も大切にしたい。" }),
  q301({ id: "q3-01-b-004", speaker: "履修登録くん", text: "うん。余裕があれば前提科目も確認しよう。", character: characters.rishu.smile, next: "q3-01-common-001" }),
  q301({ id: "q3-01-c-001", speaker: "主人公", text: "来年の自分から、今の時間割を考えてみる。" }),
  q301({ id: "q3-01-c-004", speaker: "履修登録くん", text: "先を見られたね。今の負担とのバランスも確認して。", character: characters.rishu.smile, next: "q3-01-common-001" }),
  q301({ id: "q3-01-common-001", speaker: "主人公", text: "四年間を今すべて決めなくてもいい。" }),
  q301({ id: "q3-01-common-006", speaker: "履修登録くん", text: "今の自分と、少し先の自分。その両方を見て選べばいい。", character: characters.rishu.smile }),
  q301({ id: "q3-01-common-011", speaker: "主人公", text: "よし。今の私に続けられて、未来にもつながる時間割にしよう。", emphasis: true, next: "q3-01-guide" }),
  guide("Q3-01", "q3-01-guide", "先を見た履修の攻略法", [
    "必修・選択必修と時間の重なりを確認する",
    "気になる科目に前提科目があるか少し先まで見る"
  ], "迷った科目は一覧にして、今の負担も含めて比べよう。", "q3-01-clear"),
  q301({ id: "q3-01-clear", speaker: "SYSTEM", text: "Q3-01 CLEAR！", clear: true, next: "q3-02-001" }),

  /* Q3-02：参加を迫らず、まず選択肢を知ることに価値を置く。 */
  q302({ id: "q3-02-001", speaker: "主人公", text: "履修も決まったし、来年のことも少し見えてきた。" }),
  q302({ id: "q3-02-004", speaker: "主人公", text: "ん？　留学・国際交流プログラムのお知らせ？", notification: notifications.internationalProgram, se: audio.notification }),
  q302({ id: "q3-02-008", speaker: "主人公", text: "海外なんて、私にはまだ遠いかな……。", notification: notifications.internationalProgram }),
  q302({ id: "q3-02-011", speaker: "ガクチカくん", text: "参加を決める前に、どんな選択肢か見るだけでもいいよ。", character: characters.gakuchika.normal }),
  q302({ id: "q3-02-018", speaker: "ガクチカくん", text: "知らないものは、やりたいかどうかも決められないから。", character: characters.gakuchika.smile }),
  q302({ id: "q3-02-024", speaker: "主人公", text: "行く・行かないの二択じゃなく、まず知るところからなんだ。", character: characters.gakuchika.smile }),
  q302({
    id: "q3-02-choice",
    speaker: "SYSTEM",
    text: "留学・国際交流のお知らせを、どう扱う？",
    character: characters.gakuchika.smile,
    choices: [
      {
        label: "A",
        text: "興味があるので、対象・時期・費用を詳しく調べる",
        next: "q3-02-a-001",
        effects: { universityLife: 2, informationUse: 1, affection: { gakuchika: 2 } }
      },
      {
        label: "B",
        text: "今すぐは難しいので、案内を保存して次回の選択肢にする",
        next: "q3-02-b-001",
        effects: { informationUse: 1, selfManagement: 1, affection: { gakuchika: 1 } }
      },
      {
        label: "C",
        text: "不安な点を整理して、説明会や相談先を確認する",
        next: "q3-02-c-001",
        effects: { informationUse: 2, universityLife: 1, affection: { gakuchika: 1 } }
      }
    ]
  }),
  q302({ id: "q3-02-a-001", speaker: "主人公", text: "参加できる条件を知れば、自分に合うか考えられる。" }),
  q302({ id: "q3-02-a-004", speaker: "ガクチカくん", text: "調べることは、もう最初の一歩だね。", character: characters.gakuchika.grin, next: "q3-02-common-001" }),
  q302({ id: "q3-02-b-001", speaker: "主人公", text: "今選ばなくても、次に見つけられるよう残しておこう。" }),
  q302({ id: "q3-02-b-004", speaker: "ガクチカくん", text: "見送るのも、知った上で選んだ立派な判断。", character: characters.gakuchika.smile, next: "q3-02-common-001" }),
  q302({ id: "q3-02-c-001", speaker: "主人公", text: "語学、期間、費用……何が不安か分けると質問しやすい。" }),
  q302({ id: "q3-02-c-004", speaker: "ガクチカくん", text: "一人で想像するより、正確な情報を集められるね。", character: characters.gakuchika.smile, next: "q3-02-common-001" }),
  q302({ id: "q3-02-common-001", speaker: "主人公", text: "オンラインの大学でも、学び方や出会う場所は思ったより広い。" }),
  q302({ id: "q3-02-common-010", speaker: "ガクチカくん", text: "全部やらなくていい。知ってから、自分で選べばいい。", character: characters.gakuchika.smile }),
  q302({ id: "q3-02-common-015", speaker: "主人公", text: "『自分には関係ない』で閉じる前に、一度だけ中を見てみよう。", emphasis: true, next: "q3-02-guide" }),
  guide("Q3-02", "q3-02-guide", "新しい機会を選ぶ攻略法", [
    "対象・時期・費用など、判断に必要な情報を見る",
    "参加しないときも、知った上で自分で決める"
  ], "気になる案内は保存し、疑問を一つだけ調べてみよう。", "q3-02-clear"),
  q302({ id: "q3-02-clear", speaker: "SYSTEM", text: "Q3-02 CLEAR！", clear: true, next: "q3-03-time-passage" }),

  /* Q3-03：提出の有無だけでなく、学びを自分の言葉で示す。 */
  passage("Q3-03", "q3-03-time-passage", "3Q中盤", "自室・夜", "q3-03-001", {
    label: "LATER IN 3Q",
    background: backgrounds.night
  }),
  q303({ id: "q3-03-001", speaker: "主人公", text: "あと確認レポート一つ。でも、今日はもう頭が動かない……。" }),
  q303({ id: "q3-03-005", speaker: "主人公", text: "意味のない文字で埋めて、提出済みにだけ――" }),
  q303({ id: "q3-03-007", speaker: "確認レポートくん", text: "それは提出じゃない。", character: characters.report.serious }),
  q303({ id: "q3-03-017", speaker: "主人公", text: "あ、吉村先生の投稿だ。", foreground: foregrounds.yoshimuraSlack, foregroundLayout: "phone", se: audio.notification }),
  q303({ id: "q3-03-020", speaker: "吉村先生", text: "意味のない文字列では、学びを評価できません。", foreground: foregrounds.yoshimuraSlack, foregroundLayout: "phone" }),
  q303({ id: "q3-03-022", speaker: "吉村先生", text: "この科目では、確認レポートが評価の50％です。", foreground: foregrounds.yoshimuraSlack, foregroundLayout: "phone" }),
  q303({ id: "q3-03-029", speaker: "主人公", text: "先生、ちゃんと一件ずつ読んでいるんだ……。", character: characters.yoshimura.normal }),
  q303({ id: "q3-03-038", speaker: "吉村先生", text: "評価方法は科目ごとに違います。必ずシラバスを確認してください。", character: characters.yoshimura.normal }),
  q303({ id: "q3-03-047", speaker: "主人公", text: "期限内なら何でもいいんじゃなく、授業をどう理解したかを書く。", character: characters.report.serious }),
  q303({
    id: "q3-03-choice",
    speaker: "SYSTEM",
    text: "疲れているけれど、内容を整えるには？",
    character: characters.report.serious,
    choices: [
      {
        label: "A",
        text: "授業の要点を見直し、自分の言葉で短くまとめる",
        next: "q3-03-a-001",
        effects: { selfManagement: 1, informationUse: 2, affection: { report: 2 } }
      },
      {
        label: "B",
        text: "設問ごとに箇条書きで下書きし、文章へ整える",
        next: "q3-03-b-001",
        effects: { selfManagement: 2, affection: { report: 1 } }
      },
      {
        label: "C",
        text: "締切を確認して少し休み、見直す時間を残して再開する",
        next: "q3-03-c-001",
        effects: { selfManagement: 2, affection: { report: 1 } }
      }
    ]
  }),
  q303({ id: "q3-03-a-001", speaker: "主人公", text: "授業を見直したら、伝えたい要点が見えてきた。", next: "q3-03-common-001" }),
  q303({ id: "q3-03-b-001", speaker: "主人公", text: "まず要点を並べれば、空欄を埋める作業じゃなくなる。", next: "q3-03-common-001" }),
  q303({ id: "q3-03-c-001", speaker: "主人公", text: "今のまま雑に出さず、休んでから仕上げる時間を確保しよう。", next: "q3-03-common-001" }),
  q303({ id: "q3-03-common-001", speaker: "主人公", text: "内容、誤字、提出先。三つとも確認して――提出！" }),
  q303({ id: "q3-03-common-006", speaker: "確認レポートくん", text: "これなら、君が何を学んだか伝わる。", character: characters.report.normal }),
  q303({ id: "q3-03-common-012", speaker: "主人公", text: "提出済みにするまでじゃない。自分の言葉で学びを示すまでが確認レポート。", emphasis: true, next: "q3-03-guide" }),
  guide("Q3-03", "q3-03-guide", "確認レポートの攻略法", [
    "評価方法は科目ごとにシラバスで確認する",
    "授業の理解を、自分の言葉で設問に沿って書く",
    "内容・誤字・提出先を送信前に見直す"
  ], "まず設問ごとに要点を一行ずつ下書きしよう。", "q3-03-clear", { background: backgrounds.night }),
  q303({ id: "q3-03-clear", speaker: "SYSTEM", text: "Q3-03 CLEAR！", clear: true, next: "q3-04-time-passage" }),

  /* Q3-04：確認済みの学内案内に沿い、三つの候補から変更する。 */
  passage("Q3-04", "q3-04-time-passage", "3Q後半", "自室・昼", "q3-04-001", {
    label: "LATE QUARTER"
  }),
  q304({ id: "q3-04-001", speaker: "主人公", text: "単位認定試験の受験日時が出た。今回はすぐ確認！", notification: notifications.examDate, se: audio.notification }),
  q304({ id: "q3-04-006", speaker: "単位認定試験くん", text: "もう説明はいらない？", character: characters.exam.normal }),
  q304({ id: "q3-04-009", speaker: "主人公", text: "各科目に候補日時が三つあって、そのうち一つが最初に割り当てられる。", character: characters.exam.normal }),
  q304({ id: "q3-04-011", speaker: "主人公", text: "まず割り当て日時を、自分の予定と照らし合わせる。", deadlineSchedule: schedules.examAssigned }),
  q304({ id: "q3-04-016", speaker: "主人公", text: "……この時間はバイトと重なってる。", deadlineSchedule: schedules.examChange }),
  q304({ id: "q3-04-018", speaker: "主人公", text: "残り二つから受けられる日時を選んで、ZENPortalで変更申請。", deadlineSchedule: schedules.examChange }),
  q304({ id: "q3-04-026", speaker: "主人公", text: "変更完了。変更後の日時も確認して、カレンダーへ！", deadlineSchedule: schedules.examChanged }),
  q304({ id: "q3-04-029", speaker: "単位認定試験くん", text: "今回は完璧。", character: characters.exam.smile }),
  q304({ id: "q3-04-033", speaker: "主人公", text: "日程が出たら確認。合わなければ、期限内に自分で変更する。", character: characters.exam.smile, emphasis: true, next: "q3-04-guide" }),
  guide("Q3-04", "q3-04-guide", "試験日程の攻略法", [
    "三つの候補から、最初に割り当てられた日時を確認する",
    "予定が合わなければ、残りの候補へ期限内に変更する",
    "変更後の日時を再確認し、カレンダーへ入れる"
  ], "公開通知を見た日に、全科目の日程を予定表へ入れよう。", "q3-04-clear"),
  q304({ id: "q3-04-clear", speaker: "SYSTEM", text: "Q3-04 CLEAR！", clear: true, next: "q3-05-time-passage" }),

  /* Q3-05：体調不良時は無理をせず、公式情報と期限を確認する。 */
  passage("Q3-05", "q3-05-time-passage", "試験当日の朝", "自室", "q3-05-001", {
    label: "EXAM DAY"
  }),
  q305({ id: "q3-05-001", speaker: "主人公", text: "頭が痛い……体も重い。" }),
  q305({ id: "q3-05-004", speaker: "主人公", text: "38.7℃。今日、単位認定試験なのに……！", foreground: foregrounds.thermometer }),
  q305({ id: "q3-05-015", speaker: "単位認定試験くん", text: "その状態で無理をする前に、確認することがある。", character: characters.exam.worried }),
  q305({
    id: "q3-05-choice",
    speaker: "SYSTEM",
    text: "試験当日に高熱。最初にどう動く？",
    character: characters.exam.worried,
    choices: [
      {
        label: "A",
        text: "ZENPortalや公式案内で、欠席時の手続きを確認する",
        next: "q3-05-a-001",
        effects: { informationUse: 2, selfManagement: 2, affection: { exam: 2 } }
      },
      {
        label: "B",
        text: "大学の相談先へ連絡し、公式案内の場所も確認する",
        next: "q3-05-b-001",
        effects: { informationUse: 2, selfManagement: 1, affection: { exam: 1 } }
      },
      {
        label: "C",
        text: "申請期限だけ先に確認し、必要な対応をして休む",
        next: "q3-05-c-001",
        effects: { selfManagement: 2, informationUse: 1, affection: { exam: 1 } }
      }
    ]
  }),
  q305({ id: "q3-05-a-001", speaker: "主人公", text: "こういうときこそ、最新の公式情報を見る。", next: "q3-05-common-001" }),
  q305({ id: "q3-05-b-001", speaker: "主人公", text: "事情を伝えて、確認すべき案内と手続きを聞こう。", next: "q3-05-common-001" }),
  q305({ id: "q3-05-c-001", speaker: "主人公", text: "あとで期限を逃さないよう、今できる確認だけ済ませよう。", next: "q3-05-common-001" }),
  q305({ id: "q3-05-common-001", speaker: "主人公", text: "『単位認定試験を欠席した場合』……案内があった。", deadlineSchedule: schedules.examAbsence }),
  q305({ id: "q3-05-common-006", speaker: "主人公", text: "病気など大学が認める理由なら、期間内に追試験を申請できる。", deadlineSchedule: schedules.examAbsence }),
  q305({ id: "q3-05-common-011", speaker: "単位認定試験くん", text: "自動ではないよ。申請期間と必要な手続きを確認して。", character: characters.exam.normal }),
  q305({ id: "q3-05-common-017", speaker: "主人公", text: "申請期限と必要なものを確認。できる手続きを済ませたら、今日は休む。", deadlineSchedule: schedules.makeupExam }),
  q305({ id: "q3-05-common-022", speaker: "単位認定試験くん", text: "それでいい。", character: characters.exam.smile, next: "q3-05-days-later" }),
  passage("Q3-05", "q3-05-days-later", "数日後", "自室・昼", "q3-05-after-001", {
    label: "A FEW DAYS LATER"
  }),
  q305({ id: "q3-05-after-001", speaker: "主人公", text: "熱も下がった。追試験の申請も受付を確認できた！", deadlineSchedule: schedules.makeupExam }),
  q305({ id: "q3-05-after-005", speaker: "単位認定試験くん", text: "今度は受けられそう？", character: characters.exam.normal }),
  q305({ id: "q3-05-after-007", speaker: "主人公", text: "うん。今度こそ万全で挑む。", character: characters.exam.smile }),
  q305({ id: "q3-05-final-001", speaker: "主人公", text: "予定通りにいかないときも、まず公式情報を確認する。" }),
  q305({ id: "q3-05-final-004", speaker: "単位認定試験くん", text: "必要なら相談し、期限内に手続きする。それも自己管理。", character: characters.exam.smile }),
  q305({ id: "q3-05-final-009", speaker: "主人公", text: "トラブルまで一人で抱え込まず、できる対応をして休む。覚えた！", emphasis: true, next: "q3-05-guide" }),
  guide("Q3-05", "q3-05-guide", "試験当日のトラブル攻略法", [
    "無理をせず、最新の公式案内を確認する",
    "申請期限・必要なもの・受付結果まで確かめる",
    "分からなければ大学の相談先へ連絡する"
  ], "緊急時に見る案内と相談先を、元気なうちに保存しよう。", "q3-05-clear"),
  q305({ id: "q3-05-clear", speaker: "SYSTEM", text: "Q3-05 CLEAR！", clear: true, next: "q3-result-time-passage" }),

  /* Q3 RESULT：説明を繰り返さず、主人公自身の行動変化を確認する。 */
  passage("Q3 RESULT", "q3-result-time-passage", "3Q末", "自室・夜", "q3-result-001", {
    label: "END OF QUARTER",
    background: backgrounds.night
  }),
  night("Q3 RESULT", { id: "q3-result-001", speaker: "主人公", text: "3Q、終了！　今Qは『少し先を見る』練習だった気がする。" }),
  night("Q3 RESULT", { id: "q3-result-005", speaker: "主人公", text: "未来の科目まで見た履修。知らなかった機会を調べてから選ぶこと。" }),
  night("Q3 RESULT", { id: "q3-result-014", speaker: "主人公", text: "レポートは自分の言葉で。試験日は自分の予定と合わせて管理する。" }),
  night("Q3 RESULT", { id: "q3-result-026", speaker: "主人公", text: "予想外の体調不良でも、公式情報を確認して手続きできた。" }),
  night("Q3 RESULT", { id: "q3-result-035", speaker: "主人公", text: "全部を予測できなくても、次にどう動くかなら選べる。", emphasis: true }),
  night("Q3 RESULT", {
    id: "q3-result",
    speaker: "SYSTEM",
    text: "3Q RESULT",
    clear: true,
    resultPreview: { target: "q3-quarter-end" }
  }),
  night("Q3 RESULT", {
    id: "q3-quarter-end",
    speaker: "SYSTEM",
    text: "4Qへ進む",
    quarterEnd: { nextQuarter: 4, target: "q4-start" }
  })
];
