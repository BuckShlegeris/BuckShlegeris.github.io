---
layout: post
title:  "Calculating the Gini coefficient"
date:   2016-09-04
---

If $$ x$$ is a sorted list of values of length $$ n$$, then the Gini coefficient $$ G$$ is given by:

$^$G = \frac{\sum_{i=0}^n \sum_{j=0}^n \left| x_i - x_j \right|}{2 \cdot n^2 \cdot \text{mean}(x)}$^$

Where does this come from?

Here's one way of looking at it. The [mean absolute difference](https://en.wikipedia.org/wiki/Mean_absolute_difference) of a distribution is the expected value of drawing two items from the distribution and returning the absolute value of their difference. Here's a formula for the mean absolute difference $$ MD$$ of the sorted list $$ x$$ from before:

$^$MD = \frac{\sum_{i=0}^n \sum_{j=0}^n \left| x_i - x_j \right|}{n^2}$^$

Using this, we can write the Gini coefficient as

$^$G = \frac{MD}{2 \cdot \text{mean}(x)}$^$

This makes more sense. We divide by the mean because we want the Gini coefficient of a distribution to be unaffected by multiplying by the constant. ($$ \frac{MD}{\text{mean}(x)}$$ is known as [relative mean absolute distance](https://en.wikipedia.org/wiki/Mean_absolute_difference#Relative_mean_absolute_difference).) And then we multiply by 2 so that our Gini coefficient varies between 0 meaning perfect equality and 1 meaning perfect inequality.

## Calculating it

You can calculate this directly.

Alternatively, we can use a dynamic programming approach to cut the runtime down to $$ O(n)$$ (or $$ O(n \log(n))$$ if we include the cost of sorting the list).

Let's look at the sum on the numerator of the Mean Absolute Difference formula:

$^$ \sum_{i=0}^n \sum_{j=0}^n \left| x_i - x_j \right| $^$

We want to calculate this in a single loop instead of two nested loops. First, let's compute a list $$ y$$ of prefix sums of $$ x$$--that is, $$ y_i$$ is the sum of the first $$ i$$ elements in $$ x$$. So $$ y_0 = 0$$, and $$ y_i = y_{i-1} + x_{i-1}$$.

Consider this just for the $$ i$$th element in $$ x$$. What's the sum of all of the absolute differences of elements in $$ x$$ from $$ x_i$$?

We can break this down into two parts: the part that comes from elements *smaller than* $$ x_i$$, and the part that comes from elements *larger than* $$ x_i$$. This is a convenient thing to do, because this means we can use subtraction instead of absolute differences.

Let's just calculate the sum of differences between $$ x_i$$ and elements that aren't after it in the list (so including itself):

$$\begin{align}
  &\sum_{j=0}^{i} \left| x_i - x_j \right|\\
  = &\sum_{j=0}^{i} \left(x_i - x_j \right) \\
  = &i\cdot x_i - \left( \sum_{j=0}^i x_j \right)
  \end{align}$$

Now we can rewrite this to take advantage of $$ y$$:

$^$i\cdot x_i - \left( \sum_{j=0}^i x_j \right) =i \cdot x_i - y_i$^$

Cool, this has no loops in it!

Let's do the same thing for the sum of differences between $$ x_i$$ and elements larger than it:

$$\begin{align}
  &\sum_{j=i+1}^{n-1} \left| x_i - x_j \right| \\
  = &\sum_{j=i+1}^{n-1} x_j - x_i\\
  = &\left( \sum_{j=i+1}^{n-1} x_j \right) - (n - i - 2)\cdot x_i \\
  = &y_n - y_{i+1} -  (n - i - 2)\cdot x_i \end{align}$$

Let's add these together these two components to get the overall absolute difference for $$ x_i$$:

$$\begin{align}
  & i \cdot x_i - y_i + y_n - y_{i+1} - (n - i - 2)\cdot x_i \\
  = & (n - 2)\cdot x_1  - y_i + y_n - y_{i+1} \\
  = & (n - 3)\cdot x_1  - 2\cdot y_i + y_n
  \end{align}$$

