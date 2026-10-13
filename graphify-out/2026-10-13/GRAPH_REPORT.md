# Graph Report - Intern-Training  (2026-10-13)

## Corpus Check
- 149 files · ~224,414 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1155 nodes · 1235 edges · 142 communities (133 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7e67d794`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- core.py
- server.cjs
- ModuleProgressDots.vue
- deny
- What You Must Do When Invoked
- Dimensions
- allow
- grill-for-business/SKILL.md
- Visual Companion Guide
- Before Grill — the problem gate
- Page Map
- tickets.mjs
- design_system.py
- Steps
- Test-Driven Development
- package.json
- DesignSystemGenerator
- ._apply_reasoning
- Python Code Style & Standards
- _select_palette_for_mode
- _generate_intelligent_overrides
- AGENTS.md
- CLAUDE.md
- persist_design_system
- graphify reference: extra exports and benchmark
- helper.js
- Code Style & Standards
- React Code Style & Standards
- Process
- Design Screens
- Brainstorming Ideas Into Designs
- Write Screens
- grill-with-openspec/SKILL.md
- stop-server.sh
- write-spec-greenfield/templates/proposal.md
- write-spec/templates/proposal.md
- 1.1 Start Here
- 1.2 HTML Essentials
- 1.1 Start Here
- 1.2 HTML Essentials
- node-js-code-style.md
- PageNextButton.vue
- graphify reference: query, path, explain
- write-spec-greenfield/templates/design.md
- write-spec-greenfield/templates/spec.md
- write-spec/templates/design.md
- write-spec/templates/spec.md
- Curosai Intern Training
- Curosai Intern Training
- useProgress.js
- Commit Story
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- Grill — style router
- write-spec-greenfield/instructions/tasks.md
- HTML-CSS.md
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- start-server.sh
- write-spec-greenfield/templates/tasks.md
- write-spec/templates/tasks.md
- decisions.md
- testing.md
- extraction-spec.md
- write-tickets/SKILL.md
- QuizBlock.vue
- 1.3 CSS and Tailwind CSS
- ContinueButton.vue
- 2.10 Project — Weather App
- 2.2 Variables, Types & Operators
- 2.1 Start Here
- 2.3 Arrays & Objects
- 2.4 Conditions & Loops
- 2.5 Functions & ES6 Modules
- 2.6 DOM, Events & Storage
- 2.7 Async & APIs
- 2.8 Project — Calculator
- 2.9 Project — To-Do List
- 2.10 Project — Weather App
- 1.3 CSS and Tailwind CSS
- 2.6 DOM, Events & Storage
- _resolve_color_mode
- 2.2 Variables, Types & Operators
- 2.3 Arrays & Objects
- 2.7 Async & APIs
- 2.8 Project — Calculator
- 2.9 Project — To-Do List
- 2.1 Start Here
- 2.4 Conditions & Loops
- 2.5 Functions & ES6 Modules
- 3.7 npm & package.json
- 3.6 More Hooks
- 3.9 npm Packages We Use
- 3.2 Components & Props
- 3.4 Hooks — useState & useRef
- 3.8 React Router
- 3.10 Project — Password Manager
- 3.11 Project — Weather Dashboard
- 3.1 Start Here
- 3.3 Conditional Rendering & Lists
- 3.5 Hooks — useEffect
- 6.2 Essential Commands
- 7.2 Everyday Git
- 7.4 Branches at a Glance
- 3.7 npm & package.json
- 6.1 GUI vs Terminal
- 7.3 Remote & GitHub
- 3.6 More Hooks
- 3.9 npm Packages We Use
- 7.1 What Git Actually Is
- 3.2 Components & Props
- 3.4 Hooks — useState & useRef
- 3.8 React Router
- 3.10 Project — Password Manager
- 3.11 Project — Weather Dashboard
- 3.1 Start Here
- 3.3 Conditional Rendering & Lists
- 3.5 Hooks — useEffect
- Humanizer: remove AI writing patterns
- 8.1 What Agent Coding Actually Is
- 8.6 When to Trust, When to Check
- 8.2 Controlling the Agent
- 8.5 From IDE to ADE: Meet Orca
- 8.3 Context
- 8.4 Skills

## God Nodes (most connected - your core abstractions)
1. `allow` - 24 edges
2. `search()` - 23 edges
3. `deny` - 19 edges
4. `DesignSystemGenerator` - 15 edges
5. `handleRequest()` - 14 edges
6. `Page Map` - 14 edges
7. `_normalize()` - 12 edges
8. `search_stack()` - 12 edges
9. `What You Must Do When Invoked` - 12 edges
10. `Visual Companion Guide` - 12 edges

## Surprising Connections (you probably didn't know these)
- `_generate_intelligent_overrides()` --calls--> `search()`  [EXTRACTED]
  .claude/skills/design-screens/uiux/scripts/design_system.py → .claude/skills/design-screens/uiux/scripts/core.py
- `handleNextClick()` --calls--> `resolveCelebrationType()`  [EXTRACTED]
  site/.vitepress/theme/components/PageNextButton.vue → site/.vitepress/theme/composables/useProgress.js
- `handleNextClick()` --calls--> `togglePageCheck()`  [EXTRACTED]
  site/.vitepress/theme/components/PageNextButton.vue → site/.vitepress/theme/composables/useProgress.js
- `handleNextClick()` --calls--> `playApplauseSound()`  [EXTRACTED]
  site/.vitepress/theme/components/PageNextButton.vue → site/.vitepress/theme/applauseSound.js
- `handleNextClick()` --calls--> `toPageKey()`  [EXTRACTED]
  site/.vitepress/theme/components/PageNextButton.vue → site/.vitepress/theme/composables/useProgress.js

## Import Cycles
- None detected.

## Communities (142 total, 9 thin omitted)

### Community 0 - "core.py"
Cohesion: 0.06
Nodes (60): BM25, _contains_phrase(), detect_domain(), _domain_keywords(), _exact_match_diagnostic(), _exact_row_identity(), _exact_stack_identifier(), _file_signature() (+52 more)

### Community 1 - "server.cjs"
Cohesion: 0.06
Nodes (55): bootstrapPage(), brandMarkup(), broadcast(), browserLauncherForPlatform(), chmodOwnerOnly(), clients, companionUrl(), computeAcceptKey() (+47 more)

### Community 2 - "ModuleProgressDots.vue"
Cohesion: 0.15
Nodes (9): { countCheckedPages }, { localePrefix }, moduleStates, embedUrl, { pickSiteText }, placeholderText, props, watchLabel (+1 more)

### Community 3 - "deny"
Cohesion: 0.07
Nodes (27): autoMemoryEnabled, disableArtifact, disableBundledSkills, disableClaudeAiConnectors, disableRemoteControl, disableWorkflows, permissions, deny (+19 more)

### Community 4 - "What You Must Do When Invoked"
Cohesion: 0.07
Nodes (26): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+18 more)

### Community 5 - "Dimensions"
Cohesion: 0.08
Nodes (24): 10. Existing libraries — don't reinvent the wheel, 1. File structure & changes, 1. Gather facts — never ask the user for what you can find, 2. API contracts, 2. Say if this is greenfield or brownfield, 3. Classify the blast radius, 3. Database changes, 4. Build the coverage checklist (+16 more)

### Community 6 - "allow"
Cohesion: 0.08
Nodes (24): allow, Agent, Bash(git add:*), Bash(git commit:*), Bash(git diff:*), Bash(git log:*), Bash(git show:*), Bash(git status:*) (+16 more)

### Community 7 - "grill-for-business/SKILL.md"
Cohesion: 0.08
Nodes (23): Anti-Sycophancy Rules, Done — End of Grilling, Important Rules, Operating Principles, Operating Principles, Phase 1: Context Gathering, Phase 2.75: Landscape Awareness, Phase 2A: Startup Mode — YC Product Diagnostic (+15 more)

### Community 8 - "Visual Companion Guide"
Cohesion: 0.10
Nodes (19): Browser Events Format, Cards (visual designs), Cleaning Up, CSS Classes Available, Design Tips, File Naming, How It Works, Mock elements (wireframe building blocks) (+11 more)

### Community 9 - "Before Grill — the problem gate"
Cohesion: 0.11
Nodes (17): 1. Who has what problem?, 2. What should become easier after this exists?, 3. Who is the user who actually uses it?, 4. What is the outcome?, 5. Define the boundaries, 6. Identify the unknowns, 7. Design the simplest architecture, Before Grill — the problem gate (+9 more)

### Community 10 - "Page Map"
Cohesion: 0.12
Nodes (15): 10. Frontend UI Design — 5 pages, 11. Clean Code & Testing — 5 pages, 12. Projects — School CRM Capstone — 6 pages, 1. HTML/CSS — 8 pages, 2. JavaScript — 10 pages, 3. React — 8 pages, 4. Python/Flask — 13 pages, 5. Database — 6 pages (+7 more)

### Community 11 - "tickets.mjs"
Cohesion: 0.14
Nodes (11): args, blockedArg, byId, flushPoint(), flushTask(), ids, ok, out (+3 more)

### Community 12 - "design_system.py"
Cohesion: 0.18
Nodes (14): ansi_ljust(), _filter_anti_patterns_for_mode(), format_ascii_box(), format_markdown(), generate_design_system(), hex_to_ansi(), Drop "avoid dark mode" advice once dark mode is the resolved answer., Convert hex color to ANSI True Color swatch (██) with fallback. (+6 more)

### Community 13 - "Steps"
Cohesion: 0.15
Nodes (12): 1. Gather — never re-ask what is already settled, 2. Sort — each fact goes to exactly one file, 3. Write — by the rules below, Current truth, not history, Independent entries, Log Decisions — the recorder, One fact, one place, Precondition (+4 more)

### Community 14 - "Test-Driven Development"
Cohesion: 0.15
Nodes (10): Designing for Mockability, When to Mock, Anti-patterns, Rules of the loop, Seams — where tests go, Test-Driven Development, What a good test is, Bad Tests (+2 more)

### Community 15 - "package.json"
Cohesion: 0.15
Nodes (12): dependencies, canvas-confetti, devDependencies, vitepress, canvas-confetti, name, private, scripts (+4 more)

### Community 16 - "DesignSystemGenerator"
Cohesion: 0.15
Nodes (9): DesignSystemGenerator, Generates design system recommendations from aggregated searches., Load reasoning rules from CSV., Execute searches across multiple domains., Select best matching result based on priority keywords., Extract results list from search result dict., Generate complete design system recommendation. variance/motion/density are…, Bucket a 1-10 dial value into its tier config. Returns None if value is None. (+1 more)

### Community 17 - "._apply_reasoning"
Cohesion: 0.24
Nodes (8): Find matching reasoning rule for a category., Apply reasoning rules to search results., apply_decision_rules(), _object_without_duplicates(), parse_decision_rules(), Return deterministic mutations and an audit trail; never execute data., Parse the canonical condition -> action-array representation., _validate_action()

### Community 18 - "Python Code Style & Standards"
Cohesion: 0.20
Nodes (9): Code Quality, Error & Exception Handling, File Structure, Imports, Libraries & Dependencies, MVC Folder Structure, Naming Conventions, Python Code Style & Standards (+1 more)

### Community 19 - "_select_palette_for_mode"
Cohesion: 0.22
Nodes (10): _contrast_ratio(), _derive_dark_palette(), _palette_is_dark(), WCAG relative luminance of a #RRGGBB string, or None if unparseable., True when a colors.csv row's Background is a dark surface., WCAG contrast ratio for two hex colors, or None if either is invalid., Keep product brand tokens while deriving accessible dark surfaces., Pick the highest-ranked palette matching the resolved mode. Only the dark case… (+2 more)

### Community 20 - "_generate_intelligent_overrides"
Cohesion: 0.33
Nodes (6): _detect_page_type(), format_page_override_md(), _generate_intelligent_overrides(), Format a page-specific override file with intelligent AI-generated content., Generate intelligent overrides based on page type using layered search. Uses…, Detect page type from context and search results.

### Community 21 - "AGENTS.md"
Cohesion: 0.22
Nodes (8): Env Files, Language, Private Folder, Rules, Search, Tasks, Timelines, Working Directory

### Community 22 - "CLAUDE.md"
Cohesion: 0.22
Nodes (8): Env Files, Language, Private Folder, Rules, Search, Tasks, Timelines, Working Directory

### Community 23 - "persist_design_system"
Cohesion: 0.25
Nodes (9): format_master_md(), persist_design_system(), Format design system as MASTER.md with hierarchical override logic., Slugify a name into a single safe path segment. Only [a-z0-9_-] survives; every…, Write fully to a temp file, then publish atomically., Persist design system to design-system/<project>/ folder using Master +…, safe_slug(), _write_persisted_file() (+1 more)

### Community 24 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 25 - "helper.js"
Cohesion: 0.42
Nodes (7): connect(), nextReconnectDelay(), reloadAfterRecovery(), sessionKey(), setStatus(), showTombstone(), websocketUrl()

### Community 26 - "Code Style & Standards"
Cohesion: 0.25
Nodes (7): Bug Fixes & Refactoring, Code Quality, Code Style & Standards, Function Length & Structure, Naming & Constants, Parameters, Returns & Data Flow, Starting a New Feature

### Community 27 - "React Code Style & Standards"
Cohesion: 0.25
Nodes (7): File & Component Structure, Folder Structure, Naming Conventions, React Code Style & Standards, Responsive Design, State & Logic Separation, Vocabulary

### Community 28 - "Process"
Cohesion: 0.25
Nodes (7): 1. Pin the fixed point, 2. Identify the spec source, 3. Identify the standards sources, 4. Spawn both sub-agents in parallel, 5. Aggregate, Process, Why two axes

### Community 29 - "Design Screens"
Cohesion: 0.25
Nodes (7): Checklist before reporting done, Design Screens, Guardrails, Screen file rules, Steps, The design brain, Thinking rules (apply while designing)

### Community 30 - "Brainstorming Ideas Into Designs"
Cohesion: 0.25
Nodes (7): Anti-Pattern: "This Is Too Simple To Need A Design", Brainstorming Ideas Into Designs, Checklist, Ending the Session, Process Flow, The Process, Visual Companion

### Community 31 - "Write Screens"
Cohesion: 0.25
Nodes (7): Guardrails, Input, Steps, Template, The balance (most important rule), Write Screens, Writing rules

### Community 32 - "grill-with-openspec/SKILL.md"
Cohesion: 0.29
Nodes (6): Ending Discovery, Guardrails, Handling Different Entry Points, The Stance, What You Don't Have To Do, What You Might Do

### Community 33 - "stop-server.sh"
Cohesion: 0.43
Nodes (4): command_has_server_id(), is_brainstorm_server(), mark_stopped(), stop-server.sh script

### Community 34 - "write-spec-greenfield/templates/proposal.md"
Cohesion: 0.29
Nodes (6): Build Slices, Capabilities, Impact, New Capabilities, What Changes, Why

### Community 35 - "write-spec/templates/proposal.md"
Cohesion: 0.29
Nodes (6): Capabilities, Impact, Modified Capabilities, New Capabilities, What Changes, Why

### Community 36 - "1.1 Start Here"
Cohesion: 0.50
Nodes (3): 1.1 Start Here, User side vs server side, in basic words, What HTML and CSS are

### Community 37 - "1.2 HTML Essentials"
Cohesion: 0.29
Nodes (6): 1.2 HTML Essentials, First: what to do and what not to do, Forms: how a page collects input, Hands-on: build your portfolio page, part by part, The structure every page shares, The tags you will actually use

### Community 38 - "1.1 Start Here"
Cohesion: 0.50
Nodes (3): 1.1 Start Here, HTML और CSS क्या हैं, User side vs server side — आसान शब्दों में

### Community 39 - "1.2 HTML Essentials"
Cohesion: 0.29
Nodes (6): 1.2 HTML Essentials, Forms — page input कैसे लेता है, Hands-on — अपना portfolio page बनाओ, हिस्सा-हिस्सा में, Structure जो हर page share करता है, Tags जो actually use होते हैं, पहले: क्या करना है और क्या नहीं

### Community 40 - "node-js-code-style.md"
Cohesion: 0.33
Nodes (5): Error & Exception Handling, File Structure, Function Composition & Layout, Libraries & Dependencies, MVC Folder Structure

### Community 42 - "PageNextButton.vue"
Cohesion: 0.13
Nodes (18): playApplauseSound(), CENTER_BURST_OPTIONS, fireModuleCelebration(), firePageCelebration(), handleNextClick(), isCelebrating, isChecked, { isPageChecked, togglePageCheck, findNextPageAfter, resolveCelebrationType } (+10 more)

### Community 43 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 44 - "write-spec-greenfield/templates/design.md"
Cohesion: 0.40
Nodes (4): Context, Decisions, Goals / Non-Goals, Risks / Trade-offs

### Community 45 - "write-spec-greenfield/templates/spec.md"
Cohesion: 0.40
Nodes (4): ADDED Requirements, Purpose, Requirement: <!-- requirement name -->, Scenario: <!-- scenario name -->

### Community 46 - "write-spec/templates/design.md"
Cohesion: 0.40
Nodes (4): Context, Decisions, Goals / Non-Goals, Risks / Trade-offs

### Community 47 - "write-spec/templates/spec.md"
Cohesion: 0.40
Nodes (4): ADDED Requirements, Purpose, Requirement: <!-- requirement name -->, Scenario: <!-- scenario name -->

### Community 48 - "Curosai Intern Training"
Cohesion: 0.40
Nodes (4): CurosAI Intern Training, How to use this site, The learning approach in short, What you will build

### Community 49 - "Curosai Intern Training"
Cohesion: 0.40
Nodes (4): Aap kya banoge, CurosAI Intern Training, Is site ko kaise use karein, Learning approach — short mein

### Community 50 - "useProgress.js"
Cohesion: 0.27
Nodes (10): checkedPages, countCheckedPages(), findNextPageAfter(), findNextUnfinishedPagePath(), isPageChecked(), PAGE_ORDER, resolveCelebrationType(), togglePageCheck() (+2 more)

### Community 51 - "Commit Story"
Cohesion: 0.50
Nodes (3): Commit Story, Git rules, Steps

### Community 52 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 53 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 54 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 55 - "Grill — style router"
Cohesion: 0.50
Nodes (3): Grill — style router, Step 1 — Ask which style, Step 2 — Load and run the chosen skill

### Community 56 - "write-spec-greenfield/instructions/tasks.md"
Cohesion: 0.50
Nodes (3): How to break a slice into tasks, One group per build slice, Task quality

### Community 57 - "HTML-CSS.md"
Cohesion: 0.50
Nodes (3): **Project 1 – Registration Form**, **Project 2 – Personal Portfolio Page**, **Projects - **

### Community 83 - "QuizBlock.vue"
Cohesion: 0.25
Nodes (8): blockTitle, handleAnswerToggle(), hideAnswerLabel, isAnswerVisible(), { pickSiteText }, props, showAnswerLabel, visibleAnswerIndexes

### Community 84 - "1.3 CSS and Tailwind CSS"
Cohesion: 0.29
Nodes (6): 1.3 CSS and Tailwind CSS, Hands-on: restyle your portfolio, twice, Responsiveness: where Tailwind shines, Tailwind CSS: the framework we use, The core parts of Tailwind, What CSS actually does

### Community 85 - "ContinueButton.vue"
Cohesion: 0.25
Nodes (6): buttonLabel, { findNextUnfinishedPagePath }, hasUnfinishedPages, { pickSiteText, localePrefix }, router, targetPagePath

### Community 86 - "2.10 Project — Weather App"
Cohesion: 0.25
Nodes (7): 2.10 Project — Weather App, How to build it — AI drives, you navigate, Know it, do not copy it, Test Yourself — the whole module, The changes you direct, The module in one breath, What you build

### Community 87 - "2.2 Variables, Types & Operators"
Cohesion: 0.33
Nodes (5): 2.2 Variables, Types & Operators, Data types — the five everyday shapes, Hands-on — predict, run, compare, Operators — the everyday moves, Variables — let and const

### Community 88 - "2.1 Start Here"
Cohesion: 0.40
Nodes (4): 2.1 Start Here, The one method of this whole module — predict, then run, Try it right now — the browser console, What JavaScript actually does

### Community 89 - "2.3 Arrays & Objects"
Cohesion: 0.33
Nodes (5): 2.3 Arrays & Objects, Arrays — a numbered list, Hands-on — predict, run, compare, map, filter, find — the three daily methods, Objects — a labeled box

### Community 90 - "2.4 Conditions & Loops"
Cohesion: 0.40
Nodes (4): 2.4 Conditions & Loops, Conditions — if, else, Hands-on — predict, run, compare, Loops — for, for...of, forEach

### Community 91 - "2.5 Functions & ES6 Modules"
Cohesion: 0.40
Nodes (4): 2.5 Functions & ES6 Modules, ES6 Modules — split code across files, Functions — name a piece of work, Hands-on — predict, run, compare

### Community 92 - "2.6 DOM, Events & Storage"
Cohesion: 0.29
Nodes (6): 2.6 DOM, Events & Storage, Events — code that waits, Hands-on — predict, run, compare, localStorage — the browser remembers, sessionStorage — the same drawer, but the tab forgets, The DOM — the page as live objects

### Community 93 - "2.7 Async & APIs"
Cohesion: 0.33
Nodes (5): 2.7 Async & APIs, An API — asking another computer for data, fetch + async/await — ask, then wait, Hands-on — predict, run, compare, try/catch — when the request fails

### Community 94 - "2.8 Project — Calculator"
Cohesion: 0.33
Nodes (5): 2.8 Project — Calculator, How to build it — AI drives, you navigate, Know it, do not copy it, The changes you direct, What you build

### Community 95 - "2.9 Project — To-Do List"
Cohesion: 0.33
Nodes (5): 2.9 Project — To-Do List, How to build it — AI drives, you navigate, Know it, do not copy it, The changes you direct, What you build

### Community 96 - "2.10 Project — Weather App"
Cohesion: 0.25
Nodes (7): 2.10 Project — Weather App, आप क्या बनाते हो, आप जो बदलाव करवाते हो, इसे जानो, copy मत करो, कैसे बनाते हैं — AI चलाता है, आप रास्ता दिखाते हो, खुद को जाँचो — पूरा module, पूरा module एक साँस में

### Community 97 - "1.3 CSS and Tailwind CSS"
Cohesion: 0.29
Nodes (6): 1.3 CSS and Tailwind CSS, CSS actually करता क्या है, Hands-on — अपना portfolio दो बार restyle करो, Responsiveness — जहाँ Tailwind चमकता है, Tailwind CSS — जो framework हम use करते हैं, Tailwind के core हिस्से

### Community 98 - "2.6 DOM, Events & Storage"
Cohesion: 0.29
Nodes (6): 2.6 DOM, Events & Storage, DOM — page जीवित objects के रूप में, Events — इंतज़ार करने वाला code, Hands-on — predict, run, compare, localStorage — browser को याद रहता है, sessionStorage — वही drawer, पर tab भूल जाता है

### Community 99 - "_resolve_color_mode"
Cohesion: 0.33
Nodes (6): _query_wants_dark(), True when a styles.csv row describes itself as dark-first., True when the query explicitly asks for a dark theme., Resolve the mode the rest of the output has to agree with., _resolve_color_mode(), _style_is_dark_primary()

### Community 100 - "2.2 Variables, Types & Operators"
Cohesion: 0.33
Nodes (5): 2.2 Variables, Types & Operators, Data types — रोज़ के पाँच शक्लें, Hands-on — predict, run, compare, Operators — रोज़ की चालें, Variables — let और const

### Community 101 - "2.3 Arrays & Objects"
Cohesion: 0.33
Nodes (5): 2.3 Arrays & Objects, Arrays — नंबर वाली list, Hands-on — predict, run, compare, map, filter, find — तीन रोज़ वाले methods, Objects — नाम वाला डब्बा

### Community 102 - "2.7 Async & APIs"
Cohesion: 0.33
Nodes (5): 2.7 Async & APIs, fetch + async/await — पूछो, फिर इंतज़ार करो, Hands-on — predict, run, compare, try/catch — जब request फेल हो, एक API — दूसरे computer से data माँगना

### Community 103 - "2.8 Project — Calculator"
Cohesion: 0.33
Nodes (5): 2.8 Project — Calculator, आप क्या बनाते हो, आप जो बदलाव करवाते हो, इसे जानो, copy मत करो, कैसे बनाते हैं — AI चलाता है, आप रास्ता दिखाते हो

### Community 104 - "2.9 Project — To-Do List"
Cohesion: 0.33
Nodes (5): 2.9 Project — To-Do List, आप क्या बनाते हो, आप जो बदलाव करवाते हो, इसे जानो, copy मत करो, कैसे बनाते हैं — AI चलाता है, आप रास्ता दिखाते हो

### Community 105 - "2.1 Start Here"
Cohesion: 0.40
Nodes (4): 2.1 Start Here, JavaScript actually करता क्या है, अभी, इसी वक़्त आज़माओ — browser console, पूरे module का एक method — पहले predict करो, फिर run करो

### Community 106 - "2.4 Conditions & Loops"
Cohesion: 0.40
Nodes (4): 2.4 Conditions & Loops, Conditions — if, else, Hands-on — predict, run, compare, Loops — for, for...of, forEach

### Community 107 - "2.5 Functions & ES6 Modules"
Cohesion: 0.40
Nodes (4): 2.5 Functions & ES6 Modules, ES6 Modules — code को files में बाँटो, Functions — काम को नाम दे दो, Hands-on — predict, run, compare

### Community 108 - "3.7 npm & package.json"
Cohesion: 0.22
Nodes (8): 3.7 npm & package.json, Every file is a module, Hands-on — read your own project, node_modules — where the downloads live, npm — the package manager, package.json — the project's ID card, package-lock.json — the exact receipt, The tour — three files that matter

### Community 109 - "3.6 More Hooks"
Cohesion: 0.29
Nodes (6): 3.6 More Hooks, State management — when even context is not enough, The problem — props through five floors, useCallback — meet it, park it, useContext — one value, every floor, useMemo — meet it, park it

### Community 110 - "3.9 npm Packages We Use"
Cohesion: 0.29
Nodes (6): 3.9 npm Packages We Use, AI drives, you navigate, Axios — fetch with less work, Hands-on — both packages, hands on the wheel, The habit — ask before you build, Zustand — the state store

### Community 111 - "3.2 Components & Props"
Cohesion: 0.33
Nodes (5): 3.2 Components & Props, A component is a function that returns JSX, Hands-on — one card, three people, Props — data you pass in, What JSX is

### Community 112 - "3.4 Hooks — useState & useRef"
Cohesion: 0.33
Nodes (5): 3.4 Hooks — useState & useRef, Hands-on — feel the difference, useRef — like useState, but the screen stays quiet, useState — memory that moves the screen, Why hooks exist

### Community 113 - "3.8 React Router"
Cohesion: 0.33
Nodes (5): 3.8 React Router, Dynamic routes — one Route, many pages, Hands-on — give the app an address bar, Routes — the map of the app, The big idea — routing without the server

### Community 114 - "3.10 Project — Password Manager"
Cohesion: 0.33
Nodes (5): 3.10 Project — Password Manager, How to build it — AI drives, you navigate, Know it, do not copy it, The changes you direct, What you build

### Community 115 - "3.11 Project — Weather Dashboard"
Cohesion: 0.33
Nodes (5): 3.11 Project — Weather Dashboard, How to build it — AI drives, you navigate, Know it, do not copy it, Make it eye-catching — you direct the design, What you build

### Community 116 - "3.1 Start Here"
Cohesion: 0.40
Nodes (4): 3.1 Start Here, Hands-on — make the app yours, The problem React solves, Your first React app — ten minutes

### Community 117 - "3.3 Conditional Rendering & Lists"
Cohesion: 0.40
Nodes (4): 3.3 Conditional Rendering & Lists, Hands-on — a list that knows its state, Lists — map, not loops, Three ways to show something only sometimes

### Community 118 - "3.5 Hooks — useEffect"
Cohesion: 0.40
Nodes (4): 3.5 Hooks — useEffect, Hands-on — data from outside, The dependency array — the whole hook in one line, useEffect — after the render that matters

### Community 119 - "6.2 Essential Commands"
Cohesion: 0.20
Nodes (9): 6.2 Essential Commands, Delete: rm (read twice), Find your feet: pwd, ls, cd, Hands-on: build a small world, then take it down, Look inside: cat, Make things: mkdir, touch, echo, Move, copy, rename: mv and cp, Test yourself (+1 more)

### Community 120 - "7.2 Everyday Git"
Cohesion: 0.22
Nodes (8): 7.2 Everyday Git, add — call into the frame, commit — the click, Hands-on — a repo with a real history, log — flip the album, Not everything belongs in the photo, status — ask before everything, The three places a change can live

### Community 121 - "7.4 Branches at a Glance"
Cohesion: 0.22
Nodes (8): 7.4 Branches at a Glance, A branch is a parallel timeline, git worktree — one repo, many folders, Half-done? Branch it and push anyway, Test Yourself, The default line — main, The Git summary — the module on one table, Where you stand

### Community 122 - "3.7 npm & package.json"
Cohesion: 0.22
Nodes (8): 3.7 npm & package.json, Hands-on — अपना project खुद पढ़ो, node_modules — downloads का घर, npm — package manager, package.json — project का ID card, package-lock.json — ठीक-ठीक receipt, एक बार घुमाओ — तीन files जो matter करती हैं, हर file एक module है

### Community 123 - "6.1 GUI vs Terminal"
Cohesion: 0.29
Nodes (6): 6.1 GUI vs Terminal, Hands-on: your first CLI magic (Windows), Nothing to fear, Nothing to memorize, Two ways to talk to your computer, Why developers live here

### Community 124 - "7.3 Remote & GitHub"
Cohesion: 0.29
Nodes (6): 7.3 Remote & GitHub, clone — take a whole repo home, Git vs GitHub — two names, two things, Hands-on — your code leaves the laptop, push and pull — the sync, The remote — a repo with an address

### Community 125 - "3.6 More Hooks"
Cohesion: 0.29
Nodes (6): 3.6 More Hooks, Problem — props पाँच मंज़िल नीचे तक, State management — जब context भी कम पड़ जाए, useCallback — मिल लो, आगे बढ़ो, useContext — एक value, हर मंज़िल, useMemo — मिल लो, आगे बढ़ो

### Community 126 - "3.9 npm Packages We Use"
Cohesion: 0.29
Nodes (6): 3.9 npm Packages We Use, AI चलाता है, आप रास्ता दिखाते हो, Axios — fetch, कम मेहनत में, Hands-on — दोनों packages, पहिया आपके हाथ, Zustand — state का store, आदत — बनाने से पहले पूछो

### Community 127 - "7.1 What Git Actually Is"
Cohesion: 0.33
Nodes (5): 7.1 What Git Actually Is, Hands-on — first contact, Install git on your machine, The problem it solves, What a repo is

### Community 128 - "3.2 Components & Props"
Cohesion: 0.33
Nodes (5): 3.2 Components & Props, Component एक function है जो JSX लौटाता है, Hands-on — एक card, तीन लोग, JSX actually है क्या, Props — अंदर भेजा गया data

### Community 129 - "3.4 Hooks — useState & useRef"
Cohesion: 0.33
Nodes (5): 3.4 Hooks — useState & useRef, Hands-on — फ़र्क़ महसूस करो, Hooks exist क्यों करते हैं, useRef — useState जैसा, पर screen चुप रहती है, useState — वो याददाश्त जो screen हिलाती है

### Community 130 - "3.8 React Router"
Cohesion: 0.33
Nodes (5): 3.8 React Router, Dynamic routes — एक Route, कई pages, Hands-on — app को address bar दो, Routes — app का नक्शा, बड़ा idea — server के बिना routing

### Community 131 - "3.10 Project — Password Manager"
Cohesion: 0.33
Nodes (5): 3.10 Project — Password Manager, आप क्या बनाते हो, आप जो बदलाव करवाते हो, इसे जानो, copy मत करो, कैसे बनाते हैं — AI चलाता है, आप रास्ता दिखाते हो

### Community 132 - "3.11 Project — Weather Dashboard"
Cohesion: 0.33
Nodes (5): 3.11 Project — Weather Dashboard, आप क्या बनाते हो, इसे जानो, copy मत करो, कैसे बनाते हैं — AI चलाता है, आप रास्ता दिखाते हो, दिखने में चट करने वाला बनाओ — design आप direct करो

### Community 133 - "3.1 Start Here"
Cohesion: 0.40
Nodes (4): 3.1 Start Here, Hands-on — app को अपना बनाओ, React कौन सी problem सुलझाता है, आपका पहला React app — दस मिनट

### Community 134 - "3.3 Conditional Rendering & Lists"
Cohesion: 0.40
Nodes (4): 3.3 Conditional Rendering & Lists, Hands-on — एक list जो अपना हाल जानती है, Lists — loops नहीं, map, तीन तरीके — कभी-कभी दिखाओ

### Community 135 - "3.5 Hooks — useEffect"
Cohesion: 0.40
Nodes (4): 3.5 Hooks — useEffect, Dependency array — पूरा hook एक line में, Hands-on — बाहर से आया data, useEffect — जो render matter करता है, उसके बाद

### Community 136 - "Humanizer: remove AI writing patterns"
Cohesion: 0.05
Nodes (39): 10. Hyphenated pairs everywhere, 11. Passive voice and missing subjects, 12. Overused AI words, 13. Inflated significance, 14. Vague connection or association, 15. Shallow -ing riders, 16. Sales language, 17. Borrowed authority (+31 more)

### Community 137 - "8.1 What Agent Coding Actually Is"
Cohesion: 0.25
Nodes (7): 8.1 What Agent Coding Actually Is, Chat vs agent, Claude Code, the agent we use daily, Gemini CLI and the many others, Hands-on: meet your agent, OpenCode, the same animal in a different coat, The tools will change

### Community 138 - "8.6 When to Trust, When to Check"
Cohesion: 0.25
Nodes (7): 8.6 When to Trust, When to Check, Test yourself, The agent is confident even when wrong, The checks that are always cheap, The module on one table, The tools of today: one table, Where you stand

### Community 139 - "8.2 Controlling the Agent"
Cohesion: 0.29
Nodes (6): 8.2 Controlling the Agent, Hands-on: take the reins, One change at a time, The plan: grill first, code last, The prompt: say what, where, and done, The review: git diff is your X-ray

### Community 140 - "8.5 From IDE to ADE: Meet Orca"
Cohesion: 0.29
Nodes (6): 8.5 From IDE to ADE: Meet Orca, Hands-on, Orca: the room we use, The ADE era: built for you and your agents, The IDE era: built for one typist, Why we use an ADE, not an IDE

### Community 141 - "8.3 Context"
Cohesion: 0.40
Nodes (4): 8.3 Context, CLAUDE.md, or AGENTS.md, Hands-on: ask, read, use, Rules files

### Community 142 - "8.4 Skills"
Cohesion: 0.40
Nodes (4): 8.4 Skills, A skill is a complete guide, Hands-on, The skills our team uses

## Knowledge Gaps
- **672 isolated node(s):** `$schema`, `autoMemoryEnabled`, `disableBundledSkills`, `disableWorkflows`, `disableArtifact` (+667 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `DesignSystemGenerator` connect `DesignSystemGenerator` to `._apply_reasoning`, `design_system.py`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **Why does `search()` connect `core.py` to `DesignSystemGenerator`, `design_system.py`, `_generate_intelligent_overrides`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **Why does `apply_decision_rules()` connect `._apply_reasoning` to `design_system.py`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **What connects `$schema`, `autoMemoryEnabled`, `disableBundledSkills` to the rest of the system?**
  _672 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `core.py` be split into smaller, more focused modules?**
  _Cohesion score 0.06241519674355495 - nodes in this community are weakly interconnected._
- **Should `server.cjs` be split into smaller, more focused modules?**
  _Cohesion score 0.05868118572292801 - nodes in this community are weakly interconnected._
- **Should `deny` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._