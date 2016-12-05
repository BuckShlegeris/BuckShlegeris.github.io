---
layout: post
date:   ""
title: "Talks"
---

Sometimes I present at conferences about things. Here are the talks I've given that are recorded.

## Scala By The Bay 2016, "Automatic composition of fast data structures"

Programmers often have trouble finding fast data structures to support a given API. I describe a system I'm writing to automatically compose data structures to efficiently support a given API. The system is built out of some modified graph algorithms and ideas from programming language theory.


<iframe width="560" height="315" src="https://www.youtube.com/embed/Ey5fOCcWpM8" frameborder="0" allowfullscreen></iframe>

If you're interested, I wrote a postmortem for this talk [here](notes/sbtb2016-postmortem).

## Scala By The Bay 2015, "Automatically deriving efficient data structures in Scala"

It's common to need a collection data structure which supports a particular set of operations efficiently. For example, hash maps are a good choice if you just need to support get and set, and a min heap is a good choice if you need add and getMin. I describe a system I'm building which takes a Scala specification of the methods needed in a collection class, then works interactively with the user to decide on the best set of data structures to use to implement the desired interface with maximum efficiency, then generates the necessary code for this optimized collection class.

<iframe width="560" height="315" src="https://www.youtube.com/embed/oPFga7eg3Uw" frameborder="0" allowfullscreen></iframe>

## CompCon 2013, "Algebraic Behaviour of Data Structures"

Data structures have a rich algebraic structure which hasn't really been properly explored. To start with, I'll explain the isomorphism between set size expressions and immutable data structures. I'll explain how differentiation leads to the zipper over a mutable data type, and what zippers are.

<iframe width="560" height="315" src="https://www.youtube.com/embed/OB73WLf1k9c" frameborder="0" allowfullscreen></iframe>
