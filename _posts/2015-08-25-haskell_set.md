---
layout: post
title:  "Sets as functions"
date:   2015-08-08
categories: technical
tags:
- programming
---

```haskell
-- really, a set is just a function telling you whether something is in the set, right?
type Set a = a -> Bool

-- by that definition, the empty set is just the function which always says
-- "no, that isn't in the set"
emptySet :: Eq a => Set a
emptySet = \x -> False

-- adding an item to a set gives you a new set which responds with "yep" to the added item
-- and otherwise just responds how the original set would have responded
add :: Eq a => a -> Set a -> Set a
add item set = \x -> if x == item then True else set x

-- removing an item from a set gives you a new set which responds with "nope" to the added item
-- and otherwise responds the same way as the original set
remove :: Eq a => a -> Set a -> Set a
remove item set = \x -> if x == item then False else set x

-- a complement just returns the opposite answer than the original set
complement :: Eq a => Set a -> Set a
complement set = \x -> not (set x)

-- intersection of two sets is a new set which returns True if the item is in both sets
intersection :: Eq a => Set a -> Set a -> Set a
intersection set1 set2 = \x -> set1 x && set2 x
```


[view comments on Facebook](https://www.facebook.com/endofunctor/posts/10205930729562098)

