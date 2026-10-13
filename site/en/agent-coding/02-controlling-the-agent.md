# 8.2 Controlling the Agent

Page 8.1 put a worker on your machine. This page puts the reins in your hand. Four controls do it: the prompt, the plan, the review, and the pace.

## The prompt: say what, where, and done

The agent only knows what you say. Compare:

- Bad: "fix it". Fix what, where?
- Good: "The weather card shows a blank city when the input is empty. Make it show Type a city instead. Change nothing else."

The formula: what you want + where + what done looks like + what not to touch.

## The plan: grill first, code last

Grilling comes first. We grill the application with questions until the idea is fully clear, and from that comes the plan, the specs, and the task list. We have grilling skills for this, and you will learn them later in the course.

So the order is fixed: grill, plan, specs, tasks, and code last. Writing code is always the final step, never the first.

## One change at a time

Ask for one small change, review it, then ask for the next. Small changes give small reviews. Mistakes hide in big piles.

## The review: git diff is your X-ray

```bash
git diff
```

It prints what changed since the last commit, line by line. Added lines show in green, removed lines show in red. Read every line, follow the flow of the change, then commit (the page 7.2 rhythm). The rule: no diff read, no commit.

Two more checks follow. Automated tests run on their own: Playwright for the front end, unit tests for the back end. Manual testing is on you: open the app and confirm everything works.

The agent asks permission before risky commands, like running scripts or deleting files. Read the command first, then approve or refuse.

## Hands-on: take the reins

1. `cd git-practice`, then `git status`. Commit leftovers from last time first, if needed.
2. Start `claude` and give the full formula in one prompt: "Add a file named todo.md with a three-line to-do list for learning git. Change nothing else."
3. Approve the edit, leave with `/exit`, then run `git diff`. One new file, every line visible.
4. Save it: `git add .` and `git commit -m "Added the to-do list file"`.
5. Start `claude` again and type "improve this repo". Watch it guess or come back with questions. Vague in, vague out. Leave with `/exit` and keep nothing.
6. Ask AI: "Why should a human read git diff before committing AI-written code?" Answer in one line, your own words.

<QuizBlock
  :questions="[
    { question: 'What are the four controls over an agent?', answer: 'The prompt, the plan, the review, and the pace.' },
    { question: 'What makes a good prompt?', answer: 'What you want, where, what done looks like, and what not to touch.' },
    { question: 'What happens before any code is written?', answer: 'Grilling. We question the app until the idea is clear, then comes the plan, specs, and tasks. Grilling skills are coming later in the course.' },
    { question: 'Why one change at a time?', answer: 'Small changes give small reviews, and mistakes hide in big piles.' },
    { question: 'What does git diff show?', answer: 'What changed since the last commit, line by line. Green lines are added code, red lines are removed code.' },
    { question: 'What is the order after every agent change?', answer: 'git diff, read every line, follow the flow, then commit. No diff read, no commit.' },
    { question: 'Who checks that everything works?', answer: 'Both. Automated tests run on their own (Playwright for the front end, unit tests for the back end), and you also test by hand.' },
    { question: 'The agent asks permission to run a command. What is the right move?', answer: 'Read the command first, then approve or refuse.' },
    { question: 'The prompt improve this repo gave a mess. Why?', answer: 'Vague in, vague out. The agent can only aim at what the prompt describes.' }
  ]"
/>

<PageNextButton />
