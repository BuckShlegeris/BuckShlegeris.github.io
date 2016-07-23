---
layout: post
title:  "A data structure for range kth-smallest queries"
date:   2016-06-16
---

Suppose I want to maintain a set of people where each has an age and a wealth. I want to be able to quickly insert people, delete people, and answer queries of the form "find the $l k$th richest person whose age is between $l x$ and $l y$".

Here is a summary of solutions to different variants on this question:

<table class="table" id="table1">
  <tr>
    <th>Variation</th>
    <th>Solution details</th>
    <th>Space</th>
    <th>Update time</th>
    <th>Query time</th>
  </tr>
  <tr>
    <td>No insertion or deletion, one-sided interval</td>
    <td><a href="http://stackoverflow.com/a/31162190/1360429">Persistent binary search trees</a></td>
    <td>$l n \cdot \log(n)$</td>
    <td>N/A</td>
    <td>$l \log(n)$</td>
  </tr>
  <tr>
    <td>No insertion or deletion, two-sided interval</td>
    <td><a href="http://stackoverflow.com/questions/26296624/order-statistic-on-intervals/26299986#26299986">Persistent binary search trees</a></td>
    <td>$l n \cdot \log(n)$</td>
    <td>N/A</td>
    <td>$l \log(n)$</td>
  </tr>
  <tr>
    <td>Insertion, deletion, two-sided interval</td>
    <td>My answer, presented here</td>
    <td>$l n \cdot \log(n)$</td>
    <td>$l \log^2(n)$</td>
    <td>$l \log^3(n)$</td>
  </tr>
</table>

I have been somewhat interested in this question for about a year, and I've asked about related questions [a few](https://www.facebook.com/bshlgrs/posts/10205556609689335) [times](http://stackoverflow.com/questions/31153033/data-structure-to-support-a-particular-query-on-a-set-of-2d-points). But no-one's ever managed to give me a complete answer.

The other day, I ran across [this StackOverflow answer](http://stackoverflow.com/a/26299986/1360429), which presents an answer which I modified to make a full solution, which I'll present here.

My solution allows insertion and deletion in $l O(\log^2(n))$, and allows the query in $l O(\log^3(n))$.

## Solution

Store an [order statistic tree](https://en.wikipedia.org/wiki/Order_statistic_tree) ordered on age. At every node, store a pointer to an auxiliary order statistic tree, of all of that node's descendants ordered on income.

At every node, this requires an extra amount of memory which is linear in the number of descendants of that node. So this means that the tree will take $l O(n\cdot \log(n))$ memory overall.

### Query

You might want to go read [that second StackOverflow answer](http://stackoverflow.com/a/26299986/1360429) again, because this algorithm is similar to that one, and it's easier to understand the algorithm on arrays.

The query is similar to how queries across ranges of an augmented BST usually work: we start out by finding the set of nodes whose descendants contain the whole subsection of the tree that you care about. There will be $l \log(n)$ of these nodes, and finding all of them takes $l \log(n)$ time.

We end up with $l \log(n)$ OSTs of maximum size $l O(n)$, and we want to find the $l k$th smallest item in their disjoint union.

As discussed [here](/2016/06/16/generalized-multi-quickselect.html), we can solve that query in $l O\left(\log(n)^3\right)$.

Alternatively, if your $l k$ is small, you can directly traverse the trees to find the correct answer, which takes $l k \log(n) + n$ time.

### Updates

When I insert a new value into my set, I need to update the auxiliary OSTs of all of the ancestor nodes of my new node.

Usually, it's easy to argue that maintaining auxiliary data in your OST is fast, because usually your auxiliary data is something like "the sum of your descendants" or something which is $l O(1)$. In this data structure, the efficiency argument is somewhat more complicated.

Inserting a single item into an OST takes $l O(\log(n))$ time. But making the OST from scratch takes $l O(n)$. This is concerning because it means that tree rotations are potentially extremely expensive. If I had to do tree rotations all the way up from my new node to the root of the tree every single insertion, then insertion would take linear time.

Luckily, we can decide that our OST is balanced using the red-black tree rules. Insertion in a red-black tree only involves amortized $l O(1)$ rotations. (See [here](web.stanford.edu/class/cs166/lectures/05/Small05.pdf) for an explanation of this.)

The node at the lowest level will have to totally regenerate its auxiliary OST every insertion, of course. Its parent will have to do a tree rotation which requires it to totally regenerate its auxiliary OST every second insertion. Its grandparent will need to do that $l \frac14$ of the time. And then $l \frac18$ and so on.

At height $l h$ in the tree, defining the leaves to be $l h=0$, the amortized cost of insertion is going to be $l O(\log(2^h)) = O(h)$ for insertion plus $l O\left(\frac{2^h}{2^h}\right) = O(1)$ for totally recreating the OST after a rebalance, for a total cost of $l O(h)$.

The total time required for updating all the auxiliary OSTs after an insert is therefore:

$$O\left(\sum_{h=0}^{log(n)} h \right)= O\left(\log(n)^2\right)$$

Updating or deleting a node also takes $l O\left(\log(n)^2\right)$, for the same reason.

## Variations

### limited $l k$

If $l k$ is always going to fixed below a particular limit $l l$--say, you know ahead of time that you're never going to need to know farther back than the 50th richest person between two ages--each node in your main OST can store a smaller auxiliary tree with only $l l$ elements in it.

This reduces memory requirements to $l O(n \cdot l)$.

**Queries**: Using the algorithm for OSTs in [this table](/2016/06/16/generalized-multi-quickselect.html#table1), the cost is now $l \log(\log(n) \cdot l) \cdot \log(n) \cdot \log(l)$, which looks like $l \log(\log(n)) \cdot \log(n) \cdot \log(l)$ as $l n$ grows.

**Updates**: Every ancestor needs to do $l \log(l)$ work now, instead of $l \log(n)$, but you still have $l \log(n)$ ancestors. So update takes overall $l \log(n)\log(l)$ time.
