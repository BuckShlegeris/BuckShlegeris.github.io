---
layout: post
title:  "EA things I changed my mind about over the last two years or so"
date:   ""
---

Here are the three main ways that I changed my mind about effective-altruism-related topics over the last two or so years. I now think animal activism is less important, and I am more concerned about the damaging effects of some animal rights activism. I am much less concerned about reducing far future suffering, because I’ve become less convinced that it is very likely. And I’ve clarified my views on consciousness, which didn't change my views on animals much but led to me being much less concerned about suffering subroutines and unhappy reinforcement learning agents.

These changes are somewhat interrelated. The consciousness stuff affected the far future suffering stuff, and other bits of the far future suffering stuff affected the animal rights stuff, and some of the far future suffering stuff affected the consciousness stuff.

I say a lot of times in this piece that I changed my mind because I thought more about a particular argument or topic. This is often shorthand for “Some of my wiser friends said that my beliefs were wrong, and after they explained their argument, I realized that they were right”. I certainly would have updated far less if I didn’t have such a great community of clever people who were patient enough to explain my mistakes to me. In particular, I owe a lot to Claire Zabel, Carl Shulman, and Luke Muehlhauser.

## Consciousness

This section is kind of half baked. The TL;DR is that I am less panpsychist and so I'm less concerned about accidentally creating suffering digital agents, but I haven’t updated my animal consciousness probabilities.

I’ve thought and read a lot about consciousness over the last six months. I’m still quite confused by it, but I’m much more inclined towards the following illusionist-ish ideas, which I will describe but not really argue for:

Our intuitions about consciousness are a result of hacky ways that out brain implements features like knowledge of self and theory of mind. Consciousness is nothing except these intuitions.

When you try to talk to humans about consciousness, they generally agree that they have a conscious experience. I now think that if you asked most smart AIs whether they’re conscious, they’d say “I understand what kind of experience you’re describing, and I can model this ‘consciousness’ thing enough that I can predict your answers to various questions about it, but I don’t think I have the kinds of properties you’re talking about.” And I’m inclined to believe this AI.

Similarly, suppose that I took a chicken and gave them human-level verbal ability and asked them about their own qualia; I think they’d probably say that they had qualia, but I think there’s a good chance that they’d say that they didn’t. The enhanced chicken’s answer isn’t a full answer to the question of whether chicken pain is morally relevant, but I think it’s probably pretty correlated.

I think that this line of thinking has given me a clearer idea of what it would mean for a chicken to be conscious or not conscious. My subjective probability of chicken consciousness remains at around the same probability (60%?), but now I can picture what the world would be like either way.

Another result of this is that I now think that it’s extremely unlikely for agents to have conscious experiences if they’re optimized for a simple task and designed by an intelligent agent or a significantly smarter optimization process than evolution. So I now think that RL agents trained with anything like modern techniques are extremely unlikely to be conscious. (Time to cancel my subscription to the PETRL mailing list, I guess.) This also means that I think ancestor simulations are likely to be mostly non-conscious, for efficiency reasons.

For similar reasons, I don’t think that most superintelligences would be obviously conscious. I think consciousness is a weird local optimum that better algorithms probably wouldn’t have.

I got these new intuitions mostly from talking to Luke Muehlhauser, reading his soon-to-be-released report on consciousness, and reading a bunch of papers and books about consciousness. (Note that I described my intuitions here, not his, but his are roughly similar.) Luke’s report contains explanations of a bunch of things that are relevant to what I wrote here. After I spend more time thinking about consciousness, I might try to write up a fuller explanation of my views.

