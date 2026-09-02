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

## Current base version

Included:

- Title screen
- Game screen
- Basic dialogue progression
- Mobile-first layout
- Desktop decorative wrapper
- Scenario data file
- Pure game-logic module
- Node.js test files
- Organized image folders

Not included yet:

- Final prologue
- Background images
- Character illustrations
- Choices
- Score UI
- Affection system UI
- Ending branches
- Ending album
- LocalStorage

## Folder structure

```text
unit-love/
├─ index.html
├─ README.md
├─ package.json
├─ .gitignore
├─ css/
│  └─ style.css
├─ js/
│  ├─ main.js
│  ├─ gameLogic.js
│  └─ scenario.js
├─ tests/
│  ├─ gameLogic.test.js
│  └─ scenario.test.js
└─ assets/
   └─ images/
      ├─ backgrounds/
      ├─ characters/
      └─ ui/
```

## Run the game

Open `index.html` in Google Chrome.

## Run tests

Node.js is required.

```bash
npm test
```

No external testing library is used.
The tests use Node.js built-in `node:test` and `assert`.

## Suggested first commit

```text
ゲーム画面とテスト環境のベースを作成
```
