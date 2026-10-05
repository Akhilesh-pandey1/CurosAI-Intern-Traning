# Graph Report - site  (2026-10-05)

## Corpus Check
- 23 files · ~9,440 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 141 nodes · 164 edges · 16 communities
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 6 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7bf20a03`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- ContinueButton.vue
- PageNextButton.vue
- useProgress.js
- package.json
- 1.2 HTML Essentials
- 1.3 CSS and Tailwind CSS
- 1.2 HTML Essentials
- 2.2 Variables, Types & Operators
- CurosAI Intern Training
- 2.1 Start Here
- 2.3 Conditions & Loops
- 2.4 Functions & ES6 Modules
- CurosAI Intern Training
- 1.1 Start Here
- 1.1 Start Here

## God Nodes (most connected - your core abstractions)
1. `useProgress()` - 10 edges
2. `handleNextClick()` - 7 edges
3. `useSiteText()` - 6 edges
4. `1.2 HTML Essentials` - 6 edges
5. `1.3 CSS and Tailwind CSS` - 6 edges
6. `1.2 HTML Essentials` - 6 edges
7. `MODULES` - 5 edges
8. `2.2 Variables, Types & Operators` - 5 edges
9. `togglePageCheck()` - 4 edges
10. `resolveCelebrationType()` - 4 edges

## Surprising Connections (you probably didn't know these)
- `handleNextClick()` --calls--> `resolveCelebrationType()`  [EXTRACTED]
  .vitepress/theme/components/PageNextButton.vue → .vitepress/theme/composables/useProgress.js
- `handleNextClick()` --calls--> `togglePageCheck()`  [EXTRACTED]
  .vitepress/theme/components/PageNextButton.vue → .vitepress/theme/composables/useProgress.js
- `handleNextClick()` --calls--> `playApplauseSound()`  [EXTRACTED]
  .vitepress/theme/components/PageNextButton.vue → .vitepress/theme/applauseSound.js
- `handleNextClick()` --calls--> `toPageKey()`  [EXTRACTED]
  .vitepress/theme/components/PageNextButton.vue → .vitepress/theme/composables/useProgress.js
- `resolveCelebrationType()` --references--> `MODULES`  [EXTRACTED]
  .vitepress/theme/composables/useProgress.js → .vitepress/theme/moduleCatalog.js

## Import Cycles
- None detected.

## Communities (16 total, 0 thin omitted)

### Community 0 - "ContinueButton.vue"
Cohesion: 0.09
Nodes (20): buttonLabel, { findNextUnfinishedPagePath }, hasUnfinishedPages, { pickSiteText, localePrefix }, router, targetPagePath, blockTitle, handleAnswerToggle() (+12 more)

### Community 1 - "PageNextButton.vue"
Cohesion: 0.13
Nodes (18): playApplauseSound(), CENTER_BURST_OPTIONS, fireModuleCelebration(), firePageCelebration(), handleNextClick(), isCelebrating, isChecked, { isPageChecked, togglePageCheck, findNextPageAfter, resolveCelebrationType } (+10 more)

### Community 2 - "useProgress.js"
Cohesion: 0.19
Nodes (13): { countCheckedPages }, { localePrefix }, moduleStates, checkedPages, countCheckedPages(), findNextPageAfter(), findNextUnfinishedPagePath(), isPageChecked() (+5 more)

### Community 3 - "package.json"
Cohesion: 0.15
Nodes (12): dependencies, canvas-confetti, devDependencies, vitepress, canvas-confetti, name, private, scripts (+4 more)

### Community 4 - "1.2 HTML Essentials"
Cohesion: 0.29
Nodes (6): 1.2 HTML Essentials, First: what to do and what not to do, Forms — how a page collects input, Hands-on — build your portfolio page, part by part, The structure every page shares, The tags you will actually use

### Community 5 - "1.3 CSS and Tailwind CSS"
Cohesion: 0.29
Nodes (6): 1.3 CSS and Tailwind CSS, Hands-on — restyle your portfolio, twice, Responsiveness — where Tailwind shines, Tailwind CSS — the framework we use, The core parts of Tailwind, What CSS actually does

### Community 6 - "1.2 HTML Essentials"
Cohesion: 0.29
Nodes (6): 1.2 HTML Essentials, Forms — page input कैसे लेता है, Hands-on — अपना portfolio page बनाओ, हिस्सा-हिस्सा में, Structure जो हर page share करता है, Tags जो actually use होते हैं, पहले: क्या करना है और क्या नहीं

### Community 7 - "2.2 Variables, Types & Operators"
Cohesion: 0.33
Nodes (5): 2.2 Variables, Types & Operators, Data types — the five everyday shapes, Hands-on — predict, run, compare, Operators — the everyday moves, Variables — let and const

### Community 8 - "CurosAI Intern Training"
Cohesion: 0.40
Nodes (4): CurosAI Intern Training, How to use this site, The learning approach in short, What you will build

### Community 9 - "2.1 Start Here"
Cohesion: 0.40
Nodes (4): 2.1 Start Here, The one method of this whole module — predict, then run, Try it right now — the browser console, What JavaScript actually does

### Community 10 - "2.3 Conditions & Loops"
Cohesion: 0.40
Nodes (4): 2.3 Conditions & Loops, Conditions — if, else, Hands-on — predict, run, compare, Loops — for, for...of, forEach

### Community 11 - "2.4 Functions & ES6 Modules"
Cohesion: 0.40
Nodes (4): 2.4 Functions & ES6 Modules, ES6 Modules — split code across files, Functions — name a piece of work, Hands-on — predict, run, compare

### Community 12 - "CurosAI Intern Training"
Cohesion: 0.40
Nodes (4): Aap kya banoge, CurosAI Intern Training, Is site ko kaise use karein, Learning approach — short mein

### Community 13 - "1.1 Start Here"
Cohesion: 0.50
Nodes (3): 1.1 Start Here, User side vs server side — in basic words, What HTML and CSS are

### Community 14 - "1.1 Start Here"
Cohesion: 0.50
Nodes (3): 1.1 Start Here, HTML और CSS क्या हैं, User side vs server side — आसान शब्दों में

## Knowledge Gaps
- **79 isolated node(s):** `router`, `{ findNextUnfinishedPagePath }`, `{ pickSiteText, localePrefix }`, `targetPagePath`, `hasUnfinishedPages` (+74 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `useSiteText()` connect `ContinueButton.vue` to `PageNextButton.vue`, `useProgress.js`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Why does `useProgress()` connect `useProgress.js` to `ContinueButton.vue`, `PageNextButton.vue`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `useProgress()` (e.g. with `countCheckedPages()` and `findNextPageAfter()`) actually correct?**
  _`useProgress()` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `router`, `{ findNextUnfinishedPagePath }`, `{ pickSiteText, localePrefix }` to the rest of the system?**
  _79 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `ContinueButton.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.0873015873015873 - nodes in this community are weakly interconnected._
- **Should `PageNextButton.vue` be split into smaller, more focused modules?**
  _Cohesion score 0.12631578947368421 - nodes in this community are weakly interconnected._