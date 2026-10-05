# 2.8 Project — Calculator

Concept pages are over — this is the first **build**. One small screen with buttons that actually compute. Nothing new to learn here: every piece comes from pages 1 to 7 — functions do the math, events wait for the clicks, conditions guard the edge cases, and the DOM shows the result.

## What you build

A working calculator page:

- A display line that shows what you typed and the result.
- Buttons for `0`–`9`, `+`, `-`, `*`, `/`, `=`, and `C` for clear.
- Four operations done by four functions, clicks handled by events, and one condition you will meet soon: **division by zero**.

## How to build it — AI drives, you navigate

The rule for every project from here on: **AI is the driver, you are the navigator.** AI types every file — HTML, CSS, JavaScript. Your job is the navigator's job: plan the route, know every turn, check every street, and never say "AI wrote it, I do not know." The driver turns the wheel — the navigator must know everything about the road.

1. **Plan the route on paper first.** Draw the screen. List the buttons. Ask yourself: what happens when I press `5`? Then `+`? Then `=`? If you cannot say the steps, the plan is not done — and the driver has nowhere to go.
2. **Let AI write the first version — the whole thing:**

   > Build a basic calculator as one HTML page with its CSS and one JavaScript file. A display line, and buttons for digits 0 to 9, add, subtract, multiply, divide, equals and clear — laid out as a clean button grid. Use plain functions for the four operations, addEventListener for every button, and a condition that shows a message when someone divides by zero.

   Open it, look at the HTML and CSS you already learned in Module 1 — recognize the tags, the classes, the styles. Nothing there should be a stranger.
3. **Make AI explain the flow — not every line.** Ask:

   > Walk me through the complete flow: I click 1, then +, then 1, then =. Which function runs on each click, what does each one do, and what calls what — until the 2 shows on the display.

   Follow the walk on your own screen. This function does that, that one gets called from here, the result lands there. When you can retell the click-to-result story without help, you own the code — reciting every line was never the goal.
4. **Check the driver — try every button,** not just the happy path: `8 / 0`, `=` with nothing typed, `C` in the middle of a sum. A navigator catches what the driver missed.
5. **Direct the changes — one at a time.** Predict what will change first, then ask AI for one small change, read what it touched, run, and compare with your prediction. That is predict-then-run, now on a real build.

## The changes you direct

AI still drives — you predict first, give the order, then check its work. Each change is one concept from the module wearing different clothes:

1. Show **Cannot divide by zero** in red — find the condition, then set `style.color` on the display. *(condition + DOM)*
2. Add a **decimal point** button that refuses to add a second dot to the same number. *(condition)*
3. After pressing `=`, make the next digit **start a fresh sum** instead of gluing onto the result. *(state + condition)*
4. Let the **keyboard** work — typing digits and operators does what the buttons do. *(a new event: keydown)*

Do them in order. If a change surprises you, ask AI why — then write one line in your copy.

## Know it, do not copy it

Before you check this page off, answer without looking:

- Which part of your code runs the moment someone presses `7`?
- Where exactly does a condition guard a wrong answer?
- Why are the four operations functions instead of four copies of the same math?

If you can point at the line for each one — the project is yours, not the AI's.

<QuizBlock
  :questions="[
    { question: 'What happens in your code the moment the 7 button is clicked?', answer: 'The click event fires the listener attached to that button, and its function joins the digit onto the display text. Nothing runs until the click — the event waited.' },
    { question: 'Why four functions for the operations instead of the math written inside every button?', answer: 'Write once, name it, call it — the recipe idea. The math lives in one place, so fixing or changing it is one edit, not four.' },
    { question: 'Where do conditions show up in a calculator?', answer: 'Guards: division by zero, a second decimal dot, equals with nothing typed, starting fresh after equals. Wrong inputs get handled, not ignored.' },
    { question: 'Press 8 / 0 and then =. What should the user see — and why not an error?', answer: 'A clear message like Cannot divide by zero. A condition catches it before the math runs — the user sees words, never a crash.' },
    { question: 'Type 0.1 + 0.2 and press =. What comes out — and is your calculator broken?', answer: '0.30000000000000004 — JavaScript stores decimal numbers approximately. Predict this one before you run it; almost nobody sees it coming.' },
    { question: 'The keyboard support change used keydown instead of click. What stayed the same?', answer: 'The shape: an event name, then a function to run. A different moment, the same addEventListener idea.' }
  ]"
/>

<PageNextButton />
