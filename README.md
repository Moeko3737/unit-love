# unit-love

『単位に恋して。』

ZEN大学の新入生が、4Qからなる1年間を疑似体験しながら、
大学生活に必要な知識や行動を選択肢形式で学ぶ
乙女ゲーム風大学生活シミュレーションです。

## Repository name

`unit-love`

## Development policy

- Mobile first
- Smartphone: game screen fills the viewport
- Desktop: the same vertical game screen is centered, with decorative side areas
- Vanilla HTML / CSS / JavaScript
- Game logic is separated from DOM code so that it can be tested
- Features are added step by step with Git commits

## Current features

- Title screen
- Dialogue progression
- Q1-01「まずは履修登録！」: character expressions, three choices, branching dialogue, and chapter clear
- Q1-02「卒業までの道、見えてる？」: graduation requirements dialogue, following Q1-01 CLEAR
- Q1-03「Slackデビュー！」: notification card, smartphone view, Slackくん, and three branching choices
- Q1-04「学園祭のお知らせ！」: festival visit, time passage, and 津野先生 turning around
- Q1-05「授業だけが大学生活じゃない？」: extracurricular activities and ガクチカくん
- Q1-06「はじめまして、確認レポートくん」: report deadlines, advance submission, and three choices
- Choice effects on scores and affection, restored when returning to the choice
- Automatic bookmark with title-screen Continue, including scores, affection, and dialogue history
- Background / foreground / character layers
- Chapter image preloading and decoded character swaps without clearing the previous image
- Dialogue-box click to advance
- BGM playback
- Sound effect playback
- SOUND ON / OFF setting saved in `localStorage`
- Quarter result screen
- Three result axes: 自己管理 / 情報活用 / 大学生活
- Provisional S / A / B / C quarter grade logic
- Node.js tests

## Audio

Current WAV files are temporary original placeholder audio generated for development.
They can be replaced later without changing the JavaScript structure.

不足しているBGMと追加予定の音源は [`docs/audio-assets.md`](docs/audio-assets.md) にまとめています。

```text
assets/audio/
├─ bgm/
│  ├─ prologue.wav
│  └─ result.wav
└─ se/
   ├─ click.wav
   └─ notification.wav
```

Scenario audio can be assigned like this:

```js
{
  id: "example",
  chapter: "1Q",
  speaker: "主人公",
  text: "通知が来た！",
  bgm: "./assets/audio/bgm/prologue.wav",
  se: "./assets/audio/se/notification.wav"
}
```

## Quarter result

The header `成績` button currently opens the result screen for preview.
At the end of each quarter, the same result function can later be called automatically.

The current grade thresholds are provisional and are defined in `js/gameLogic.js`.

## 1Q scenarios

Q1-01〜Q1-06の会話・立ち絵と、Q1-01・Q1-03・Q1-06の3択は `js/scenario.js` にまとめています。

- 選択肢の `effects` がスコアと好感度の変化、`next` が回答後のシーンIDです。
- 分岐会話の最後にも `next` を指定し、共通の締めくくりへ合流します。
- `clear: true` はCLEAR表示、`end: true` は現時点の本編終端です。1Q全体の終了ではありません。
- 各CLEARの `next` でQ1-01 → Q1-02 → Q1-03 → Q1-04 → Q1-05 → Q1-06へ続き、Q1-06 CLEARで停止します。戻る操作や前の話で得たスコア・好感度は維持します。
- Q1-02は選択肢のない会話編です。履修登録くんの退場、卒業要件先輩の説明、最後の笑顔を既存素材だけで表現します。
- Q1-02の124・14・74単位は提供された卒業要件表、90単位はユーザーが確認した4年生への進級条件に基づきます。詳細は学生便覧で確認する内容として扱っています。
- Q1-03は自室のまま、先輩退場 → 通知 → スマホのチャンネル一覧 → Slackくん登場と進みます。`notification` が通知カードの内容、`foregroundLayout: "phone"` が縦長スマホ用の表示指定です。
- 通知と日時・場所の補助表示（`caption`）の描画は `js/sceneDecorations.js` に分離しています。シナリオを戻したときも、その場面の表示状態に戻します。
- Slackくんの表情は会話のまとまりで固定します。原稿の `serious` は `worried`、`grin` は `wink` で代用し、驚き→心配の短い連続切替は省いています。
- Q1-03のB・C回答に付されたポリシー注記は台詞には表示せず、会話本文を原稿どおり収録しています。
- Q1-04は選択肢・スコア変動なしの時間経過画面＋49会話＋CLEARです。数週間後の自室 → Slack通知 → 展軸祭会場 → 津野先生の後ろ姿・正面・退場と進みます。
- Q1-05は選択肢・スコア変動なしの時間経過画面＋34会話＋CLEARです。展軸祭の数日後、ガクチカくんとの会話を通して課外活動も自分で選べることを伝えます。
- Q1-06は1Q中盤の時間経過画面から始まり、確認レポートの通知画像と3段階の締切カードを表示します。2表情のうち `serious` を説明の基本にし、原稿の `annoyed` は `serious`、`soft-smile` は `normal` で表現します。
- Q1-06の選択肢は自己管理と確認レポートくんの好感度へ反映します。途中締切の3分の1減点、前倒し提出、最終締切までに必要な提出を終えないと単位認定試験へ進めないことを会話で説明します。
- 章の間で日数が空く箇所は、背景を暗くぼかして中央に日時・場所を大きく出す `timePassage` 画面を1タップ分挟みます。通常の場所補助は上部の `caption` を使います。
- 津野先生には `characterLayout: "full-body"` を指定し、足元を会話枠の後ろに隠した全身表示にします。先生へのツッコミ中も先生を表示したままにして、立ち絵の頻繁な切替を避けています。ほかのキャラの左右端を画面に合わせる表示は維持します。
- 全身表示のサイズは画像の準備ができてから同時に反映するため、読み込み中の前キャラには適用しません。日時・場所の表示アニメーションは `prefers-reduced-motion` で停止します。
- 選択シーンへ戻ると、選択前のスコア・好感度へ復元されます。
- Q1-01〜Q1-06専用BGMは未設定です。Q1-03・Q1-04の通知には既存の `notification.wav` を使い、SOUND OFFでは再生しません。その他の音声設定も維持しています。

