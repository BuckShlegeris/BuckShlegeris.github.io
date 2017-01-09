---
layout: post
date:   ""
title: "Software ideas"
---

Here are various small software projects I'd be interested in seeing someone make.

## Temporary proxy

**Size: < 1 day**

Sometimes I want to be able to send someone a page that they should only be able to load once. Eg I might want to send them a link to an interview problem which is a text file somewhere, but I don’t want them to be able to send it to their friend after the interview. So I want a temporary proxying service. Users should be able to submit a link and a TTL. The service then loads that page and saves it locally. The user is taken to a new page which says “Congratulations! This is your temporary proxy link: tempproxy.com/fsd89”. They then copy that link and paste it to their interviewee. When the interviewee loads that, page, it goes to the cached copy.

Extensions:

- It would be nice if the user could bookmark the generation page. Eg I want to send someone my set of instructions pretty regularly, it would be great if I could just bookmark a page which, every time I loaded it, let me get a new URL for the content.
- Also it would be highly nontrivial to make this caching server work for assets. Eg if there's a JS file that is linked, we have to decide whether to retrieve that JS file, cache it, and rewrite the link. This would add complexity. (The default option should probably just be to not bother with this.)

## Book maker

**Size: 1 week**

Once upon a time I wanted to make a physical book of Slate Star Codex posts. I wrote a scaper which scrapes SSC, parses out the content, and turns it all into LaTeX for printing. This logic was non-trivial. Eg I had to turn links into footnotes, and I had to handle all kinds of special cases like included images.

I would love a site where I can get PDFs of an anthology of my favorite blogs. Eg it would let me select a subset of all the SSC posts and choose an order and a style and it would give me the PDF. (Or ePub or whatever, maybe.)

If we wanted this to be a small business, I'd also give people an option to buy the anthology in hard copy. (I'm also not 100% sure that would be legal :grin:)

The software would have the following components:

- Scraper, to take blog posts and turn them into a unified format. This would have to be kind of ad-hoc. It seems pretty likely that a single scraper would work for all Wordpress sites. Some blog platforms (Tumblr?) probably have APIs, which makes this easier. Products like Pocket and Instapaper already do this, so it's obviously doable, I just don't know how hard it is.
  - This is easier if there's an RSS feed on the site, perhaps
  - The other hard part of this is getting the list of all posts on a blog. That might be more ad-hoc than scraping an individual post.
- UI, which lets users choose the posts they want in a single book.
- Renderer, which takes the data for the posts and turns it into a book. This probably just involves turning the data into LaTeX and choosing good LaTeX settings. (This might be too slow to happen synchronously.)

The MVP is just to make the Scraper work for a couple of blogs, like SSC and  Marginal Revolution and Bryan Caplan's blog or something, and make the UI and the Renderer work.

Other potential markets:

- fanfiction.net. I would certainly have bought some printed-out fanfiction if that was easy.

Related idea: I would love to be able to subscribe to PDF copies or ePub copies of new posts. Also I'd like to be able to download separate PDFs or ePubs of all the SSC posts.

Also there are probably lots of projects which do parts of this work already.

## Math writing app

**Size: 2 days for MVP, 1 week for polished MVP**

Like [Dillinger](http://dillinger.io/) but with LaTeX support built in. It lets you export to LaTeX-generated PDFs while writing mostly in Markdown.

Market it to first-year math and CS students. This is useful because writing in LaTeX is a pain in the ass for simple things like unordered lists, and installing it is annoying.

Build this as a Rails/React app. You'll also need a server with LaTeX compilation abilities, I'm not sure the best way to set that up.

MVP features:

- users
- users can make documents. The document edit page probably has two panes, a la Dillinger. The RHS probably renders it to HTML, not via LaTeX.
- users can download documents as .latex, .pdf, .md.

This project could grow basically arbitrarily complicated, though: it could be an entire word processor.

Also, it's probably worth looking into the current best open-source rich text editors and Markdown editors, to see if one can be modified only slightly to build this.

Another nice and possibly-useful feature would be to have a Medium-style feature where you can share your documents for others to read.

## RescueTime clone, but with more features

RescueTime is bizarrely bad. I want it to be able to track the app I’m in, the Git repo I’m in, the branch I’m on. I want to be able to answer questions like "How long did it take me to build this feature?". Because I build new features in specific Git branches, that should be answerable by searching "How much time did I spend on this Git branch in my IDE and terminal + reading the Github issue page about the feature + on localhost:3000 while the Rails app was running in this branch".

or questions like

- How much time did I spend working on my Rails app today?

One part of this is writing AppleScript to get information about what the user is doing. I already put some work into that [here](https://github.com/bshlgrs/omniscience).

Here are examples of questions I’d like to be able to answer:

- How much time did I spend writing code for this particular feature? This would be super useful for estimating time requirements of projects in the future.
- Which of my coworkers has spent the most time reading this particular file? I’d like to talk to the one who’s the most knowledgeable about it.
- How much time did I spend writing this document?
- How much time has my team spent on email correspondence with this particular client? How much time do we spend in total emailing our clients?
- What time did I get to work on January 6th?

And it seems like it should be pretty doable to get rough estimates of proxies for many of these things. For example, it’s feasible to track what git branch you’re on, and what window is in focus, and who you’re writing emails to.

It seems like this would provide extremely valuable analytics to businesses.

## projects which I need to spec

- Economic equilibrium solver (perhaps using PPL?)
- Fun with filesystems
  - mount databases
  - mount Git branches
  - convenient high level library for file system composition
- Super simple text-formatting utility
- Simple search engine for personally indexed items
- Site for keeping private tabs on people.

## Economics equilibrium solver

Suppose there's two business partners, Alice and Bob, and they share the money they make. Both are selfish log-income maximizers. Alice works for $$a$$ hours and Bob works for $$b$$ hours. Alice's utility is $$U_A = \log(a + b) - a$$, Bob's is the symmetrical one. How long do they work for? What about if they can negotiate?

    a, b = symbols("a b")
    u_a = log(a + b) - a
    u_b = log(a + b) - b

    print maximize({ u_a: [a], u_b: [b] })


