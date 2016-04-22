---
layout: post
title:  "Overteaching and overlearning"
date:   2016-04-20
---

(I’m talking about computer science here because that’s the only topic I know really well, but this might generalize anyway.)

Most university classes have a few concepts in them that you should remember forever, and a bunch of other concepts that you forget immediately after the final.

Is it a total waste of time to teach things that people are going to forget? I don’t think so, for a few reasons. To start with, sometimes you teach people about a particular specific topic with the goal of them getting a feel for the kind of things that you do in that field more generally. A classic example is sorting algorithms—you rarely actually need to implement a sorting algorithm, but studying them is a pretty good way of getting a feel for different ways of designing algorithms[1]. Even though people will forget the fiddly details of implementing quicksort in place, hopefully they’ll remember the insight that you can split things into smaller subproblems, recursively solve those, and merge the results. Relatedly, it often works nicely to teach people about an important problem by making them study the solutions to it—for example, I don’t remember the algorithms which are actually used in practice for scheduling in operating systems, but I remember the concepts better because I studied them in my OS class.

More generally, students empirically learn concepts better if they then practice using those concepts in more advanced ways. For example, you remember your algebra course better if you then do a calculus course that relies on it. A lot of practical computer science courses could be justified by pointing out that even if they teach you totally useless things, you hopefully at least practiced programming.

However, for this to work, the more advanced material needs to actually rely on the core material. I think many computer science courses do not do a good job of this.

For example. Suppose you want to ensure that your students finish their algorithms course and remember binary search trees. You spend the obligatory week on binary search trees, and teach them about red-black trees to the extent that when I interview them a year later they can say “uh, some nodes are red and some nodes are black and black children only have red parents or something like that.” And now you’re not sure what to teach them next.

Algorithms courses often say “Well, I guess we’re done with BSTs. Now that the core stuff is out of the way, let’s teach them about max flow and spanning tree algorithms!”

I think this is a terrible idea! Students learn those algorithms, but they’re kind of confusing and don’t come up much in the rest of your life, so they forget them. And the learning process didn’t even work as over learning, because it wasn’t giving them practice reasoning about BSTs.

Instead, you should teach them more advanced things about BSTs! Teach them about BTrees (and the [isometry between those and red-black trees](http://web.stanford.edu/class/cs166/lectures/05/Small05.pdf))! Make them implement splay trees and treaps. Tell them about [augmented binary search](http://web.stanford.edu/class/cs166/lectures/06/Small06.pdf) trees.

These things are not particularly easier or harder than just teaching them about other algorithms stuff. And the students will probably forget all of it in a year. But they will do a much better job of giving the students excuses to think really carefully about how BSTs work, so they’ll be more fluent with those when they come up.

(This is the approach taken by the amazing course CS166 at Stanford, which I was linking above. As far as I'm concerned, all other algorithms courses should imitate CS166 as much as possible.)

Classic examples of things which CS classes teach which do not work well as over learning: Minimum spanning tree algorithms. The Floyd Marshall algorithm. Dijkstra’s algorithm, when it isn’t taught as uniform cost search. (This one particularly annoys me because most students try to learn it, but most of them don’t realize the connection between it and BFS. AFAICT this is just for historical reasons: when Dijkstra originally presented the algorithm it wasn’t written as BFS with a priority queue, and CS departments have a bizarre fixation on presenting ideas as they’ve been historically presented.

[1] Sadly, most courses which do this teach you about things like divide and conquer and greedy algorithms, but neglect the single most important part of designing a good algorithm, which is choosing the right data structures. Skiena’s textbook does a great job of avoiding this mistake: it presents heapsort as selection sort optimized by using a faster data structure.

-----

[view comments on Facebook](https://www.facebook.com/endofunctor/posts/10207490190427645?pnref=story)
