# 2.3 Arrays & Objects

Real data never arrives as one value. It arrives as a **list** of many — students, marks, tasks — or as a **box of labeled things** — a student with a name, marks, and a city. Arrays hold lists, objects hold labeled boxes, and three methods — map, filter, find — do most of the daily work on lists.

## Arrays — a numbered list

You met arrays as a type on the last page. Now two facts you use constantly: positions start counting at **0**, and `.length` tells you how many items are inside:

```js
const marks = [78, 92, 85]

console.log(marks[0])
console.log(marks[2])
console.log(marks.length)
```

Predict first: what prints? `78` first — position 0 holds the first item. Then `85` — position 2, not the second item. Then `3` — three items, because `.length` counts, it does not care about positions.

You can also change an item through its position:

```js
marks[1] = 95
```

## Objects — a labeled box

An array finds things by position. An object finds things by **name**:

```js
const student = {
  name: "Aisha",
  marks: 78,
  city: "Pune"
}

console.log(student.name)
console.log(student.marks)
```

`student.name` reads the value at the label `name`. Change it the same way — `student.marks = 95` — and add a new label just by assigning it.

The shape you will meet everywhere — including in real projects — is a **list of objects**:

```js
const students = [
  { name: "Aisha", marks: 78 },
  { name: "Rohan", marks: 92 },
  { name: "Meera", marks: 35 }
]

console.log(students[0].name)
```

Predict: what prints? Position 0 holds the first object, and `.name` reads its label — so `Aisha`.

<VideoSlot link="https://youtu.be/-oVdqCaL3DQ" topic="Arrays and objects video — watch once for the basic idea, do not memorize" />

## map, filter, find — the three daily methods

These three take a list and a small function, and each answers a different everyday question.

**`map` — give me one new value per item.** It runs the function on every item and hands back a **new list of the same size**:

```js
const marks = [78, 92, 85]

const bumped = marks.map(function (mark) {
  return mark + 2
})

console.log(bumped)
```

Predict: `[80, 94, 87]` — three items in, three out. The original list is untouched.

**`filter` — keep only the items that pass the question.** The function is a true-or-false question; only the items that answer true survive:

```js
const passing = marks.filter(function (mark) {
  return mark >= 40
})

console.log(passing)
```

All three marks pass here, so the list comes back full. Change one mark to 35 and predict again — now two survive.

**`find` — give me the first item that passes.** Same question style as filter, but it stops at the first match and hands back **that one item** — or `undefined` if nothing passes:

```js
const topper = marks.find(function (mark) {
  return mark > 90
})

console.log(topper)
```

How to pick: change every item → `map`. Keep the items that qualify → `filter`. Grab one item → `find`. Recognition, not memorization — all three walk the same list the same way.

<VideoSlot link="https://www.youtube.com/watch?v=bAUMuuRH99o" topic="Map, filter and find video — watch once for the basic idea, do not memorize" />

## Hands-on — predict, run, compare

The module method, now on real data shapes:

1. Ask AI: "Give me 8 tiny JavaScript examples mixing arrays, objects, lists of objects, and map, filter, find — 2 to 5 lines each."
2. For each example, write your prediction first — line by line. For the three methods, write **one output line per item**, saying why it survives or changes.
3. Paste it into the browser console (`F12` → Console), run, compare.
4. Mismatch? Ask AI "why is the output this?" — then write 1–2 lines in your copy in your own words, with one tiny example.
5. Finish by bending the examples — change the passing mark, read a different label, find with a question nothing passes — predict first, then run.

<QuizBlock
  :questions="[
    { question: 'marks is [78, 92, 85]. What is marks[1] — and why not 78?', answer: '92. Positions start at 0, so position 1 holds the second item. 78 sits at position 0.' },
    { question: 'What does marks.length give for that list?', answer: '3 — length counts the items, it does not look at positions.' },
    { question: 'When do you pick an object instead of an array?', answer: 'When each value has a name — an object reads by label, like student.marks, while an array reads by position, like marks[0].' },
    { question: 'students is a list of objects. How do you read the name of the first student?', answer: 'students[0].name — position first, then the label.' },
    { question: '[1, 2, 3].map(function (n) { return n * 10 }) — what comes back?', answer: '[10, 20, 30] — one new value per item, so the new list has the same size.' },
    { question: '[12, 45, 8, 67].filter(function (n) { return n > 30 }) — what comes back?', answer: '[45, 67] — only the items whose question turns true survive; 12 and 8 are dropped.' },
    { question: 'What does find return when no item passes its question?', answer: 'undefined — it stops at the first match, and with no match there is nothing to hand back.' },
    { question: 'map and filter both hand back a list. How do their sizes differ?', answer: 'map always returns the same count — one output per input. filter returns the same count or fewer — items only get removed.' }
  ]"
/>

<PageNextButton />
