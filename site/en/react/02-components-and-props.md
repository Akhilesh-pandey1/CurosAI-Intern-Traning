# 3.2 Components & Props

Last page you edited one file and watched it change. Now meet the two pieces every React screen is built from: **JSX**, the HTML-like code the screen is written in, and **components** — small named pieces you write once and reuse everywhere.

## What JSX is

React pages are written in **JSX** — JavaScript that looks like HTML:

```jsx
const city = "Pune"

function App() {
  return (
    <div>
      <h1 className="title">Weather</h1>
      <p>City: {city}</p>
    </div>
  )
}
```

It looks like HTML, but it is not. Three differences to spot right away:

- **Curly braces `{}`** drop any JavaScript into the markup — a variable, a sum, a function call. What comes out is printed there.
- **`className` instead of `class`** — because this is JavaScript, and `class` is a reserved word there.
- **One parent only** — a component returns a single wrapping element (or an empty `<>...</>`), never two loose tags side by side.

## A component is a function that returns JSX

```jsx
function Greeting() {
  return <h2>Hello, intern!</h2>
}

function App() {
  return (
    <div>
      <Greeting />
      <Greeting />
      <Greeting />
    </div>
  )
}
```

`Greeting` is a plain JavaScript function. Only two rules: the name starts with a **capital letter** (lowercase means "HTML tag" to React), and it returns JSX. `<Greeting />` calls it — three calls, three hellos, one recipe. The same deal as functions in 2.5: write once, call anywhere.

Real pages are a tree of these: `App` holds `Navbar`, `Sidebar`, `PasswordList` — and `PasswordList` holds many `PasswordRow`s. A big screen, many small pieces, each one easy to find and fix.

<VideoSlot link="https://youtu.be/S4VH8hddg8c" topic="Components, props and JSX — one video for all three, watch once" />

## Props — data you pass in

A `Greeting` that always says "intern" is a photocopy. **Props** pass data into a component — attributes on the tag:

```jsx
<UserCard name="Aisha" batch={6} />
<UserCard name="Rohan" batch={7} />
```

The component receives one object called `props`:

```jsx
function UserCard(props) {
  return <div>{props.name} — batch {props.batch}</div>
}
```

Most people unpack it right in the brackets — same data, nicer to read:

```jsx
function UserCard({ name, batch }) {
  return <div>{name} — batch {batch}</div>
}
```

Text goes in quotes, numbers and variables go in braces. And one law: **props are read-only.** A component never changes its own props — the data belongs to the parent that passed it. Changing data gets its own tool on page 3.4.

## Hands-on — one card, three people

1. Ask AI for a `UserCard` component that takes `name`, `role`, and `city` and shows them in a small card.
2. Render it three times with three different people. One component, three cards — the reuse React exists for.
3. Predict, then check: what happens if you pass `city` to only two of them? Find the empty spot — a missing prop just does not print.
4. Try to change `name` inside `UserCard`. Read the rule again — props are read-only, and React is not shy about warning you.

<QuizBlock
  :questions="[
    { question: 'What is a React component, in one line?', answer: 'A plain JavaScript function that returns JSX. The name starts with a capital letter, and writing <Greeting /> calls it.' },
    { question: 'Why must a component name start with a capital letter?', answer: 'Lowercase means a plain HTML tag to React — the capital letter is how React tells your component apart from a real tag.' },
    { question: 'name goes in quotes but batch goes in braces on the UserCard tag — why?', answer: 'Quotes hold text. Braces mean this is JavaScript — batch={6} passes the number 6, not the text 6.' },
    { question: 'How does the component receive what you passed in?', answer: 'As one object called props — props.name, props.batch — or unpacked right in the brackets: function UserCard({ name, batch }).' },
    { question: 'Can UserCard change its own name prop? Why not?', answer: 'No — props are read-only. The data belongs to the parent that passed it; the child only shows it.' },
    { question: 'Why does JSX say className instead of class?', answer: 'JSX is JavaScript, and class is a reserved word there — so the attribute is className.' },
    { question: 'What is the one-parent rule in JSX?', answer: 'A component returns one single wrapping element — or an empty <>...</> — never two loose tags side by side.' }
  ]"
/>

<PageNextButton />
