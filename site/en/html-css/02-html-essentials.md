# 1.2 HTML Essentials

One page, four things: the right mindset, the tags you will actually use, the structure every page shares, and forms. You are not here to memorize — you are here to recognize.

## First: what to do and what not to do

**Do:**

- Just play with the HTML. Change a tag, reload the page, see what moved.
- Take the basic idea of what each thing does. That is enough.

**Do not:**

- Do not try to memorize. HTML is very large, and nobody memorizes it.
- Do not give it much time. AI writes the HTML code now — your job is to read it, guide it, and check it.

This is the main motto of this whole module, and it applies to CSS too: basic idea first, details only when you actually need them.

## The tags you will actually use

Learn the common ones and search for the rest when needed. A good place to see and play with every tag is [142elements.com](https://www.142elements.com/) — open it, click around, and get a feel for what exists.

The everyday tags:

- `h1` to `h6` — headings, most important first. One `h1` per page.
- `p` — a paragraph of text.
- `a` — a link to another page.
- `img` — shows an image.
- `ul` + `li` — a bullet list and its items.
- `button` — something the user clicks.
- `div`, `section`, `header`, `nav`, `main`, `footer` — boxes that group content. `div` is a plain box; the others are boxes with meaning.

<VideoSlot link="https://youtu.be/Ut4RpySLM6Y" topic="HTML video — watch once for the basic idea, do not memorize" />

## The structure every page shares

Most pages you build will look like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title shown in the browser tab</title>
  </head>
  <body>
    <header>A top strip with the site name</header>
    <nav>Links to move around the site</nav>
    <main>
      <section>The actual content of the page</section>
    </main>
    <footer>A bottom strip with the small print</footer>
  </body>
</html>
```

`head` carries settings the visitor does not read — like the tab title. `body` carries everything the visitor sees.

## Forms — how a page collects input

A form is how the user gives you data: a login, a registration, a search box.

```html
<form>
  <label for="full-name">Full name</label>
  <input id="full-name" type="text" required />

  <label for="email">Email</label>
  <input id="email" type="email" required />

  <button type="submit">Register</button>
</form>
```

Three ideas carry most of the weight:

- `label` + `input` pairs — every input deserves a label, connected by `for` and `id`.
- `type` — tells the browser what kind of data this is (`text`, `email`, `password`, `number`). The browser can then check it for you.
- Validation attributes like `required` — free checking before any code runs.

## Hands-on — build your portfolio page, part by part

Do not ask AI for the whole page at once. Go one part at a time — after each part, understand it and change something yourself. One strict rule for every ask: **tell AI HTML only, no CSS** — CSS is our next module. As of now, it is only HTML.

1. Ask AI: "Make me a small portfolio page — just the header with my name and one short about line. HTML only, no CSS." Make it run in your browser.
2. Read the code. Ask AI to explain any tag you do not recognize.
3. Change one thing yourself — your name, the heading, a word — reload the page, and see what moved.
4. Then ask for the next part: a skills list, then a projects section, then a contact form.
5. After every part: read it, ask about what you do not know, and edit one thing yourself before moving on.

<QuizBlock
  :questions="[
    { question: 'Do you need to memorize HTML tags?', answer: 'No. Nobody memorizes them. AI writes the code now — you need the basic idea of the common tags, and you search for the rest when needed.' },
    { question: 'Riya writes <h1>My Portfolio</h1> inside head instead of body. What will a visitor see on the page?', answer: 'Nothing. Head holds settings the visitor never sees. The heading shows only once it sits inside body.' },
    { question: 'An input has id email, but its label says for mail. What goes wrong?', answer: 'Clicking the label no longer focuses the input, and screen readers cannot connect them — for and id must match exactly.' },
    { question: 'You change an email input into a number input, type hello, and hit Register. What happens?', answer: 'The browser blocks the submit and shows a warning — type tells the browser what data belongs there, so it checks for free before anything is sent.' },
    { question: 'You delete required from every input and submit the empty form. What happens?', answer: 'The form submits empty — required was doing the free checking; without it, nothing stops a blank submit.' },
    { question: 'You misspell the paragraph tag and write <pv>Hello</pv>. What does the page show?', answer: 'Just the plain text Hello — the browser ignores tags it does not know.' },
    { question: 'You swap every section for div. What changes on the page?', answer: 'Almost nothing visually — both are boxes. You lose the meaning, not the look.' }
  ]"
/>

<PageNextButton />
