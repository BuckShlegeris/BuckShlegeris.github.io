---
layout: post
title:  "The balance of pain and pleasure"
date: "not a real date"
---

It's kind of interesting that living creatures feel both pain and pleasure, which seem like distinctly negative and positive experiences. When you construct a theory of reinforcement learning, you don't see anything like this distinction: reward is just a real-valued function, and the behavior of agents isn't affected by any transformation of their reward function which is either a shift (eg you feel +3 happy about every outcome) or a positive scaling (eg your reward function is multiplied by two). So why do humans experience reward as a function centered around zero? Why does it feel meaningful to think about what it would be like for all your sensations to be twice as powerful?

The only discussion of this question I'm aware of (please send me others if you know them!) is by Yew-Kwang Ng, in his paper ["Towards Welfare Biology: Evolutionary Economics of
Animal Consciousness and Suffering"](http://www.stafforini.com/library/ng-1995.pdf), which has some useful points about how we might expect happiness and suffering to be distributed:

> First, both enjoyment and suffering are costly in terms of energy requirement, tissue maintenance, etc. This is why we feel neutral most of the time when we are not starving, eating, having sex, etc. (It would be nice if we could be programmed to feel ecstatic most of the time.) Secondly, it is likely that the extra (or marginal) costs involved in having an extra unit of enjoyment (or suffering) increases with the amount of enjoyment (suffering). Viewed differently, we have diminishing marginal returns in both enjoyment and suffering per unit of cost. Thirdly, it is likely that the costs (generalized resource costs, not subjective welfare costs) of suffering are unlikely to be significantly less, and maybe actually more, than those of enjoyment.

I think that the key idea here -- that the metabolic cost of a reward signal increases faster than linearly with its absolute value -- is a really useful insight. This gives an explanation for why reward signals would be clustered around zero.

But it doesn't explain how the scaling factor for the reward function is chosen. If the cost of a signal grows faster than linearly, this is always going to be pushing for a smaller scale of the reward function--if -5 to 5 is a better range of experience than -10 to 10, then -1 to 1 is an even better range, and -0.1 to 0.1 is a better range still.

So Ng has provided a force that pushes for the reward function to be weaker, but not a force pushing for it to be stronger. What might that force be? Here are some possibilities:

- Noise in the reward function
- Learning which is non-linear in its signal
  - this seems kind of physically plausible
- Reward signal as pushing you to put in effort
- A competition between multiple different sources of behavior (system 1 and system 2?) where at least one source cannot control its strength

---

todo:

- discuss those options in more detail.
- discuss conditions under which lives are net positive and net negative.
- discuss what causes total happiness or suffering to increase.
- implications for welfare of real species (eg social animals vs non-social animals, maybe the social animals fear death less).
- Simulations for RL agents.
- investigation of how this ties in with properties of different Markov decision processes.

comments so far:

Carl:

> "Why does it feel meaningful to think about what it would be like for all your sensations to be twice as powerful?"
> Linkups to memory and attention, speed of conditioning, connection to discounting
> "A competition between multiple different sources of behavior (system 1 and system 2?) where at least one source cannot control its strength"
> There's noise in all neural systems
