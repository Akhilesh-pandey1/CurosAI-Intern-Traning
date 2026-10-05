# 2.2 Variables, Types & Operators

Three small ideas carry all of JavaScript: where data lives (variables), what shapes data comes in (types), and what you can do with it (operators). Same rule as always — predict first, run after, memorize nothing.

## Variables — let and const

A variable is a labelled box. You put a value in, give the box a name, and use the name whenever you need the value:

```js
let score = 0
const maxScore = 100
```

Two words, one difference:

- `let` — the value **can change** later. Scores, counts, user input — anything that moves.
- `const` — the value is **fixed forever**. Maximums, fixed settings, names that never change.

```js
let score = 0
score = 10           // fine — let can change
score = score + 5    // score is now 15

const maxScore = 100
maxScore = 200       // TypeError — const never changes
```

Predict before you run: which line above explodes, and why?

One old word you will meet in older code: `var`. It did both jobs, with surprising behavior. Modern code says `let` and `const` — recognize `var`, never write it.

## Data types — the five everyday shapes

Every value in JavaScript has a shape. These five cover almost everything you will touch:

```js
const studentName = "Riya"                 // String  — text in quotes
const age = 21                             // Number  — 21 and 3.14, one type
const isPresent = true                     // Boolean — true or false
const marks = [78, 92, 85]                 // Array   — many values in order
const student = { name: "Riya", age: 21 }  // Object  — labelled values together
```

- **Array** — one box holding many values in a row. `marks[0]` is 78 — counting starts at 0.
- **Object** — many labelled values in one box. `student.age` is 21. Use it when the values belong together — one student, one order, one user.

Ask any value what it is with `typeof`:

```js
console.log(typeof age)    // "number"
console.log(typeof marks)  // "object"  — surprise!
```

Predict that second line before running it. Arrays print as `"object"` — in JavaScript, arrays *are* objects. Almost everyone gets this prediction wrong once. That is the point of predicting.

## Operators — the everyday moves

**Math:** `+ - * /` and `%` — `%` gives the remainder, so `10 % 3` is 1.

**Plus has a double life.** Numbers add. But the moment one side is a String, it joins text instead:

```js
console.log(5 + 5)    // 10
console.log("5" + 5)  // "55" — not 10!
```

**Comparison — questions with a true or false answer:**

- `===` equal, `!==` not equal
- `>`, `<`, `>=`, `<=`

Always write three `===`, never two. `===` checks value *and* type; `==` silently converts and hides real bugs.

**Logic — combining true and false:**

- `&&` (and) — both sides must be true
- `||` (or) — at least one side true
- `!` (not) — flips it

```js
const canEnter = age >= 18 && isPresent   // true and true → true
```

<VideoSlot link="https://youtu.be/xv82yODVXqo" topic="Variables, types and operators video — watch once for the basic idea, do not memorize" />

## Hands-on — predict, run, compare

The module method, now on real topics:

1. Ask AI: "Give me 8 tiny JavaScript examples mixing let, const, strings, numbers, arrays, objects and operators — 2 to 4 lines each."
2. For each example, write your prediction first — step by step, what each line does, and the final output.
3. Paste it into the browser console (`F12` → Console), run, compare.
4. Mismatch? Ask AI "why is the output this?" — then write 1–2 lines in your copy in your own words, with one tiny example.
5. Finish by making 2–3 examples of your own — change a value, predict again, run again. Changing one number and predicting again is the fastest way to make a concept yours.

<QuizBlock
  :questions="[
    { question: 'city is made with const, then the code runs city = Delhi. What happens?', answer: 'An error — const boxes never change. If the value should be able to change, it had to be let.' },
    { question: 'let lives = 3, then lives = lives - 1. What does lives hold now?', answer: '2. The right side runs first (3 - 1), then the result goes back into the box.' },
    { question: 'What does typeof [4, 8, 15] print?', answer: 'object — in JavaScript, arrays are objects. Almost everyone predicts array and gets this one wrong once.' },
    { question: 'The text 7 (in quotes) plus the number 3 — what does that give?', answer: '73, not 10 — the moment one side is a string, + joins text instead of adding numbers.' },
    { question: 'Why === and never ==?', answer: '=== checks value and type. == silently converts — it calls the text 5 and the number 5 equal, which hides real bugs.' },
    { question: 'order holds { item: Book, price: 250 }. How do you get just the price?', answer: 'order.price — the dot picks one labelled value out of the object.' },
    { question: 'What do false || true and false && true give?', answer: 'true and false. || needs at least one true side; && needs both.' }
  ]"
/>

<PageNextButton />
