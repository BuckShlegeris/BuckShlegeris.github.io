---
layout: post
date:   ""
title: "Optimal indexing"
---

**this is in progress**

This is my notes on how to index collections of data for fast support of various queries.

## Where clauses are easy when constant

For any query which contains a predicate like this:

`WHERE f(item) = arg`

you can just split up any other indexing structure according to that, and keep them in a hash map.

## Where clauses with a single range component

use B-trees




## General phrasing

Given a list `xs` of items, choose a data structure such that the following call is fast:

    class Query[NodeType, ArgumentsType, OrderingType <: Comparable, ResultType](
      predicate: (NodeType, ArgumentsType) => Boolean,
      ordering: (NodeType, ArgumentsType) => OrderingType,
      limit: (ArgumentsType => Option[Integer]),
      reduction: (List[NodeType], ArgumentsType) => ResultType) {

      def compute(args: ArgumentType) = {
        nodes.filter((x) => predicate(x, args))
             .orderBy((x) => ordering(x, args))
             .maybeTake((x) => limit(args))
             .apply(reduction(_, args))
      }
    }

Properties:

predicate:
  - Try splitting it into a conjunction. Then classify conditions like this:
    - ignores arguments: this makes it trivial
    - of the form `f(args) = g(node)`. This means you make a hash map from the range of `f(args)` to
      whatever other data structure you wanted.
reduction:
  - I think this is always trivial to store if you can store the other things.

Other cases:

- Predicate is like `f(args) < g(node)` or `f(args) < g(node) < h(args)`. In this case just use a BST.
- Predicate is conjunction of d range queries. In this case use a KD tree. Construction is log time. Queries are O(n**{1-1/d} + m).
- Predicate like `f(args) < g(node) < h(args)`, order by `j(node)`, limit `k(args)`. Use [this](http://stackoverflow.com/questions/26296624/order-statistic-on-intervals) idea, but make a skip list.

