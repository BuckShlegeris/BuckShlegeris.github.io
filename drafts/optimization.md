---
layout: post
title:  "Optimization question"
date:   ""
uses_react: false
---

I have a bunch of people and their hourly wages, and I want to choose the optimal flat tax rate $l \hat r$. Each person chooses a number of hours to work $l h$, and their utility is $l \log\left(y\right) - h$, where $l y$ is their after-tax income and $l h$ is the number of hours they're working.

I have a vector $l \mathbf{w}$ of length $l l$ representing a list of wages, and I want to solve the following system of equations:

$l c$ is a universal basic income--it's just the amount raised by taxes, spread among everyone:

$$ c = \text{mean}(\mathbf{Y}) \cdot (1 - r) $$

$l \hat r$ is the optimal flat tax rate:

$$ \hat r = \text{argmax}_r
  \left( \sum_{i=0}^l
      \log\left(r \cdot \mathbf{y}_i + c \right)
   \right)$$

$l \mathbf{y}$ is the vector of incomes that individuals choose to earn:

$$ \mathbf{y}_i = \mathbf{w}_i \cdot \text{argmax}_h \left(
  \log\left(h \cdot \hat r \cdot \mathbf{w}_i + c\right) - h
\right)$$

Key characteristics:

- they refer to each other
- they have lots of argmaxes referring to each other

I want to numerically solve this kind of problem. What's the best way to do this?
