---
layout: post
title:  "How to design and choose data structures"
date:   "2017-07-07"
---

This is my attempt to convey how I think about data structures choice and design.

The following is mostly my attempt to write down the way I think about it, after spending a lot of time explaining this to both humans (in the course of teaching) and computers (in the course of building my data structure search engine).

The aim of this post is to explain how to choose or design a fast data structure to implement a particular API. Sometimes this question comes up directly. And sometimes it's implicit in an algorithms question (eg two-sum, heapsort).

Let's start out by looking at an example

## An example: LRU cache

The problem is like this

Let's think very specifically about the representation of the data

Let's think about precisely what methods we need

The solution

What have we learned? Here are some lessons:

- We can try to break things down into the methods that are required.
  - These can be read or write methods.
- It's better to describe the methods as specifically as possible
- Often we want to combine multiple data structures and have references between them

## Generalizing this

- We have methods.
  - They can be read or write
  - describe them as specifically as possible
- We have data structures
  - These are semantically equivalent. (ADT vs implementation)
  - these can be described in terms of the methods they support.
  - Some are more general than others; you always want to choose the least general.

## A menagerie of data structures

I'm going to arbitrarily break this up into maps and lists, but there's no particular reason I have to do it that way.

- Maps
  - Unordered map -> hash table
  - Ordered, unchanging map -> sorted array
  - Ordered, dynamic map -> BST (or BTree)
  - Map with one sided order -> heap
  - Map from contiguous set of ints -> array
- List
  - Stack: dynamic array
  - Queue: two stacks or a ring buffer
  - Arbitrary insertion: OST
  - Deletion: consider a Fenwick tree
- Reduction-oriented structures
  - min-stack
  -
