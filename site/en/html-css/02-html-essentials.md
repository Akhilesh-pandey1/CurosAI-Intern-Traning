# 1.2 HTML Essentials

One page, three things: the tags you will actually use, the structure every page shares, and forms. You are not here to memorize — you are here to recognize.

## The tags you will actually use

Do not try to memorize every HTML tag. Learn the common ones and search for the rest when needed — a good reference is [142elements.com](https://www.142elements.com/).

The daily set:

- `h1` to `h6` — headings, most important first. One `h1` per page.
- `p` — a paragraph of text.
- `a` — a link to another page.
- `img` — shows an image.
- `ul` + `li` — a bullet list and its items.
- `button` — something the user clicks.
- `div`, `section`, `header`, `nav`, `main`, `footer` — boxes that group content. `div` is a plain box; the others are boxes with meaning.

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

## Watch

<VideoSlot topic="Common HTML tags and page structure" />

<VideoSlot topic="HTML forms basics" />

## Hands-on

1. Ask AI: "Make a small profile card page — header with a name, a photo, an about paragraph, a skills list, and a contact form with name, email, and message."
2. Make it run in your browser.
3. Ask AI to explain every tag you do not recognize.
4. Modify it yourself: add a footer, remove one skill, make the email input optional, add a phone number field.
5. Observe after each change — one change at a time.

<QuizBlock
  :questions="[
    { question: 'Which tag carries the main heading of a page?', answer: 'The h1 tag — and a page gets only one of them.' },
    { question: 'What is the difference between a div and a section?', answer: 'Both group content, but section carries meaning — it names one themed block of the page. A div is a plain box with no meaning.' },
    { question: 'Why does every input deserve a label?', answer: 'The label tells the user — and screen readers — what to type. It connects to its input by matching the for and id values.' },
    { question: 'What does type email do on an input?', answer: 'It tells the browser what kind of data belongs there, so the browser can check the format for free before the form is submitted.' },
    { question: 'Where does the browser tab title come from?', answer: 'From the title tag inside head — the part of the page that holds settings the visitor does not read.' }
  ]"
/>

<PageNextButton />
