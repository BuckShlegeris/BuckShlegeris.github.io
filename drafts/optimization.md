---
layout: post
title:  "Optimization question"
date:   ""
uses_react: false
---

Here's a numerical optimization problem I have. The details aren't that important. I just want to get general advice on how I should go about solving it:

I have a bunch of people and their hourly wages, and I want to choose the optimal flat tax rate $$ \hat r$$. Each person chooses a number of hours to work $$ h$$, and their utility is $$ \log\left(y\right) - h$$, where $$ y$$ is their after-tax income and $$ h$$ is the number of hours they're working.

I have a vector $$ \mathbf{w}$$ of length $$ l$$ representing a list of wages, and I want to solve the following system of equations:

$$ c$$ is a universal basic income--it's just the amount raised by taxes, spread among everyone:

$^$ c = \text{mean}(\mathbf{Y}) \cdot (1 - r) $^$

$$ \hat r$$ is the optimal flat tax rate:

$^$ \hat r = \text{argmax}_r
  \left( \sum_{i=0}^l
      \log\left(r \cdot \mathbf{y}_i + c \right)
   \right)$^$

$$ \mathbf{y}$$ is the vector of incomes that individuals choose to earn:

$^$ \mathbf{y}_i = \mathbf{w}_i \cdot \text{argmax}_h \left(
  \log\left(h \cdot \hat r \cdot \mathbf{w}_i + c\right) - h
\right)$^$

Key characteristics:

- they refer to each other
- they have lots of argmaxes referring to each other

I want to numerically solve this kind of problem. What's the best way to do this?

I don't really know any methods for this except turning this into an optimiztion problem and using gradient descent. Is there something better I should do?

Do I need to do anything fancy because of the argmaxes referring to each other?
