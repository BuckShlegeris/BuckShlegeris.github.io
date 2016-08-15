---
layout: post
title:  "My advice on studying algorithms"
date:   2016-08-14
---

Software engineering interviews often ask whiteboard algorithms questions. Here's my advice on how to study for them. (My credentials on this topic are:  I have passed a lot of whiteboard interviews, including at Google and Apple;  as part of my job I prepare programmers for these algorithm interviews; I have conducted more than 200 technical interviews on programmers with a very wide variety of backgrounds.)

**I'm speaking for myself, not for Triplebyte, in this post.**

## Background: why do companies ask algorithms questions?

In real life, programmers spend almost none of their time implementing binary search trees or graph search algorithms. So why do companies ask so many questions about them?

There's both a [Watsonian and a Doylist](http://tvtropes.org/pmwiki/pmwiki.php/Main/WatsonianVersusDoylist) interpretation of this question--"why are algorithms questions useful to companies to ask" has one answer, and "what is the actual causal mechanism by which companies decided to ask algorithms questions" has another.

I'll start out by explaining the reasons to ask algorithms questions, and then move on to more cynical explanations for their prevalence.

To start with, a lot of professional programmers aren't able to do very basic things. For example, I might have a list of Customer objects, each of whom has an array of Purchase objects, and I want to get the names of the five customers who have spent the most over the last week. My guess is that maybe 50% of professional programmers would not solve this problem within 30 minutes. You don't want to hire such people by mistake.

Less pessimistically, when you're interviewing someone for a programming job, you're trying to find out how good they are at solving hard and confusing programming problems where they need to keep lots of details in their head at once. In real life, confusing complicated problems happen because you're working on projects that are large enough to take weeks, and you need to think about a lot of different parts of software at once. But interviews don't normally have enough time to let you get that deep into a programming problem. So instead of asking you a problem that is only difficult because of how large it is, they ask you questions which are short and difficult.

How can you come up with complicated but short coding problems which are also simple to describe? I think algorithmics is a good choice here. Algorithmics is the most complicated area of computer science that almost all software engineers know about, and it allows lots of easy-to-describe, tricky-to-implement problems.

Now here's are some more cynical historical notes.

Interview processes are awkwardly sticky. Engineering teams are comprised entirely of people who passed the technical interview of that team. So everyone is personally incentivised to believe and say that their interview process is extremely accurate at measuring software engineering ability. So once a culture of algorithmic interviewing gets established at a company, it's hard to change it.

Also, everyone knows that Google had an amazing team 10 years ago (and to a lesser extent still today), and Google asked algorithmic interview questions back then. Most companies are slightly insecure about not being Google (because they're used to losing their best candidates to Google), so they are tempted to imitate Google's interview process.

At worst, algorithms interviews can turn into some weird hazing process. Sometimes companies get totally convinced that some random brainteaser is the secret sauce to finding great candidates, and you can never change their mind about it.


Overall, I wouldn't ask traditional hard algorithms questions in interviews. At worst, algorithms questions are extremely bad interview questions. I've written on occasion about [questions I particularly hate](/2016/04/22/dumbest-algorithm-problem.html). Algorithms questions are particularly bad when they're more like brainteasers and require more leaps of insight. (If you want to build an algorithm interview process, feel free to email me and I can give you more detailed opinions on how to ask questions that don't have these problems.)

## How to study

I think there's sort of two different skills involved in answering algorithms questions. Firstly, you need to know all of the classic algorithm and data structure material. Secondly, you need to be able to quickly produce algorithmic logic on a whiteboard under pressure. I'm going to discuss these topics separately.

### Canonical algorithms material

There's a pretty consistent set of core algorithms knowledge to acquire that companies will test you on. Companies are incentivised not to ask questions relying on material which isn't in this list, because many good programmers don't know it and the companies will end up failing good people.

Here's a list of the data structures material you should know:

- List structures: arrays, dynamic arrays, linked lists
- Set and map structures: hash maps, binary search trees, heaps

For each of the data structures, you should know how all of its essential methods are implemented and their runtimes. (Essential methods for lists are `set`, `get`, `pushAtEnd`, `popAtEnd`, `insertByIndex`, `removeByIndex`. Essential methods for sets are `insert`, `remove`, `contains?`). You should know how to write code that uses the implementation of the data structures; for example, you should be able to implement a `getNearestElementTo(x)` method which takes a binary search tree and searches for the closest value to `x` in the tree.

Other notes on this:

