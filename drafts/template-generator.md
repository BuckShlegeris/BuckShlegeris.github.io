---
layout: post
title:  "Finding short templates"
date:   ""
---

Regular expressions are a notation for concisely some sets of strings. Let's talk about the subset of regular expressions where the only operator available is the `?` operator from traditional regular expressions. For example, `ab(cde)?` is a regular expression for the language $l\lbrace "ab", "abcde"\rbrace$. Let's adopt a different notation for this, given that it's the only logic we need to express. I want to use square brackets. So the previous regular expression would be written as `ab[cde]`. I'm calling this notation "template expressions" because I'm using these for a kind of templating application.

As another example, `a[bc]de[f]` is a template expression describing the set $l \lbrace "ade", "abcde", "adef", "abcdef"\rbrace$.

Here's my problem. I have a set of strings and want to find the shortest template expression which produces all of them.

I'm fine if the template expression also produces other strings which are not in my set.

This is always possible, because for any set of strings, eg $l \lbrace X, Y, Z\rbrace$, you can make a template expression like `[X][Y][Z]` which solves the problem.

We need to choose a cost function for templates. For the moment, I'm interested in saying that the cost is just the number of non-square-bracket characters in the template.

## algorithm ideas

Suppose you know the optimal way of editing string $l X$ to string $l Y$ using only insertions and deletions. If this takes $l n$ insertions, then you can make a template for the set $l \lbrace X, Y \rbrace$ with cost $l \text{length}(X) + n$.

## other notes

Obvious extension: how do you do this if you have more logical operators available? I'm particularly interested in the "or" operator. So for example the regular expression `(a|b)cd` which matches $l \lbrace "acd", "bcd"\rbrace$.

If you allow the Kleene star operator, you can quickly make a regular expression to match anything, which makes it trivial to find a regex which matches all of the strings in a set.
