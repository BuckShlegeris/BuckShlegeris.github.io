---
layout: post
title:  "A model of pain and pleasure in reinforcement learning agents"
date: "not a real date"
---



## Previous work on happiness in RL agents

- Brian Tomasik, [Do Artificial Reinforcement-Learning Agents Matter Morally?](https://arxiv.org/abs/1410.8233)
- Mayank Daswani and Jan Leike, [A Definition of Happiness for Reinforcement Learning Agents](https://arxiv.org/abs/1505.04497)
- Jarryd Martin, Tom Everitt, and Marcus Hutter, [Death and Suicide in Universal Artificial Intelligence](https://arxiv.org/pdf/1606.00652v1.pdf)

None of these really give a good answer for why pain and pleasure feel different, and what types of environments end up with happy agents.

Brian's paper has a section, "What’s the boundary between positive and negative welfare?" (pg 18-21) which discusses related issues. Brian makes a distintion between seeking behavior and avoiding behavior. I don't think this distinction is very natural, and it's not at all obvious how this distinction applies to RL problems in general.

Mayank and Jan's paper is about happiness, not pleasure and pain. It doesn't answer the question of where the scale of reward comes from. It's talking about the feeling of exceeding or failing to exceed your expectations, which isn't the same thing as pleasure and pain.

Jarryd, Tom, and Marcus's paper is about some parts of this, but it isn't in a framework where it's meaningful to ask what environments will end up with agents feeling more or less pain or pleasure in expectation.

## A mathematical statement of the problem

We can try to investigate how different properties of environments affect average wellbeings of evolved agents under many of these hypotheses.

This is kind of an optimization problem operating on an RL problem. Evolution is trying to optimize the reward function of a creature to maximize its number of offspring. So its cost function is a number of offspring that an organism ends up having (or, more abstractly, just some stochastic function of the environment and your agent's behavior), and it is trying to choose a reward function for its creature. Note that these are different reward functions.

Another assumption that might I want to make is that evolution is just choosing the reward function and hyperparameters for a given RL algorithm, rather than trying to choose the globally best algorithm. Evolution can probably eventually change to a totally different algorithm, but there are probably a lot of limitations to that process.

Here's a concrete example. You're evolution, trying to build a creature which can play a multi-armed bandit problem. Wikipedia [says](https://en.wikipedia.org/wiki/Multi-armed_bandit):

> In probability theory, the multi-armed bandit problem (sometimes called the K- or N-armed bandit problem) is a problem in which a gambler at a row of slot machines (sometimes known as "one-armed bandits") has to decide which machines to play, how many times to play each machine and in which order to play them. When played, each machine provides a random reward from a probability distribution specific to that machine. The objective of the gambler is to maximize the sum of rewards earned through a sequence of lever pulls.

In the usual RL setting, the scale and offset of these rewards doesn't matter, of course. In our case, we're going to need to have a prior about the properties of all the machine in a particular instance of this problem. (For example, maybe we know that every time you try a machine, you get a reward equal to its true mean + noise drawn from a standard normal distribution (that means a normal distribution with mean 0 and variance 1), and we know that machines have true means which are distributed according to another standard normal distribution.)

The creature itself is using an epsilon greedy strategy with its reward function. [Wikipedia again:](https://en.wikipedia.org/wiki/Multi-armed_bandit#Bandit_strategies)

> **Epsilon-greedy strategy:** The best lever is selected for a proportion $$1-\epsilon$$  of the trials, and a lever is selected at random (with uniform probability) for a proportion $$ \epsilon $$ . A typical parameter value might be $$\epsilon =0.1$$, but this can vary widely depending on circumstances and predilections.

Usually the agent has direct access to the reward that it got every time it tries a machine. In this setting, let's say that instead of directly being able to access the reward $$r$$, the agent has access to a percieved valence $$v(r)$$

$^$ v(r) = k(r) + z $^$

where $$z$$ is a noise term drawn from another standard normal distribution, and $$k : \mathbb{R} \rightarrow \mathbb{R}$$ is the function from evolution's felt reward to the reward felt by the creature.

Let's say that evolution is trying to maximize the sum of your rewards, minus the sum of squares of all valences felt, to represent the metabolic cost of stronger valence.

Now we can ask: what's the optimal shape of the valence function $$v$$, and what's its expected value for the lifetime of an agent? I conjecture with 80% confidence that the expected value is zero, and with 50% confidence that the shape is linear. But I need to actually do this math, or at least demonstrate it experimentally!

##
