# 3.7 npm & package.json

In 3.1 you typed four commands and a whole project appeared. The word doing the heavy lifting was **npm** — time to open the hood. Two files and one folder run every React project, and after this page none of them will look like mystery files again.

## npm — the package manager

**npm** means **Node Package Manager** — two things in one name:

- A giant online **store of ready-made JavaScript code**. Each piece is called a **package**.
- The **tool on your machine** that downloads and manages those packages.

React itself is a package — npm downloaded it into your project on day one. So is Vite, and so is axios, a package you meet on the next page. Installing one is a single command:

```bash
npm install axios
```

That is all that happened in 3.1 too: `npm create vite@latest` fetched the Vite template, and `npm install` downloaded every package the template listed. You were using npm before you knew its name.

## package.json — the project's ID card

Every project carries one small file that describes it. Open yours:

```json
{
  "name": "my-first-react",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "19.1.0",
    "react-dom": "19.1.0"
  }
}
```

Two parts matter most:

- **scripts** — your commands. `npm run dev` works only because this file says: dev means vite. A new command is a new line here.
- **dependencies** — the list of packages your project needs, with versions. Every install command adds its line here.

And the quiet superpower: send this file to a friend — without any downloaded code — and one `npm install` rebuilds their whole setup. npm reads the list and fetches exactly what is missing. The ID card travels; the heavy folder does not.

## package-lock.json — the exact receipt

package.json says "react, this version." The file next to it — **package-lock.json** — is the receipt: the exact version that was actually installed, plus the exact versions of everything that package itself needs.

Why both? The list allows a version; the receipt pins one. npm reads the receipt first, so your machine and your teammate's machine run identical projects. One rule: npm owns this file — never edit it by hand.

## node_modules — where the downloads live

One folder, huge by design: every package you use, and every package's own packages. Two rules:

- Never edit anything inside.
- Never copy or share it — `npm install` rebuilds the whole thing any time.

## The tour — three files that matter

- `index.html` — the only real HTML page, holding one empty `<div>`. React fills it.
- `src/main.jsx` — the entry point. It imports `App`, renders it into that div, and wraps everything in **`<StrictMode>`** — a dev-only checker that renders your components twice to expose hidden mistakes. Ever see a log print twice? That is StrictMode working, not a bug.
- `src/App.jsx` — the component you edited in 3.1.

## Every file is a module

npm shares packages between projects. Your own files share code the same way — **every file is a module** — you know the mechanics from 2.5. Two ways to hand code out:

The **default export** — the one main thing a file gives, imported without braces:

```jsx
export default function UserCard() {
  return <div>...</div>
}
```

```jsx
import UserCard from "./UserCard.jsx"
```

**Named exports** — side helpers, any number per file, imported with braces and the exact name:

```jsx
export function toTitleCase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}
```

```jsx
import { toTitleCase } from "./formatTools.js"
```

The React convention: **one component per file, as the default export** — helpers travel as named exports.

<VideoSlot topic="npm, package.json and package-lock.json — watch once" />

## Hands-on — read your own project

1. Open `package.json`. Find the line that makes `npm run dev` work.
2. Run `npm install axios`. Open `package.json` again — a new line. Open `package-lock.json` — an axios entry with an exact version. You just watched both files do their jobs.
3. Check the size of `node_modules`. Now you know why it never travels.
4. The confidence trick: delete the `node_modules` folder, run `npm install`, and watch the whole folder come back. The ID card and the receipt rebuilt everything.

<QuizBlock
  :questions="[
    { question: 'What is npm?', answer: 'Node Package Manager — a giant store of ready-made packages, plus the tool on your machine that installs and manages them.' },
    { question: 'React itself is a what?', answer: 'A package — npm downloaded it into your project on day one, same as any other.' },
    { question: 'Where does npm run dev come from?', answer: 'The scripts section of package.json — the file says dev means vite.' },
    { question: 'What does the dependencies list do?', answer: 'Names every package the project needs, with versions. npm install reads it and fetches exactly what is missing.' },
    { question: 'Why does package-lock.json exist?', answer: 'It pins the exact versions actually installed — so your machine and the machine next to you run identical projects.' },
    { question: 'You send a project to a friend. What travels — node_modules or package.json?', answer: 'package.json, with the lock file. node_modules is huge and npm install rebuilds it any time.' },
    { question: 'What is StrictMode?', answer: 'A dev-only wrapper in main.jsx that renders components twice to expose hidden mistakes — double logs mean it is working, not a bug.' },
    { question: 'Default export vs named export?', answer: 'Default — no braces, the one main thing a file gives. Named — braces and the exact name, any number per file.' }
  ]"
/>

<PageNextButton />
