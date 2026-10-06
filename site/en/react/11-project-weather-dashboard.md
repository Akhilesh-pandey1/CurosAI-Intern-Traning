# 3.11 Project — Weather Dashboard

The last build of the module — your React app talking to a **real server on the internet**, wearing the layout of a real product: sidebar, navbar, KPI cards. Page 2.10 built this in plain JavaScript; watch the same job grow into a dashboard. Fetch and await move into `useEffect`, loading and error become conditional rendering, and data reaches the screen with no DOM code at all.

## What you build

A weather dashboard, in three steps:

1. **Fixed city first** — the app loads and shows Pune's temperature, wind, and conditions from the **Open-Meteo API** — free, no key, no signup. While the fetch is in the air: a loading state. If it fails: an error state. Both designed, neither an accident.
2. **The dashboard frame** — a **sidebar** with the app name and a list of fixed cities, their names and coordinates in one array at the top — click a city, its weather loads, the active one stays highlighted. A **navbar** on top: title on the left, a user name on the right. A row of three **KPI cards** — temperature, wind, condition — each a reusable `KpiCard` component fed by props. The big weather card sits below.
3. **Then any city** — a search box. The geocoding API turns the name into coordinates, then the weather call runs — the exact two-call chain from 2.10, now living in hooks. A found city joins the sidebar list.

## How to build it — AI drives, you navigate

1. **Plan the data route on paper.** City name → latitude, longitude → temperature. Which state holds each stage — `cityName`, `coordinates`, `weather`, `loading`, `error`? Which one sits in the dependency array? Which component owns the selected city? That plan is the whole app.
2. **Let AI write step one — the fixed city:**

   > Build a React weather dashboard (Vite, plain CSS) that shows the current weather for Pune from the Open-Meteo API — no key. On mount, useEffect fetches https://api.open-meteo.com/v1/forecast?latitude=18.52&longitude=73.86&current_weather=true. Use three states: loading, error, weather. While loading show a loading card, on failure show an error card with a retry button, and on success show the city, a big temperature number, wind speed and conditions in a clean card. Conditional rendering picks the card.

3. **Make AI explain the three faces:**

   > Walk me through all three screens: what exactly sets loading to true, what flips it to false, what moves it to error, and which state change causes each redraw. Why does the fetch live inside useEffect and not in the component body?

   If you can retell the three faces — loading, error, data — you understand most of React: state decides, the screen follows.
4. **Check the driver:** cut your internet and reload — predict the error card before it appears. Then break the fetch address on purpose and compare what the user sees.
5. **Then direct step two — the dashboard frame:**

   > Turn this into a real dashboard layout. A left sidebar: app name on top, then a list of fixed cities — Pune, Mumbai, Delhi, Bengaluru, Chennai — with their names and coordinates in one array at the top of the file, rendered with map. Clicking a city fetches its weather, and the active city stays highlighted. A top navbar: dashboard title on the left, a user name on the right. In the main area, a row of three KPI cards — temperature, wind speed, condition — built from one reusable KpiCard component that takes label, value and icon as props. Below the row, keep the big weather card. Grid layout, plain CSS, generous spacing.

6. **Check the driver again:** click through all five cities. Loading shows every time? The highlight follows? Now switch fast between two cities and predict which one wins — then ask AI how it made sure the slower call cannot overwrite the newer one.
7. **Then direct step three — the search:**

   > Add a search box. First call https://geocoding-api.open-meteo.com/v1/search?name=CITY to get the coordinates, then fetch the weather for them. If the city is not found, show a not-found card — not a crash. Keep loading, error and data as separate states through the whole two-call chain. When a city is found, add it to the sidebar list so it behaves like the fixed ones.

## Make it eye-catching — you direct the design

The brief says a dashboard, not a form. This is where you navigate hardest:

1. **The grid holds first** — sidebar fixed, main area breathing. Equal KPI cards in one aligned row — props doing the work, CSS keeping them identical.
2. **Hierarchy inside the main card** — the city on top, one big temperature number, wind and condition below. Every element justifies itself.
3. **The sidebar is alive** — active city highlighted, hover state on the rest. Module 1's CSS, now serving React.
4. **Style the other states too** — the loading and error screens deserve the same design care as the dashboard. Users spend real time in those states.

## Know it, do not copy it

Before you call yourself done, answer without looking:

- Which state sits in the dependency array now that sidebar clicks change the city — and what would break with `[]` left in?
- Why do the KPI cards take props instead of reading `weather` themselves?
- Where does the not-found check sit in the chain — before or after the weather call — and why?
- What does the user see between the two API calls, and which state drives that screen?

<PageNextButton />
