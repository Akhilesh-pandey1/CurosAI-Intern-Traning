# Testing Approach

The site is a static build with no backend, so checking is a manual walkthrough before every deploy:

- Walk the full path with the Next button — no dead ends, no broken jumps; every module's last page flows into the next module's first page.
- Every page renders in both English and Hindi, in light mode and dark mode.
- Check-offs persist after reload, the progress dots on the home page update, and the Continue button lands on the last unfinished page.
- The party popper fires exactly once when a module's last page is checked off — never again on reload.
- Every video link resolves — no dead links.
- The whole site works with zero backend: the built static files serve from any static host.
