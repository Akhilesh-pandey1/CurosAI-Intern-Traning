# 2.4 Conditions & Loops

Two ideas turn a page from a script into a brain: **conditions** let code decide, **loops** let code repeat. Same method — predict first, run after, memorize nothing.

## Conditions — if, else

A condition is a question with a true or false answer — exactly what the comparison operators from the variables page gave you. The code inside runs only when the answer is true:

```js
const marks = 72

if (marks >= 40) {
  console.log("Pass")
} else {
  console.log("Fail")
}
```

`marks >= 40` asks the question. 72 makes it true, so "Pass" prints and the `else` block is skipped.

More than two paths? Chain them with `else if` — JavaScript asks each question in order and **stops at the first true one**:

```js
if (marks >= 80) {
  console.log("Grade A")
} else if (marks >= 60) {
  console.log("Grade B")
} else {
  console.log("Keep trying")
}
```

Predict before you run: marks is 72 — which block prints, and why not "Grade A"?

Questions can be combined with the logic operators — `&&` needs both sides true, `||` needs one:

```js
if (age >= 18 && hasTicket) {
  console.log("You may enter")
}
```

<VideoSlot link="https://www.youtube.com/watch?v=1R4NGtsj7hw" topic="If-else video — watch once for the basic idea, do not memorize" />

## Loops — for, for...of, forEach

Printing "hello" five times by writing the line five times is not code — it is typing. A loop repeats work for you.

**`for` — the counting loop.** Three parts in the brackets: where to start, when to keep going, and the step after each round:

```js
for (let i = 1; i <= 5; i = i + 1) {
  console.log(i)
}
```

Predict round by round before running: what prints? (The short form of `i = i + 1` is `i++` — you will see both.)

**`for...of` — walking through a list.** No counting, no index — one round per value:

```js
const marks = [78, 92, 85]

for (const mark of marks) {
  console.log(mark)
}
```

**`forEach` — the list's built-in loop.** Same walk, but you hand the list a small function to run per value:

```js
marks.forEach(function (mark) {
  console.log(mark)
})
```

How to pick: counting or a known number of rounds → `for`. Walking a list → `for...of` or `forEach`. That is recognition, not memorization — the three prints above all do the same walk.

One warning to predict with: if the keep-going question never turns false, the loop never ends — the page freezes. That is the infinite loop, and it is the one classic mistake of this page.

<VideoSlot link="https://www.youtube.com/watch?v=y32sWmu-RI4" topic="Loops video — watch once for the basic idea, do not memorize" />

## Hands-on — predict, run, compare

The module method, now on decisions and repeats:

1. Ask AI: "Give me 8 tiny JavaScript examples mixing if, else if, else, for loops, for...of and forEach — 2 to 5 lines each."
2. For each example, write your prediction first — step by step. For a loop, write **one line per round**: round 1 prints this, round 2 prints that.
3. Paste it into the browser console (`F12` → Console), run, compare.
4. Mismatch? Ask AI "why is the output this?" — then write 1–2 lines in your copy in your own words, with one tiny example.
5. Finish by bending the examples yourself — change the marks, change where the loop stops — predict again before running, and see if your trace still holds.

<QuizBlock
  :questions="[
    { question: 'temperature is 35. The chain: if (temperature > 40) prints Very hot, else if (temperature > 30) prints Warm, else prints Pleasant. What prints?', answer: 'Warm. The first question fails, the second is true — and the chain stops there, never asking the else.' },
    { question: 'for (let count = 2; count <= 6; count = count + 2) — what prints?', answer: '2, then 4, then 6. Start at 2, jump two every round, stop the moment the question turns false.' },
    { question: 'What happens if a loop question never becomes false?', answer: 'An infinite loop — the rounds never end and the page freezes. It is the classic mistake of this page.' },
    { question: 'A list holds three names. How many rounds does for...of run?', answer: 'Three — one round per value. The list decides; no counting needed.' },
    { question: 'When would you pick a plain for loop over for...of?', answer: 'When you need counting or a known number of rounds — for...of only walks the values, it does not count.' },
    { question: 'isRaining is false, hasUmbrella is true. Does the block inside if (isRaining || hasUmbrella) run?', answer: 'Yes. || needs only one true side — one true is enough.' },
    { question: 'Why does the order of else if questions matter?', answer: 'The chain stops at the first true question. A loose check first would catch everything, and the strict checks after it would never run.' }
  ]"
/>

<PageNextButton />