I think that to some extent, various EAs have been trying to describe these ideas to me for years, and I just didn’t understand them. It’s pretty close to the view [Eliezer described in his 2014 consciousness thread](https://rationalconspiracy.com/2015/12/16/a-debate-on-animal-consciousness/), but with Rob Wiblin and Carl Shulman’s opinion that Eliezer was being hasty to believe that most animals aren’t conscious.

I think it was really dumb of me to not think more about consciousness earlier. Reading Eliezer's consciousness thread much more carefully and trying to really understand all the arguments would have helped a whole lot. It seems obvious in hindsight that this is a high value thing to do.

(I still have a lot of probability mass on “I am totally wrong about consciousness”.)

## Far future suffering

I’m much less concerned about suffering in the far future than I used to be.

Last year, Michael Dickens [made a cause prioritization model](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/) where he initially estimated the probability of a hedonium future at 5% and [dolorium](http://reflectivedisequilibrium.blogspot.com/2012/03/are-pain-and-pleasure-equally-energy.html) future at 1%. Carl Shulman [responded pithily](http://effective-altruism.com/ea/xr/a_complete_quantitative_model_for_cause_selection/7i6):

> Really, people would be 1/5th as likely to try and make the lowest possible total welfare as the highest possibe welfare? People have rather different attitudes about those two states. What kind of poll results do you think you would get if you asked people "should we create as much suffering as possible, in inhuman beings optimized to maximize ethical badness according to some brand of utilitarianism, or should we instead try to maximize happiness?"

I think Carl’s point here is a good one. I think humans don’t generally want to have a universe full of suffering, and so without strong arguments suggesting that we’ll make such a universe unintentionally, we should suspect that the future will be good. Over the last year, I stopped believing some of the arguments for specific possibilities of how we might accidentally make a terrible universe, and became more skeptical of the general possibility, and became more confident in x-risk interventions.

I think it makes sense to explain the historical context of my perspective on this. When I first started thinking about the far future, the two main schools of thought I saw were the Eliezer-style LessWrong school and the Brian Tomasik school. I was very suspicious of Eliezer’s ideas. I thought LessWrongers were irrationally biased against the possibility that human extinction could be a good thing. I thought they were insufficiently concerned about the welfare of nonhuman animals, unreasonably anti-death, and I also thought they had this really deep-seated emotional belief that it would necessarily be awesome when humans got to the stars and colonized the galaxy, and that we should sacrifice anything to secure a future for humanity.

Brian seemed much more humble and careful than the LessWrong crowd. He seemed to be less blindly optimistic about the future, and more willing to seriously consider the possibility that human extinction would be a good thing. I ended up quite convinced of the general cluster of ideas which are summarized well in ["Reducing Risks of Astronomical Suffering: A Neglected Priority”](https://foundational-research.org/reducing-risks-of-astronomical-suffering-a-neglected-priority), or in ["Some considerations for different ways to reduce x-risk"](http://effective-altruism.com/ea/t3/some_considerations_for_different_ways_to_reduce/).

What changed? To start with, a lot of the arguments for being suffering-focused that I believed rely on negative utilitarian beliefs which I don’t hold. I never really believed in negative utilitarianism, but I was insufficiently careful to note when arguments for focusing on suffering relied on it. To some extent, I think that negative utilitarians sometimes mislead their readers by being insufficiently transparent about the moral assumptions in arguments they make. But mostly I blame myself for not trying hard enough to think through these arguments on my own.

Also, a lot of my sympathy for focus on suffering came from outside view arguments about the types of people in each camp. A lot of my update just came from considering all the arguments on their own merits more carefully than I had done previously.

I am now much less concerned about three of the different scenarios for astronomical future suffering which people discuss, and which previously concerned me to different extents:

1. Wild animal suffering. I’m now more agnostic on the question of whether wild animals have net negative lives, so this is less immediately concerning. Also, futures where everything is biology rather than computers are much smaller and less important.
2. Animal farming. I think that it’s vastly unlikely that we’ll have factory farming in the far future, for basically the same reason that I’m not concerned about the possibility that we use chattel slavery of humans for manual labor in the far future--it just seems bizarrely inefficient and anachronistic.
3. Suffering subroutines/suffering ancestor simulations. I now think that it is quite unlikely that programmed agents would end up conscious accidentally, mostly as a result of thinking more about consciousness (especially from reading Luke Muehlhauser's [consciousness report](openphilanthropy.org/2017-report-consciousness-and-moral-patienthood) and a variety of papers and books on consciousness).

I still believe that most far-future-focused EAs mildly underrate the importance of averting far-future suffering compared to me. This suggests that I should be mildly more enthusiastic about suffering-focused projects than I’d otherwise be. But overall I think that even given this effect, reducing x-risk is so much more valuable than reducing risk of future suffering that I probably want to focus entirely on x-risk. (And we already have a big contingent of negative utilitarians who I think are way too focused on suffering, and I think they’re likely to pick up all the low hanging fruit in this area.)

Relevant links:

- Michael Dickens, [“Is Preventing Human Exctinction Good?”](http://mdickens.me/2015/08/15/is_preventing_human_extinction_good/). This essay is a good example of the kind of concerns I now take less seriously.
- Nick Beckstead, [“A Proposed Adjustment to the Astronomical Waste Argument”](http://lesswrong.com/lw/hjb/a_proposed_adjustment_to_the_astronomical_waste/). I also like the discussion in the comments.
- Paul Christiano, [“Against moral advocacy”](https://rationalaltruist.com/2013/06/13/against-moral-advocacy/).
- The comment thread [here](http://effective-altruism.com/ea/t3/some_considerations_for_different_ways_to_reduce/) has lots of good links, including the above.

I am disappointed that I didn’t read all these links and think more about all of this earlier. All of the arguments that convinced me have been around for several years; I was just slow on the uptake on them.

**more to come**
