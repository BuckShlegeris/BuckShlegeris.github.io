---
layout: post
title:  "General multi-quickselect"
date:   2016-06-16
---

I've been thinking a lot recently about how you find the $latex k$th smallest element in the disjoint union of several data structures.

## Multi-quickselect on data structures with fast `rank`

Yesterday I [came up with an algorithm](/2016/06/15/multi-sorted-array-quickselect) for the version of this problem where you have multiple sorted arrays.

But this algorithm also works on any other data structure which supports the `rank` method in $latex O(\log(n))$ time.

On a collection of data structures with a total of $latex O(t)$ elements, the modified quickselect algorithm involves $latex O(log(t))$ iterations. In each iteration, the rank of a random element is computed in every data structure.

So the total time taken is (time to calculate rank in every data structure) * (log of total number of elements).

<table class="table">
  <tr>
    <th>Collection</th>
    <th>Time complexity</th>
  </tr>
  <tr>
    <td>$latex m$ sorted arrays of length $latex n$</td>
    <td>$latex \log(m n) \cdot m \cdot \log(n)$</td>
  </tr>
  <tr>
    <td>Two sorted arrays, of lengths $latex a$ and $latex b$</td>
    <td>$latex \log(a + b) \cdot \left(\log(a) + \log(b)\right)$</td>
  </tr>
  <tr>
    <td>$latex m$ order statistic trees of size $latex n$</td>
    <td>$latex \log(m n) \cdot m \cdot \log(n)$</td>
  </tr>
  <tr>
    <td>$latex \log(n)$ order statistic trees of sizes $latex [1, 2, 4, ...n]$</td>
    <td>$latex \log(n)^2$</td>
  </tr>
</table>

For data structures with $latex O(log(n))$ `rank`, I think this is optimal.

## Allowing data structures without fast `rank`

How about if some of your data structures are unsorted?

This algorithm needs to be modified, because there's no particular guarantee that any data structure gets smaller on a particular iteration. This is okay in cases where `rank` is cheap enough that the asymptotic complexity isn't affected by having a data structure which stays at its original size for most of the runtime of the algorithm. But on an unsorted array, `rank` takes $latex O(n)$ and a key part of the argument for the good runtime of quickselect is that the unordered array usually gets smaller every time you call `rank`.

This issue is why my attempt at an [optimal algorithm for selection on an OST and an unsorted array](/2016/06/12/quickselect-lemma.html) was so complex.

Obviously there's not going to be a sublinear time solution to this problem. So we might as well take linear time to add all our unsorted structures together into an unsorted array, in linear time. So we only need to consider the problem where we have a single unsorted array.

### Non-optimal solution

When I have a collection of data structures such that `rank` takes time $latex O(r)$ and `select` takes time $latex O(s)$, I can run [my `double_quickselect_v2` algorithm](/2016/06/12/quickselect-lemma.html) on an unordered array of length $latex n$ and that collection, with query time $latex O(\log(n) \cdot r + s)$. For example, this algorithm can deal with a sorted array of size $latex m$ and an unsorted array of size $latex n$ in overall $latex O(\log(n) \cdot \log(m) + \log(m)) = O(\log(m)\cdot\log(n))$.

### What an optimal solution might look like

I bet we can generalize my alleged [optimal algorithm for selection on an OST and an unsorted array](/2016/06/12/quickselect-lemma.html).

## Summary

I have a bunch of data structures and want to find the $latex k$th smallest item in their union. How long will it take me?

<table class="table">
  <tr>
    <th>Collection</th>
    <th>Algorithm</th>
    <th>Time complexity</th>
  </tr>
  <tr>
    <td>Unsorted array of size $latex n$</td>
    <td>Median of medians</td>
    <td>Worst case $latex O(n)$</td>
  </tr>
  <tr>
    <td>Sorted array of size $latex n$</td>
    <td>Binary search</td>
    <td>Worst case $latex O(\log(n))$</td>
  </tr>
  <tr>
    <td>Order statistic tree</td>
    <td>its native `find` implementation</td>
    <td>Worst case $latex O(\log(n))$</td>
  </tr>
  <tr>
    <td>A bunch of unsorted data structures, of total size $latex O(n)$</td>
    <td>Stick it all in an array then call median of medians</td>
    <td>Worst case $latex O(\log(n))$</td>
  </tr>
  <tr>
    <td>$latex m$ data structures which support <code>rank</code> in $latex O(\log(n))$, with maximum size $latex O(n)$</td>
    <td><a href="/2016/06/15/multi-sorted-array-quickselect.html">Multi sorted array quickselect</a></td>
    <td>Average case $latex O(m \cdot \log(n) \cdot \log(m \cdot n))$</td>
  </tr>
  <tr>
    <td>$latex m$ data structures which support <code>rank</code> in $latex O(\log(n))$, with maximum size $latex O(n)$, and also a bunch of unsorted data with total size $latex u$</td>
    <td>"Non-optimal solution" as described above</td>
    <td>Average case $latex O(\log(u) \cdot m \cdot \log(n) +\\ m \cdot \log(n) \cdot \log(m \cdot n))$</td>
  </tr>
</table>

I suspect that I can improve upon most of the algorithms listed there that I invented myself; I'll keep this table updated.

Also, I have not done due diligence trying to research for standard solutions to these problems, because I enjoy trying to solve them myself. It's possible that there are well known solutions to these problems that I haven't found in my journeys through Google, StackOverflow, and Wikipedia.

TODO:

- try to actually implement those supposed fast algorithms of mine
- generalize that OST and unsorted array algorithm
- try to modify my multi-array quickselect algorithm to be faster.
