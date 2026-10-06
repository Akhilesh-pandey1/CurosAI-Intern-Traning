# 6.4 Practice Challenges

Reading commands is knowing the words. Typing them — from memory, with your prediction first — is speaking the language. No new concepts on this page: challenges, the full command summary, and the module test.

The rules, for every challenge:

1. **Predict before Enter.** Say what should happen, then run.
2. **Read twice before delete.** The page 6.1 rule, forever.
3. **Challenges 1 to 5: no AI.** Struggle is the point. AI comes after, to check your work.

## The challenges

1. **The skeleton.** From memory: make a folder `school-crm` with `client` and `server` inside. Inside `server`, folders named `routes` and `database`. Inside `client`, an empty file `package.json`. Prove it with `ls` at each level — then delete the whole thing with exactly **two** commands.
2. **The blind maze.** Starting from home, walk to `terminal-practice/projects` using only `cd` and `ls` — no GUI, no clicking. Prove where you stand with `pwd`.
3. **The file factory.** One line each, no GUI: make `week1.txt` containing your goal for this week. Copy it to `week2.txt`. Rename `week2.txt` to `plan.txt`. Read `plan.txt` back.
4. **The move.** Make a `junk` folder with three files in it. Move one file up into `terminal-practice`, move it back, then delete `junk` entirely. Confirm with `ls` after every step — nothing lost.
5. **The handshake.** Print the versions of `node`, `npm` and `python`. If any one answers *command not found*, ask AI what that means and how it would be fixed — but do not install anything.
6. **Run day** — AI allowed. Ask AI for a `run-me.js` that prints your name and one fact about you. Run it with `node`. Then break it on purpose — rename the file and run the old name — read the error out loud, and explain it before fixing.

Done all six? Ask AI to quiz you: "Quiz me on basic terminal commands, one question at a time."

## The command summary

The whole module, one table. Skim it now, return to it whenever a command slips your mind.

| You want to | Type | Works on |
| --- | --- | --- |
| Know where I stand | `pwd` | everywhere |
| See what is here | `ls` | everywhere |
| Walk into a folder | `cd folder-name` | everywhere |
| Walk one level up | `cd ..` | everywhere |
| Jump home | `cd ~` | everywhere |
| Make a folder | `mkdir name` | everywhere |
| Make an empty file | `touch name.txt` / `New-Item name.txt` | Mac/Linux / Windows |
| Make a file with content | `echo "text" > name.txt` | everywhere |
| Peek into a file | `cat name.txt` | everywhere |
| Copy | `cp from to` | everywhere |
| Move or rename | `mv from to` | everywhere |
| Delete a file | `rm name` | everywhere |
| Delete a folder | `rm -rf name` / `rm -Recurse -Force name` | Mac/Linux / Windows |
| Wipe the screen | `clear` | everywhere |
| Stop a running program | `Ctrl+C` | everywhere |
| Check a tool's version | `node -v`, `npm -v`, `python --version` | everywhere |

## The module in one breath

The terminal is the same computer through a text door. You stand in one folder and tell, instead of point: look (`pwd`, `ls`), walk (`cd`), build (`mkdir`, `echo >`), rearrange (`cp`, `mv`), remove (`rm` — read twice), run (`node`, `python`, `npm run dev`). Nothing in here to fear — the terminal does exactly what you type, and your one habit covers the rest: predict, then Enter.

Next module puts this skill to daily use — **Git**, the version-history tool that lives entirely in the terminal.

## Test Yourself — the whole module

Ten questions, one from almost every corner. Answer first, flip after. Every miss points at a page worth one more visit.

<QuizBlock
  :questions="[
    { question: 'What is the terminal, in one sentence?', answer: 'The same computer entered through a text door — you type what you want, it answers in text. (page 6.1)' },
    { question: 'Name two tools that exist only in the terminal.', answer: 'Any two of: npm, git, Python, servers, AI coding agents. (page 6.1)' },
    { question: 'What does the terminal do that you did not type?', answer: 'Nothing. It does exactly what you type — no guessing, nothing on its own. (page 6.1)' },
    { question: 'Why does every command need you to know where you stand?', answer: 'Every command acts on the folder you are standing in. Wrong folder, wrong target — pwd checks, cd moves. (page 6.2)' },
    { question: 'cp vs mv — what is the difference?', answer: 'cp duplicates — two exist after. mv relocates or renames — one exists, somewhere else or called something else. (page 6.2)' },
    { question: 'What does echo hi > notes.txt do?', answer: 'Makes the file notes.txt containing hi — the > pours the echoed text into the file. (page 6.2)' },
    { question: 'Why is rm the one command with a special habit?', answer: 'It deletes with no undo and no Recycle Bin — so read it twice before Enter, every time. (page 6.2)' },
    { question: 'You get: no such file or directory. What are your two checks?', answer: 'pwd — am I in the right folder. ls — is the file actually here. Nine times out of ten it is a path problem. (page 6.3)' },
    { question: 'What is the PATH?', answer: 'The ordered list of folders the terminal searches when you type a command name. Install puts a tool in one of those folders — that is why npm works anywhere. (page 6.3)' },
    { question: 'npm run dev is running. How do you stop it — and what does that command actually do?', answer: 'Ctrl+C stops it. The command itself runs the script named dev from package.json. (page 6.3)' }
  ]"
/>

<PageNextButton />
