# 6.2 Essential Commands

The terminal's vocabulary is tiny — about a dozen words cover almost every day of a developer's life. This page gives you the words. Each one takes ten seconds to learn and ten seconds to practice, right here, right now.

**Do not memorize this page.** Read each word once, try it once, and know it exists — that is enough. AI remembers the exact spelling for you, and even senior developers look up commands every day.

One idea first, and the whole page hangs on it: **the terminal always stands inside one folder.** Every command you type happens *there* — in the folder you are standing in, not the one you see on screen. `pwd` asks where am I, `ls` asks what is here, `cd` walks somewhere else. That is the entire mental model.

## Find your feet — pwd, ls, cd

```bash
pwd          # print working directory — where am I standing?
ls           # list — what is in this folder?
cd projects  # change directory — walk into the projects folder
cd ..        # walk out — one level up
cd ~         # jump home
clear        # wipe the screen
```

`pwd` prints an address like `C:\Users\you` (Windows) or `/home/you` (Mac/Linux). `ls` shows the folders and files around you. `cd` moves you. After every `cd`, run `pwd` — watch yourself stand somewhere new.

## Make things — mkdir, touch, echo

```bash
mkdir notes                        # new folder, right here
touch day1.txt                     # empty file (Mac/Linux)
New-Item day1.txt                  # empty file (Windows)
echo "learned cd today" > day1.txt # file WITH content — works everywhere
```

The `echo "text" > file` line is worth a second look: echo says the text, the `>` catches it and pours it into the file. Create or overwrite — that is how files get born from the terminal.

## Look inside — cat

```bash
cat day1.txt   # print the file content right in the terminal
```

No window opens, nothing launches — the words just appear where you stand. Fastest way ever invented to peek into a file.

## Move, copy, rename — mv and cp

```bash
cp day1.txt backup.txt    # copy — now there are two
mv backup.txt notes/      # move backup.txt into the notes folder
mv day1.txt monday.txt    # rename — moving to a new name in the same place
```

Rename has no command of its own — it **is** a move, to a new name in the same folder. One tool, two jobs.

## Delete — rm (read twice)

```bash
rm backup.txt                        # delete a file
rm -rf notes                         # delete a folder and everything in it (Mac/Linux)
rm -Recurse -Force notes             # same, Windows
```

This is the respect-from-page-6.1. Terminal delete has **no undo and no Recycle Bin**. The habit is not fear — it is reading the command once more before Enter, every time, forever.

Almost everything above works identically on Windows and Mac/Linux — `pwd`, `ls`, `cd`, `mkdir`, `cat`, `cp`, `mv` are the same words. Only the empty file (`touch` vs `New-Item`) and the folder delete flag differ.

## The command summary

The module, one table — a menu card, not a memory test. Nobody keeps it in their head: when a command slips your mind, come back here or ask AI. Senior developers do the same.

| You want to | Type | Works on |
| --- | --- | --- |
| Open the Terminal inside a folder | right-click → **Open in Terminal** (or `wt` in the address bar) | Windows |
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

## Hands-on — build a small world, then take it down

Predict before every Enter. If a result surprises you, stop and ask why.

1. `mkdir terminal-practice`, `cd terminal-practice` — then `pwd`. Confirm you stand inside it.
2. `mkdir projects` and `mkdir notes`, then `ls`. Predict the two lines before running.
3. `echo "my first terminal file" > notes/day1.txt`, then `cat notes/day1.txt`. You made and read a file without any window.
4. `cp notes/day1.txt notes/backup.txt`, then `ls notes` — predict two files before Enter.
5. `mv notes/backup.txt .` — the `.` means right here. `ls` and `ls notes` — where did it go, what is left?
6. Rename it: `mv backup.txt day-one-backup.txt`.
7. The takedown: `rm day-one-backup.txt`, then `rm -rf notes` (or `rm -Recurse -Force notes` on Windows). `ls` after each — watch it vanish for real.
8. Ask AI: "Why does rm have no undo? What do people do instead?" One line in your own words.

## Test Yourself

Seven questions, straight from the two pages. Answer first, flip after. Every miss points at a spot worth one more visit.

<QuizBlock
  :questions="[
    { question: 'What is the terminal, in one sentence?', answer: 'The same computer entered through a text door — you type what you want, it answers in text. Its official name is the CLI. (page 6.1)' },
    { question: 'How do you open a Terminal already standing inside a folder on Windows?', answer: 'Right-click inside the folder and choose Open in Terminal — or type wt in the File Explorer address bar. (page 6.1)' },
    { question: 'Name two tools that exist only in the terminal.', answer: 'Any two of: npm, git, Python, servers, AI coding tools. They were built to be typed to. (page 6.1)' },
    { question: 'Do you have to memorize the commands?', answer: 'No — know what the CLI can do and when it saves time. AI remembers the exact words; senior developers look up commands every day. (page 6.1)' },
    { question: 'The terminal always stands inside one folder. Why does that matter?', answer: 'Every command acts on the folder you stand in, not the one you see on screen. Wrong place, wrong result — pwd checks, cd moves. (page 6.2)' },
    { question: 'cp vs mv — what is the difference?', answer: 'cp duplicates — two exist after. mv relocates or renames — one exists, somewhere else or called something else. (page 6.2)' },
    { question: 'Why read twice before rm?', answer: 'Terminal delete skips the Recycle Bin — no undo, gone is gone. Reading takes two seconds; the file took hours. (page 6.2)' }
  ]"
/>

<PageNextButton />
