---
layout: post
title:  "AI safety difficulty is affected by the structure of pivotal acts"
date:   ""
---

**TL; DR: I think one driver of disagreement about the difficulty of AI safety is disagreement about the level of general intelligence required for doing the particular tasks that would allow actors to execute pivotal acts. Previously I’ve seen this as a disagreement about AI, but I think it’s potentially productive to look at it instead as a disagreement about the structure of pivotal acts.**

Drexler among others argues that AI safety is a lot less difficult [1] than MIRI thinks, because the transformative AI (TAI) systems that will be built first probably won’t be structured as agents—that is, they won’t be doing something like searching over a large action space for actions that they predict will perform well according to some utility function. If the first TAI systems aren’t agent shaped, then many of the problems that MIRI points to don’t come up, and you become much more concerned about misuse risk and problems with value mis-specification. Drexler argues that contemporary AI systems (Google Search, Google Maps, self-driving cars, AlphaGo) aren’t at all shaped like agents, and that we shouldn’t expect this to suddenly change as time goes on.

Previously I’ve seen this disagreement presented as a disagreement about AI, but it occur to me that you could also view it as a disagreement about pivotal acts. There is disagreement about which pivotal acts are plausible—for example, the extent to which you can execute a pivotal act via nanotechnology: people disagree about what things nanotech can do and also the extent to which nanotech progress would be bottlenecked by experimentation in the physical world. And there is also disagreement about the properties of the intellectual work required to execute on pivotal acts. This leads me to think that if you want to think about questions about the agentiness of transformative AI, you need to have a particular task in mind.

—

AlphaGo provides an interesting example of uncertainty about the type of intellectual work required to do a task. AlphaGo does not learn a whole Go-playing algorithm: all it learns is a function that allows it to predict the value of various moves and the probability of each player winning from a given state, and the programmers supplied it with a fixed algorithm which uses these predictions as a subroutine.

I think that before we knew that AlphaGo worked, it would have been reasonable to be unsure whether this kind of approach works for Go. AlphaGo is fundamentally unable to learn many general intelligence skills that seem like they’d be helpful for learning to play Go. For example, it can’t learn that a particular self-play game isn’t helping it get much better at Go. It can’t realize that it should practice analyzing a particular type of board state that arises only rarely but might be a good idea. And it can’t propose new potentially more efficient architectures for various subroutines that it notices itself needing.

It is a priori unclear whether a superhuman Go player needs to be able to do any of those things. If one did need to have all those mental skills in order to be a superhuman Go player without requiring infeasible amounts of compute, then I think that Go AIs would end up being structured a lot more like agents. In a world where superhuman Go gains you a decisive strategic advantage, the first transformative AI systems wouldn’t have been agent-shaped and MIRI’s work wouldn’t have been important for them.

As an example that hasn’t been resolved yet, it is unclear to me whether you can build a theorem-proving system with superhuman mathematical ability just by training deep nets to, given a proposition to prove or disprove, choose facts that they already know that will be relevant to the problem at hand, and choose subgoals that they should try proving as an intermediate step. If this can be done, then we can build a superhuman mathematician without ever making an agent—again, we’ve decided on the shape of the computation ourselves and we’re just using machine learning for specific subroutines.

How about nanotech, or hacking, or superhuman manipulation? I don’t know what kind of tasks these are, but that seems like an important question.

—

Here’s a rough spectrum of the generality of AI that might be required to execute on a pivotal act:

- No AI required. Eg, it turns out that you can kill off most humans by doing some tricky gene editing on some bacterium, and you can also use Crispr to edit humans to be 50 IQ points smarter and much more loyal to their parents.
- Some AI required, but only in a kind of auxiliary capacity. Eg cheaply produced autonomous weapons with excellent motor control, swarm coordination, and perception. That might be powerful enough to take over the world.
- Doable with an AI, but a narrow AI system which is not structured like an agent, along the lines of AlphaGo or my theorem proving example above.
- Requires a general AI system with the ability to explicitly form hypotheses, think about its own thinking, experiment with different approaches to problems, and build models of the world. It seems that great scientists do something like this; perhaps if pivotal acts require great scientific accomplishments, your AI systems have to be able to do it too.

I think that Drexler thinks that transformation via AI will happen via problems being solved that can be solved with narrow abilities, while MIRI thinks it will happen as a result of problems that require general reasoning ability.

—

Another domain of this disagreement is whether you think that oracle AGIs are enough for a pivotal act. If you think that pivotal acts require extremely fast interaction with the world, then maybe you should think that agenty AI is more necessary.

—

Maybe another way of looking at this is that AI accident risk is probably much higher if the problems you need to solve for TAI are much harder. The optimal algorithm for solving tough problems has to be agent shaped, and the question is how qualitatively lose to optimality you have to get in order to execute a pivotal act.

[1] By difficult, I mean “time consuming” but also “requiring of a different and more careful mindset than the rest of AI”.
