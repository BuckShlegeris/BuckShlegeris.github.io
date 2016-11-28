---
layout: post
date:   ""
title: "Bugs"
---

This is a semi-private log of different ways that I've accidentally put bad code in production:

- leaving `fail` or `p` in commits, or `debugger`.
  - How to avoid this: running `git diff` before I commit, automated check.
    - I could make a pre-commit hook that greps for `debugger` and similar things
- Changing an API and forgetting all the different places that it was being used
  - e.g. with the email template generator, I forgot we used it for company suggestions.
  - How to avoid this: write a list of everywhere that my API is used, and have a checklist that confirms I've checked it with all of them. This problem is much better in situations with weird hacky APIs, or in languages without good semantic code search.
- putting a non-existent CSS class on a table, not noticing it was non-existent

