---
layout: post
date:   2016-02-21
title: "Crazy ideas"
---

## Mount a database.

So you run

`mountdb --username buck --password whatever --url tcp://localhost:4656 /dev/db1`

and it gives you a directory at `/dev/db1`.

### running queries

Maybe there's already a directory for all of the tables.

Maybe you `mkdir users` or `mkdir "users WHERE users.status = 'active'"

Maybe there's an executable in the root which communicates with the filesystem driver. So you do `./query "SELECT * FROM users"`

## Lots of algorithms visualizations

Make visualizations of some data structures. I particularly want:

- BSTs
- B-trees
- Dynamic arrays
  - this one can give you an intuition for amortized time
- Queue
  - with two stacks
  - with linked list

maybe use [anime.js](http://anime-js.com/)

## Game theory engine

Give it payoff matrixes and see what happens.

