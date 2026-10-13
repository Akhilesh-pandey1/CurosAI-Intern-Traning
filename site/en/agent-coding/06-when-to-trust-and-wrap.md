# 8.6 When to Trust, When to Check

The last page of the module, and the habit that decides whether you become a builder or a spectator.

## The agent is confident even when wrong

Agents fail in a special way: they produce wrong code in a perfectly confident voice. That is called hallucinating. The speed is real; the certainty is not. So the rule is sharper than trust or distrust: trust is earned per change.

## The checks that are always cheap

- `git diff`: read every line before every commit (page 8.2). Two minutes.
- Run it: the app running beats the agent swearing it works.
- Break it on purpose: the empty box, the capitals, the weird input.
- Commit small: any bad step is one step back, not one week (page 7.2).

And the forbidden sentence from the home page, now in its natural habitat: "AI did this, I don't know." If you cannot explain a line, the diff is not done being read.

## The tools of today: one table

| Role | Today's pick | The idea that stays |
| --- | --- | --- |
| Main agent | Claude Code | the loop, the supervision |
| Open-source alternative | OpenCode | same loop, any model |
| Another alternative | Gemini CLI | same loop, Google models |
| The room | Orca | ADE: parallel agents, worktrees |

Tomorrow, any name in the middle column can change, and one day will. The right column is the career. The middle column is just this quarter's cast.

## The module on one table

A menu card, not a memory test, same deal as the git table (page 7.4).

| You want to | Reach for |
| --- | --- |
| Give the agent a job | a prompt: what, where, done, what not to touch |
| See the steps before code | the plan: grill, specs, tasks, then code (page 8.2) |
| See what changed | `git diff` |
| Save the house rules | `CLAUDE.md` and rules files (page 8.3) |
| Save a repeated procedure | a skill (page 8.4) |
| Run the whole loop | grill → plan → build → test → commit |
| Run many agents at once | an ADE, Orca today (page 8.5) |
| Undo anything | git, the safety net under all of it (Module 7) |

## Where you stand

You now hold the way this company builds: the agent does the typing, and you own the goal, the context, the review, and the push. Two rules carry it all:

**Rule one: nothing ships that you cannot explain.** Diff it, run it, break it, then commit it.

**Rule two: the tools are temporary; the principles are not.** Learn why the loop, the context, the review, and the worktree exist, and you will pick up any tool this industry invents in an afternoon.

## Test yourself

Six questions, from this page. Answer first, flip after.

<QuizBlock
  :questions="[
    { question: 'How do agents fail?', answer: 'They produce wrong code in a confident voice. That is hallucinating: the speed is real, the certainty is not.' },
    { question: 'When do you trust the agent?', answer: 'Per change, never in advance. Every change earns trust through the checks.' },
    { question: 'What are the cheap checks after a change?', answer: 'Read the git diff line by line, run the app, break it on purpose with edge cases, and commit small.' },
    { question: 'Which sentence is forbidden on the team?', answer: 'AI did this, I do not know. If you cannot explain a line, the diff is not done being read.' },
    { question: 'Which tools does the team use today?', answer: 'Claude Code as the main agent, OpenCode and Gemini CLI as alternatives, and Orca as the room (page 8.5).' },
    { question: 'The tools will change. What stays?', answer: 'The right column: the loop, the supervision, the worktrees. Learn the why and any new tool is an afternoon to pick up.' }
  ]"
/>

<PageNextButton />
