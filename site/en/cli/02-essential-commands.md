# 6.2 Essential Commands

The terminal's vocabulary is tiny — about a dozen words cover almost every day of a developer's life. This page gives you the words. Each one takes ten seconds to learn and ten seconds to practice, right here, right now.

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
New-Item day1.txt                  # empty file (Windows PowerShell)
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
rm -Recurse -Force notes             # same, Windows PowerShell
```

This is the respect-from-page-6.1. Terminal delete has **no undo and no Recycle Bin**. The habit is not fear — it is reading the command once more before Enter, every time, forever.

Almost everything above works identically on Windows and Mac/Linux — `pwd`, `ls`, `cd`, `mkdir`, `cat`, `cp`, `mv` are the same words. Only the empty file (`touch` vs `New-Item`) and the folder delete flag differ.

<VideoSlot topic="Essential terminal commands — navigate, create, move, copy, delete — watch once, then do the hands-on" />

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

<QuizBlock
  :questions="[
    { question: 'What does pwd tell you?', answer: 'The folder you are standing in right now — the place every command you type will act on.' },
    { question: 'The terminal always stands somewhere. Why does that matter?', answer: 'Every command happens in the folder you stand in, not the one you see on screen. Wrong place, wrong result — so check with pwd.' },
    { question: 'cd .. does what?', answer: 'Walks out one level — from projects up to the folder that holds it.' },
    { question: 'How do you make a file with content in one line?', answer: 'echo with your text, then > and the file name — echo says the text, the > pours it into the file.' },
    { question: 'cp vs mv — one word for the difference.', answer: 'cp duplicates (two exist after), mv relocates or renames (one exists, somewhere or called something else).' },
    { question: 'How do you rename a file?', answer: 'With mv — moving it to a new name in the same folder. Rename is just a move.' },
    { question: 'Why read twice before rm?', answer: 'Terminal delete skips the Recycle Bin — no undo, gone is gone. Reading takes two seconds; the file took hours.' },
    { question: 'cd with no folder name does what?', answer: 'Jumps straight home — to C:\\Users\\you on Windows or /home/you on Mac and Linux.' }
  ]"
/>

<PageNextButton />
