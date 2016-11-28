---
layout: post
title:  "Data structure projects"
date:   2016-04-03
tags:
  programming
  algorithms
---

Here are some ideas for fun projects with data structures! I get really excited about data structures and if you want to ask me for clarification of any of these I'm super super happy to talk to you about them!

## Heap insertion time

**Edit: Jim Terry figured this one out for me! He says that Bollobas and Simon, "Repeated random insertion into a priority queue." proves that it's average case constant time.**

What's the average case insertion time for a binary heap? For some reason, this super simple question doesn't have a crisp answer obviously available on the internet. There are some [shitty hand-wavy proofs](http://wcipeg.com/wiki/Binary_heap#Insertion_2) that it's constant time, but nothing that I find very legit. Wikipedia's [talk page for Binary Heap](https://en.wikipedia.org/wiki/Talk:Binary_heap#Weak_proof_for_O.281.29_average-case_insertion) has some information on the controversy. To add to the confusion, CLRS sort of implies that it's log(n) time.

The primary problem with the proof attempts I've seen is that the product of inserting a random value into a random heap is not a random heap, and so the proof would require proving things about the kinds of heaps produced by random insertions. I’d also be somewhat satisfied with strong numerical evidence for constant time.

This might be a solved problem whose answer I just haven't been able to find in an hour or so of Googling, in which case the project wouldn't be very interesting, but at least you'd make me very happy by telling me the answer!

## Obscure binary search trees

There are lots of little-known self-balancing BST implementations. Basically no-one has heard of any except AVL trees, red-black trees, and BTrees.

You could implement a lesser-known BST in a language of your choice; figure out how fast it is; try to make it as fast as a reference implementation. Try to find a semi-realistic application where your implementation is faster than a competitor. (For example, splay trees probably outperform red-black trees in cases with serious temporal locality.) This project is definitely possible.
Here are the main slightly obscure BST implementations (from Wikipedia):

  * [2-3 tree](https://en.wikipedia.org/wiki/2-3_tree)
  * [AA tree](https://en.wikipedia.org/wiki/AA_tree)
  * [Scapegoat tree](https://en.wikipedia.org/wiki/Scapegoat_tree)
  * [Splay tree](https://en.wikipedia.org/wiki/Splay_tree)
  * [Treap](https://en.wikipedia.org/wiki/Treap)

(I feel like skip lists belong on that list too.)

**Edit: as it happens, the course in question already teaches 2-3 trees, so they're slightly less exciting to learn about seperately.**

## Optimal treap priority-changing parameters

Treaps are a great randomized data structure: they're an unholy fusion of BST and heap, involving randomly choosing the priority for nodes. There's a reasonably obvious set of parameters that they contain that you could try to optimize in different settings. As [described on Wikipedia](https://en.wikipedia.org/wiki/Treap):

> “Aragon and Seidel also suggest assigning higher priorities to frequently accessed nodes, for instance by a process that, on each access, chooses a random number and replaces the priority of the node with that number if it is higher than the previous priority. This modification would cause the tree to lose its random shape; instead, frequently accessed nodes would be more likely to be near the root of the tree, causing searches for them to be faster.”

This one is fun because there's a chance of making an original and somewhat useful discovery. It's also definitely doable. It's reasonably likely that the answer ends up being the null hypothesis ("you are better off never changing the priority of the node"), but it's probably fun either way.

## Implement BuckTrees (you don't actually have to call them that)

I had a neat idea for a somewhat original data structure related to BSTs, but my implementation is wrong and it has a logical error (if you insert in descending order, it gets arbitrarily unbalanced). [Here's the repo](https://github.com/bshlgrs/random-balanced-trees) describing it. You could read my description of the data structure, figure out a way to fix the problem with it, and fix it, then implement it and benchmark it. This project is certainly possible, but might be too easy.

**Edit: This is already a question in the CS166 assignment 3, so you probably can't do it.**

## Reduction-memoizing BSTs

These are binary search trees where each node memoizes a function of its subtrees. For example, you could have a BST of humans, ordered by age, and have each node store the maximum income of the humans stored in its children. This is neat because then you can then answer queries like "what's the maximum income of people with ages between 20.3 and 25.3" in log time. You can also update in log time. This is related to finger trees. This structure is not very hard to implement--it's just a self-balancing BST with some extra book-keeping. For bonus points, implement it in C but with bindings to a nice language like Ruby, and a convenient API which lets me specify both my ordering function and my sub-tree memoizing function as lambda functions.

**Edit: These are nicely described in [this fantastic set of slides](http://web.stanford.edu/class/cs166/lectures/06/Small06.pdf) from the class which inspired me to write this post.**

## Self-balancing KD trees

KD trees are a kind of data structure for representing spatial data. This is a research project as much as an implementation project. I believe this is possible but can't find a full description of it anywhere. If you implement this and test it well, people would maybe use it.


## Investigate building fast data structures in non-C systems languages

When people want to make their Ruby/Python programs fast, they often implement the key data structures in C/C++ and then make binding code to call them from their high level language. This is annoying because C/C++ are really annoying and error prone to code in. There are more modern languages which you could use for this, but no-one has really done that very much. I think it would be cool to choose some data structure, implement it in a more modern low level language (eg Go or Rust), then create the bindings to your high level language.

This project is probably doable, but much of the effort in this project is probably figuring out how to get the bindings to work nicely. This is a problem because your lecturer might not be that interested in that work, so you might not get credit for it. Also, figuring out how to make bindings work sounds like a pretty annoying and potentially very difficult task. I really don't know.

The valuable output of this project would be a very clear online tutorial of how you build data structures in Go and call them from Ruby (for example). Ideally this tutorial would be accompanied by several examples of how to do it. You also have to learn Go or Rust for this project.

If you made this work, this would be awesome. Best case scenario, you make it easy for people to do this in future, and then you get to take credit for a shift in how people write performance-critical data structures.

## Help me with my automatic data structures project!

I have this ongoing project to make software to automatically choose fast data structures to support a given API. I talked about an old version at a Scala conference last year ([video](https://www.youtube.com/watch?v=oPFga7eg3Uw)). I am currently working on a new version, in Ruby. I think that this might be a really cool project if it works; talk to me if you're interested on building some of it out for me.

----

I think all of these would be great fun; please talk to me if you want any more advice or clarification or further ideas!
