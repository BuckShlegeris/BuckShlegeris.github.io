---
layout: post
date:  ""
title: "Sum lemma 1"
---

For all functions $l f$ which grow linearly or faster, if we define

$$g(n) = \sum_{i=0}^{\log(n)} f\left(2^i\right)$$

$l g$ grows at the same rate as $l f$.

## Proof part 1: $l g \geq f$

The sum is greater than its largest term. Its largest term is $l f\left(2^{\log(n)}\right) = f(n)$. So $g \geq f$.

## Proof part 1: $l g \leq f$


