---
layout: post
title:  "Optimal tax"
date:   ""
---

Note that I am kind of bad at doing math carefully, so I spell out a lot of steps very explicitly.

Let's define a shit ton of variables:

- $$ w $$ is the wage of an individual
- $$r$$ is 1 minus the tax rate
- $$h$$ is the number of hours that a person works
- $$c$$ is the UBI
- $$u$$ is utility
- $$y$$ is the pre-tax, pre-transfers income of an individual, $$Y$$ is the income of all of society
- there are $$n$$ people. The set of people is $$P$$.

So individuals have utility $$ u = \log(w \cdot h \cdot r + c)$$.

## How much do people work?

First we find the optimal hours worked for an individual by differentiating utility with respect to hours worked and solving for 0:

$$\begin{align}
  u &= \log(w \cdot h \cdot r + c) \\
  \frac{du}{dh}  &= \frac{w \cdot r}{w \cdot h \cdot r + c} - 1 \\
               0 &=  \frac{w \cdot r}{w \cdot h \cdot r + c} - 1 \\
               1 &= \frac{w \cdot r}{w \cdot h \cdot r + c} \\
   w \cdot h \cdot r + c &= w \cdot r\\
                     h &= 1 - \frac{c}{r \cdot w}
\end{align}$$

So the optimal amount of time for a worker to work is $$1 - \frac{c}{r \cdot w}$$.

Let's check functional form--we expect workers to work more if they have lower UBI, lower taxes, or higher wages. This function has all those behaviors (remember that $$r$$ is the proportion of your income you get to keep, not the tax rate).

The optimal income is that time multiplied by $$w$$, so:

$^$y = w - \frac{c}{r}$^$

Note that this means that everyone forgoes the same amount of income due to the distortionary effects of the UBI and taxes.

## What is total societal income, given a tax rate and UBI?

At rate $$r$$:

$$\begin{align}
  Y &= \sum_{p \in P} y_p \\
   &=  \sum_{p \in P} \left(w_p - \frac{c}{r}\right)
\end{align}$$

Conveniently, the $$\frac{c}{r}$$ term is constant in the sum, so we can take it out:

$$\begin{align}
 Y  &=  - \frac{n \cdot c}{r} + \sum_{p \in P} w_p \\
    &=  -\frac{n \cdot c}{r} + W
\end{align}$$

where the total wage of the whole population is $$W = \sum_{p \in P} w_p$$.

## What is the UBI, given a tax rate?

At a given tax rate $$r$$, the UBI is:

$^$c = \frac{1-r}{n} \cdot Y $^$

Let's substitute in the other expression for $$Y$$ we have, and try to solve for $$c$$.

So

```python
import sympy
r, n, c, W = symbols("r n c W")
print sympy.solve(((1 - r)/n) * (W - (n * c)/r) - c, c)
```

yields $$\frac{W \cdot r}{n} \left(1 - r\right)$$.

### What is the utility?

TODO: calculate utility for an individual given this tax rate, calculate utility for society given this tax rate

## Optimal tax rate

TODO: differentiate the previous expression for utility given tax rate with respect to the tax rate. Solve.

