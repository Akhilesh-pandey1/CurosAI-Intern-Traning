# 7.2 Everyday Git

Page 7.1 gave you the time machine. This page gives the four commands you will type every working day for the rest of your career — `status`, `add`, `commit`, `log`. A tiny vocabulary, and one rhythm that becomes muscle memory.

## The three places a change can live

The whole page hangs on one picture: **every change travels through three places before it is safe.**

1. **Working tree** — your real files, the folder you edit in your code editor. A change here is only on disk; git has not *recorded* it yet.
2. **Staging area** — the waiting room. You *choose* which changes go into the next snapshot.
3. **Commit** — the snapshot, stored forever in the `.git` history.

Think of a photo shoot: the working tree is the room, the staging area is the people you called into the frame, the commit is the click. You decide who is in the photo before it is taken.

## status — ask before everything

```bash
git status
```

One screen, the state of all three places: **untracked** files (new — git has never seen them), **modified** files (changed since the last snapshot), **staged** files (in the frame, waiting for the click).

## add — call into the frame

```bash
git add notes.txt   # one file
git add .           # every change from here and below
```

Why choose at all? Because a commit should be **one meaningful step**, not a random pile. You fixed two separate bugs — that is two commits, so the history tells a story a human can read. Small commits, often.

## commit — the click

```bash
git commit -m "Added a weather card to the dashboard"
```

The `-m` message is the headline future-you will read. Write it like a news line of what you just did — short, from the point of the project. "update" says nothing; "Fixed the empty city error in the weather app" says everything. The test: reading it in the log a month later, do you know what happened without opening a single file?

<VideoSlot link="https://youtu.be/wVGiJKSnJY0" topic="git commit and git log — watch once" />

## log — flip the album

```bash
git log             # the full story — author, date, message
git log --oneline   # one line per save point
```

Every commit you ever took is in there, oldest to newest. This is the list you walk back through when something went wrong — and with small commits, the answer is always a few lines away.

## Not everything belongs in the photo

Some things must never enter history — **`node_modules`** (thousands of files, rebuilt any time with one `npm install`, page 3.7) and **`.env`** (the file that holds secret keys — you meet it in Module 4). The **`.gitignore`** file is the list of names git should never photograph:

```
node_modules/
.env
```

Vite already created a `.gitignore` in every React project you built — open one and read it; now you know exactly what it is for.

## Hands-on — a repo with a real history

Predict before every Enter — the page 6.1 habit works on git too.

1. `cd git-practice` (your repo from 7.1 — no `git init` needed, it is already one), then `git status`. "No commits yet" — a fresh album waiting for its first photo.
2. `echo "day one" > notes.txt`, then `git status`. Red **untracked** — git sees the file but has not been told to care yet.
3. `git add notes.txt`, then `git status` again. Green **staged** — in the frame, waiting for the click.
4. `git commit -m "Added the first note"`, then `git status` a third time. Clean — one round trip through all three places, watched at every stop.
5. Grow the history: `echo "day two" >> notes.txt` (two arrows mean *add to the file*), then status → add → commit `"Added the day two line"`.
6. `git log --oneline` — two save points, both with your headlines. Flip through it once more with plain `git log` and read the details.
7. Now the ignore list: `echo "secret.txt" > .gitignore`, then `echo "my secret" > secret.txt`. Run `git status` — `secret.txt` is invisible. Git is protecting the photo album from junk, exactly as asked. Commit the list itself: `git add .gitignore`, then commit `"Added the ignore list"`.
8. Ask AI: "What happens if I run git commit without git add first?" Then try it once and read the reply git gives you — git explains itself surprisingly well.

<QuizBlock
  :questions="[
    { question: 'Name the three places a change can live.', answer: 'Working tree (your real files), staging area (chosen for the next snapshot), commit (stored in history forever).' },
    { question: 'What does git status tell you?', answer: 'The state of all three places — untracked, modified, and staged files. The ask-before-everything command.' },
    { question: 'git add — what does it actually do?', answer: 'Nothing is saved yet — it only moves changes into the staging area, the frame for the next photo. The click is commit.' },
    { question: 'Why stage and commit in small steps instead of one giant commit?', answer: 'A commit should be one meaningful step, so the history reads like a story. Small save points also make finding a wrong turn easy.' },
    { question: 'What makes a good commit message?', answer: 'A short headline of what you did, readable a month later without opening any file. A bare word like update says nothing.' },
    { question: 'What is the one-word version of reading the history?', answer: 'git log --oneline — one line per commit, oldest to newest.' },
    { question: 'Why must node_modules never be committed?', answer: 'Thousands of files, rebuilt any time with one npm install — pure junk in history. It goes in .gitignore. (page 3.7)' },
    { question: 'What is .gitignore for?', answer: 'A list of names git should never track or photograph — node_modules, .env, anything temporary or secret.' },
    { question: 'What is the daily rhythm of git?', answer: 'Edit, git status, git add, git commit with a message — repeat. Save points often, like in a game.' }
  ]"
/>

<PageNextButton />
