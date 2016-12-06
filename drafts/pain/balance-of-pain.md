---
layout: post
title:  "A model of pain and pleasure in reinforcement learning agents"
date: "not a real date"
---

It's kind of interesting that living creatures seem feel both pain and pleasure, which seem like distinctly negative and positive experiences. When you construct a [theory of reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning), you don't see anything like this distinction between positive and negative sensations: reward is just a real-valued function, and the behavior of agents isn't affected by any transformation of their reward function which is either a shift (eg you feel +3 happy about every outcome) or a positive scaling (eg your reward function is multiplied by two). So why do humans experience reward as a function centered around zero? Why does it feel meaningful to think about what it would be like for all your sensations to be twice as powerful?

I think this question is really important and underexplored, because if we know how to answer it, we might be able to think better about how the features of an environment affect the welfare of agents acting in it. Knowing about that would help us think more effectively about the welfare of wild animals, aliens, subroutines in AIs, and ems. It might also help us think about how the strength of conscious experience varies with brain size.

In this post I'm going to describe a way of turning this into a question about reinforcement learning agents, and propose some different specific questions that we can investigate to learn more about this.

Throughout this, I'm going to be using the term "valence" to mean "the moral value of the pleasure or pain experienced by an agent". So "positive valence" means pleasurable, and "high magnitude valence" means a strong experience, positive or negative.

## Previous work on happiness in RL agents

- Brian Tomasik, [Do Artificial Reinforcement-Learning Agents Matter Morally?](https://arxiv.org/abs/1410.8233)
- Mayank Daswani and Jan Leike, [A Definition of Happiness for Reinforcement Learning Agents](https://arxiv.org/abs/1505.04497)
- Jarryd Martin, Tom Everitt, and Marcus Hutter, [Death and Suicide in Universal Artificial Intelligence](https://arxiv.org/pdf/1606.00652v1.pdf)

None of these really give a good answer for why pain and pleasure feel different, and what types of environments end up with happy agents.

Brian's paper has a section, "What’s the boundary between positive and negative welfare?" (pg 18-21) which discusses related issues. Brian makes a distintion between seeking behavior and avoiding behavior. I don't think this distinction is very natural, and it's not at all obvious how this distinction applies to RL problems in general.

Mayank and Jan's paper is about happiness, not pleasure and pain. It doesn't answer the question of where the scale of reward comes from. It's talking about the feeling of exceeding or failing to exceed your expectations, which isn't the same thing as pleasure and pain.

Jarryd, Tom, and Marcus's paper is about some parts of this, but it isn't in a framework where it's meaningful to ask what environments will end up with agents feeling more or less pain or pleasure in expectation.

## Why do we experience both suffering and happiness?

One of the few discussions of this question I'm aware of is by Yew-Kwang Ng, in his paper ["Towards Welfare Biology: Evolutionary Economics of Animal Consciousness and Suffering"](http://www.stafforini.com/library/ng-1995.pdf), which has some useful points about how we might expect happiness and suffering to be distributed:

> First, both enjoyment and suffering are costly in terms of energy requirement, tissue maintenance, etc. This is why we feel neutral most of the time when we are not starving, eating, having sex, etc. (It would be nice if we could be programmed to feel ecstatic most of the time.) Secondly, it is likely that the extra (or marginal) costs involved in having an extra unit of enjoyment (or suffering) increases with the amount of enjoyment (suffering). Viewed differently, we have diminishing marginal returns in both enjoyment and suffering per unit of cost. Thirdly, it is likely that the costs (generalized resource costs, not subjective welfare costs) of suffering are unlikely to be significantly less, and maybe actually more, than those of enjoyment.

I think that the key idea here -- that the metabolic cost of a reward signal increases faster than linearly with its absolute value -- is a really useful insight. This gives an explanation for why reward signals would be clustered around zero.

But it doesn't explain how the scaling factor for the reward function is chosen. If the cost of a signal grows faster than linearly, this is always going to be pushing for a smaller scale of the reward function--if -5 to 5 is a better range of experience than -10 to 10, then -1 to 1 is an even better range, and -0.1 to 0.1 is a better range still.

So Ng has provided a force that pushes for the reward function to be weaker, but not a force pushing for it to be stronger. If we can think of plausible such forces, then we have a way of investigating what features of environments cause agents in those environments to have overall better or worse lives in expectation.

A useful background for this discussion is thinking more generally about different purposes that pain and pleasure can serve in living beings. I've written more about that [here](different-types-of-rewards).

## Forces pushing for sensations to be stronger

Here are some candidates for the force pushing the reward function to be stronger. (Even if most of these end up to not be relevant to how humans and other animals work, they might turn out to be relevant to how other creatures work.)

### Noise in the reward function

One reason that your reward signals might need to be strong is to be clearly heard over noise. There's noise in all neural systems, so this is definitely there to some extent.

### Learning which can't be scaled to work with arbitrarily weak signals

In RL settings, we normally assume that the learning algorithm gets to choose how it modifies its estimates of the value of various things. But maybe our brains can't just scale up small signals to modify the estimates of various values. Like, instead of the reward-generating part of the brain saying "This experience was worth 5 points" and the learning part of the brain deciding "ah, I guess I need to increase my estimate of this state by +2", maybe the reward generating part of the brain directly says "This experience should increase your estimate by 2!". If that's how it works, then the strength of reward signals is going to be determined by facts about how much updating is required.

If this is true, then it's a reason to think that creatures with bigger learning systems feel things more strongly.

### Connection between valence strength and motivation

Maybe the magnitude of the reward signal is associated with putting in effort or attention (eg you run faster/"perk up" when in pain, or when you get aroused and exited by the prospect of some particular good thing, you are more motivated to try hard to get it). This seems to match some of the purposes of pain. (On the other hand, there are types of suffering (eg 'chronic pain' as defined below) which cause you to become less inclined to put in effort or attention.)

Under this model, then pain/pleasure could be highly unbalanced, because if you need to perk up more in response to negative events than positive ones, then you'll end up with much stronger pain than pleasure. The happiest creatures will be those who spend a lot of time needing to be interested and alert because of some really good opportunity which arises quickly and requires immediate action. Maybe predatory species who need to be able to quickly spot prey animals and attack them feel extreme pleasure as they do so.

### Competition between control systems

A competition between multiple different sources of behavior (system 1 and system 2?) where at least one source cannot control its strength. Eg you need pain to be strong so that it can compete for your attention effectively.

This is a reason to think that more complicated creatures might experience pain much more strongly: perhaps System 2 can't control its output strength, and its output strength increases as some function of how many neurons it has.

## What assumptions are required for this to make sense?

We have to think that the RL agents we're talking about have the metabolic cost of valence that I claim animals have. This might be false; perhaps they won't be conscious at all; I think most RL agents aren't. But there are some cases where this comes in handy--I think that we can use it to think about ems which are just human brains with crude modifications.

Also, the metabolic cost of valence thing kind of feels intuitively plausible to me--I kind of feel like if there's an agent whose happiness is just stored in a float somewhere, it's probably not an agent I care about. I reckon it's at least plausible that this kind of superlinear cost is a necessary if not sufficient condition for me to care about a mind.

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

## An environment with nonzero expected valence

i can construct an environment with nonzero expected valence, I claim!
