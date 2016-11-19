---
layout: post
title:  "Bayesian mixtures and Kelly betting in prediction markets"
date: "not a real date"
---

Daniel Filan recently proved a really cool result about a connection between the behavior of bettors in prediction markets and the behavior of rational agents deciding between multiple hypotheses based on evidence. Here's a summary of his result. You can read the whole thing [here](http://danielfilan.com/2016/11/18/kelly.html).

Suppose we have a prediction market about some recurring event. For example, maybe we're gambling over US presidential elections. Different people start out with different beliefs about how the world works. Maybe Nate Silver thinks that polling errors are correlated, and the Princeton Election Consortium doesn't think so as much.

Let's say Nate and the PEC keep betting about this. Each time, they

One other way

Firstly, let’s talk about betting! Suppose you’re watching the 2020 presidential election, and it’s a tight race between Kanye West and Trump. Betting markets are currently giving Kanye a 20% chance. You think that he actually has a 40% chance of winning, and you want to put some money down. How much do you want to bet?

The Kelly criterion is one answer to this question. It says that if you think an event has probability $$q$$ and the market thinks it has probability $$p$$, the fraction of your wealth that you want to bet is

$^$\frac{q - p}{1 - p}$^$

Let’s say you currently have $20k in your bank account. In that case, the Kelly criterion would say you should bet $$\frac{0.4 - 0.2}{1 - 0.2} = \frac14$$ of your wealth, so you want to bet $5k on this.

Where does that formula come from? Well, you can get it a few different ways. To start with, this criterion maximizes your expected log wealth.


