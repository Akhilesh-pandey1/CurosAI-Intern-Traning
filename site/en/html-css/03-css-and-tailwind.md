# 1.3 CSS and Tailwind CSS

Two things on one page. First the concept — what CSS really is. That concept never changes. Then the tool — Tailwind CSS, the way most teams style pages today. That tool can change any year. Learn the concept, use the tool, memorize nothing.

## What CSS actually does

CSS is the styling language. Every CSS rule has the same two-part shape — **pick an element, change its properties**:

```css
h1 {
  color: navy;
  font-size: 32px;
}
```

"Pick every `h1` and make its text navy, 32 pixels." That is all CSS ever does. Different pickers, different properties, same shape every time.

The everyday properties you will keep seeing:

- `color`, `background-color` — text color and box color.
- `font-size`, `font-weight` — how big and how thick the text is.
- `padding` — space **inside** a box, between the edge and the content.
- `margin` — space **outside** a box, pushing other boxes away.
- `border`, `border-radius` — the outline and the rounded corners.
- `width`, `height` — the size of the box.

In real projects you usually do not style tags directly. You give the element a **class** — a name label — and style that class:

```html
<button class="primary-button">Register</button>
```

```css
.primary-button {
  background-color: blue;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
}
```

HTML carries the name, CSS carries the look. Remember this split — Tailwind is about to remove it.

<VideoSlot link="https://youtu.be/b7PlBCjAJco" topic="CSS video — watch once for the basic idea, do not memorize" />

## Tailwind CSS — the framework we use

Writing all that CSS by hand gets tough as pages grow. So developers built **frameworks** — ready-made systems on top of CSS where the common solutions already exist under short names. Tailwind CSS is the framework most teams use today, and its one big idea: **stop writing CSS in a second file — put tiny ready-made classes straight on the HTML.** Each class does one small job.

Here is the same button from above, both ways:

```html
<!-- Plain CSS: name in HTML, look in another file -->
<button class="primary-button">Register</button>
```

```html
<!-- Tailwind: name and look live together -->
<button class="bg-blue-500 text-white px-5 py-3 rounded-lg">Register</button>
```

No second file, no invented name. Read the classes and the button explains itself:

- `bg-blue-500` — background, blue, shade 500.
- `text-white` — white text.
- `px-5 py-3` — space left-right, space top-bottom.
- `rounded-lg` — large rounded corners.

## The core parts of Tailwind

You do not need the full class list — nobody has it. You need the groups, so you can *recognize* what a class is doing:

- **Spacing** — `p-4`, `px-5`, `py-3`, `m-4`, `gap-4` — padding, margin, and space between items.
- **Colors** — `bg-blue-500`, `text-gray-700`, `border-red-300` — what gets the color, which color, which shade.
- **Text** — `text-sm`, `text-xl`, `font-bold` — size and thickness.
- **Layout** — `flex`, `grid`, `items-center`, `justify-between` — how boxes sit and line up.
- **States** — `hover:bg-blue-700` — "when the mouse is over it, do this instead."

Notice every class follows one pattern: *what + which + how much*. Once you see the pattern, unreadable classes start reading themselves. For the rest — search the [Tailwind docs](https://tailwindcss.com/docs) or ask AI.

<VideoSlot link="https://youtu.be/-g969furGik" topic="Tailwind CSS video — watch once for the basic idea, do not memorize" />

## Responsiveness — where Tailwind shines

Responsive means **one page that reshapes itself** for phone, tablet, and desktop. Not three separate sites — one page that adapts.

In plain CSS you write a separate block for each screen size:

```css
@media (min-width: 768px) {
  .card-list {
    flex-direction: row;
  }
}
```

In Tailwind the same thing is one class with a screen-size prefix:

```html
<div class="flex flex-col gap-4 md:flex-row md:gap-6">
```

Read it: "stack the cards in a column. From `md` (tablet) size up, lay them in a row with bigger gaps." The prefixes stack — `md:`, `lg:`, `xl:` — so the whole behavior of an element sits in one line, right where the element is. No second file, no separate media-query blocks to hunt down. This is the single biggest reason teams love Tailwind: responsiveness becomes something you *read*, not something you *maintain*.

One quiet note before you build: Tailwind is today's tool, and tools change — a few years from now, something else may lead. The CSS ideas on this page — pick an element, change properties, padding vs margin, screen sizes — do not change. So play with the tool, but learn the concept.

## Hands-on — restyle your portfolio, twice

Take the portfolio page you built on the previous page. It is plain HTML right now — perfect. You will style it twice and feel the actual difference yourself:

1. **Round 1 — normal CSS.** Ask AI for one part at a time: "Style only the header of my portfolio with normal CSS — one separate .css file." Read the code, change one thing yourself, and see what moved. Notice the friction: two files, jumping back and forth, inventing a class name for everything.
2. **Round 2 — the same header with Tailwind.** Ask AI: "Redo the same header with Tailwind classes on the HTML — no separate file." Put the two versions side by side. Same look, but one file and no invented names — this is why teams pick Tailwind.
3. Do the rest of the page the Tailwind way, part by part — skills list, projects, contact form. After each part: read every class, ask about the ones you do not know, and change one thing yourself before moving on.
4. Make one section responsive: add `flex flex-col md:flex-row` to it, drag the browser edge narrow, and watch it flip.

<QuizBlock
  :questions="[
    { question: 'Do you need to memorize Tailwind classes?', answer: 'No. Nobody memorizes them. You need the groups — spacing, colors, text, layout, states — so you can recognize what a class does, and you search or ask AI for the rest.' },
    { question: 'Every CSS rule, in any tool, has the same two-part shape. What is it?', answer: 'Pick an element, change its properties. Plain CSS, Tailwind, anything else — it all ends up doing exactly this.' },
    { question: 'In bg-blue-500, what does each part tell you?', answer: 'bg — what gets changed (background). blue — which color. 500 — how strong a shade. The same what-which-how-much pattern runs through all Tailwind classes.' },
    { question: 'Riya styles the button in a separate .css file, Arjun puts Tailwind classes on the button tag. Whose button can you fully understand without opening a second file?', answer: 'Arjun’s. Tailwind keeps the look on the element itself, so the whole story of the button sits in one place.' },
    { question: 'What does md:flex-row mean?', answer: 'From medium (tablet) screen size up, lay items in a row. Below that size, the normal classes apply — that is how one page reshapes itself for phone and desktop.' },
    { question: 'You delete px-5 py-3 from the button. What changes?', answer: 'The button loses its inner space — the text touches the edges. Padding was doing that job.' },
    { question: 'Next year your team drops Tailwind for a new framework. What should you keep strong so it does not hurt?', answer: 'The CSS concepts — pick an element, change properties, padding vs margin, screen sizes. Frameworks change again and again; the concepts under them do not.' }
  ]"
/>

<PageNextButton />
