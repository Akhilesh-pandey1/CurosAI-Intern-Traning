# 1.1 Start Here

Welcome to Module 1. Before any tags or styles, this page sets up two things: how a web page actually reaches your browser (the client-server idea), and what HTML and CSS actually are.

## User side vs server side — in basic words

- **User side (frontend)** — everything the browser does on the visitor's device. HTML, CSS, and JavaScript live here. Every visitor gets these files and runs them on their own phone or laptop.
- **Server side (backend)** — everything that happens on a computer you control, before the page arrives. It prepares the data: what the page shows, what it saves.

How the two sides talk:

- **Request** — you fill a form and submit it, and your browser sends that information to the server. The server checks it and saves it in the database (or does whatever the page needs).
- **Response** — the server sends an answer back. This is how you know your request actually worked — the page shows a success message or opens the next screen.

A simple rule: *if you can see it, click it, or watch it move, it is user side. If data must be stored, checked, or computed secretly, that is server side.* You will meet the server side properly in the Python module.

<VideoSlot link="https://youtu.be/a5CgfS0Y4Uc" topic="Client Server Architecture in detail" />

## What HTML and CSS are

Think of a web page as a person:

- **HTML is the skeleton.** It gives the page its structure — this is a heading, this is a paragraph, this is a form, this is an image. Without HTML there is no page at all.
- **CSS is the skin and the clothes.** It decides how the page looks — colors, spacing, sizes, layout. Same skeleton, different clothes, completely different look.

That is the whole idea. HTML and CSS are for design, so there is not much logic in them. You describe *what* a page is (HTML) and *how it looks* (CSS), and the browser does the rest.

<PageNextButton />
