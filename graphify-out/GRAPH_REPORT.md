# Graph Report - Intern-Training  (2026-10-01)

## Corpus Check
- 91 files · ~168,873 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 766 nodes · 906 edges · 87 communities (78 shown, 9 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ea7d2ec8`
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
- .generate
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
- _generate_intelligent_overrides
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
- playApplauseSound
- ContinueButton.vue
- _resolve_color_mode

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
- `handleNextClick()` --calls--> `playApplauseSound()`  [EXTRACTED]
  site/.vitepress/theme/components/PageNextButton.vue → site/.vitepress/theme/applauseSound.js
- `handleNextClick()` --calls--> `resolveCelebrationType()`  [EXTRACTED]
  site/.vitepress/theme/components/PageNextButton.vue → site/.vitepress/theme/composables/useProgress.js
- `handleNextClick()` --calls--> `togglePageCheck()`  [EXTRACTED]
  site/.vitepress/theme/components/PageNextButton.vue → site/.vitepress/theme/composables/useProgress.js
- `handleNextClick()` --calls--> `toPageKey()`  [EXTRACTED]
  site/.vitepress/theme/components/PageNextButton.vue → site/.vitepress/theme/composables/useProgress.js

## Import Cycles
- None detected.

## Communities (87 total, 9 thin omitted)

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
Cohesion: 0.22
Nodes (12): ansi_ljust(), format_ascii_box(), format_markdown(), generate_design_system(), hex_to_ansi(), Convert hex color to ANSI True Color swatch (██) with fallback., Like str.ljust but accounts for zero-width ANSI escape sequences., Create a Unicode section separator: ├─── NAME ───...┤ (+4 more)

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
Cohesion: 0.27
Nodes (4): DesignSystemGenerator, Generates design system recommendations from aggregated searches., Load reasoning rules from CSV., Select best matching result based on priority keywords.

### Community 17 - "._apply_reasoning"
Cohesion: 0.24
Nodes (8): Find matching reasoning rule for a category., Apply reasoning rules to search results., apply_decision_rules(), _object_without_duplicates(), parse_decision_rules(), Return deterministic mutations and an audit trail; never execute data., Parse the canonical condition -> action-array representation., _validate_action()

### Community 18 - "Python Code Style & Standards"
Cohesion: 0.20
Nodes (9): Code Quality, Error & Exception Handling, File Structure, Imports, Libraries & Dependencies, MVC Folder Structure, Naming Conventions, Python Code Style & Standards (+1 more)

### Community 19 - "_select_palette_for_mode"
Cohesion: 0.22
Nodes (10): _contrast_ratio(), _derive_dark_palette(), _palette_is_dark(), WCAG relative luminance of a #RRGGBB string, or None if unparseable., True when a colors.csv row's Background is a dark surface., WCAG contrast ratio for two hex colors, or None if either is invalid., Keep product brand tokens while deriving accessible dark surfaces., Pick the highest-ranked palette matching the resolved mode. Only the dark case… (+2 more)

### Community 20 - ".generate"
Cohesion: 0.20
Nodes (7): _filter_anti_patterns_for_mode(), Drop "avoid dark mode" advice once dark mode is the resolved answer., Execute searches across multiple domains., Extract results list from search result dict., Generate complete design system recommendation. variance/motion/density are…, Bucket a 1-10 dial value into its tier config. Returns None if value is None., _resolve_dial()

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
Cohesion: 0.29
Nodes (6): 1.1 Start Here, Hands-on, The AI-first method: generate → ask → modify → observe, User side vs server side — in basic words, Watch, What HTML and CSS are

### Community 37 - "1.2 HTML Essentials"
Cohesion: 0.29
Nodes (6): 1.2 HTML Essentials, Forms — how a page collects input, Hands-on, The structure every page shares, The tags you will actually use, Watch

### Community 38 - "1.1 Start Here"
Cohesion: 0.29
Nodes (6): 1.1 Start Here, AI-first method: generate → ask → modify → observe, Hands-on, HTML aur CSS kya hain, User side vs server side — simple shabdon mein, Watch karo

### Community 39 - "1.2 HTML Essentials"
Cohesion: 0.29
Nodes (6): 1.2 HTML Essentials, Forms — page input kaise leta hai, Hands-on, Structure jo har page share karta hai, Tags jo actually use hote hain, Watch karo

### Community 40 - "node-js-code-style.md"
Cohesion: 0.33
Nodes (5): Error & Exception Handling, File Structure, Function Composition & Layout, Libraries & Dependencies, MVC Folder Structure

### Community 41 - "_generate_intelligent_overrides"
Cohesion: 0.33
Nodes (6): _detect_page_type(), format_page_override_md(), _generate_intelligent_overrides(), Format a page-specific override file with intelligent AI-generated content., Generate intelligent overrides based on page type using layered search. Uses…, Detect page type from context and search results.

### Community 42 - "PageNextButton.vue"
Cohesion: 0.13
Nodes (17): CENTER_BURST_OPTIONS, fireModuleCelebration(), firePageCelebration(), handleNextClick(), isCelebrating, isChecked, { isPageChecked, togglePageCheck, findNextPageAfter, resolveCelebrationType }, LEFT_SIDE_BURST_OPTIONS (+9 more)

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
Nodes (4): Curosai Intern Training, How to use this site, The learning approach in short, What you will build

### Community 49 - "Curosai Intern Training"
Cohesion: 0.40
Nodes (4): Aap kya banoge, Curosai Intern Training, Is site ko kaise use karein, Learning approach — short mein

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

### Community 84 - "playApplauseSound"
Cohesion: 0.70
Nodes (4): createNoiseBuffer(), getAudioContext(), playApplauseSound(), scheduleClap()

### Community 85 - "ContinueButton.vue"
Cohesion: 0.25
Nodes (6): buttonLabel, { findNextUnfinishedPagePath }, hasUnfinishedPages, { pickSiteText, localePrefix }, router, targetPagePath

### Community 86 - "_resolve_color_mode"
Cohesion: 0.33
Nodes (6): _query_wants_dark(), True when a styles.csv row describes itself as dark-first., True when the query explicitly asks for a dark theme., Resolve the mode the rest of the output has to agree with., _resolve_color_mode(), _style_is_dark_primary()

## Knowledge Gaps
- **401 isolated node(s):** `$schema`, `autoMemoryEnabled`, `disableBundledSkills`, `disableWorkflows`, `disableArtifact` (+396 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **9 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `search()` connect `core.py` to `_generate_intelligent_overrides`, `design_system.py`, `.generate`?**
  _High betweenness centrality (0.008) - this node is a cross-community bridge._
- **Why does `DesignSystemGenerator` connect `DesignSystemGenerator` to `._apply_reasoning`, `design_system.py`, `.generate`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Why does `allow` connect `allow` to `deny`?**
  _High betweenness centrality (0.003) - this node is a cross-community bridge._
- **What connects `$schema`, `autoMemoryEnabled`, `disableBundledSkills` to the rest of the system?**
  _401 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `core.py` be split into smaller, more focused modules?**
  _Cohesion score 0.06241519674355495 - nodes in this community are weakly interconnected._
- **Should `server.cjs` be split into smaller, more focused modules?**
  _Cohesion score 0.05868118572292801 - nodes in this community are weakly interconnected._
- **Should `deny` be split into smaller, more focused modules?**
  _Cohesion score 0.07142857142857142 - nodes in this community are weakly interconnected._