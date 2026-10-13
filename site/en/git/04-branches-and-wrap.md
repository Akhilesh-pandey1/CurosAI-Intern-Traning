# 7.4 Branches and Worktrees

So far your history is one straight line: commit after commit, oldest to newest. Real projects bend the line — this page shows how, then puts the whole module on one table.

## The default line — main

Every repo starts on one branch named **`main`**. A branch is just a **movable name pointing at a commit** — `main` slides forward every time you commit on it. That is all it is. Your 7.2 rhythm (status → add → commit) has been moving `main` along the whole time.

## A branch is a parallel timeline

```
main:      A --- B --- C
                       \
dark-mode:              D --- E
```

`git branch dark-mode` grows a new line from where you stand. Commits on `dark-mode` **do not touch `main`** — try the wildest idea there, and `main` keeps working exactly as it was. Happy with the result? **Merge** joins the side line back. Regret it? Delete the branch and `main` never knew.

The one rule teams live by: *main always works. New ideas grow on branches.*

```bash
git branch                # list branches — * marks where you stand
git branch dark-mode      # create a branch
git merge dark-mode       # standing on main: pull the side line in
```

<VideoSlot link="https://youtu.be/0vzYWyHmcY8" topic="git branch — watch once" />

## git worktree — one repo, many folders

This is the command AI development runs on. A **worktree** gives a branch **its own folder** — both branches sit side by side on your disk, sharing one history:

```bash
git worktree add ../calculator-dark dark-mode   # dark-mode gets its own folder
git worktree list                               # every folder and its branch
git worktree remove ../calculator-dark          # folder goes, history stays
```

Why AI development loves it: you work in your folder while an AI agent builds a feature in **its** folder — two branches, same repo, zero interference. Feature done? Merge its branch, remove the worktree.

<VideoSlot link="https://youtu.be/-JsGjI0wkEw" topic="git worktree — watch once" />

## Half-done? Branch it and push anyway

Sometimes the day ends in the middle — the feature is not at a logical end yet. That is not a reason to wait. Make a **new branch**, commit the half-done state there, and **push it before the laptop closes**. `main` stays clean of unfinished work, and the work leaves your machine either way.

The reason is blunt, and teams call it the **hit-by-a-bus rule**: tomorrow you may simply not come — a sick day, an emergency, anything — and nobody can reach inside your laptop. The remote is the only place the team can see your work, so it goes up anyhow, done or not. *Code that is not pushed is code nobody else has.*

## The Git summary — the module on one table

A menu card, not a memory test — the same deal as the CLI table (page 6.2). Nobody keeps all of this in the head; when a word slips, come back here or ask AI. Senior developers do the same.

| You want to | Type |
| --- | --- |
| Turn a folder into a repo | `git init` |
| See the full state | `git status` |
| Stage changes | `git add file` / `git add .` |
| Take the snapshot | `git commit -m "message"` |
| Read the history | `git log --oneline` |
| Keep git away from something | list it in `.gitignore` |
| Connect the remote | `git remote add origin URL` |
| Check the remote | `git remote -v` |
| Upload, first time | `git push -u origin main` |
| Upload, every time after | `git push` |
| Download new commits | `git pull` |
| Take a repo home | `git clone URL` |
| List branches | `git branch` |
| Make a branch | `git branch name` |
| Join a branch into main | stand on `main`, `git merge name` |
| Give a branch its own folder | `git worktree add folder branch` |
| See all worktree folders | `git worktree list` |
| Remove a worktree | `git worktree remove folder` |
| Throw away changes in one file | `git restore file` — read twice |

## Where you stand

You now hold the daily git of every developer — init, status, add, commit, log, remote, branches, worktree. Two rules carry it all:

**One — commit every change, every time.** Git protects commits only, and a commit costs ten seconds while a lost day costs a day.

**Two — push before the laptop closes, every single day.** That is the hit-by-a-bus rule: whether you come tomorrow, nobody knows; whether the laptop survives, nobody knows. So the work leaves your machine — always. And when the day ends mid-feature, not at a logical end, make a **new branch** and push there — never half-done work on `main`.

## Test Yourself

Seven questions, straight from this page. Answer first, flip after.

<QuizBlock
  :questions="[
    { question: 'What is main?', answer: 'The default branch every repo starts with — just a movable name pointing at a commit. It slides forward with every commit you take on it.' },
    { question: 'What is a branch, really?', answer: 'A parallel timeline. Commits on it never touch main until you merge — wild ideas grow there while main keeps working.' },
    { question: 'What does git worktree do?', answer: 'Gives a branch its own folder. Both branches sit side by side on your disk, sharing one history.' },
    { question: 'Why does AI development run on worktrees?', answer: 'The agent builds a feature in its own folder and branch while you keep working in yours — same repo, zero interference. Merge when done, then remove the worktree.' },
    { question: 'Where do you stand before git merge dark-mode?', answer: 'On main. The merge pulls the side line into the line you are standing on.' },
    { question: 'Why commit every change, every time?', answer: 'Git protects commits only — undo, branches, push all need them. A commit costs ten seconds; a lost day costs a day. So end every step with a commit.' },
    { question: 'The day ends and the feature is half-built. What do you do?', answer: 'New branch, commit the half-done state there, push before closing the laptop. That is the hit-by-a-bus rule — nobody can reach your laptop tomorrow, so the work goes up anyhow, done or not.' }
  ]"
/>

<PageNextButton />
