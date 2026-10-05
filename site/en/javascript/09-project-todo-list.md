# 2.9 Project — To-Do List

Second build. The calculator held **one value at a time** — this one manages a **list that grows, shrinks, and must survive refresh**. Every part comes from the module: the tasks live in an array of objects, clicks are events, the screen is redrawn through the DOM, and localStorage is why your tasks are still there tomorrow.

## What you build

A working to-do page:

- An input and an **Add** button — a typed task joins the list.
- Every task shows with a **delete** button of its own.
- **Clicking a task** marks it done and back.
- Everything saved in **localStorage** — refresh, close the tab, come back tomorrow: the list is still there.

## How to build it — AI drives, you navigate

Same rule as the calculator: **AI is the driver, you are the navigator.** AI types every file. You plan the route, know every turn, check every street — and never say "AI wrote it, I do not know."

1. **Plan the route on paper first — starting with the data.** The heart of this build is one shape: a **list of task objects**, each `{ text, done }`. Write three sample tasks on paper as objects, then answer: pressing Add does what to the array? Clicking a task flips what? If you can answer both, the plan is done.
2. **Let AI write the first version — the whole thing:**

   > Build a to-do list as one HTML page with its CSS and one JavaScript file. An input and an Add button, the tasks listed below, a delete button on every task, and clicking a task marks it done and back. Keep each task as an object with text and done inside one array. Save the array to localStorage on every change and load it when the page opens. No frameworks.

   Open it and read the HTML and CSS from Module 1 — nothing there should be a stranger.
3. **Make AI explain the flow — not every line.** Ask:

   > Walk me through the complete flow: I type Buy milk, press Add, click the task to mark it done, then refresh the page. Which function runs on each step, what reads and writes the array, where localStorage comes in — until the ticked task comes back after refresh.

   Follow it on your own screen: this function grabs the text, this one pushes the object into the array, this one saves, this one redraws the list. When you can retell the story from keystroke to survived-refresh, you own it.
4. **Check the driver — the ugly paths first:** press Add with an empty input, delete a task from the middle, tick two tasks and refresh halfway, then wipe localStorage from DevTools → Application and watch the page cope. A navigator catches what the driver missed.
5. **Direct the changes — one at a time.** Predict what will change, then order one small change, read what AI touched, run, compare:

## The changes you direct

1. A counter on top: **2 of 5 done** — walk the array, count the ticks. *(array + condition)*
2. A **Clear completed** button that keeps only the unfinished tasks. *(filter)*
3. Newest task **on top** instead of the bottom. *(array order)*
4. Pressing **Enter** in the input adds the task. *(a new event: keydown)*

## Know it, do not copy it

Before you check this page off, answer without looking:

- Which function redraws the list on screen — and why must it run again after every change?
- Where exactly does the array become text for localStorage, and text become an array again?
- What happens in your code the moment a delete button is clicked?

If you can point at the line for each one — the project is yours, not the AI's.

<QuizBlock
  :questions="[
    { question: 'What shape holds the tasks in this build?', answer: 'An array of objects — each task is an object with text and done. A list of labeled boxes: the array orders them, the labels describe each one.' },
    { question: 'What happens in your code the moment Add is clicked?', answer: 'The click event fires its function, the input text becomes a new object in the array, the array is saved to localStorage, and the list on screen is redrawn.' },
    { question: 'Why must the list be redrawn after every change — does the screen not update itself?', answer: 'The DOM never watches your array. The screen shows what the last redraw left there, so every change ends with the same move: draw the list again.' },
    { question: 'Where does JSON come in this project?', answer: 'JSON.stringify turns the array into a string before setItem, and JSON.parse turns it back into a real array after getItem — storage keeps strings only.' },
    { question: 'You tick a task and refresh — why does the tick survive?', answer: 'Clicking flipped done on that object inside the array, the array was saved, and on load the page reads it back from localStorage. The tick was never only on the screen.' },
    { question: 'The Clear completed change keeps the unfinished tasks. Which method fits?', answer: 'filter — one true-or-false question per task: is done false. Only the survivors go back into the array.' },
    { question: 'What is the one thing to never say as a navigator?', answer: 'AI wrote it, I do not know. AI may drive every line, but the navigator knows every turn — that is who the captain trusts with the demo.' }
  ]"
/>

<PageNextButton />
