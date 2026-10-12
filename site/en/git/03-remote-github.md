# 7.3 Remote & GitHub

Every commit you have taken so far lives in one place: the `.git` folder on your laptop. One spilled coffee and the whole album is gone. And a teammate has no way in at all. The fix is a second copy of the repo on the internet — and that copy has a name: the **remote**.

## Git vs GitHub — two names, two things

**Git** is the tool on your machine. Offline, free, yours — it does everything you have seen so far without any internet.

**GitHub** is a website that stores git repos and shows them nicely — history, files, messages, all browsable in the browser. GitLab and Bitbucket do the same job; GitHub is just the most common. The camera-album line: *git is the camera. GitHub is the cloud album.* This very training project lives in a private GitHub repo — so does almost every codebase you will ever touch at work.

## The remote — a repo with an address

A **remote** is simply another copy of your repo, reachable at a URL. By tradition the main one is named **`origin`**:

```bash
git remote add origin https://github.com/you/git-practice.git
git remote -v        # confirm — prints the address back
```

Normal order of life: build the repo locally first, add the remote later, push when ready. Local first, cloud second — never the other way round at the start.

## push and pull — the sync

```bash
git push -u origin main   # first push only — connect this branch to origin and upload
git push                  # every push after — upload new commits
git pull                  # download commits that exist on origin but not here
```

Read those lines carefully: what travels is **commits, not files**. Push uploads your new save points with their whole story; pull brings down save points you do not have yet. After the first `-u` push, git remembers the pairing forever — plain `git push` and `git pull` from then on.

The team loop, the same everywhere on earth: **pull → edit → commit → push → repeat.** Two people: you push your commits, they pull and get them, they push, you pull. Everyone's album becomes the same story. And the habit that avoids most pain: *pull before you push, always.*

## clone — take a whole repo home

```bash
git clone https://github.com/owner/repo.git
```

One command: a new folder, the full history, and the remote already connected. This is how you join any project on the planet. Not the same as Download ZIP on GitHub — the ZIP is files only: no history, no connection, no save points. You clone repos, you download zips of things you just want to look at.

<VideoSlot link="https://youtu.be/yxvqLBHZfXk" topic="git push, pull and clone — watch once" />

## Hands-on — your code leaves the laptop

1. Make an account on github.com — free, takes two minutes, personal email is fine.
2. Click **New repository**: name it `git-practice`, keep it **Private**, leave every checkbox empty — no README, no .gitignore. Your local repo already has history; this one must stay an empty shell waiting for it.
3. GitHub's last screen shows a line for "push an existing repository" — copy the `git remote add origin https://...` line from it, paste into your terminal inside `git-practice`, Enter. Then `git remote -v` — the address is set.
4. `git push -u origin main`. The first time, a window may open asking to sign in — a browser login (the Git Credential Manager doing its job). If anything is unclear, ask AI: "how does git sign in to GitHub on Windows?"
5. Refresh the GitHub page in your browser. Your commits, your messages, `notes.txt` — the whole album, now online. Click a commit message and read the story GitHub shows you.
6. Take one more save point locally — edit `notes.txt`, status → add → commit — then `git push`. Watch the commit counter on GitHub climb. Same album, two places, seconds apart.
7. Pull does nothing on a solo project today — ask AI: "when would git pull matter for me?" (Hint: a second laptop, or a teammate.)
8. Look ahead — ask AI: "what is a pull request on GitHub?" One paragraph in your own words. You will live inside pull requests in real projects.

<QuizBlock
  :questions="[
    { question: 'Git vs GitHub — say it in one line.', answer: 'Git is the tool on your machine; GitHub is a website that stores git repos online. The camera and the cloud album.' },
    { question: 'What is a remote?', answer: 'Another copy of your repo, reachable at a URL. The main one is named origin by tradition.' },
    { question: 'What does git push upload?', answer: 'Commits — whole save points with their history and messages. Not loose files.' },
    { question: 'What does git pull do?', answer: 'Downloads commits that exist on the remote but not on your machine — the way you receive other people.' },
    { question: 'Why does the first push need -u origin main?', answer: 'One time only — it connects your local branch to the remote one. Plain git push and git pull work forever after.' },
    { question: 'What is the daily loop of a team using git?', answer: 'Pull, edit, commit, push, repeat. And pull before push, always.' },
    { question: 'git clone vs Download ZIP — what is the difference?', answer: 'Clone gives the full history plus a connected remote; the ZIP gives files only — no history, no connection.' },
    { question: 'Why create the GitHub repo empty, with no README?', answer: 'Your local repo already has history. An empty remote waits for it; a README would start a second history that clashes with yours.' },
    { question: 'Your history lives only on your laptop. What fixes that?', answer: 'A remote — push after committing, and the album exists in two places. Coffee can no longer win.' }
  ]"
/>

<PageNextButton />
