# 3.4 Hooks — useState & useRef

One gap is left before real apps. A component is a function — it runs top to bottom, and every re-render rebuilds it from zero. So where does a component **remember** anything? The answer is hooks.

## Why hooks exist

A hook is a special function that gives a component an ability it cannot have alone:

- `useState` — a value the component **remembers**. Change it, and the screen updates.
- `useRef` — a value the component **remembers** too. Change it, and the screen stays the same.

Why the `use` name? It marks them as hooks. Hooks have one rule: call them at the **top** of the component — never inside an `if`, a loop, or another function. React matches each hook to its value by the call order. Same order every render, so nothing gets mixed up.

<VideoSlot link="https://youtu.be/zHoWgJD0jw4" topic="What hooks are — watch once for the basic idea, do not memorize" />

## useState — memory that moves the screen

```jsx
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

One line, two things: `useState(0)` gives back the current value (`count`) and the function that changes it (`setCount`). The `0` is the starting value.

The click does two things: changes the value, and tells React "the data changed — draw the screen again." You never touch the `<p>`. The new `count` flows in and the screen follows — page 3.1 promised exactly this.

The one mistake everyone makes once: `count = count + 1` or `count++`. Nothing happens — no setter, no redraw. **Never write state directly; call the setter.**

## useRef — like useState, but the screen stays quiet

`useRef` is very simple. It does the same job as `useState` — it holds a value for the component. Only one difference:

- `useState` — change the value → screen **updates**.
- `useRef` — change the value → screen **does not move**.

The value always lives inside `.current`:

```jsx
import { useRef } from "react"

function QuietCounter() {
  const countRef = useRef(0)

  function handleAddClick() {
    countRef.current = countRef.current + 1
    console.log(countRef.current)
  }

  return (
    <div>
      <button onClick={handleAddClick}>Add one</button>
    </div>
  )
}
```

Click five times. The console prints 1, 2, 3, 4, 5 — and the screen shows nothing new. The value grew, the screen stayed quiet. That is the whole idea of `useRef`.

State or ref? One question decides: **should the screen change when this value changes?** Yes — `useState`. No — `useRef`.

<VideoSlot link="https://youtu.be/VlSNiL_x4mo" topic="useRef — element handles and quiet values, watch once" />

## Hands-on — feel the difference

1. Build the `Counter` from useState. Predict: which exact line causes the redraw?
2. Build the ref counter from useRef. Predict first: what does the screen do when you click? What does the console print? The silence of the screen *is* the lesson.
3. Ask AI: "5 tiny React examples mixing useState and useRef, one idea each, 5 to 10 lines." Predict each, run each, compare.
4. Now think big. Ask AI: "Where do useState and useRef get used in a big real app like Amazon or Spotify? Give real examples." A cart total that updates, a search box, a video player that knows its time without redrawing — see how the two hooks show up in apps you use every day.
5. Write 1–2 lines in your copy: state and ref, in your own words, one example each.

<QuizBlock
  :questions="[
    { question: 'What problem does useState solve?', answer: 'A component function runs top to bottom on every render, so it forgets everything. useState gives it a value it remembers between renders.' },
    { question: 'What does const [count, setCount] = useState(0) give you?', answer: 'A pair — the current value count and its setter setCount. The 0 is the starting value.' },
    { question: 'The button is clicked and the count should grow. Why not write count = count + 1?', answer: 'Nothing happens — no setter, no redraw. Always call the setter: setCount(count + 1).' },
    { question: 'What happens inside React when setCount runs?', answer: 'Two things — the value changes and React redraws the component, so the new count flows onto the screen without you touching any element.' },
    { question: 'What is the one rule about where you call hooks?', answer: 'At the top of the component — never inside an if, a loop, or a nested function. React depends on the same call order every render.' },
    { question: 'useRef is almost the same as useState — where is the difference?', answer: 'Both hold a value between renders. The difference: changing a ref does not redraw the screen. The value lives in .current.' },
    { question: 'A value changes — should the screen change with it? How do you pick the hook?', answer: 'Yes, the screen follows — useState. No, keep it quiet — useRef.' }
  ]"
/>

<PageNextButton />
