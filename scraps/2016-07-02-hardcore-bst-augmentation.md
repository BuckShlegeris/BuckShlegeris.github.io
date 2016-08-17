---
layout: post
title:  "Hardcore BST augmentation"
date:   2016-07-30
---

Normally when you think about augmenting a binary search tree of items of type `A`, you're thinking of augmenting it with a function `f` of type `Set[A] -> B` such that computing `f(a ++ b)` given `f(a)` and `f(b)` takes constant time.

Functions of type `Set[A] -> B` which obey a few sensible axioms are known as catamorphisms. What about if our catamorphism function takes time greater than constant in the size of the set it's mapping from?

For example, a few weeks ago I wanted to store an order statistic tree at every node of the node's descendants ordered by something different than the main BST ordering. So my function to make a result by combining two sub-results is now "merge these two OSTs", which doesn't take constant time. Luckily, when you're inserting, you only need to run an insert function on $l log(n)$ subtrees, and you need to run the merge function on $l O(1)$ subtrees.

## Time complexity of inserting al the way up

If you need to run a function with time $l f(n)$ on all of the ancestors of a node, the total time is

$$\sum_{i = 0}^{\log(n)} f(2^i)$$.



