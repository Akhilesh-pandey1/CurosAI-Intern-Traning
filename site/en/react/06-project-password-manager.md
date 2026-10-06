# 3.9 Project — Password Manager

First React build. Everything from this module lands in one app: components, props, lists, state — with sessionStorage from 2.6 doing the remembering. New for you: an app with **pages** — login and signup — and a data list you add to, edit, and delete.

## What you build

A password manager, in two steps of rising difficulty:

1. **The manager core** — a form to add an entry (website, username/email, password), the list of saved entries below it, edit and delete on every row, and each entry stored in **sessionStorage** so a refresh keeps them until the tab closes. Dummy data only — never real passwords in a practice app.
2. **The gate** — Login and Signup pages built from reusable input and button components. Any signup works and any password logs in — there is no server. The point is the pages, the shared components, and moving between them.

## How to build it — AI drives, you navigate

Same rule as every build: **AI is the driver, you are the navigator.** You plan the route, know every turn, check every street — never "AI wrote it, I do not know."

1. **Plan on paper first.** What is one entry — `{ id, website, username, password }`? Where does the list live — a state array in the top component? When does sessionStorage get written? Which component owns the list, which one owns a row? Ten minutes of paper saves an hour of confusion.
2. **Let AI write step one — the manager core:**

   > Build a React app (Vite, plain CSS) that manages passwords. A form adds an entry with website, username and a dummy password. Below it, show all saved entries as rows, using a reusable PasswordRow component with edit and delete buttons. Keep the entries array in state at the top, load it from sessionStorage on start, and save it back on every change. Give each entry a stable id. Use sessionStorage only, not localStorage.

3. **Make AI explain the flow — not every line:**

   > Walk me through the full flow: I add an entry, state changes, the list re-renders, and sessionStorage gets the new copy. Which component holds the state, why do the rows not hold it, and where exactly does each id come from?

   Follow it live. Every turn is a page you have done — props down, events up, map with keys, the setter instead of direct writes.
4. **Check the driver:** refresh the tab — entries survive. Close the tab and reopen — gone. That is sessionStorage keeping its side of the deal. Delete a key from one entry and find the console warning.
5. **Then direct step two — the gate:**

   > Add a Login page and a Signup page, both built from shared reusable input and button components. Any email and password work — no server. After login, show the manager; a logout button returns to the login page. Keep the logged-in flag in sessionStorage so a refresh keeps you in.

## The changes you direct

1. A **show/hide** toggle on each password — text turns into dots and back. *(state inside the row)*
2. A **search box** that filters the list as you type. *(state up top + filter — 2.3 again)*
3. **Edit fills the same form** — the add button turns into Save while editing. *(one form, two modes — one state decides)*
4. An **empty state**: no entries yet shows a friendly line instead of a blank page. *(conditional rendering)*

## Know it, do not copy it

Before the next page, answer without looking:

- Why does the entries state live at the top and not inside `PasswordRow`?
- Where exactly does the app write to sessionStorage — and why not inside the render?
- What breaks first if you remove the keys from the rows?

<PageNextButton />
