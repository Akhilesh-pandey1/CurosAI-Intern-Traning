# 8.1 What Is Agent Coding

Welcome to Module 8. Until today you used AI as a chat: it gave you words, you copied them into files, and you ran the commands yourself. This page flips the chair. From here the AI sits inside your project, reads your files, runs your commands, and edits your code, and you sit in the supervisor seat. This is **agent coding**: how this company builds software today, and how you will build your capstone in Module 12.

## Chat vs agent

**Chat AI** answers with text. You ask how to filter a list in JavaScript, you get an explanation, and you do everything after: open the file, paste the code, run it, fix it.

**An agent** takes a goal and does the work. You say "add search to my to-do list", and it reads the project, plans, edits the files, runs the commands, checks its own work, and reports back. You watch, correct, and approve.

Under the hood, every agent runs the same loop:

```
you give a goal
      |
      v
agent READS the project -> PLANS the steps -> ACTS (edits, runs)
      ^                                          |
      |                                          v
YOU review the diff, test, commit  <----  agent CHECKS its work
```

Everything wrapped around the model (file access, the terminal, permissions, memory) has a name: the **harness**. Companies build their harnesses differently. The loop inside stays the same.

One line to hold on to: *a chat gives you words. An agent does the work while you watch.*

## Claude Code, the agent we use daily

The main agent here is **Claude Code**, made by Anthropic. It has no windows and no buttons; it lives in the **terminal**. You open it inside a project folder, type what you want in plain English, and it goes to work in the open, asking first before anything risky.

<VideoSlot link="https://youtu.be/i3tRkbsE54Q" topic="Claude Code — introduction — watch once" />

## OpenCode, the same animal in a different coat

The second name to know is **OpenCode**, an open-source coding agent that also lives in the terminal. The coat is different: it is community-built, and it runs on 75+ model providers (Claude, GPT, Gemini, even models that run on your own laptop).

Day one shows you both on purpose. The tools differ; the loop, the shape, and the supervision do not. Learn the shape, because the brand on top of it can change.

## Gemini CLI and the many others

More names follow. **Gemini CLI** is made by Google and runs the Gemini models. After it come Codex, Pi, and many more, with new agents appearing every few months. Some have more tools, some have less, and the differences between them are real: features, pricing, polish. Exploring costs nothing; ask chat AI for the current list anytime.

Of them all, Claude Code is the most famous, which is a big part of why it is the main tool here. But notice what stays the same across the whole zoo: the loop at the top of this page. Learn it once, and you can sit down at any agent on the list, famous today or gone next year.

## The tools will change

Today the company works like this: **Claude Code is the main agent**, OpenCode and Gemini CLI are standing alternatives, and the team works inside an environment called **Orca** (you meet it properly on page 8.5).

These names will change. Tools swap every year in this industry, and the agent you learn today may not be the agent of your second year here. So do not marry a brand. Learn why each piece exists: the loop, the supervision, the one change at a time. Next year's tool will carry a new name, and the loop you already know will run inside it.

## Hands-on: meet your agent

1. Run `node --version`. You need Node 18 or newer, and you installed it back in Module 3, so a number should appear.
2. Install Claude Code once: `npm install -g @anthropic-ai/claude-code`. One command, one minute. Stuck? Ask AI: "claude: command not found on Windows after npm install. How do I fix it?"
3. Check that it landed: `claude --version`. A version number means it is on the machine for good.
4. Walk into your practice repo from page 7.1 (`cd git-practice`) and start the agent: `claude`. The first run asks you to log in; the captain hands out the accounts during training. Type `/help` and read the command list once. Then give it the smallest job you can find: "list the files in this folder". Watch it run `ls` in front of you. You asked, it acted, and you saw every step; the rest of the module only scales that up.
5. Ask chat AI: "What is OpenCode and how is it different from Claude Code?" Then write the answer in one line of your own words.

<QuizBlock
  :questions="[
    { question: 'What is the difference between chat AI and an agent?', answer: 'Chat answers with text, and you do the work. An agent takes a goal and does the work itself: it reads, plans, edits, and runs, while you supervise.' },
    { question: 'What is the agent loop?', answer: 'Read, plan, act, check, repeat. Every agent runs it, whatever the brand. (page 8.1)' },
    { question: 'What is the harness?', answer: 'Everything wrapped around the model: file access, the terminal, permissions, memory. Companies build harnesses differently, but the loop inside stays the same.' },
    { question: 'Which agent is the main tool here?', answer: 'Claude Code, made by Anthropic. OpenCode and Gemini CLI are the standing alternatives.' },
    { question: 'What is OpenCode?', answer: 'An open-source coding agent that runs many models: Claude, GPT, Gemini, even local ones. Same loop as any other agent.' },
    { question: 'What is Gemini CLI?', answer: 'The coding agent made by Google. It runs the Gemini models, and the loop is the same as every other agent.' },
    { question: 'Are Claude Code and OpenCode the only agents?', answer: 'No, many more exist, like Codex and Pi. Some have more tools, some have less. Explore freely; the loop never changes.' },
    { question: 'Why learn two agents on day one?', answer: 'To see that the tools differ but the shape of the work stays the same. The loop and the supervision carry over; the logos change.' },
    { question: 'Which agent comes with buttons and windows?', answer: 'None. Agents live in the terminal; they were built to be typed to. (page 6.1)' },
    { question: 'What should you learn about a tool that may be replaced next year?', answer: 'Why it exists and what it does: the loop, the supervision, the habits. Those stay the same even when the tool changes.' }
  ]"
/>

<PageNextButton />
