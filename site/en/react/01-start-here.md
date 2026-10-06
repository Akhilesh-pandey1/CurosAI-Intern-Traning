# 3.1 Start Here

Welcome to Module 3. JavaScript taught you to touch the page by hand — find the element, change the text, wire the event. React takes that job away from you. On purpose.

## The problem React solves

In plain JavaScript (page 2.6), showing new data is all manual work:

```js
document.querySelector("#city-name").textContent = weather.city
document.querySelector("#temp").textContent = weather.temperature
```

The problems with that:

- You find every element yourself.
- You update every value yourself — one line per field.
- Miss one, and the screen quietly shows old data.
- A real app has dozens of values on screen — nobody can keep up by hand.

React's one idea: **the screen is a picture of your data.**

- You write a function that describes the screen for the current data.
- The data changes → React re-runs it and updates the page itself.

One line to hold on to: *You describe the screen. React does the touching.*

<VideoSlot link="https://youtu.be/cJ6v-0hY00A" topic="What React is and the problem it solves — the video also shows the installation; watch once, do not memorize" />

## Your first React app — ten minutes

React needs a real project, not the console. Node is already on your machine — this site itself runs on it. In the terminal:

```bash
npm create vite@latest my-first-react -- --template react
cd my-first-react
npm install
npm run dev
```

**Why `vite` in the command?** React is only a library — it cannot build or serve a project by itself. A separate tool does that. The old tool was Create React App: slow to start, slow to update. The standard today is **Vite** — a project starts in seconds, and hot reload lands almost instantly. It is the same normal React — Vite is just the modern, faster way to assemble and serve it.

Open the printed address (usually `http://localhost:5173`). You are looking at a React app. Now the loop this whole module runs on:

1. Open `src/App.jsx`, find the text you see on the screen, change it, save.
2. The browser updates **without refresh**. That is hot reload — React rebuilds only what changed.
3. Make a few more changes. The screen always matches what the file says.

Those `import` lines at the top of `App.jsx`? You know them from page 2.5 — ES6 modules. In React, **every file is a module**; components travel between files with `export` and `import`. More on the next page.

## Hands-on — make the app yours

Prediction first, as always:

1. In `App.jsx`, change the big heading to your own text. Predict what the screen will show, save, compare.
2. Add your own lines under it — your name, your batch, one goal for this module. Copy the pattern of the lines already there.
3. Delete one of those lines. Predict, save, check.
4. Stop the server with `Ctrl+C`, start it again with `npm run dev`. The app comes back exactly as you left it — this start, edit, save loop is the whole module.

Mismatch anywhere? Ask AI "why does React do this?" — then 1–2 lines in your copy, in your own words, with one tiny example.

<PageNextButton />
