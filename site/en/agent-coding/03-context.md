# 8.3 Context

An LLM can see one problem in a thousand ways and build a thousand solutions for it. The team needs one direction. Context gives the agent that direction: what this project is, which commands to run, and which rules to follow. Without it the agent guesses. With it the agent follows.

## CLAUDE.md, or AGENTS.md

Claude Code reads one special file at the start of every session, before any work starts: `CLAUDE.md`. The same file can be named `AGENTS.md`, and many other tools read that name.

Keep it small but exact, with exactly what you want:

- What this project is, in a few lines.
- The commands: how to run it, how to test it.
- The house rules: never touch `.env`, commit after every change (page 7.2), messages in one clear line.

You write the card once. Every session reads it, every day.

## Rules files

Bigger projects split the rules into a folder, one file per topic: code style, git habits, API rules. This very repo keeps its rules in `.claude/rules/`. The agent loads them as standing instructions.

## Hands-on: ask, read, use

1. Ask your mentor: which context file does our organization use, `CLAUDE.md` or `AGENTS.md`?
2. Open that file in this repo and read it fully. It is small; that is on purpose.
3. Read the `.claude/rules/` folder too, one file per topic.
4. Try to use it: in your next agent task, check that the agent follows the rules on the card.

<QuizBlock
  :questions="[
    { question: 'Why does an agent need context?', answer: 'An LLM can see one problem in a thousand ways and build a thousand solutions. Context points it in the one direction the team wants.' },
    { question: 'When does Claude Code read CLAUDE.md?', answer: 'At the start of every session, before any work starts.' },
    { question: 'What belongs in the context file?', answer: 'What the project is, the commands to run and test it, and the house rules. Small but exact.' },
    { question: 'What other name can this file have?', answer: 'AGENTS.md. Same idea, different tools.' },
    { question: 'What are rules files?', answer: 'The rules split by topic in .claude/rules/, like code style and git habits. This repo uses them.' },
    { question: 'How do you learn the context of a new team?', answer: 'Ask your mentor which file the organization uses, read it fully, and follow it in your work.' }
  ]"
/>

<PageNextButton />
