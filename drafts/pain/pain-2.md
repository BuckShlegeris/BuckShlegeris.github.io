---
layout: post
title:  "pleasure and pain"
date: ""
---

**Epistemic status: mad speculation, mixed with math that's so much fun that I find it hard to believe it's useful. I'm serious about thinking these questions are important, I'm much less confident in any of my answers.**

It's kind of interesting that living creatures seem feel both pain and pleasure, which seem like distinctly negative and positive experiences. When you construct a [theory of reinforcement learning](https://en.wikipedia.org/wiki/Reinforcement_learning), you don't see anything like this distinction between positive and negative sensations: reward is just a real-valued function, and the behavior of agents isn't affected by any transformation of their reward function which is either a shift (eg you feel +3 happy about every outcome) or a positive scaling (eg your reward function is multiplied by two).

So why do humans experience reward as a function centered around zero? Why does it feel meaningful to think about what it would be like for all your sensations to be twice as powerful? And given that we seem to have experiences that work this way, what factors determine where the zero point for an organism is, and how powerful its sensations are?

(Throughout this, I'm going to be using the term "valence" to mean "the moral value of the pleasure or pain experienced by an agent". So "positive valence" means pleasurable, and "high magnitude valence" means a strong experience, positive or negative.)

I think this is a really interesting and important question. Utilitarians have spent a lot of time talking about what kinds of different minds experience consciousness, but I think they've relatively neglected the question of what affects the valence experienced by different organisms. These questions seem relevant to a wide variety of questions that futurist utilitarians speculate about. For example:

- Under what circumstances will evolution cause a species of wild animal to have lives worth living on average?
- If you take a creature whose conscious experience has been optimized by evolution for life in the wild, and then you decide to farm them for meat without caring about their welfare except inasmuch as it affects their meat production, under what conditions will they have lives worth living?
- What aspects of an environment affect whether species have experiences that are more or less strong?
- Suppose Robin Hanson is right, and we end up with an [em world](http://ageofem.com/). These em agents will compete bitterly and only the fittest will survive. What will be the effect of this selection pressure on the valence of their experience?
- How likely is humanity to create vast suffering by running [suffering subroutines](https://foundational-research.org/a-dialogue-on-suffering-subroutines/)? If we don't care about the welfare of our programs, are they more likely to be overall experience pleasure or pain?

In this post, I'm just going to present a few basic questions around this topic, and then show some technical questions which I think relate to the answers.

My approach here is an extremely theoretical and philosophical one; in this post I will make almost no reference to cognitive science or the study of animal psychology. To some extent this is because I don't know those subjects very well. But I think this theoretical approach has some nice properties. For example, it allows us to answer questions about minds very different from our own.

## Evolution as a optimization function over the reward functions of individuals

One key distinction I want to make is between the optimization process which evolution engages in, and the optimization process which individual members of a species engage in. Evolution is an optimization process which optimizes fitness of individuals in a species to have the maximum possible number of offspring. In the case of species which can learn or respond to stimuli, one of the things that evolution is choosing is the reward function experienced by the individuals, which they can then optimize with their own learning and planning. I'm going to use the term **fitness function** for what evolution is optimizing, and **reward function** for the rewards experienced by the individuals.

Evolution is going to end up giving you a reward function which is correlated with the fitness function. But the reward function has a variety of other constraints, such as simplicity--it can't be too complicated or else evolution won't be able to learn it. This is why candy tastes good: our taste evolved in a situation where sugar was scarce, which means that we end up consuming an unhealthy amount of sugar now.

## Yew-Kwang Ng's metabolic cost hypothesis

One of the few discussions of how evolution chooses a zero point for the reward function is by Yew-Kwang Ng, in his 1995 paper ["Towards Welfare Biology: Evolutionary Economics of Animal Consciousness and Suffering"](http://www.stafforini.com/library/ng-1995.pdf), which has some useful points about how we might expect happiness and suffering to be distributed:

> First, both enjoyment and suffering are costly in terms of energy requirement, tissue maintenance, etc. This is why we feel neutral most of the time when we are not starving, eating, having sex, etc. (It would be nice if we could be programmed to feel ecstatic most of the time.) Secondly, it is likely that the extra (or marginal) costs involved in having an extra unit of enjoyment (or suffering) increases with the amount of enjoyment (suffering). Viewed differently, we have diminishing marginal returns in both enjoyment and suffering per unit of cost. Thirdly, it is likely that the costs (generalized resource costs, not subjective welfare costs) of suffering are unlikely to be significantly less, and maybe actually more, than those of enjoyment.

I think these hypotheses are super useful, and that we can use them to make really interesting speculations about the balance of pain and pleasure in living creatures.

## What determines the zero point?

Here's one speculation about how our zero point gets set. As Ng says, let's assume that there's some metabolic cost to giving a creature a particular reward. It intuitively seems like

Suppose we're trying to train a small robot to do a task for us.

## Choosing the scale
