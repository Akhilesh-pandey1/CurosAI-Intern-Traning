# 3.9 npm Packages We Use

Here is the real power of npm: almost everything an app needs already exists as a package. Time handling, charts, dashboards, forms, WhatsApp connectivity — for nearly every use case, someone built and tested a library, and one command brings it in. You almost never start from scratch — you pick for your use case, install, and use.

Almost every React project reaches for two of them. Meet both today.

## The habit — ask before you build

Make this a habit every time you start a new project or a new feature. Ask AI two questions:

- "Can you make this more flexible, faster, or with less code?"
- "Is a famous library already present for this?"

That way you never rebuild the wheel — you build only what your project actually needs. One check before installing: go for **famous** packages. Famous means many users and active maintenance. Small, unknown packages can carry security problems — not worth the risk for us.

## Zustand — the state store

Page 3.6 promised: "we will learn Zustand later in this module." This is later. **Zustand** keeps shared state in one store outside the component tree, and any component — any depth — reads and updates it directly:

```jsx
import { create } from "zustand"

const useUserStore = create((set) => ({
  user: "Aisha",
  setUser: (newUser) => set({ user: newUser })
}))

function UserCard() {
  const user = useUserStore((state) => state.user)
  return <p>Hello, {user}</p>
}
```

Read it once, slowly: `create` builds the store — plain state plus an update function. Any component calls the hook and names the slice it wants. Change `user`, and only the components reading `user` redraw.

**Why it beats useContext** (page 3.6):

- **No Provider wrapper** — context needs `<UserContext.Provider>` around the app; Zustand needs nothing.
- **Components take only their slice** — under a Provider, every component below redraws when the value changes. With Zustand, a component asks for `user` and only `user` — one small change, a few small redraws.

<VideoSlot link="https://youtu.be/KCr-UNsM3vA" topic="Zustand — the state store — watch once" />

## Axios — fetch with less work

Same job as fetch in 2.7 — call a server, get data. You even installed it in 3.7's hands-on. The difference is what it saves you:

```js
// fetch — two steps
const response = await fetch(url)
const data = await response.json()
```

```jsx
import axios from "axios"

// axios — one step, JSON already parsed
const { data } = await axios.get(url)
```

Two lines become one. And when a request fails, axios hands you a clear, named error instead of making you dig — that is why most project code you read will say `axios`.

## AI drives, you navigate

One working truth before the projects. AI now writes **98–99% of the code**. So what is your job, as an intern — as an engineer?

**Navigate.** Plan on paper, direct AI step by step, read what it writes, question it, verify it in the browser. The driver is always the AI — you hold the map. That is exactly why this module trained you to predict, read, and break things instead of memorizing commands: those are the muscles navigating needs.

The projects ahead run in this mode: you decide, AI types, you verify.

## Hands-on — both packages, hands on the wheel

1. Ask AI: "Add zustand to my Vite app with a counter store — count and increment." Before reading the code, predict: which components redraw when you click?
2. Ask AI to convert the same counter to useContext. Put the two files side by side — count the extra wrapper lines context needs.
3. Take the `WeatherNow` from 3.5 and ask AI to swap fetch for axios. Predict the diff before you read it.
4. Ask AI: "List 5 popular npm packages for charts, dates, and forms." Just look at the shelf — that is the "never from scratch" idea in one screen.

<QuizBlock
  :questions="[
    { question: 'Your app needs charts, date handling, or chat. What is the first move?', answer: 'Search npm for a maintained package for that use case — install and use it. Almost everything exists already; do not start from scratch.' },
    { question: 'What is Zustand?', answer: 'A state management library — one store outside the component tree that any component reads from and writes to directly.' },
    { question: 'Why is Zustand nicer than useContext?', answer: 'No Provider wrapper, and each component picks only its slice — one small change redraws a few components, not everything under a Provider.' },
    { question: 'In useUserStore((state) => state.user), what is the (state) part?', answer: 'The selector — it names the one slice this component wants from the store.' },
    { question: 'What does axios.get hand back compared to fetch?', answer: 'Data already parsed — no response.json() step. Shorter code, and clearer named errors when a request fails.' },
    { question: 'Where does axios come from — and what did installing it change?', answer: 'npm — npm install axios. The line landed in package.json, the code in node_modules, and the lock file recorded the exact version.' },
    { question: 'AI writes 98 to 99 percent of the code now. What is your job?', answer: 'Navigate — plan, direct AI step by step, read what it writes, question it, and verify it in the browser. You hold the map.' }
  ]"
/>

<PageNextButton />
