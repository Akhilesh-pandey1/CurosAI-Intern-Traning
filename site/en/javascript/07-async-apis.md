# 2.7 Async & APIs

Everything so far finished instantly — one line, one result. This page is different: now your code asks a **server on the other side of the world** for data, and the answer takes time. Three ideas handle it: **fetch** sends the ask, **async/await** waits for the answer, and **try/catch** catches the moment the network fails.

## An API — asking another computer for data

An API is a menu between two programs: your code requests something, the server sends back data — almost always as **JSON**, the text shape that looks exactly like JavaScript objects. You already met it on the storage page: `JSON.stringify` to turn objects into strings, `JSON.parse` to read them back.

For practice we use a free test server, JSONPlaceholder — no key, no signup:

```
https://jsonplaceholder.typicode.com/users/1
```

Open that address in a browser tab and look before running anything: a JSON object with a `name`, an `email`, an `address`. That is exactly what your code will receive.

## fetch + async/await — ask, then wait

`fetch` starts the request and hands back a **promise** — a slip of paper saying *your data is not here yet, come back later*. The keyword `await` is how you wait at that slip without leaving the function:

```js
async function showUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
  const user = await response.json()
  console.log(user.name)
}

showUser()
console.log("I print first")
```

Predict before running — two things to get right. First, which line prints first? `"I print first"` — the function **pauses** at the first `await`, and the page keeps living while the network works. Second, why are there **two** awaits? The first brings the response — the envelope. `response.json()` opens it and parses the body — the letter — which needs its own wait.

The word `async` before `function` is what allows `await` inside. Every async function hands back a promise itself — that is why calling it never feels instant.

<VideoSlot link="https://www.youtube.com/watch?v=gRLdHSabW3o" topic="Fetch and async-await video — watch once for the basic idea, do not memorize" />

## try/catch — when the request fails

Waiting code has a failure mode nothing on the earlier pages had: the other side can be unreachable — no internet, a typo in the address, a dead server. `try` wraps the risky part, and `catch` runs **only** when something inside fails:

```js
async function showUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const user = await response.json()
    console.log(user.name)
  } catch (error) {
    console.log("Could not reach the server")
  }
}
```

Bend it before you trust it: break the address on purpose — predict first — and run. The catch message prints instead of a red crash. The page survives, and that is the whole point: failed requests are normal, so normal failures get handled code.

<VideoSlot link="https://www.youtube.com/watch?v=WRNBQCl_cPU" topic="Try-catch video — watch once for the basic idea, do not memorize" />

## Hands-on — predict, run, compare

1. Ask AI: "Give me 6 tiny JavaScript examples using fetch with async/await against https://jsonplaceholder.typicode.com — one single user, one list of users, one with try/catch — 3 to 6 lines each."
2. For each, write your prediction first: what shape arrives, what prints — and which log line prints **before** the data.
3. Run each in the browser console (`F12` → Console), compare, and watch the timing — the slip comes back long before the value.
4. Mismatch? Ask AI "why is the output this?" — then write 1–2 lines in your copy in your own words, with one tiny example.
5. Bend the examples — break the address, read a different field, walk the list of ten users and print every name — predict first, every time.
6. Log a fetch call **without** `await` once, on purpose. Note in your copy what printed: the slip, not the value.

<QuizBlock
  :questions="[
    { question: 'What does fetch hand back the moment you call it — the data, or something else?', answer: 'A promise — a slip saying the data is not here yet. The real value arrives later, and await is how you wait for it.' },
    { question: 'What does await actually do to the function it sits in?', answer: 'It pauses that one function until the promise settles — while the rest of the page keeps running.' },
    { question: 'Why does the example need two awaits — response and response.json()?', answer: 'The first wait brings the envelope — the response. json() opens and parses the body, and that step needs its own wait.' },
    { question: 'What does the word async on a function allow — and what does the function hand back?', answer: 'It allows await inside. And every async function hands back a promise itself — never an instant value.' },
    { question: 'When does the catch block run?', answer: 'Only when something inside try fails — no internet, a wrong address, a dead server. When all goes well, catch never runs.' },
    { question: 'You break the address on purpose. What does the user see — a crash, or the catch message?', answer: 'The catch message. The failure was handled, so the page keeps living — failed requests are normal, not exceptions to the app.' },
    { question: 'What is JSON, and where did you already meet it?', answer: 'The text shape servers reply in — it looks like JavaScript objects. On the storage page: stringify to save, parse to read back.' },
    { question: 'What prints if you log a fetch call without await?', answer: 'The promise slip, not the value — the data has not arrived yet. Forgetting the await is the classic mistake of this page.' }
  ]"
/>

<PageNextButton />
