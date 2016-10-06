---
layout: post
title:  "Generalized multi-quickselect"
date:   2016-06-16
---

I've been thinking a lot recently about how you find the $$ k$$th smallest element in the disjoint union of several data structures.

## Multi-quickselect on data structures with fast `rank`

Yesterday I [came up with an algorithm similar to quickselect](/2016/06/15/multi-sorted-array-quickselect) for the version of this problem where you have multiple sorted arrays.

But this algorithm also works on any other data structure which supports the `rank` method in $$ O(\log(n))$$ time.

On a collection of data structures with a total of $$ O(t)$$ elements, the modified quickselect algorithm involves $$ O(log(t))$$ iterations. In each iteration, the rank of a random element is computed in every data structure.

So the total time taken is (time to calculate rank in every data structure) * (log of total number of elements).


<table class="table" id="table1">
  <tr>
    <th>Collection</th>
    <th>Time complexity</th>
  </tr>
  <tr>
    <td>$$ m$$ sorted arrays of average length $$ n$$</td>
    <td>$$ \log(m \cdot n) \cdot m \cdot \log(n)$$</td>
  </tr>
    <tr>
    <td>$$ m$$ sorted arrays of total length $$ t$$</td>
    <td>$$ \log(t) \cdot m \cdot \log(\frac tm)$$</td>
  </tr>
  <tr>
    <td>Two sorted arrays, of lengths $$ a$$ and $$ b$$</td>
    <td>$$ \log(a + b)^2$$</td>
  </tr>
  <tr>
    <td>$$ m$$ order statistic trees of average size $$ n$$</td>
    <td>$$ \log(m \cdot n) \cdot m \cdot \log(n)$$</td>
  </tr>
  <tr>
    <td>$$ \log(n)$$ sorted arrays of sizes $$ [1, 2, 4, ...n]$$</td>
    <td>$$ \log(n)^3$$ </td>
  </tr>
</table>

(See [^1] for more details on the exponentially shrinking arrays.)

For data structures with $$ O(log(n))$$ `rank`, I think this is optimal.

## Allowing data structures without fast `rank`

How about if some of your data structures are unsorted?

This algorithm needs to be modified, because there's no particular guarantee that any data structure gets smaller on a particular iteration. This is okay in cases where `rank` is cheap enough that the asymptotic complexity isn't affected by having a data structure which stays at its original size for most of the runtime of the algorithm. But on an unsorted array, `rank` takes $$ O(n)$$ and a key part of the argument for the good runtime of quickselect is that the unordered array usually gets smaller every time you call `rank`.

This issue is why my attempt at an [optimal algorithm for selection on an OST and an unsorted array](/2016/06/12/quickselect-lemma.html) was so complex.

Obviously there's not going to be a sublinear time solution to this problem. So we might as well take linear time to add all our unsorted structures together into an unsorted array, in linear time. So we only need to consider the problem where we have a single unsorted array.

### Non-optimal solution

When I have a collection of data structures such that `rank` takes time $$ O(r)$$ and `select` takes time $$ O(s)$$, I can run [my `double_quickselect_v2` algorithm](/2016/06/12/quickselect-lemma.html) on an unordered array of length $$ n$$ and that collection, with query time $$ O(\log(n) \cdot r + s)$$. For example, this algorithm can deal with a sorted array of size $$ m$$ and an unsorted array of size $$ n$$ in overall $$ O(\log(n) \cdot \log(m) + \log(m)) = O(\log(m)\cdot\log(n))$$.

### What an optimal solution might look like

I bet we can generalize my alleged [optimal algorithm for selection on an OST and an unsorted array](/2016/06/12/quickselect-lemma.html).

## Summary

I have a bunch of data structures and want to find the $$ k$$th smallest item in their union. How long will it take me?

<table class="table" id="table1">
  <tr>
    <th>Collection</th>
    <th>Algorithm</th>
    <th>Time complexity</th>
  </tr>
  <tr>
    <td>Unsorted array of size $$ n$$</td>
    <td>Median of medians</td>
    <td>Worst case $$ O(n)$$</td>
  </tr>
  <tr>
    <td>Sorted array of size $$ n$$</td>
    <td>Binary search</td>
    <td>Worst case $$ O(\log(n))$$</td>
  </tr>
  <tr>
    <td>Order statistic tree</td>
    <td>its native `find` implementation</td>
    <td>Worst case $$ O(\log(n))$$</td>
  </tr>
  <tr>
    <td>A bunch of unsorted data structures, of total size $$ O(n)$$</td>
    <td>Stick it all in an array then call median of medians</td>
    <td>Worst case $$ O(\log(n))$$</td>
  </tr>
  <tr>
    <td>$$ m$$ data structures which support <code>rank</code> in $$ O(\log(n))$$, with maximum size $$ O(n)$$</td>
    <td><a href="/2016/06/15/multi-sorted-array-quickselect.html">Multi sorted array quickselect</a></td>
    <td>Average case $$ O(m \cdot \log(n) \cdot \log(m \cdot n))$$</td>
  </tr>
  <tr>
    <td>$$ m$$ data structures which support <code>rank</code> in $$ O(\log(n))$$, with maximum size $$ O(n)$$, and also a bunch of unsorted data with total size $$ u$$</td>
    <td>"Non-optimal solution" as described above</td>
    <td>Average case $$ O(\log(u) \cdot m \cdot \log(n) +\\ m \cdot \log(n) \cdot \log(m \cdot n))$$</td>
  </tr>
</table>

I suspect that I can improve upon most of the algorithms listed there that I invented myself; I'll keep this table updated.

If you know a faster algorithm for one of these problems, please let me know!


[^1]:

    There are a total of $$ 2\cdot n - 1 = O(n)$$ elements in those $$ n$$ arrays. The inner loop will happen $$ \log(n)$$ times.

    Each iteration will need to do a binary search within its array. On the first iteration the time taken will be $$ \sum_{i=0}^{\log(n)} \log(2^i) = O(\log(n)^2)$$. Further iterations obviously won't be slower than that. So we can bound above this runtime by $$ \log(n)$$.

    We can also give a proof sketch for bounding it below. Suppose that all our arrays have roughly the same distribution, so that on the $$ w$$th iteration, every array has a size of only $$ 2^{-w}$$ its original size.

    $$\begin{align} &\sum_{w=0}^{\log(n)} \sum_{i=0}^{\log(n)} \log\left(max\left(2^i \cdot 2^{-w}, 0\right)\right)  \\
            = &\sum_{w=0}^{\log(n)} \sum_{i=0}^{w} i  \\
            = &\sum_{w=0}^{\log(n)} O\left( w^2 \right) \\
            = &O\left(\log(n)^3\right) \end{align}$$
