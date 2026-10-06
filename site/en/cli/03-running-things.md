# 6.3 Running Things

Folders and files were housekeeping. The terminal's real job is bigger: it is the place where things **run**. Every app you will ever build starts its life as a command typed here — your JavaScript, your Python, your servers, all of them.

## The terminal runs files

```bash
node hello.js    # run a JavaScript file
python app.py    # run a Python file
```

You type the name of a program, then the file to feed it. The terminal hands your file to that program, runs it, and prints whatever comes back — text, errors, anything.

Servers work the same way, with one difference: they do not stop.

```bash
npm run dev      # starts your React app — and keeps running
```

A running program owns the terminal — you cannot type new commands until you stop it. **Ctrl+C** is the stop button. You used it on page 3.1; now you know its name.

## What a path is

A **path** is the address of a file or folder. You have seen them already — `pwd` prints one.

- **Absolute** — the full address from the top: `C:\Users\you\projects\hello.js` or `/home/you/projects/hello.js`. Works from anywhere.
- **Relative** — the address from where you stand: `projects/hello.js`. Only works from where it makes sense.

Two shortcuts do all the everyday work: `.` means *here*, `..` means *one level up*. You used both on the last page — `cd ..` and `mv notes/backup.txt .`

When a command answers "no such file" or "cannot find module", it is a path problem nine times out of ten. The fix is always the same two checks: `pwd` — where am I really? `ls` — is the file actually here?

## Where commands come from — PATH

One question is still open. When you type `node`, how does the terminal know what that is?

It looks through a list of folders called the **PATH** — folder by folder, in order — until it finds a program named `node`. Found → runs. Not found → `command not found`.

That one idea explains things you have been doing since Module 3:

- `npm` works from **any** folder — the installer put it in a PATH folder.
- `command not found` means the terminal looked through its whole list and missed: the tool is not installed, or you typed the name wrong.
- Installing a tool = copying its program into a folder on that list. That is all "install" ever means.

## Installing and checking tools

The version check is the developer handshake — is it installed, and which one:

```bash
node -v             # v22.14.0 — installed, and which version
npm -v
python --version
```

And the commands you have been typing since page 3.1, decoded:

- `npm create vite@latest my-app` — run npm, its job is *create*, the tool is *vite*, the name is *my-app*.
- `npm install` — read `package.json`, download every package listed into `node_modules`.
- `npm run dev` — run the script named `dev` from `package.json`.

You have been driving the terminal all along. Now you can read the steering wheel.

<VideoSlot topic="Running scripts and tools from the terminal — node, python, paths and PATH — watch once" />

## Hands-on — run your own file

1. `cd terminal-practice`, then `mkdir projects` if it is not there from last page, and `cd projects`.
2. `echo 'console.log("I ran this myself")' > hello.js`, then `cat hello.js` — read it before you run it.
3. Predict, then run: `node hello.js`.
4. Break it on purpose: run `node helloo.js` — one extra o. Read the error before anything else: it names the exact file it looked for and could not find. That is a path problem telling you where it hurts.
5. The handshake: `node -v`, `npm -v`, `python --version` — all three should answer; they came with Modules 2, 3 and 4's setup.
6. Ask AI to show your PATH — `$env:PATH` on Windows, `echo $PATH` on Mac/Linux. Pick two folders from the list and ask what lives in each one.

<QuizBlock
  :questions="[
    { question: 'What does node hello.js do?', answer: 'Hands the file hello.js to the Node program, which runs it and prints whatever comes back.' },
    { question: 'A program is running and the terminal ignores your typing. Now what?', answer: 'Ctrl+C — the stop button. A running program owns the terminal until you stop it.' },
    { question: 'Absolute path vs relative path?', answer: 'Absolute starts from the top and works from anywhere. Relative starts from where you stand and only works from there.' },
    { question: 'What do . and .. mean in a path?', answer: 'Dot is this folder. Dot-dot is one level up. They are how relative paths walk.' },
    { question: 'A command answers: no such file. First two checks?', answer: 'pwd — where am I standing. ls — is the file actually here. Nine times out of ten it is a path problem.' },
    { question: 'How does the terminal find what node means when you type it?', answer: 'It searches its PATH — an ordered list of folders — for a program named node, and runs the first match.' },
    { question: 'What does command not found actually mean?', answer: 'The terminal looked through every PATH folder and found no program by that name — not installed, or the name is misspelled.' },
    { question: 'What does npm install actually do?', answer: 'Reads package.json and downloads every listed package into node_modules.' }
  ]"
/>

<PageNextButton />
