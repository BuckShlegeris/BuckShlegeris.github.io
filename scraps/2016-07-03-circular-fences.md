---
layout: post
title:  "Painting circular fences"
date:   2016-07-03
---

Suppose you have a circular fence with $l n$ fenceposts. You have white and black paint. Up to rotational symmetry, how many different ways are there of painting your fence?

(Thanks to Caroline Buckley and Marshall Quander for this great question!)

If $l n = 1$, there are two different paint jobs.

If your paint job has a cycle of length $l k$, then $l k$ must be a factor of $l n$.

If $l n$ is prime, then paint jobs are either not rotationally symmetrical, or are all the same color. There are $l 2^{n - 2} + 2$ such paint jobs. (I don't remember why this is true, but Caroline said it and she seems smart and it seems to be correct)

If $l n$ is composite, then it's more complicated. Consider the case of 15, whose factors are 1, 3, 5, and 15. The paint job might be a 3-cycle repeated 5 times, a 5-cycle repeated 3 times, a 1-cycle repeated 15 times, or something of length 15 which isn't rotationally symmetrical.

That last one is the only one that

