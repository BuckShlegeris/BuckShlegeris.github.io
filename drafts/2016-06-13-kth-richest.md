---
layout: post
title:  "Data structure: kth richest person older than x"
date:   2016-06-12
---

Suppose I want to maintain a set of people where each has an age and a wealth. I want to be able to quickly insert people, delete people, and answer the following query:

Find the $latex k$th richest person older than $latex x$.

Here's a solution which allows insertion and deletion in $latex O(\log^2(n))$, and allows that query in $latex O(\log^3(n))$.

I have been somewhat interested in this question for about a year, and I've asked about it [a few](https://www.facebook.com/bshlgrs/posts/10205556609689335) [times](http://stackoverflow.com/questions/31153033/data-structure-to-support-a-particular-query-on-a-set-of-2d-points). But no-one's ever managed to give me a complete answer.

The other day, I ran across [this StackOverflow answer](http://stackoverflow.com/questions/26296624/order-statistic-on-intervals), which is only a small modification away from my now-favorite answer, which I'll present here.

## Solution

Store an [order statistic tree](https://en.wikipedia.org/wiki/Order_statistic_tree) ordered on age. At every node, also store an order statistic tree of all of that node's descendants, ordered on income.

### Query

You should go read [that second StackOverflow answer](http://stackoverflow.com/questions/26296624/order-statistic-on-intervals) again, because this algorithm is slightly more intuitive on arrays.

To compute a reduction (eg sum, maximum, or product) on a subsection of a binary tree, you start out by finding a set of nodes whose descendants contain the whole subsection you care about. There will be $latex \log(n)$ of these nodes, and finding all of them takes $latex \log(n)$ time.

In this case it's slightly more complicated. We end up with $\latex \log(n)$ OSTs of various sizes, and we want to find the $latex k$th smallest item in their union.

Let's think about this using some different variable names: how do we find the $latex k$th smallest item in $latex m$ different OSTs of size $latex s$?

Here's the explanation that that Stack Overflow answer gives about doing this on sorted arrays:

> The easiest way to solve it is nested binary search: first use binary search to choose some candidate element from every array starting from largest one; then use binary search in other (smaller) arrays to determine rank of this candidate element.

I hadn't heard of this algorithm and I like it. Here's my attempt at writing it more exactly:

