# 7.1 What Is Git

Welcome to Module 7. You have built real things by now — a portfolio, a calculator, a to-do list, a password manager. Every one of them lives in a folder on your laptop, and every save replaced the last save. Change one line the wrong way, and yesterday's working version is gone. This module introduces the tool that ends that fear forever: **Git**.

## The problem it solves

Everyone knows this folder:

```
project/
  index.html
  index-final.html
  index-final-2.html
  index-final-REAL.html
```

Copies as version control. It works for one file and fails for a project — dozens of files change together, nothing records *why* a change was made, and picking "the right copy" is guesswork.

**Git keeps the whole history of a folder for you.** You work normally. From time to time you take a **snapshot** — in git language, a **commit** — and git remembers the exact state of every file at that moment, what changed since the last snapshot, and the one-line message you wrote about it. Wrong turn two days ago? Walk back to any snapshot and look around. Nothing is ever lost again.

One line to hold on to: *a commit is a save point. Git is the game that never makes you restart from zero.*

## What a repo is

A **repository** — everyone says **repo** — is nothing mystical: **a normal project folder plus one hidden folder inside it that remembers everything.** That hidden folder is named `.git`, and one command creates it:

```bash
git init
```

Run `git init` inside any folder and it becomes a repo — a plain folder you keep editing, plus a full memory that grows with every commit. Two facts about `.git` worth keeping:

- **`.git` is the history.** All commits, all messages, all save points live in there. The files sit outside it; the memory sits inside it.
- **Never touch `.git` by hand.** Git manages it. Delete it and the files survive but every save point is gone — the one delete in git with no second chance.

<VideoSlot link="https://youtu.be/OWp3F9VlUT0" topic="What is Git — get the introduction — watch once" />

## Install git on your machine

Git comes from one home: **git-scm.com**. On Windows it is one download and one installer — keep clicking Next, the default options are exactly right for today. On Mac, git usually ships with the system — check before installing anything.

The check takes five seconds, in any terminal:

```bash
git --version
```

A version number — git is on the machine, done forever. "Not recognized"? Either it is not installed yet, or the terminal was open during the install — **close it and open a new one** so it can see the new tool. Stuck anywhere? Ask AI: "git --version says not recognized on Windows — how do I fix it?"

<VideoSlot link="https://youtu.be/-5EDMIAapWw" topic="Installing Git — step by step — watch once" />

## Hands-on — first contact

1. Make a folder `git-practice` anywhere, open a terminal inside it (right-click → Open in Terminal, page 6.1), and run `git init`. Now the reveal: `ls -Force` on Windows or `ls -a` on Mac/Linux — the hidden `.git` folder appears. It holds no history yet; every commit you make from here on lives in there.
2. Touch a real repo: open a terminal in the big Intern-Training folder — the one that holds this very site — and run `git status`. "Nothing to commit, working tree clean" is git saying: *all calm, everything saved.* Then `git log --oneline` — the actual history of this project, one line per save point. You are reading real version control.
3. Ask AI: "What is the difference between git and GitHub?" Write the answer in one line of your own words — page 7.3 goes deep on it.
4. Ask AI: "Why does git store a full snapshot per commit instead of just the changed lines? What is the benefit?" One line again — the answer will surprise you.

<QuizBlock
  :questions="[
    { question: 'What problem does git solve?', answer: 'Losing working versions. Git keeps the full history of a folder as snapshots, so any earlier state can be visited again — nothing is ever lost.' },
    { question: 'What is a commit?', answer: 'A save point — a snapshot of the whole project at one moment, with a one-line message saying what was done. (page 7.1)' },
    { question: 'What is a repo, exactly?', answer: 'A normal project folder plus one hidden .git folder that stores the entire history. The files sit outside it, the memory inside it.' },
    { question: 'What happens if you delete the .git folder?', answer: 'The files survive but every save point is gone. It is the one delete in git with no second chance — never touch .git by hand.' },
    { question: 'What command turns a folder into a repo?', answer: 'git init — run once inside the folder. Git then manages the history from there.' },
    { question: 'How do you check that git is installed?', answer: 'Run git --version in any terminal. A version number means git is ready; not recognized means install it from git-scm.com first.' },
    { question: 'git --version says not recognized right after an install. The most common cause?', answer: 'The terminal was open during the install — close it and open a new one, so it can see the new tool.' },
    { question: 'What does the line working tree clean mean in git status?', answer: 'Every change is saved in a commit — nothing waiting, all calm. It is the all-clear signal.' }
  ]"
/>

<PageNextButton />
