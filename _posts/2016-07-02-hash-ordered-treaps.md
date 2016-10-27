---
layout: post
title:  "Hash-ordered treaps"
date:   2016-07-02
---

Hash-ordered treaps are a cool kind of binary search tree. They have the neat property that the mapping from ordered sets to hash-ordered treaps is one-to-one and onto. That is, for every ordered set, there’s exactly one valid hash-ordered treap which represents it.

So what’s a hash-ordered treap? Well, choose your favorite hash function and call it h. A hash-ordered treap is a binary search tree which follows one additional restriction: for every parent and child, h(value of parent) > h(value of child).

(It’s called a hash-ordered treap because as well as being a tree, it’s also a heap ordered on the hash of the node value.)

There’s exactly one hash-ordered treap for a given ordered set. This wasn’t totally obvious to me at first, but the proof is pretty simple. Suppose you have a ordered set. One of its values must have the highest hash value. That value is going to be the root of the tree. Everything in the ordered set less than the root is going to be in a hash-ordered treap on the left, and everything greater than the root is going to be in a hash-ordered treap on the right. So by structural induction, QED.

Insertion is pretty simple: you just search down for the right place to insert as usual, then you do tree rotations up to restore the heap ordering property. I think this takes an average of O(1) time if you’re inserting random keys into random treaps, for the same reason that heap insertion is sort of average O(1) time. (But I made that proof up myself, so it might be wrong. Worst case it’s O(log(n)), so no big deal if so.)

This nice isomorphism between ordered sets and hash-ordered treaps is useful when you want to be able to build BSTs separate places and later merge them together, taking advantage of the fact that the trees will be very similar if
they have similar elements. I first saw this used in [this paper](http://arxiv.org/abs/1301.3388).
