# 3.10 Project — Weather Dashboard

The last build of the module — your React app talking to a **real server on the internet**. Page 2.10 built this in plain JavaScript; watch the same job shrink. Fetch and await move into `useEffect`, loading and error become conditional rendering, and data reaches the screen with no DOM code at all.

## What you build

A weather dashboard, in two steps:

1. **Fixed city first** — the app loads and shows Pune's temperature, wind, and conditions from the **Open-Meteo API** — free, no key, no signup. While the fetch is in the air: a loading state. If it fails: an error state. Both designed, neither an accident.
2. **Then any city** — a search box. The geocoding API turns the name into coordinates, then the weather call runs — the exact two-call chain from 2.10, now living in hooks.

## How to build it — AI drives, you navigate

1. **Plan the data route on paper.** City name → latitude, longitude → temperature. Which state holds each stage — `cityName`, `coordinates`, `weather`, `loading`, `error`? Which one sits in the dependency array? That plan is the whole app.
2. **Let AI write step one — the fixed city:**

   > Build a React weather dashboard (Vite, plain CSS) that shows the current weather for Pune from the Open-Meteo API — no key. On mount, useEffect fetches https://api.open-meteo.com/v1/forecast?latitude=18.52&longitude=73.86&current_weather=true. Use three states: loading, error, weather. While loading show a loading card, on failure show an error card with a retry button, and on success show the city, a big temperature number, wind speed and conditions in a clean dashboard layout. Conditional rendering picks the card.

3. **Make AI explain the three faces:**

   > Walk me through all three screens: what exactly sets loading to true, what flips it to false, what moves it to error, and which state change causes each redraw. Why does the fetch live inside useEffect and not in the component body?

   If you can retell the three faces — loading, error, data — you understand most of React: state decides, the screen follows.
4. **Check the driver:** cut your internet and reload — predict the error card before it appears. Then break the fetch address on purpose and compare what the user sees.
5. **Then direct step two — the search:**

   > Add a search box. First call https://geocoding-api.open-meteo.com/v1/search?name=CITY to get the coordinates, then fetch the weather for them. If the city is not found, show a not-found card — not a crash. Keep loading, error and data as separate states through the whole two-call chain.

## Make it eye-catching — you direct the design

The brief says a dashboard, not a form. This is where you navigate hardest:

1. A **big temperature number**, the city above it, wind and conditions below — hierarchy first, decoration later. Every element justifies itself.
2. One **card on a soft background**, generous spacing — Module 1's CSS, now serving React.
3. **Style the other states too** — the loading and error cards deserve the same design care as the success card. Users spend real time in those states.
4. One **icon for the condition** — a small conditional render: sun, cloud, or rain.

## Know it, do not copy it

Before the wrap, answer without looking:

- Why does the fixed-city fetch want `[]` in the dependency array — and what would `[city]` change?
- Where does the not-found check sit in the chain — before or after the weather call — and why?
- What does the user see between the two API calls, and which state drives that screen?

<PageNextButton />
