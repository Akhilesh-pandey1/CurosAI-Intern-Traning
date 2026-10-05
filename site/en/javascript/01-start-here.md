# 2.1 Start Here

Welcome to Module 2. HTML gave the page its skeleton, CSS dressed it up. Now comes the part that makes the page alive — JavaScript, the language of logic in the browser.

## What JavaScript actually does

Keep the same person idea from Module 1: HTML is the skeleton, CSS is the skin and clothes, and **JavaScript is the muscles and the brain.** It is what makes the page *do* things:

- React when the user clicks a button or submits a form.
- Check things before sending them — "this email looks wrong."
- Go fetch fresh data from a server — the weather, your notifications.
- Remember things while you use the site — the items in your cart.

One line to hold on to: *HTML says what is on the page, CSS says how it looks, JavaScript says how it behaves.* And remember the two sides from Module 1 — all three run on the **user side**, inside the visitor's browser. The server side comes later, in the Python module.

<VideoSlot link="https://youtu.be/0vL_EhRMFN0" topic="JavaScript intro video — watch once for the basic idea, do not memorize" />

## The one method of this whole module — predict, then run

Before any topic, learn the method you will use on every page of this module. For every concept — a function, a loop, an array method — the walk is always:

1. Ask AI for 5–10 small examples of that topic.
2. **Before running each example, write down, step by step, how the code will execute and what the final output should be.** This is your prediction.
3. Run the code and compare with the prediction.
4. Matched — you understood it. Mismatched — even better: that gap is exactly the thing you had not understood yet. Find out why.

Why predict? Because reading code *feels* like understanding, but it often is not. Writing the prediction first forces your brain to actually trace the code — and the mismatch at the end teaches you more than ten re-reads.

Alongside, keep a copy for quick revision: every important concept, function, loop, or array method gets **1–2 lines in your own words plus one tiny example.** For revising and understanding — never for memorizing.

## Try it right now — the browser console

You need zero setup to run JavaScript. Your browser already carries a console — perfect for small things like this:

1. Open any page, press `F12` (or right-click → Inspect), and open the **Console** tab.
2. Type `console.log("hello")` and press Enter. The page says hello back.
3. Now the real thing. Predict first — what will this print, and why?

```js
let a = 5
let b = 2
console.log(a + b * 10)
```

Write your prediction, run it, compare. If you said 25 — correct: JavaScript does `*` before `+`. If you said 70 — you went left to right, and now you have personally discovered why the prediction step exists.

<PageNextButton />
