---
layout: post
title:  "Multidimensional Elo"
date:   2016-06-25
---

Suppose I want to rank players by their skill at a particular game by looking at results of their games against each other.

The [Bradley-Terry model](http://sites.stat.psu.edu/~dhunter/papers/bt.pdf) attempts to solve this by modeling each player as having a skill level, represented by a real number. The probability of someone with skill level $$ a$$ beating someone with skill level $$ b$$ is $$ \frac{a}{a + b}$$.

I want to talk about a generalization of this.

Firstly, I'm not interested in PvP games, I'm interested in one player games where there are lots of different levels you can play, of different difficulty levels. So we might want to represent this by giving every player a score $$ p$$ and each level a score $$ l$$, and saying the probability of passing is $$ \frac{p}{p + l}$$. This now lets us get skill scores for players and difficulty scores for levels, using the same training method as last time.

Secondly, my computer game has many different subskills, and different levels test different subskills different amounts. So instead of giving every player and level a single real number, I'll now model each as a vector of $$ k$$ different numbers, and say that the probability of winning is

$^$P(c \text{ beats } l) = \Pi_{i=0}^k \frac{c_i}{c_i + l_i} $^$.

(Let's say that player skills are real numbers > 0, and level difficulty components are real numbers $$ \geq 0$$, to make sure that probabilities are defined and between 0 and 1.)

Questions:

- Is this
