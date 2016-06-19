---
layout: post
title:  "A data structure for answering 'who is the kth richest person with age between x and y'"
date:   2016-06-16
---

Suppose I want to maintain a set of people where each has an age and a wealth. I want to be able to quickly insert people, delete people, and answer queries of the form "find the $latex k$th richest person whose age is between $latex x$ and $latex y$".

I have been somewhat interested in this question for about a year, and I've asked about related questions [a few](https://www.facebook.com/bshlgrs/posts/10205556609689335) [times](http://stackoverflow.com/questions/31153033/data-structure-to-support-a-particular-query-on-a-set-of-2d-points). But no-one's ever managed to give me a complete answer.

The other day, I ran across [this StackOverflow answer](http://stackoverflow.com/a/26299986/1360429), which presents an answer which I modified to make a full solution, which I'll present here.

My solution allows insertion and deletion in $latex O(\log^2(n))$, and allows the query in $latex O(\log^3(n))$.

## Solution

Store an [order statistic tree](https://en.wikipedia.org/wiki/Order_statistic_tree) ordered on age. At every node, store a pointer to an auxiliary order statistic tree, of all of that node's descendants ordered on income.

At every node, this requires an extra amount of memory which is linear in the number of descendants of that node. So this means that the tree will take $latex O(n\cdot \log(n))$ memory overall.

### Query

You might want to go read [that second StackOverflow answer](http://stackoverflow.com/a/26299986/1360429) again, because this algorithm is similar to that one, and it's easier to understand the algorithm on arrays.

The query is similar to how queries across ranges of an augmented BST usually work: we start out by finding the set of nodes whose descendants contain the whole subsection of the tree that you care about. There will be $latex \log(n)$ of these nodes, and finding all of them takes $latex \log(n)$ time.

We end up with $latex \log(n)$ OSTs of maximum size $latex O(n)$, and we want to find the $latex k$th smallest item in their disjoint union.

As discussed [here](/2016/06/16/generalized-multi-quickselect.html), we can solve that query in $latex O\left(\log(n)^3\right)$. (Full disclosure: I haven't yet modified that algorithm to be worst case $latex O\left(\log(n)^3\right)$ instead of just average case $latex O\left(\log(n)^3\right)$, but I think I probably can.)

If your $latex k$ is small, you can directly traverse the trees to find the correct answer, which takes $latex k \log(n) + n$ time.

### Updates

When I insert a new value into my set, I need to update the auxiliary OSTs of all of the ancestor nodes of my new node.

Usually, it's easy to argue that maintaining auxiliary data in your OST is fast, because usually your auxiliary data is something like "the sum of your descendants" or something which is $latex O(1)$. In this data structure, the efficiency argument is somewhat more complicated.

Inserting a single item into an OST takes $latex O(\log(n))$ time. But making the OST from scratch takes $latex O(n)$. This is concerning because it means that tree rotations are potentially extremely expensive. If I had to do tree rotations all the way up from my new node to the root of the tree every single insertion, then insertion would take linear time.

Luckily, we can decide that our OST is balanced using the red-black tree rules. Insertion in a red-black tree only involves amortized $latex O(1)$ rotations. (See [here](web.stanford.edu/class/cs166/lectures/05/Small05.pdf) for an explanation of this.)

The node at the lowest level will have to totally regenerate its auxiliary OST every insertion, of course. Its parent will have to do a tree rotation which requires it to totally regenerate its auxiliary OST every second insertion. Its grandparent will need to do that $latex \frac14$ of the time. And then $latex \frac18$ and so on.

At height $latex h$ in the tree, defining the leaves to be $latex h=0$, the amortized cost of insertion is going to be $latex O(\log(2^h)) = O(h)$ for insertion plus $latex O\left(\frac{2^h}{2^h}\right) = O(1)$ for totally recreating the OST after a rebalance, for a total cost of $latex O(h)$.

The total time required for updating all the auxiliary OSTs after an insert is therefore:

$$O\left(\sum_{h=0}^{log(n)} h \right)= O\left(\log(n)^2\right)$$

Updating or deleting a node also takes $latex O\left(\log(n)^2\right)$, for the same reason.

## Variations


### limited $latex k$

If $latex k$ is always going to fixed below a particular limit $latex l$--say, you know ahead of time that you're never going to need to know farther back than the 50th richest person between two ages--each node in your main OST can store a smaller auxiliary tree with only $latex l$ elements in it.

This reduces memory requirements to $latex O(n \cdot l)$.

**Queries**: Using the algorithm for OSTs in [this table](/2016/06/16/generalized-multi-quickselect.html#table1), the cost is now $latex \log(\log(n) \cdot l) \cdot \log(n) \cdot \log(l)$, which looks like $latex \log(\log(n)) \cdot \log(n) \cdot \log(l)$ as $latex n$ grows.

**Updates**: Every ancestor needs to do $latex \log(l)$ work now, instead of $latex \log(n)$, but you still have $latex \log(n)$ ancestors. So update takes overall $latex \log(n)\log(l)$ time.
