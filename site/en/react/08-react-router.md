# 3.8 React Router

Every app you built so far was one screen. Real apps have many — a home, a login, a profile, a product page — and the address bar changes as you move: `/`, `/login`, `/products/5`. In React, one small library draws that map: **React Router**.

## The big idea — routing without the server

In Module 1, a changed URL meant one thing: the browser asks the server for a new HTML page. A React app does something smarter. The whole app is **one page** — a single-page application, or **SPA**. When the address changes, no server trip happens. JavaScript reads the new path and **swaps the component on the screen**. Fast, smooth, no reload.

That is front-end routing: the URL is a bookmark for *which component* shows — and React Router is the one watching it.

## Routes — the map of the app

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/5" element={<Product />} />
      </Routes>
    </BrowserRouter>
  )
}
```

Read it as the map it is:

- **`BrowserRouter`** — turns the watcher on. It surrounds the whole app and listens to the address bar.
- **`Routes`** — the list of paths. React Router picks the one that matches the current URL.
- **`Route`** — one line of the map: this path, that component. The address is `/about`, so the `About` component renders.
- **`Link`** — the way to move. It looks like the anchor tag from Module 1, but clicking it does **not** reload the page — it only changes the address and lets the map redraw.

Click "About" and the address becomes `/about` — no refresh, `About` appears. Press the back button — browser history still works, because React Router uses it properly.

<VideoSlot link="https://youtu.be/ZP8QyCIUeIA" topic="React Router — SPA routing, Routes and Link — watch once" />

## Dynamic routes — one Route, many pages

`/products/5` and `/products/12` should not need two lines. A **dynamic route** uses a colon for the changing part:

```jsx
<Route path="/products/:id" element={<Product />} />
```

Now `/products/5`, `/products/12`, any number — all land on the same `Product` component, and the id travels with it, ready to read inside. The how comes with practice — when a real project needs it, ask AI "how do I read params in React Router".

That is the whole mental model: **the URL decides which component you see.** Everything else is detail.

## Hands-on — give the app an address bar

1. Ask AI: "Add react-router-dom to my Vite React app with two pages, Home and About, and Link navigation." It will have you run `npm install react-router-dom` — you know exactly what that does now. Predict what happens to the URL and the screen when you click.
2. Add a third route yourself — `/contact` with its own component. Copy the pattern, change the names.
3. Break it on purpose: change one `Link` to `to="/aboutt"`. Predict before you click — what shows? (Nothing matches, so a blank spot. Ask AI for the catch-all `*` route that shows a "page not found" screen.)
4. Ask AI: "How would a big app like Amazon use routes — what lives at /products/5 there?" The same map, just bigger.

<QuizBlock
  :questions="[
    { question: 'What is an SPA?', answer: 'Single-page application — the browser loads one page, and JavaScript swaps the components on screen. The server is not asked for a new page on every move.' },
    { question: 'What does one Route line say?', answer: 'One path and one component — this URL, that component on the screen.' },
    { question: 'Why Link instead of a plain anchor tag?', answer: 'A plain anchor reloads the whole page. Link only changes the address and lets React Router redraw — no reload.' },
    { question: 'What turns the URL watching on?', answer: 'BrowserRouter — it wraps the app and listens to the address bar.' },
    { question: 'What does /products/:id give you?', answer: 'One dynamic route that matches any id — /products/5 and /products/12 both land on the same component, with the id readable inside.' },
    { question: 'The address changed but the page did not reload. Why?', answer: 'That is front-end routing — JavaScript read the new path and swapped the component. No server trip happened.' },
    { question: 'You click a Link and nothing renders. What most likely happened?', answer: 'No Route matches that path — the map has no line for it. Fix the path, or add a catch-all route.' }
  ]"
/>

<PageNextButton />
