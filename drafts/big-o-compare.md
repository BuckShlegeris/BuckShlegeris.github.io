---
layout: post
title:  "Big O comparisons"
date:   2016-07-22
---

Suppose that $l f$ and $l g$ are both monotonically increasing functions of type $l \mathbb{N} \rightarrow \mathbb{N}$.  I want to compare the asymptotic runtimes of expressions which contain these functions. For example, $l f(n) \cdot g(n) \geq f(n) + g(n)$, asymptotically. How can I automatically decide this?

(By asymptotically, I mean "including constant factors", the same way that people do when they're doing big O analysis. I'm uncomfortable with big O notation, because the way people often use it, the = symbol isn't reflexive. I'd prefer to use subset notation or something. I'm not sure, I'll probably be inconsistent here)

Of course, this is going to be very hard unless I heavily restrict my class of expressions. I'm fine with doing this. Let's start out restricting ourselves just to polynomials in $l n$, $l f(n)$ and $l g(n)$. So we're only looking at expressions like $l n \cdot f(n) + g(n)$ or $l n \cdot f(n) \cdot g(n)^3$.

## Proposed algorithm

Is $l f(n)^4 + g(n)$ ever greater than $l f(n) + g(n)^7$? Sure it is, whenever $l f(n)$ is somewhat bigger than $l g(n)$. I feel like I can check this by trying to substitute in something really big for $l f$ and something small for $l g$, then vice versa.

Let's substitute in $l n$ for both $l f$ and $l g$, and then see what we get:

$$ f(n)^4 + g(n) \Rightarrow O(n^4) $$

$$ f(n) + g(n)^7 \Rightarrow O(n^7) $$

Take the maximum of those results, which is $l n^7$.

Now, substitute in $l f = n^7$ and $l g = 1$:

$$ f(n)^4 + g(n) \Rightarrow O(n^{28}) $$
$$ f(n) + g(n)^7 \Rightarrow O(n^7) $$

The first expression is larger.

Let's swap around which way we're substituting, so $l f = 1$ and $l g = n^7$:


$$ f(n)^4 + g(n) \Rightarrow O(n^7) $$
$$ f(n) + g(n)^7 \Rightarrow O(n^{49}) $$

The second is larger.

So we've learned that our first expression is larger if $l f \gg g$ and our second expression is larger if $l g \gg f$.

Does this algorithm work for all polynomials?

