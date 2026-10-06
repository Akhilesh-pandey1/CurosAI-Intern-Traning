# 3.11 Wrap & Test Yourself

Eleven pages ago, React was a name. Now you can describe a screen in JSX, split it into components that pass props, choose what renders with conditions, map lists with keys, and give components memory and outside powers with the three hooks that run most real apps.

## The module in one breath

React's deal: **the screen is a picture of your data.** You describe the picture in JSX (3.1), cut it into reusable components that hand data down as props (3.2), and let conditions and `map` decide what shows (3.3). State holds every changing value — setter, never direct writes — while refs hold quiet boxes and element handles (3.4), and useEffect opens the door to the outside world: fetches, timers, cleanups (3.5). Two builds used all of it — a password manager with pages, storage and reusable pieces (3.9), and a weather dashboard with real APIs and designed loading, error and data states (3.10).

## What you did not memorize — on purpose

The SOP said it on day one and it stayed true: **do not memorize every hook or React feature.** You now own the commonly used core — JSX, components, props, conditional rendering, lists, useState, useRef, useEffect. The rest — useContext, useReducer, useMemo, the long tail — is one search away on the day a real project needs it. Searching well for exactly what you need is the skill; memorizing the catalog is not.

And the habits travel with you: plan on paper before the prompt, make AI explain the flow, break things on purpose, predict before you run.

## What is next

Module 4 — Python/Flask: the **server side**. Everything so far ran in the visitor's browser. Now you meet the machine that holds the real data — the one answering the requests your fetch calls have been making all module.

## Test Yourself — the whole module

Ten questions, one from almost every page. Answer first, flip after. Every miss points at a page worth one more visit — that is the test doing its job.

<QuizBlock
  :questions="[
    { question: 'In one line — what is the deal you make with React?', answer: 'You describe what the screen should look like for the current data, and React updates the page when the data changes. No querySelector, no manual DOM writes. (page 3.1)' },
    { question: 'Name three differences between JSX and HTML.', answer: 'Curly braces drop JavaScript into the markup, className instead of class, and exactly one parent element. (page 3.1)' },
    { question: 'import UserCard from ./UserCard versus import { toTitleCase } from ./formatTools — what is the difference?', answer: 'The first is a default import — the one main thing that file gives, no braces. The second is a named import — braces, exact name. (page 3.2)' },
    { question: 'Why are props read-only?', answer: 'They belong to the parent that passed them. A component displays props but never edits them — changing data is state, owned where it lives. (page 3.2)' },
    { question: 'How do you turn an array of student objects into a list of li tags — and what must each li carry?', answer: 'students.map to JSX, each li with a stable key — an id from the data, so React can track items between renders. (page 3.3)' },
    { question: 'The screen shows a badge only when hasUnread is true. Two ways to write it?', answer: 'The ternary — hasUnread ? badge : null — or the && form — hasUnread && badge. (page 3.3)' },
    { question: 'What pair does useState(0) return — and which one causes the redraw?', answer: 'The current value and its setter. The setter — calling it is what tells React to re-render with the new value. (page 3.4)' },
    { question: 'State or ref — how do you decide?', answer: 'Ask whether the screen should change when the value changes. Yes — useState. No — useRef. (page 3.4)' },
    { question: 'What does useEffect with an empty array do — and what does [city] change?', answer: 'Empty: runs once after the first render. With city: runs again every time city changes. (page 3.5)' },
    { question: 'In the password manager, why does the entries state live in the top component instead of inside PasswordRow?', answer: 'The form, the list and the rows all show and change the same data — state lives at the highest place that needs it and flows down as props. (page 3.9)' }
  ]"
/>

<PageNextButton />
