# 6.1 GUI vs Terminal

Welcome to Module 6. You have already used the terminal without being introduced — on page 3.1 you typed `npm create vite`, `npm install`, `npm run dev`, and a React app appeared. It worked, and you moved on. This module slows down and shows you what that window actually is — so it becomes a normal tool you use daily, not a black box you copy-paste into.

## Two ways to talk to your computer

Everything you have done on this machine so far went through the **GUI** — the graphical user interface. Windows, icons, menus, the mouse. You *point* at what you want.

The **terminal** is the second way. No windows, no icons. You *type* what you want, the computer answers in text. Same machine, same files, same folders — a different door into it. Its official name is the **CLI** — command line interface. Terminal, command line, CLI — three names, one tool. This module uses all three.

Making a folder, both ways:

- GUI: right-click → New → Folder → type the name. Four actions.
- Terminal: `mkdir my-folder`, Enter. One action.

That is the whole difference. One line to hold on to: *the GUI is for pointing. The terminal is for telling.*

<VideoSlot link="https://youtu.be/_9Th2HRsMCc" topic="GUI vs CLI — what the command line is and why developers use it — watch once" />

## Why developers live here

- **Some tools have no GUI at all.** npm, git, Python, servers, AI coding agents — they were built to be typed to. There is no button anywhere that runs `npm install` for you.
- **It is the same everywhere.** Every computer's GUI looks different. Commands do not. Learn them once and they work on your laptop, a teammate's laptop, and almost every server on the planet.
- **Servers have no mouse.** One day your Flask app will run on a real server (page 4.9). The only way in is a terminal.
- **It can be recorded and repeated.** You can paste a teammate a list of commands; you cannot paste them five clicks. AI tools also understand terminal commands best — "run this" is unambiguous in a way "click around there" never is.

## Nothing to fear

The terminal does **exactly** what you type — no more. It cannot guess, it cannot decide anything on its own, and just *looking* around (`ls`, `pwd` — both on the next page) touches nothing. You cannot break your machine by exploring.

The horror stories all come from one place: typing a delete command without reading it. Terminal deletes skip the Recycle Bin — that is the one thing to respect. So this module builds one habit stronger than fear:

**Predict, then press Enter.** Before every command, say what you expect to happen. Then run. Surprised? Ask AI why — that surprise was a free lesson.

## Hands-on — your first CLI magic (Windows)

1. Make a folder anywhere: open File Explorer, go to Downloads (or anywhere you like), right-click → New → Folder, name it `cli-training`. With the mouse — enjoy it, it is the last folder you will make that way.
2. Now the magic door: click once in the File Explorer **address bar** (the bar at the top showing the folder path), type `powershell`, press Enter. A terminal window opens — already standing inside `cli-training`. No searching, no navigating. Remember this trick; developers use it daily.
3. Look down: `pwd` — the path on screen is your folder. The GUI folder and the CLI are the same place, seen two ways.
4. Make the playground and step inside: `mkdir cli`, then `cd cli`. Now the first trick — ten folders, one command:

   ```powershell
   1..10 | ForEach-Object { mkdir "week$_" }
   ```

   Then `ls` — week1 to week10, all ten, from one line. Read the line in plain English: *for each number from 1 to 10, make a folder named week and that number.* Imagine right-clicking ten times instead — count the clicks you just saved.
5. **Trick two — color on demand:**

   ```powershell
   Write-Host "CLI is easy!" -ForegroundColor Green
   ```

   Your words, printed in green. Try Yellow, Red, Cyan — the computer obeys every time. That is the whole CLI idea in one trick: you tell, it does.
6. **Copy-paste like a developer:** select any command on this page, copy it, then right-click inside the terminal — it pastes. From today, long commands travel by paste, not by typing.
7. The other door — opening it by hand: a terminal opened from the Start menu starts in your user folder, not yours to choose. No problem: type `cd`, add a space, paste your folder path — copy it from the File Explorer address bar first — and Enter. That is `cd` doing its job: walk to the path you name.
8. On Mac or Linux? Same flow, different door — make the folder, then ask AI: "how do I open a terminal inside this folder on Mac?" The commands above are already the same words.

<QuizBlock
  :questions="[
    { question: 'What is the GUI?', answer: 'The graphical user interface — windows, icons, menus, the mouse. You point at what you want.' },
    { question: 'What does CLI stand for?', answer: 'Command Line Interface — the official name of the terminal. Terminal, command line, CLI — three names, one tool.' },
    { question: 'What is the terminal, really?', answer: 'The same computer, entered through a text door. You type what you want, it answers in text. Nothing separate, nothing magic.' },
    { question: 'Name one tool with no GUI — only a terminal.', answer: 'npm, git, Python, servers, AI coding agents — any of these. They were built to be typed to.' },
    { question: 'Why does a developer need the terminal if the GUI can do the same things?', answer: 'Some tools exist only there, commands work the same on every machine, and servers have no mouse at all.' },
    { question: 'What is the one real danger of the terminal?', answer: 'Delete commands skip the Recycle Bin — removed means gone. So read twice before Enter on anything that deletes.' },
    { question: 'What habit replaces fear of the terminal?', answer: 'Predict, then press Enter. Say what you expect first — and if the result surprises you, ask why.' },
    { question: 'Can you break your computer by looking around in the terminal?', answer: 'No. Looking commands like ls and pwd touch nothing. Only typing and running a command changes anything.' }
  ]"
/>

<PageNextButton />
