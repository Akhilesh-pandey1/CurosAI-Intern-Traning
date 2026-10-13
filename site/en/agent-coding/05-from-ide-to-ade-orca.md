# 8.5 From IDE to ADE (Orca)

One more shift, and it is happening across the industry and inside this company.

## The IDE era: built for one typist

VS Code were built around one human typing: a window for your files, a terminal tab for your commands. While humans did all the work, that was the perfect room. Then the worker changed. Run three agents at once and you get three tabs, three changing folders, and one question: which change is where? Tab-switching is not an environment.

## The ADE era: built for you and your agents

An ADE (Agentic Development Environment) looks like an IDE: file tree, editor, terminals. The difference is who works in it. It is designed for many agents working at once while you supervise.

The heart is the git worktree from page 7.4: every agent gets its own folder and its own branch, same repo, zero interference. One task, one worktree, one agent. Three approaches to one bug can run side by side, and you merge the winner.

<VideoSlot topic="From IDE to ADE" link="https://youtu.be/tzDDNWU21uQ?si=D0LldXa4dUTpP8uG" />

## Orca: the room we use

The ADE this company uses is Orca. Download it free from onorca.dev and install it like any desktop app; it runs on Windows, Mac, and Linux. Connect Claude Code with the account you already have and you are in.

What is inside:

- A worktree per task, automatic. One task, one isolated folder and branch, no stashing and no branch juggling.
- Many agents, any harness. Claude Code, OpenCode, Gemini and more run side by side in the same room.
- Many terminals in one window. No app-juggling for your commands.
- Agents run in the background. You do not wait and watch; when a task finishes, Orca notifies you.
- A built-in browser, so an agent can open and check the app it is building.
- Diffs with a hotline: comment on the lines that bother you and send the comments straight back to the agent (the page 8.2 review).
- Control from your phone. Away from the laptop, you can check on agents and steer them from mobile.

## Why we use an ADE, not an IDE

The IDE was built for your hands. The ADE is built for your agents' hands and your judgment: isolation per task, agents in parallel, review first, and you hear about it when the work is done.

## Hands-on

1. Download Orca from onorca.dev and install it.
2. Now do Orca's core trick by hand, once, in `git-practice`:

   ```bash
   git branch test-branch
   git worktree add ../gp-test test-branch
   ```

   Look at the parent folder: a second folder, `gp-test`, standing on `test-branch`. That is exactly what Orca automates per task. Clean up after: `git worktree remove ../gp-test`.
3. During training, your mentor demos Orca live. Watch for the notifications: agents finish and report back while you do something else.

<QuizBlock
  :questions="[
    { question: 'What is an ADE?', answer: 'An Agentic Development Environment. It looks like an IDE but is designed for many agents working at once while you supervise.' },
    { question: 'Why is an IDE not enough anymore?', answer: 'It was built for one human typing. Many agents need isolation and one overview, and tab-switching is not an environment.' },
    { question: 'Which git feature is the heart of an ADE?', answer: 'The worktree (page 7.4). Every agent gets its own folder and branch, same repo, zero interference.' },
    { question: 'Where do you get Orca?', answer: 'Download it free from onorca.dev and install it like any desktop app.' },
    { question: 'Which agents can run in Orca?', answer: 'Any harness you already use: Claude Code, OpenCode, Gemini and more, with your existing accounts.' },
    { question: 'Do you have to watch an agent until it finishes?', answer: 'No. Agents run in the background and Orca notifies you when the task is done.' },
    { question: 'What is inside Orca besides the agents?', answer: 'Terminals in the same window, a built-in browser, diffs you can comment on, and control from your phone.' },
    { question: 'Why do we use an ADE and not an IDE?', answer: 'The ADE gives isolation per task, agents in parallel, review first, and notifications when work is done.' }
  ]"
/>

<PageNextButton />
