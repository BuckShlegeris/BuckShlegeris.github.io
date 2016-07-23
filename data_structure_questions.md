---
layout: post
date:   ""
title: "Data structure questions that I like"
---

Here are some data structure questions which I enjoy. I came up with all of these myself or ran into them in the wild, as opposed to hearing them in interviews or seeing them in lists of algorithm questions.

## Giant tic-tac-toe

We want to make a data structure to support a giant $l(k, m, n)$ game. That is, players take turns to place pieces on an $l m$ by $l n$ grid and win if they get $l k$ in a row. The data structure needs to support one method, `int placePiece(int x, int y, Player player)`, which takes a position and returns the length of the longest line of that player's pieces which the new piece was a part of.

How fast can you do this?

## Mode stack

Make a stack which, as well as supporting `push` and `pop`, supports `get_mode`.

