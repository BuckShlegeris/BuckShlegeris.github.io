---
layout: post
title:  "Optimal pay structures for managers"
date:   2016-08-30
---

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

**Epistemic status: algebraic masturbation**

What's the optimal pay structure for the CEO of a company? Let's do lots of math and find out the answer, given various silly assumptions!

To start with, let's assume everyone has utility logarithmic in their income. But shareholders have utility which is linear in the value of the company, because they are well diversified.

Throughout this whole essay I'm going to assume that we're trying to figure out an optimal pay structure given that the CEO has other options or something. ?????

## CEO effort has no effect on performance

Let's say the CEO just has to show up to work for 40 hours a week and basically just not fuck anything up. As a board member, you can observe to make sure they're not doing anything absolutely insane.

Every year, your company grows by an amount determined by a [lognormal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution). (I'm choosing lognormal because company value seems like the product of a bunch of things, and the product of lots of things is lognormally distributed.)

Should you pay the CEO just with a salary, or should you also pay them in stock?

...

You should pay them entirely in salary. Suppose you wanted to pay them $180k salary and $20k stock. They would prefer $20k extra cash and no stock, and you're indifferent between these too options. So paying them more cash and less stock is a Pareto improvement.

This follows no matter what their utility function is, as long as it's slower growing than linear.

## CEO effort affects performance, but is measurable

How about if the CEO gets to choose how many hours of work to put in? The returns of the company are determined by some stochastic function of CEO effort. But let's say that in this situation, we can measure how many hours the CEO works. In this case how should you pay them?

...

Still entirely in salary. You should come up with a salary package such that they work the optimum amount of time, but it should still not involve paying them any stock.

### CEO effort is unmeasurable and determines performance deterministically (to them)

Okay, now let's say that it's impossible to know how hard the CEO worked. You can't watch them as they work, and for all you know they're just browsing Reddit.

Let's start out by talking about the simpler case, where the performance of the company is a deterministic function of the CEO's effort. If it's totally deterministic, then this is still trivial, because you know how hard they're working from the performance.

A slightly less trivial case is where company performance is a deterministic function of both CEO effort and a hidden variable which the CEO can see.

WHAT DO?

### Reasonable assumptions

CEO has log utility in income, and also has other money.

Company performance is:

$^$\text{share price} = \text{luck} + \log(\text{effort})$^$


