# 3.3 Conditional Rendering & Lists

Screens are not constant. Logged in or not, loading or done, empty list or ten items. JSX has no `if` — but JavaScript itself gives you three clean ways to choose what shows.

## Three ways to show something only sometimes

**1. `&&` — show it or show nothing.** When the left side is true, the right side renders:

```jsx
{hasUnread && <p className="badge">New messages</p>}
```

**2. Ternary — exactly two faces.** One condition, this or that:

```jsx
{isLoggedIn ? <Dashboard /> : <LoginPage />}
```

**3. Plain `if` — before the return.** For bigger branches, decide early and return different JSX:

```jsx
function ScoreCard({ marks }) {
  if (marks >= 40) {
    return <p className="pass">Passed with {marks}</p>
  }
  return <p className="fail">Try again — {marks}</p>
}
```

All three are page 2.4's conditions wearing JSX. One prediction trap: `&&` with a number on the left — like `{items.length && <p>items</p>}` — prints `0` on screen when the list is empty. `0` is not `false`, so React prints it. The ternary has no such surprise.

<VideoSlot link="https://youtu.be/96DGjqlAIxs" topic="Conditional rendering and rendering lists — one video for both, watch once" />

## Lists — map, not loops

You never write a `for` loop to build a screen in React. You **map** an array to JSX — 2.3's `map`, with tags:

```jsx
const students = [
  { id: 1, name: "Aisha" },
  { id: 2, name: "Rohan" },
  { id: 3, name: "Sara" }
]

function StudentList() {
  return (
    <ul>
      {students.map(function (student) {
        return <li key={student.id}>{student.name}</li>
      })}
    </ul>
  )
}
```

`map` turns each object into one `<li>`, and the whole list lands inside the `<ul>`. Change the array, save — the screen redraws itself. No DOM code, ever.

**The `key`** is React's way to recognize each item between renders — a roll number, not a seat position. Give each item a stable `id` from the data. When the list changes, React matches items by key and touches only what really changed. Skip the key and React warns you in the console — a warning that will follow you through your whole React life.

## Hands-on — a list that knows its state

1. Ask AI: "A React component that maps an array of 5 task objects (id, title, done) to a list, with a strikethrough class on the done ones."
2. Predict the screen before you paste. Run, compare.
3. Add a task to the array and change one `done` to `true`. The keys let React move and strike exactly the right rows — nothing else flickers.
4. Show an "All done 🎉" line only when every task is done — pick `&&` or a ternary, and predict first why your pick is the safer one here.
5. Remove the `key` from the `<li>`, save, and read the console warning. Then put it back — that warning never gets fixed by ignoring it.

<QuizBlock
  :questions="[
    { question: 'What does {hasUnread && <p>New</p>} show when hasUnread is false?', answer: 'Nothing — && renders the right side only when the left side is true, so false means no output at all.' },
    { question: 'Logged-in users see a Dashboard, everyone else sees a LoginPage. Which tool, and what does it look like?', answer: 'The ternary — {isLoggedIn ? <Dashboard /> : <LoginPage />} — one condition, exactly two faces.' },
    { question: 'When do you reach for a plain if with JSX?', answer: 'For bigger branches — decide before the return and let each branch return its own JSX.' },
    { question: '{items.length && <p>items</p>} prints 0 on an empty list. Why?', answer: 'An empty list makes items.length 0. The left side of && is not false, so React prints the 0 itself — the ternary has no such surprise.' },
    { question: 'How do you turn an array of students into a list on the screen?', answer: 'Map it to JSX — students.map gives one <li> per student, placed inside the <ul>. No for loop, no DOM code.' },
    { question: 'What is the key in a list for?', answer: 'React uses it to recognize each item between renders — like a roll number — so it touches only what really changed when the list changes.' },
    { question: 'What makes a good key?', answer: 'A stable id that comes from the data itself — a roll number, not a seat position that shifts when the list changes.' },
    { question: 'You remove the key from an li and save. What happens?', answer: 'React warns you in the console — and the warning follows you through your whole React life until you put the key back.' }
  ]"
/>

<PageNextButton />
