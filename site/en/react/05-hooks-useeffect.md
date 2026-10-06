# 3.5 Hooks — useEffect

State and refs live *inside* the component. But apps also talk to the **outside world**: fetch the weather, start a timer, change the tab title. Work like that is called a **side effect** — and side effects get their own hook.

## useEffect — after the render that matters

```jsx
import { useEffect, useState } from "react"

function WeatherNow() {
  const [temperature, setTemperature] = useState(null)

  useEffect(() => {
    async function getWeather() {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=18.52&longitude=73.86&current_weather=true"
      )

      const data = await response.json()

      setTemperature(data.current_weather.temperature)
    }

    getWeather()
  }, [])

  return <p>Pune right now: {temperature ?? "..."}°C</p>
}
```

`useEffect` takes a function and runs it **after** the component lands on the screen. Inside, `getWeather` waits for the data with `await` — page 2.7 exactly, just living inside a component now. At the start, `temperature` is `null`, so `??` shows `...` instead. When `setTemperature` fires with the real number, the component re-renders — the hooks tying themselves together.

## The dependency array — the whole hook in one line

That `[]` at the end decides **when** the effect runs again:

- `[]` — empty: run **once**, after the first render. "On mount." Fetching data belongs here.
- `[city]` — after the first render **and every time `city` changes**. "Fetch again — the city changed."
- No array at all — after **every** render. Almost always a mistake: the effect changes state, state re-renders, the effect runs again — an infinite loop you will meet once and never forget.

One more piece: some effects must clean up after themselves. Return a function and React calls it before the next run and when the component leaves the screen:

```jsx
useEffect(function () {
  const timerId = setInterval(tick, 1000)
  return function () { clearInterval(timerId) }
}, [])
```

Skip the cleanup and every timer you start lives forever, stacked on the last one.

<VideoSlot link="https://www.youtube.com/watch?v=bio2eP5YXyw" topic="useEffect — side effects, the dependency array and cleanup, watch once" />

## Hands-on — data from outside

1. Build `WeatherNow` above. Predict what shows while the fetch is still in the air — then run and check.
2. Ask AI to add a **loading** line for the `null` state and an **error** card when the fetch fails. Predict which state changes flip each screen.
3. Add a refresh button: a `refreshCount` state, bumped on click, sitting in the dependency array. Predict first — why does the effect fire again?
4. Build the timer with its cleanup. Ask AI what would go wrong without the returned function — then write one line in your copy.

<QuizBlock
  :questions="[
    { question: 'What is a side effect?', answer: 'Work a component does with the outside world — fetch data, start a timer, change the tab title. useEffect runs it after the render.' },
    { question: 'When does useEffect run?', answer: 'After the component lands on the screen — React draws first, then the effect runs.' },
    { question: 'useEffect with an empty [] — how often does it run?', answer: 'Once, after the first render. Fetching data belongs here.' },
    { question: 'What changes with [city] in the dependency array?', answer: 'The effect runs after the first render and again every time city changes — fetch again, the city changed.' },
    { question: 'Why is no dependency array almost always a mistake?', answer: 'The effect then runs after every render. If it sets state, that re-render runs it again — an infinite loop.' },
    { question: 'Why return a function from the effect?', answer: 'That is the cleanup — React calls it before the next run and when the component leaves the screen. Without it, every timer you start lives forever.' }
  ]"
/>

<PageNextButton />

