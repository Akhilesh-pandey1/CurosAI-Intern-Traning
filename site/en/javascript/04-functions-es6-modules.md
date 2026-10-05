# 2.4 Functions & ES6 Modules

You can already make JavaScript decide and repeat. This page teaches it to **remember a piece of work** — write the work once, give it a name, and call it whenever you need it. Then modules: how real projects split code across many files.

## Functions — name a piece of work

A function is a recipe with a name. Writing the recipe does nothing — **calling** it cooks the meal:

```js
function greetStudent(name) {
  console.log("Hello " + name)
}

greetStudent("Aisha")
greetStudent("Rohan")
```

`greetStudent` is written once but runs twice. The brackets hold **parameters** — named inputs the recipe needs. Here `name` is the parameter, and `"Aisha"` is the argument you pass in.

Most functions should not just print — they should **hand a value back** with `return`:

```js
function addMarks(first, second) {
  return first + second
}

const total = addMarks(40, 35)
console.log(total)
```

Predict before running: what prints? The call runs the body, `return` sends `75` back, and the call spot becomes that value — which is why it lands inside `total`.

One distinction to hold: `console.log` shows a value *to you* on the screen. `return` hands a value *back to the code* so it can be stored and used. Two different jobs.

And one prediction trap: writing the function does nothing. Only the call runs it.

<VideoSlot link="https://youtu.be/a_gwOwkbhZ0" topic="Functions video — watch once for the basic idea, do not memorize" />

## ES6 Modules — split code across files

One giant file gets messy. Modules let each file do one job and share its pieces — `export` puts a piece out of a file, `import` pulls it into another.

Save this in a file named `mathTools.js`:

```js
export function addMarks(first, second) {
  return first + second
}
```

Save this in a file named `main.js`:

```js
import { addMarks } from "./mathTools.js"

const total = addMarks(40, 35)
console.log(total)
```

The name in the braces must match the exported name — `addMarks` here. The browser walks from `main.js` into `mathTools.js`, brings the recipe over, and calls it.

One thing to know: modules do not run in the plain console. They need real files wired together — that is exactly the hands-on below.

<VideoSlot link="https://youtu.be/wCkHbaLG5cw" topic="ES6 modules video — watch once for the basic idea, do not memorize" />

## Hands-on — predict, run, compare

The module method, now on reusable work:

1. Ask AI: "Give me 8 tiny JavaScript examples mixing functions, parameters and return values — 2 to 5 lines each."
2. For each example, write your prediction first — step by step. Follow the value: what goes in, what comes out, where it lands.
3. Paste it into the browser console (`F12` → Console), run, compare.
4. For modules, ask AI: "Give me the smallest HTML page with two JS files using export and import." Build the three files, add `<script type="module" src="./main.js"></script>` to the HTML, open it, and check the console.
5. Mismatch? Ask AI "why is the output this?" — then write 1–2 lines in your copy in your own words, with one tiny example.
6. Finish by bending the examples — change the arguments, rename a function, break the import name on purpose and read the error — predict first, then run.

<QuizBlock
  :questions="[
    { question: 'What does writing a function do — and what actually runs it?', answer: 'Writing it does nothing — it only names the work. Calling it with a real value, like greetStudent(Aisha), is what runs the body.' },
    { question: 'function double(number) { return number * 2 } — then const result = double(6). What is result?', answer: '12. The call runs the body, return hands 12 back, and the call spot becomes 12 — which lands in result.' },
    { question: 'What is the difference between console.log and return?', answer: 'console.log shows a value to you on the screen. return hands a value back to the code so it can be stored and used. Two different jobs.' },
    { question: 'In greetStudent(name), what is name — and what is Aisha in greetStudent(Aisha)?', answer: 'name is the parameter — the named input in the brackets. Aisha is the argument — the real value passed in during the call.' },
    { question: 'What do export and import each do?', answer: 'export puts a piece out of a file. import pulls that piece into another file — and the name in braces must match the exported name.' },
    { question: 'Why split code into modules at all?', answer: 'One giant file gets messy. Each file does one job, pieces get reused across pages, and any piece is easy to find again.' },
    { question: 'mathTools.js exports addMarks, but the import braces say addMarks2. What happens?', answer: 'It fails — the name in the braces must exactly match the exported name. addMarks2 was never exported, so the browser finds nothing to bring over.' }
  ]"
/>

<PageNextButton />
