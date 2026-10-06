# 3.6 More Hooks

React has **more than 10 hooks**. The first three you learned — `useState`, `useRef`, `useEffect` — are the most useful ones: you will see them in almost every project. This page holds the next tier, hooks that show up sometimes. And past them sit a few more we are not learning now — if you or AI ever reach for one, just look at it that day; they rarely appear.

## The problem — props through five floors

One component holds data that another one needs — but they sit far apart in the tree:

```jsx
function App() {
  const user = "Aisha"
  return <Layout user={user} />
}

function Layout({ user }) {
  return <Sidebar user={user} />
}

function Sidebar({ user }) {
  return <UserCard user={user} />
}

function UserCard({ user }) {
  return <p>Hello, {user}</p>
}
```

`user` passes through `Layout` and `Sidebar`, which never use it. They just hold the door open. That trip is called **prop drilling** — and in a real app, the floors get deep.

## useContext — one value, every floor

`useContext` puts a value in one place, and any component below reads it directly — no middle floors:

```jsx
import { createContext, useContext } from "react"

const UserContext = createContext(null)

function App() {
  return (
    <UserContext.Provider value="Aisha">
      <Sidebar />
    </UserContext.Provider>
  )
}

function UserCard() {
  const user = useContext(UserContext)
  return <p>Hello, {user}</p>
}
```

`App` puts "Aisha" into the context, and `UserCard` — floors below — picks it up straight away. No prop traveled through `Sidebar`. Theme colors, logged-in user, chosen language — values many components need at once — live happily in context.

<VideoSlot link="https://youtu.be/jIbXtgL0qrg" topic="useContext — watch once" />

## State management — when even context is not enough

Context shares a value. But a big app has state changing from many places at once — cart, filters, logged-in user, notifications — and long context chains get messy too. The fix: a **state management library** — one store outside the tree that every component reads from and writes to directly.

The name to know: **Zustand** — small, simple, and more than enough for the apps we build. We will learn it later in this module.

## useMemo — meet it, park it

One line: **`useMemo`** remembers a heavy calculation's result, so React does not redo it on every render.

It is a **performance tool** — medicine for a slow screen, not daily bread. For now, just read and move on — when it shows up later in the module, you will understand it fully.

<VideoSlot link="https://youtu.be/rRiBpNhFgoM" topic="useMemo — watch once" />

## useCallback — meet it, park it

One line: **`useCallback`** remembers a function between renders, so a child component does not re-render for no reason.

Same story — a **performance tool**. Read it now, understand it fully when it shows up later in the module.

<VideoSlot link="https://youtu.be/M1ELG5Wgtdo" topic="useCallback — watch once" />

<QuizBlock
  :questions="[
    { question: 'How many hooks does React have — and which matter most?', answer: 'More than 10. useState, useRef and useEffect are the useful ones you will see in almost every project; most others appear only sometimes or rarely.' },
    { question: 'What is prop drilling?', answer: 'Passing the same prop through components that never use it, just to reach one component deeper in the tree.' },
    { question: 'What does useContext fix?', answer: 'Prop drilling — the value sits in one place, and any component below reads it directly, no middle floors.' },
    { question: 'How does a child component read a context value?', answer: 'const user = useContext(UserContext) — the value the Provider above put in, no props involved.' },
    { question: 'Theme color, logged-in user, chosen language — where do they fit best?', answer: 'In context — values that many components across the tree need at once.' },
    { question: 'What does useMemo remember?', answer: 'The result of a heavy calculation — so React does not redo it on every render.' },
    { question: 'What does useCallback remember?', answer: 'A function between renders — so a child component does not re-render for no reason.' },
    { question: 'Should you master useMemo and useCallback today?', answer: 'No — they are performance tools for slow screens. For now, read and move on — you will understand them fully when they show up later in the module.' }
  ]"
/>

<PageNextButton />