## Bookmark / continue

- 会話送り・選択・戻る操作ごとに、栞を1件自動保存します。タイトルの「つづきから」で、保存した会話から再開できます。
- 栞にはシーンID・現在のQ・能力値・好感度・戻る履歴を含みます。再開時に選択の効果を再適用せず、選択前に戻った場合もその時点の値を復元します。
- OP中に閉じた場合はQ1-01から再開します。「はじめから」は、栞の上書きと進行状況・得点・好感度のリセットを確認してから開始します。
- `js/bookmark.js` が保存形式の検証と読み書きを担当し、DOM操作は `js/main.js` に置いています。保存先は `localStorage` の `unitLoveBookmark` キーです。音声設定とは別に管理します。
- シナリオの配列番号ではなくIDを保存するため、会話の追加で再開位置がずれることを避けられます。保存したシーンIDを削除・変更すると、その栞は読み込めなくなります。
- 保存禁止・容量不足でもゲームは続行できます。その場合は画面に未保存を表示し、ページを閉じるまでの一時的な「つづきから」だけ利用できます。
- 壊れたデータや未対応形式の栞は勝手に削除せず、再開不可を表示します。「はじめから」の確認を承認した後、新しい栞で上書きします。
- 同じブラウザ・同じページで使用してください。別ブラウザ・別端末への同期はありません。ブラウザの保存データを消すと栞も失われます。
- 栞機能を読み込んだ後のプレイから保存されます。導入前に閉じたゲームの進行は復元できません。

## Image preloading

- タイトル表示中にプロローグ、OP開始時にQ1-01の画像を先読みします。
- 次の章へ続くCLEARでは、その章の画像も先読みします。Q1-02 CLEAR中にはQ1-03のスマホ・表情、Q1-03 CLEAR中にはQ1-04の会場背景・先生の両姿、Q1-04 CLEAR中にはQ1-05のガクチカくん、Q1-05 CLEAR中にはQ1-06の通知画面と確認レポートくんを準備します。
- `js/scenario.js` から章内の背景・前景・立ち絵を集め、対応環境ではWebPを使用します。選択肢の分岐で使う表情も対象です。
- 先読みは1枚ずつ行い、会話やOPのスキップを待たせません。読み込んだ画像はページ内で再利用します。
- 立ち絵と前景は描画の準備ができてから差し替え、同じ画像の再設定は省きます。連打・戻る・タイトル復帰時は古い表示要求を無効にします。
- 読み込み失敗時は対象の画像を非表示にし、ゲーム進行は続けます。

## Folder structure

```text
unit-love/
├─ index.html
├─ README.md
├─ package.json
├─ docs/
│  └─ audio-assets.md
├─ css/
│  └─ style.css
├─ js/
│  ├─ main.js
│  ├─ bookmark.js
│  ├─ gameLogic.js
│  ├─ imageAssets.js
│  ├─ imageLoader.js
│  ├─ sceneDecorations.js
│  └─ scenario.js
├─ tests/
│  ├─ bookmark.test.js
│  ├─ bookmarkFlow.test.js
│  ├─ gameLogic.test.js
│  ├─ imageAssets.test.js
│  ├─ imageLoader.test.js
│  ├─ q102Scenario.test.js
│  ├─ q103Scenario.test.js
│  ├─ q104Scenario.test.js
│  ├─ q1Scenario.test.js
│  ├─ resultScreen.test.js
│  ├─ sceneDecorations.test.js
│  ├─ scenario.test.js
│  └─ titleScreen.test.js
└─ assets/
   ├─ audio/
   │  ├─ bgm/
   │  └─ se/
   └─ images/
      ├─ backgrounds/
      ├─ characters/
      ├─ foregrounds/
      └─ ui/
```

## Run tests

```bash
npm test
```

No external testing library is used.
The tests use Node.js built-in `node:test` and `assert`.


## Added interaction features

- BGM / sound effects with sound ON/OFF
- Quarter result screen
- 会話ボックス左下から、ひとつ前の会話へ戻る機能（スコア・好感度もその時点へ復元）
