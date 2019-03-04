---
layout: post
title:  "Einsum"
date:   ""
---

I recently ran across the Numpy function `einsum`. It allows you to describe a wide variety of different operations on tensors with a wonderfully simple notation.

Transpose: `ij->ji`.
The elementwise product of two vectors: `i,i->i`.
Elementwise multiplication of 2D tensors: `ij,ij->ij`.
Matrix multiplication: `ij,jk->ik`

Multiply three matrices: `ij,jk,kl->il`

One interesting feature of this is that the order of the arguments isn't super important

--------
In his [notes on backproagation](http://cs231n.github.io/optimization-2/#mat), Andrej Karpathy gives you the tip that you can use dimensional analysis to figure out the derivatives of matrix expressions. For example, if you're backpropagating through a matrix product $$AB$$, then you find the derivative of loss $l$ with respect to $$A$$ with the expression:

$^$\frac{\partial l}{\partial A} = \frac{\partial l}{\partial AB} \cdot B^T$^$

which you could have guessed with dimensional analysis. Let's walk through that. If $$A$$ has shape $$(i, j)$$ and $$B$$ has shape $$(j, k)$$, then $$AB$$ has shape $$(i, k)$$. Derivatives of a scalar wrt a matrix have the shape of the matrix. So when we want to find $$\frac{\partial l}{\partial A}$$, we need to somehow combine the derivative of $$AB$$ with $$B$$ and end up with something shaped like $$A$$. Our inputs have shape $$(i, k)$$ and $$(j, k)$$, and the output has shape $$(i, j)$$, which we combine by transposing the first then matrix multiplying them.

When I read this


---------

So the obvious question is, how do you differentiate einsum calls?

The answer turns out to be really simple.
