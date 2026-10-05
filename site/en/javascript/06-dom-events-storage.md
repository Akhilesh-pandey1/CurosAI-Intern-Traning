# 2.6 DOM, Events & Storage

So far your code lived in the console — it ran, printed, and vanished. This page connects JavaScript to the real page: read and change what is on screen (**DOM**), react when the user does something (**events**), and remember things after the page closes (**storage**).

## The DOM — the page as live objects

When the browser loads your HTML, it builds the **DOM** — a tree of live objects, one per tag. Change an object and the screen changes instantly. Your way in is `document`:

```html
<button id="partyButton">Celebrate</button>
<p id="message">Waiting...</p>
```

```js
const message = document.querySelector("#message")

message.textContent = "You made it!"
message.style.color = "green"
```

`document.querySelector` finds the first element that matches — here the `<p>` with id `message`. Then `textContent` swaps its text and `style.color` paints it. Predict before running: the waiting text is gone before anyone clicks anything — code ran top to bottom, no event needed.

<VideoSlot link="https://youtu.be/hRaDYCHqFQQ" topic="DOM video — watch once for the basic idea, do not memorize" />

## Events — code that waits

The code above ran immediately. Most of the time you want code to **wait** for the user — a click, a typed letter, a submitted form. That is an event, and `addEventListener` is how you wait:

```js
const partyButton = document.querySelector("#partyButton")

partyButton.addEventListener("click", function () {
  message.textContent = "Party started!"
})
```

Read it as a sentence: *on partyButton, when a click happens, run this function.* The function sits there doing nothing until the click — then it runs. Predict: what is on screen the moment the page loads? Nothing changed — only the click triggers the work.

The same shape covers every interaction — `"input"` fires on every typed letter, `"submit"` fires when a form goes out. Learn one, and you recognize them all.

<VideoSlot link="https://youtu.be/Y3f_ih-2jGk" topic="Events video — watch once for the basic idea, do not memorize" />

## localStorage — the browser remembers

Variables die when the page closes. `localStorage` is the browser's small drawer that **survives refresh and even closing the browser**:

```js
localStorage.setItem("city", "Pune")
console.log(localStorage.getItem("city"))
```

Predict, then run it twice — once normally, once after refreshing the page. `"Pune"` comes back both times. That is the whole point: what goes into the drawer stays there.

Two facts to predict with. A key never saved gives back `null` — not an error, just empty. And the drawer stores **strings only** — for a number, array or object, turn it into a string first and read it back after:

```js
const marks = [78, 92, 85]

localStorage.setItem("savedMarks", JSON.stringify(marks))
console.log(JSON.parse(localStorage.getItem("savedMarks")))
```

<VideoSlot link="https://www.youtube.com/watch?v=A98SPz5XLwY" topic="localStorage video — watch once for the basic idea, do not memorize" />

## sessionStorage — the same drawer, but the tab forgets

One more drawer sits right beside it: `sessionStorage`. Same calls — `setItem`, `getItem` — but everything in it dies the moment the tab closes:

```js
sessionStorage.setItem("draft", "Half written message")
console.log(sessionStorage.getItem("draft"))
```

How to pick: should the data survive tomorrow? → `localStorage`. Should it vanish with the tab? → `sessionStorage`.

<VideoSlot link="https://www.youtube.com/watch?v=rfSJeox61vA" topic="sessionStorage video — watch once for the basic idea, do not memorize" />

## Hands-on — predict, run, compare

The DOM needs a real page, not the bare console — so this hands-on builds one:

1. Ask AI: "Give me the smallest HTML page with a button and a paragraph, plus JavaScript that changes the paragraph text when the button is clicked."
2. Build the two files, open the HTML, and predict before clicking: what does the paragraph say right now, and what after one click?
3. Click and compare. Then bend it — change the text to something else, make the click change the color too, add a second button — predict first, every time.
4. Add `localStorage.setItem("clicks", ...)` so the page remembers how many times you clicked — refresh and check whether the count survives.
5. Switch the same save to `sessionStorage` — refresh and watch it still there, then close the tab, reopen the page, and watch it gone.
6. Ask AI for 4 more tiny examples mixing events and both storages — predict, run, compare, and note the surprises in your copy.

<QuizBlock
  :questions="[
    { question: 'What is the DOM?', answer: 'The tree of live objects the browser builds from your HTML. Change an object through JavaScript and the screen changes at once.' },
    { question: 'What does document.querySelector pick — and which one if many match?', answer: 'The first element that matches the selector — like the tag or id you pass in. One match, the first one, every time.' },
    { question: 'When does the function inside addEventListener run — right away or later?', answer: 'Later — only when the event actually happens. Page load runs nothing; the click runs the function.' },
    { question: 'A form should react when the user submits it. Which event name do you listen for?', answer: 'submit — the same shape as click, a different moment. input fires on every typed letter, submit when the form goes out.' },
    { question: 'You save city with localStorage.setItem, then close the browser and reopen the page. Is it still there?', answer: 'Yes — localStorage survives refresh and closing the browser. That is its whole point.' },
    { question: 'What does localStorage.getItem return for a key that was never saved?', answer: 'null — not an error, just empty. Always expect it when the save might not have happened.' },
    { question: 'Why wrap the marks array in JSON.stringify before saving it?', answer: 'Storage keeps strings only. stringify turns the array into a string, and JSON.parse turns it back into a real array when reading.' },
    { question: 'How is sessionStorage different from localStorage?', answer: 'Same calls, different lifetime — localStorage survives refresh and browser close, sessionStorage dies the moment the tab closes.' },
    { question: 'A half-written message should vanish when the user closes the tab. Which storage do you pick?', answer: 'sessionStorage — it lives only as long as the tab. Anything that must survive tomorrow goes into localStorage.' }
  ]"
/>

<PageNextButton />
