# 8.4 Skills

Some jobs are not one step. They are ten steps, and the order matters: first this, then this. Retype those ten steps into the prompt every time and you will forget one. A skill is the fix: the complete guide for one job, written once, loaded whenever that job appears.

## A skill is a complete guide

A skill is a file in the repo that teaches the agent one job, step by step. It gives the agent the proper guidance, so the job runs the same way every time, for every person on the team.

You fire it two ways: type its slash name, like `/commit-story`, or describe the job in your prompt and let the agent pick the matching skill. CLAUDE.md is always on (page 8.3); a skill loads only when that job appears.

<VideoSlot topic="Skills in Claude Code" link="https://youtu.be/4y-biik_mDE?si=tpnsjx8pHu6kid2b" />

## The skills our team uses

This repo carries our skills in `.claude/skills`. The steps live inside the files; here you only need the kinds of jobs they cover: grilling an idea before building, turning it into specs and tasks, test-driven development, code review, the commit flow, and screen design.

One word from you can run a thirty-step procedure in order. That leverage is why skills exist.

## Hands-on

1. Ask your mentor to show you the skills our company provides.
2. Open `.claude/skills` in this repo and look at the names. Each folder is one skill, and the name tells you the job.
3. Start `claude` and type `/` to see the skills already built into Claude Code itself.
4. Pick one company skill and read its file. It is just clear steps written down in order.

<QuizBlock
  :questions="[
    { question: 'Why do we use skills?', answer: 'A job with ten steps needs the right order. A skill gives the agent the complete guide, first this then this, so the job runs the same way every time.' },
    { question: 'What is a skill?', answer: 'A file in the repo that teaches the agent one job, step by step.' },
    { question: 'How is a skill different from CLAUDE.md?', answer: 'CLAUDE.md is always on, a skill loads only when that job appears. (page 8.3)' },
    { question: 'How do you fire a skill?', answer: 'Type its slash name, like /commit-story, or describe the job and let the agent pick the matching skill.' },
    { question: 'Where do our skills live?', answer: 'In .claude/skills in this repo. One folder per skill.' },
    { question: 'What kinds of jobs do our skills cover?', answer: 'Grilling, specs and tasks, test-driven development, code review, the commit flow, and screen design.' },
    { question: 'Where can you see the skills built into Claude Code?', answer: 'Start claude and type / to list them.' }
  ]"
/>

<PageNextButton />