- You should know that your binary search tree implementations need to have logic for balancing, but it's okay if you don't know the details. (Optional material: if you want to quickly learn an implementation of self balancing BSTs check out [treaps](/2016/07/02/hash-ordered-treaps.html). If you want to understand how red-black trees work, learn about [left-leaning red-black trees](https://www.cs.princeton.edu/~rs/talks/LLRB/LLRB.pdf) or 2-3-4 trees instead.)
- You should probably know that a queue [can be implemented with two stacks](http://stackoverflow.com/a/69436/1360429)

You should be able to implement all of the following algorithms:

- Graph algorithms: Breadth first search, depth first search, Dijkstra's algorithm
- One $l O(n \log(n))$ sorting algorithm; I recommend mergesort or quicksort
- Binary search on an array. This one is super fiddly to get right and it's worth writing the code even if you roughly understand the algorithm.

You should be roughly comfortable with Big O notation.

How should you learn all this? My favorite resource is Skiena's Algorithm Design Manual. All the above material is covered in chapters 2-6. I like it because the writing style is really engaging and it focuses on the parts of the material which I think are the most important. It's available free on the internet [here](https://github.com/addyrookie/Depot-App/raw/master/gmail/The%20Algorithm%20Design%20Manual%202ed%20%20by%20Steven%20S.%20Skiena.pdf). One downside of this book is that it gives code examples in C, which makes it less accessible to programmers who can't read C. If you read this book, I think it's worth reading chapters 1-6 and chapter 12. This reading will cover quite a bit of material which is extremely unlikely to come up in interviews, but I think that the unnecessary material does a good job of reinforcing the really core stuff.

If you want a briefer explanation, I like the explanations in Craking the Coding Interview and on [InterviewCake.com](https://www.interviewcake.com/).

I think Skiena's book is way better than the famous CLRS textbook, which is extremely dry and somewhat pedantic.

I have a few notes on graph algorithms [here](/2016/07/02/graph.html) that might be a useful resource.

### Canonical algorithmic skills

So that's the core knowledge required for interviews. Here are the different kinds of programming skills that are tested, together with my favorite resource for learning them.

Cracking the Coding Interview is an extremely useful resource for all of this. I wrote some notes on it [here](/2016/06/22/ctci.html).

Here are the most common central components of algorithms interview problems:

- Dynamic programming: learn it by reading Skiena chapter 8, or by reading the Cracking the Coding Interview chapter on this topic.
- Recursion: Cracking the Coding Interview has a great chapter on this.
- Iterating around and over the famous data structures. CtCI has good questions about this for each of the individual data structures. Eg for BSTs, you could refer to the CtCI tree chapter.
- Composing fast data structures for a problem. [Here are some examples](https://github.com/bshlgrs/data-structure-composer/blob/master/amazing_outcome.md) of this kind of problem.

My main advice is to do a bunch of problems from Cracking the Coding Interview. I listed in my notes on it the problems that I thought were most important.

Here's a general note on studying these problems: I think it's probably fine to "cheat" by reading the answers. I think you're better off giving up on the problems and reading the solutions than giving up totally on doing practice interview problems.

## Learning further about algorithms and data structures

Suppose you're excited about algorithms and data structures for their own sake, as opposed to for the mercentile purpose of getting a job. How should you learn more? Here are some topics I've enjoyed learning about:

- [2-3-4 tree isomorphism, BTrees](http://web.stanford.edu/class/cs166/lectures/05/Small05.pdf)
- [Augmented BSTs](http://www.bowdoin.edu/~ltoma/teaching/cs231/fall09/Lectures/10-augmentedTrees/augtrees.pdf)
- [Disjoint set](https://en.wikipedia.org/wiki/Disjoint-set_data_structure)
- Range minimum query ([slides 1](http://web.stanford.edu/class/cs166/lectures/00/Small00.pdf), [slides 2](http://web.stanford.edu/class/cs166/lectures/01/Small01.pdf))
- [Here's some work](/2016/06/16/kth-richest.html) I did on my own that I think is interesting and worth reading!

## Resources

- Triplebyte, [How To Pass A Programming Interview](blog.triplebyte.com/how-to-pass-a-programming-interview). I endorse most of this content.
- Steve Yegge: some old posts like [this one](https://sites.google.com/site/steveyegge2/five-essential-phone-screen-questions), [Get That Job At Google](http://steve-yegge.blogspot.com/2008/03/get-that-job-at-google.html). I think a lot of his ideas are wrong, but they're interesting to read.
- [InterviewCake.com](https://www.interviewcake.com/) is a more fun and engaging self-study tool than Cracking the Coding Interview.
