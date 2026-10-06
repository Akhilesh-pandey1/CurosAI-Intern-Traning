# 3.10 Project — Password Manager

First React build. Everything from this module lands in one app: components, props, lists, state — with sessionStorage from 2.6 doing the remembering and React Router from 3.8 giving it pages. New for you: **views that depend on who logged in** — an admin sees everything, a user sees only what is shared.

## What you build

A password manager, in three steps of rising difficulty:

1. **The manager core** — a form to add an entry (website, username/email, password), the list of saved entries below it, edit and delete on every row, and each entry stored in **sessionStorage** so a refresh keeps them until the tab closes. Dummy data only — never real passwords in a practice app.
2. **The gate, on real routes** — Login and Signup pages living on `/login` and `/signup`, built from reusable input and button components, moved between with React Router. Any signup works and any password logs in — there is no server. The point is the routes, the shared components, and the navigation.
3. **Two views — admin and user** — one fixed admin password, checked inside the app. The admin logs in on `/admin-login` and sees **every** entry. A normal user logs in on `/login` and sees **only the shared ones**. Each entry carries a shared flag — the role decides which rows render.

## How to build it — AI drives, you navigate

Same rule as every build: **AI is the driver, you are the navigator.** You plan the route, know every turn, check every street — never "AI wrote it, I do not know."

1. **Plan on paper first.** What is one entry — `{ id, website, username, password, shared }`? Where does the list live — a state array in the top component? Which route shows which view? How does the role travel from the login page to the manager — state, or sessionStorage? Ten minutes of paper saves an hour of confusion.
2. **Let AI write step one — the manager core:**

   > Build a React app (Vite, plain CSS) that manages passwords. A form adds an entry with website, username and a dummy password. Below it, show all saved entries as rows, using a reusable PasswordRow component with edit and delete buttons. Keep the entries array in state at the top, load it from sessionStorage on start, and save it back on every change. Give each entry a stable id. Use sessionStorage only, not localStorage.

3. **Make AI explain the flow — not every line:**

   > Walk me through the full flow: I add an entry, state changes, the list re-renders, and sessionStorage gets the new copy. Which component holds the state, why do the rows not hold it, and where exactly does each id come from?

   Follow it live. Every turn is a page you have done — props down, events up, map with keys, the setter instead of direct writes.
4. **Check the driver:** refresh the tab — entries survive. Close the tab and reopen — gone. That is sessionStorage keeping its side of the deal. Delete a key from one entry and find the console warning.
5. **Then direct step two — the gate on routes:**

   > Add react-router-dom with three routes: /login, /signup and /passwords. Login and Signup are built from shared reusable input and button components. Any email and password work — no server. After login, navigate to /passwords which shows the manager; a logout button returns to /login. Keep the logged-in flag in sessionStorage so a refresh keeps you in. Add a small top bar with the app name and a logout button.

6. **Then direct step three — the two views:**

   > Add a fourth route /admin-login with its own page — it asks for one fixed admin password, admin123, checked inside the app, no server. In the add-entry form, add a checkbox labelled Admin only. Each entry stores the flag: admin only, or shared with everyone. A user who logged in through /login sees only the shared entries. An admin who logged in through /admin-login sees all entries. Keep the logged-in role in sessionStorage next to the logged-in flag, and show a small badge on screen — Admin view or User view — so it is always clear who is looking.

7. **Check the driver once more:** log in as a user — shared entries only. Log out, log in as admin — everything, with the badge changed. Refresh mid-session — the role survives. Two views, one list, one filter.

## The changes you direct

1. A **show/hide** toggle on each password — text turns into dots and back. *(state inside the row)*
2. A **search box** that filters the visible list as you type — admin searches all, user searches shared. *(state up top + filter — 2.3 again)*
3. **Edit fills the same form** — the add button turns into Save while editing. *(one form, two modes — one state decides)*
4. An **empty state** with different words per view: "No shared entries yet" for users, "No entries yet" for admin. *(conditional rendering)*
5. An **Admin badge on admin-only rows** — the admin sees at a glance which ones users cannot. *(one flag, one conditional class)*

## Know it, do not copy it

Before the next page, answer without looking:

- Why does the entries state live at the top and not inside `PasswordRow`?
- Where does the app decide which rows the user sees — and why one place, not inside every row?
- Where exactly does the app write to sessionStorage — and why not inside the render?
- What breaks first if you remove the keys from the rows?

<PageNextButton />
