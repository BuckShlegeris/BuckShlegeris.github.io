---
layout: post
title:  "Building a search engine for data structures"
date: "2016-11-13"
---

Today I [presented at Scala By The Bay](https://scalaebythebay2016.sched.org/event/7iUk/automatic-composition-of-fast-data-structures) about my project to build a search engine for data structures. I've deployed the project at [http://ds.shlegeris.com](ds.shlegeris.com); you can play with it there.

This blog post is a more detailed version of the talk I gave today.

## A search engine for data structures

A data structure is a way of organizing data to efficiently support a particular API. So a data structure search engine takes an API and returns an efficient implementation.

Let's look at some examples of queries that the search engine is able to support. Here's one from Cracking the Coding Interview:

<img class="shadow-img" src="/img/sbtb/ctci.png" />

You can see the answer my software finds [here](http://ds.shlegeris.com/#getLast,deleteLast!,insertLast!,getMinimum).

Here's one from Quora:

<img class="shadow-img" src="/img/sbtb/quora1.png" />

And [here's my answer](http://ds.shlegeris.com/#getMinimum,getMaximum,deleteMaximum!,deleteMinimum!,deleteFirstNodeWithValue!,insertAnywhere!).

Here's a third Quora question:

<img class="shadow-img" src="/img/sbtb/quora2.png" />

[And my answer.](http://ds.shlegeris.com/#getFirst,deleteFirst!,insertLast!,deleteAtIndex!)

Our input type is a set of queries.

And we want to return a set of data structure search results.

## Implementation

Here's how that works.

The whole project is built around a bank of knowledge about data structures and the relationships between different methods.

The core algorithm is something like the following pseudocode:

```scala
def chooseFastDataStructuresForAdt(adt: AbstractDataType): DominanceFrontier[DataStructureChoice] = {
  val options: Set[DataStructureChoice] =
    allDataStructures.subsets
                     .map((subset) => findAllTimes(subset, adt))

  adt.pickBestDataStructures(options)
}
```

So we compute the times taken for all the methods by each possible composite data structure. Then we choose the best data structures for our use case.

The crux of the logic is in the `findAllTimes` method. Let's look at how that works.
