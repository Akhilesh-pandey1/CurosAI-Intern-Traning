Python + Flask —
Learn the purpose of Python and Flask and understand how Python is used to build server-side applications, APIs, and backend logic.
For each important concept, function, module, or Flask feature, write it in 1–2 lines in your own words with a small example. This is for quick revision and understanding, not memorization.
For every Python/Flask topic, generate at least 5–10 examples using AI. Before running the code, write down step-by-step how the code will execute and what the final output should be. Then run the code, compare the actual result with your prediction, and understand why the output is correct.
Python Basics
Variables – Store and update values using variables.
Data Types – Understand String, Integer, Float, Boolean, List, Tuple, Set, and Dictionary.
Operators – Arithmetic, comparison, logical, assignment, and membership operators.
if / elif / else – Make decisions based on conditions.
Loops – Understand for, while, break, continue, and range().
Functions – Create reusable blocks of code using parameters and return values.
Lists – Understand indexing, slicing, adding/removing elements, and common methods.
Dictionaries – Store and access data using key-value pairs.
List Comprehension – Create lists in a short and readable way.
Exception Handling – Understand try, except, else, and finally.
Modules & Imports – Split code into files and reuse functionality.
datetime – Work with dates, times, timestamps, and date calculations.
Environment Variables – Understand why secrets/configuration should not be hardcoded.
load_dotenv() – Load environment variables from a .env file.
Logging – Understand logger.info(), logger.warning(), logger.error(), etc. for debugging and monitoring.

Flask Structure
Blueprints – Split a large Flask application into smaller modules such as auth, users, leads, etc.
Application Factory – Understand how to create the Flask app through a function instead of one global app.
Configuration – Keep application configuration separate from business logic.
Environment Variables – Store API keys, database URLs, secrets, and configuration outside the code.
Decorators – Understand how decorators modify or add behavior to functions.
Custom Decorators – Create decorators for things like authentication, logging, permissions, etc.
Middleware / Request Hooks – Run logic before or after requests.
API & Backend Concepts
REST API – Understand how frontend and backend communicate through HTTP.
CRUD – Create, Read, Update, and Delete data.
JSON – Understand how frontend and backend exchange structured data.
Validation – Check whether incoming data is correct before processing it.
Error Handling – Return useful errors instead of allowing the server to crash.
Authentication – Understand how the server identifies a user.
Authorization – Understand what an authenticated user is allowed to do.
Pagination – Return data in smaller pages instead of sending everything at once.
Filtering – Filter data on the server based on request parameters.
Sorting – Sort server-side data before returning it.
Logging – Track what is happening inside the server.

Background / Scheduled Tasks
APScheduler – Run Python functions automatically at scheduled times.
Interval Jobs – Run something every X minutes/hours.
Cron Jobs – Run something at a specific time or schedule.
Date/Time Calculations – Calculate things such as "last 30 days", "tomorrow", or "every Monday".
Background Processing – Understand why some work should happen separately from the normal HTTP request.
Project – Mini Operations Dashboard
Build a small Jira-like task + scheduled reporting system.
What it does
Create a task with title, description, status and due date.
Show tasks on a small Kanban board: Todo → In Progress → Done.
Create a scheduled job, e.g. every day at 9 AM.
The scheduled job collects task data and calculates simple metrics:
Total tasks
Completed tasks
Pending tasks
Overdue tasks
Completion %
Save the generated daily report.
Show the latest report on the frontend.
Add a small "Daily Report" page.
Add a route to manually trigger the report as well.
Use a Blueprint for task routes and another for report routes.
Use .env for configuration.
Use logging to record important events/errors.
Use try/except for failures.
Use datetime for due dates and report periods.
Use request for incoming data.
Use jsonify() for API responses.
Use decorators for something simple like checking authentication.
Use APScheduler for the scheduled report.

