# Page Map

One home page plus twelve modules. The sidebar shows the modules in this order, top to bottom. Every page ends with a Next button into the following page. Every page follows one skeleton: short concept in English and Hinglish → video links → hands-on → check-off. Every module's last page carries the Test Yourself section.

## Home

- Journey overview with progress dots for all twelve modules
- How to use this site — skip what you know, check off as you go, one page is one sitting
- The learning approach in short — ask why, plan before code, one change at a time, you supervise AI
- Continue button that jumps to the last unfinished page

## 1. HTML/CSS — 8 pages

1. Start Here — what HTML and CSS are, the AI-first method (generate, ask, modify, observe), user side vs server side in basic words
2. HTML Essentials — common tags, page structure, forms
3. CSS Core — box model, spacing, display types
4. Layout — position, flexbox, grid
5. Responsive Design — rem, em, mobile-first
6. Project — Registration Form
7. Project — Personal Portfolio
8. Wrap — concept summary + Test Yourself

## 2. JavaScript — 10 pages

1. Start Here — what JavaScript is + predict-then-run practice (write the prediction, run, compare)
2. Variables, Types & Operators
3. Conditions & Loops
4. Functions & ES6 Modules
5. Arrays & Objects — map, filter, find
6. DOM, Events, Console & localStorage
7. Async & APIs — fetch, async/await, try/catch
8. Project — Calculator
9. Project — To-Do List
10. Project — Weather App + Wrap + Test Yourself

## 3. React — 8 pages

1. Start Here — why React beats plain HTML/JS, JSX
2. Components & Props
3. Rendering — conditional + lists
4. Hooks I — useState & useRef
5. Hooks II — useEffect
6. Project — Password Manager
7. Project — Weather Dashboard
8. Wrap + Test Yourself

## 4. Python/Flask — 13 pages

1. Start Here — server-side vs frontend + the practice method
2. Basics I — variables, types, operators
3. Basics II — conditions, loops
4. Functions, Modules & Imports
5. Collections — lists, tuples, sets, dictionaries
6. Comprehension & Exceptions
7. datetime, Env Vars & Logging
8. Flask Structure — blueprints, app factory, config, decorators
9. Running & Deploying — run Python and Flask, serve the app on a server
10. Building APIs — REST, CRUD, JSON, validation, errors
11. Data & Auth — pagination, filtering, sorting, auth vs authorization
12. Scheduled Jobs — APScheduler, background work
13. Project — Mini Operations Dashboard + Wrap + Test Yourself

## 5. Database — 6 pages

1. Start Here — what a database is, SQL vs NoSQL, why not files or localStorage
2. SQLite — tables & SQL CRUD, running locally
3. SQLite + Python — connect and query from Flask
4. Postgres & Server Databases — what changes, connecting to a server
5. MongoDB — collections, documents, basic CRUD
6. Choosing Which One + Wrap + Test Yourself

## 6. CLI (Terminal) — 4 pages

1. GUI vs Terminal — why developers use it, nothing to fear
2. Essential Commands — navigate, make folders and files, move, copy, delete, each one hands-on
3. Running Things — run scripts, paths, install basics
4. Practice Challenges + command summary + Test Yourself

## 7. Git — 4 pages

1. What Git Actually Is — version history, why it exists, what a repo is
2. Everyday Git — working tree → staging → commits, status, add, commit, log
3. Remote — clone, push, pull, GitHub basics
4. Branches at a Glance + summary + Test Yourself

## 8. Agent Coding — 6 pages

1. What It Is — the agent harness in action, real screenshots of Claude Code
2. Controlling It — prompting, one change at a time, reviewing what it did
3. Context — CLAUDE.md, rules files, how it reads the project
4. Skills — what they are, how to use them
5. A Real Task End-to-End — grill, plan, build, test in one walkthrough
6. When to Trust, When to Check — Claude Code as the main tool, Gemini CLI as the alternative, tools change but principles stay + Wrap + Test Yourself

## 9. API Design — 4 pages

1. One API vs Many — endpoints around resources, naming, thinking in server terms
2. What Goes Where — server-side vs frontend processing, where validation lives
3. Clean APIs — status codes, useful errors, consistency
4. Wrap + Test Yourself

## 10. Frontend UI Design — 5 pages

1. Why UI Decisions Matter — user time is real money, bad UI is a bad product
2. Choosing Elements — sidebar, tabs vs tables, forms — when each wins
3. Minimal UI — every element must justify itself, remove instead of add
4. One Click Beats Two — flows, KPI dashboard decision case
5. Wrap + Test Yourself

## 11. Clean Code & Testing — 5 pages

1. Why Clean Code Matters — someone reads it a year later; AI writes most code, you judge it
2. Naming, Functions & Guard Clauses — readable names, function length, early returns, no magic numbers, dead code removal
3. DRY & Data Flow — no repetition; functions take only what they need, return only what is used
4. SOLID — five principles in plain words, what each means, why each exists
5. Why Testing — unit tests, when they pay off, write a few + Wrap + Test Yourself

## 12. Projects — School CRM Capstone — 6 pages

1. The Brief — build it alone, the rules, what done means
2. Plan It — grill the requirement, write your own spec, draw screens
3. Build — Backend — Flask API + database (SQLite or MongoDB, choice justified)
4. Build — Frontend — React, minimal UI, every element justified
5. Test & Polish — self-review, edge cases, demo checklist
6. Graduation — finale page, what comes next: real internal projects

# Code Structure

The site is a VitePress project inside `site/`. English and Hinglish pages are mirror folders — same twelve module folders, same file names, one page in each language.

```
site/
├── package.json
├── .vitepress/
│   ├── config.mjs
│   └── theme/
│       ├── index.js
│       ├── components/
│       │   ├── PageCheckOff.vue
│       │   ├── VideoSlot.vue
│       │   ├── QuizBlock.vue
│       │   └── ConfettiBurst.vue
│       └── composables/
│           └── useProgress.js
├── en/
│   ├── index.md
│   └── one folder per module, pages numbered 01-… in walk order
└── hi/
    └── same folders and file names as en/
```

What each piece does:

- `config.mjs` — top bar, both toggles, sidebar order per language, dark mode, search.
- `index.js` — wires the custom components into every page.
- `PageCheckOff.vue` — the "I did this" box at the end of every page.
- `VideoSlot.vue` — the marked empty spot where the captain's video link goes.
- `QuizBlock.vue` — Test Yourself: about five questions, answer shows on click.
- `ConfettiBurst.vue` — party popper, fires once at module end.
- `useProgress.js` — saves check-offs in the browser, feeds the home page dots and the Continue button.
- `en/index.md` and `hi/index.md` — the home page in each language.
