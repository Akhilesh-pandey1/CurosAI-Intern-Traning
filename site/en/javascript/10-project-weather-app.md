# 2.10 Project — Weather App

The last build — and the first time your code talks to a **real server on the internet**, not a practice API. It is page 7 wearing real clothes: fetch, async/await, try/catch — plus the navigator trick this page is really about: **growing the app one step harder** without breaking what works.

## What you build

A weather page, in two steps of rising difficulty:

1. **Fixed city first** — the page loads and shows Pune's current temperature and conditions from the **Open-Meteo API** — free, no key, no signup.
2. **Then your city** — an input and a search button: the user types any city, the app turns the name into coordinates with the **geocoding API**, then fetches that city's weather. Two API calls, chained.

## How to build it — AI drives, you navigate

Same rule, third time: **AI is the driver, you are the navigator.** You plan the data route, know every turn, check every street — never "AI wrote it, I do not know."

1. **Plan the data route on paper.** Weather numbers come from coordinates, not names — so the route is: *city name → latitude, longitude → temperature*. Write on paper what each API must hand back and which one field you read from each. That route is the whole app.
2. **Let AI write step one — the fixed city:**

   > Build a weather app as one HTML page with its CSS and one JavaScript file. Show the current weather for Pune using the free Open-Meteo API — no API key. On screen: the city name, the temperature and the weather conditions. Handle a failed request with try/catch. No frameworks.

   Open it and read the HTML and CSS from Module 1, the fetch and awaits from page 7 — nothing should be a stranger.
3. **Make AI explain the flow — not every line.** Ask:

   > Walk me through the complete flow: the page loads, fetch goes to Open-Meteo, JSON comes back, and the temperature shows on screen. Which function runs, why there is more than one await, and where try/catch would fire — until the number lands on screen.

   Follow it live. Envelope, letter, field — you know this walk from page 7.
4. **Check the driver:** break the address on purpose, cut your internet from DevTools, and predict before each run what the user sees instead of a crash.
5. **Then direct the complexity increase — step two:**

   > Change the app so the user types a city name and presses Search. First call the geocoding API at https://geocoding-api.open-meteo.com/v1/search?name=CITY — it turns the name into a latitude and longitude. Use those in the weather call. If the city is not found, show a message instead of a crash.

   Now the flow walk is longer — four awaits in a chain: geocode envelope, geocode letter, weather envelope, weather letter. Retell it until it is boring. That is when you own it.

## The changes you direct

1. A **city not found** message — the geocoding answer comes back with nothing inside; that is a condition, not a crash. *(null check + condition)*
2. Show **wind speed** next to the temperature — one more field from the same letter. *(reading the JSON)*
3. The **last searched city** comes back after refresh. *(localStorage — the module tying itself together)*
4. **Enter** in the input triggers the search. *(keydown)*

## Know it, do not copy it

Before the test, answer without looking:

- Why does the city search need **four** awaits and the fixed city only two?
- Where exactly does try/catch fire when the internet is gone?
- What does the geocoding call turn a city name into — and which API needs that answer first?

## The module in one breath

JavaScript is the brain: data in shapes (arrays, objects), decisions and loops, work you name once and reuse (functions), a live page to touch (DOM + events), drawers that remember (storage), other computers to ask (fetch + await + catch) — and two builds that used all of it. Now prove it.

## Test Yourself — the whole module

Ten questions, one from almost every page. Answer first, flip after. Every miss points at a page worth one more visit — that is the test doing its job.

<QuizBlock
  :questions="[
    { question: 'const city = Pune, then city = Delhi. What happens?', answer: 'An error — const cannot be reassigned. That was the deal when it was created. (page 2.2)' },
    { question: 'What does typeof [4, 8, 15] print?', answer: 'object — arrays are objects in JavaScript. The prediction almost everyone loses once. (page 2.2)' },
    { question: '[78, 92, 35].filter(function (n) { return n >= 40 }) — what comes back?', answer: '[78, 92] — only the items whose question turns true survive. (page 2.3)' },
    { question: 'students is a list of objects. How do you read the first student name?', answer: 'students[0].name — position first, then the label. (page 2.3)' },
    { question: 'What does writing a function do — and what runs it?', answer: 'Nothing by itself — it only names the work. Calling it runs the body. (page 2.5)' },
    { question: 'The import braces say addMarks2 but the file exports addMarks. What happens?', answer: 'It fails — the name in braces must exactly match the exported name. (page 2.5)' },
    { question: 'When does the function inside addEventListener run?', answer: 'Only when the event happens. Page load runs nothing — the click does. (page 2.6)' },
    { question: 'localStorage or sessionStorage — which one survives closing the browser?', answer: 'localStorage. sessionStorage dies with the tab. (page 2.6)' },
    { question: 'What prints if you log a fetch call without await?', answer: 'The promise slip, not the value — the data has not arrived yet. (page 2.7)' },
    { question: 'In the weather app, the city comes back with no coordinates. What should the user see — and what guards it?', answer: 'A clear message like City not found — a condition catches the empty answer before the weather call runs. (page 2.10)' }
  ]"
/>

<PageNextButton />
