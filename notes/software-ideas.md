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

The MVP is just to make this work for a couple of blogs, like Marginal Revolution and Bryan Caplan's blog or something, and make the UI and the Renderer work.

Other potential markets:

- fanfiction.net. I would certainly have bought some printed-out fanfiction if that was easy.

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

RescueTime is bizarrely bad.

Track the app I’m in, the Git repo I’m in, the branch I’m on.

When I’m in the terminal, do the same.

Current scrap [here](https://github.com/bshlgrs/omniscience)

## projects which I need to spec

- Economic equilibrium solver
- Fun with filesystems
  - mount databases
  - mount Git branches
  - convenient high level library for file system composition
- Super simple text-formatting utility
