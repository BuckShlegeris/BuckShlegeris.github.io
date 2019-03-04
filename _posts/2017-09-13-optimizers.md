---
layout: post
title:  "Unaligned optimization processes as a general problem for society"
date:   "2017-09-13"
tags:
  economics
---

[Epistemic status: The concrete claims might all be wrong, and the abstract ideas might not be useful. I am extremely unconfident in all this. I'm writing this down because I often have opinions that are more specific examples of the kind of reasoning I describe here, and I think it's handy to have a single place where I describe the general idea. This post is longer than it would otherwise be, because I think that giving lots of examples is handy for people who find the ideas useful and want an opportunity to practice thinking about them. Also, a lot of this is really unoriginal; I owe a lot of credit to Eliezer Yudkowsky (eg [Goodhart's Curse](https://agentfoundations.org/item?id=1621)) and Slate Star Codex (eg [Meditations on Moloch](http://slatestarcodex.com/2014/07/30/meditations-on-moloch/) and [Toxoplasma of Rage](http://slatestarcodex.com/2014/12/17/the-toxoplasma-of-rage/).)

**TL;DR: There are lots of systems in society which seem to fit the pattern of "the incentives for this system are a pretty good approximation of what we actually want, so the system produces good results until it gets powerful, at which point it gets terrible results."**

An important idea in AI safety is that if you have an optimization process optimizing for a proxy of what you care about, it’s good until the process gets too powerful, at which point you really bad things start happening. (Paul Christiano's writing about [scalability in AI control](https://ai-alignment.com/scalable-ai-control-7db2436feee7) expresses related ideas.)

This is a pretty useful idea in other contexts too. Eliezer has a few facebook posts (eg [this](https://www.facebook.com/yudkowsky/posts/10155616782514228)) that speculate about a similar kind of dynamic in other domains—he argues that the selection process for memes is getting too good at optimizing for virulence, where virulence is an imperfect proxy for how much we want an idea to be spreading.

I think that our society involves optimization processes which are getting rapidly much more powerful, and I think this might be a really big concern. They’re getting more powerful for a bunch of reasons: human population is increasing, communication technologies are getting more powerful, technology and affluence means that the space of products that can be affordably created is much wider than it used to be, and we’re getting better technology for the process of optimization.

Here are some more places where this idea could come into play:

- Marketing—humans try to buy things that will make our lives better, but our process for determining this is imperfect. A more powerful optimization process produces extremely good advertising to sell us things that aren’t actually going to make our lives better.
- Politics—we get extremely effective demagogues who pit us against our essential good values.
- Lobbying—as industries get bigger, the optimization process to choose great lobbyists for industries gets larger, but the process to make regulators robust doesn’t get correspondingly stronger. So regulatory capture gets worse and worse. Rent-seeking gets more and more significant.
- Online content—in a weaker internet, sites can’t be addictive except via being good content. In the modern internet, people can feel addicted to things that they wish they weren’t addicted to. We didn’t use to have the social expertise to make clickbait nearly as well as we do it today.
- News—Hyperpartisan news sources are much more worth it if distribution is cheaper and the market is bigger. News sources get an advantage from being truthful, but as society gets bigger, this advantage gets proportionally smaller.

Of course, as society gets more powerful, the best people also get better. I think this is a weaker force. I guess my model is something like this: Some humans are born with strong moral beliefs on random topics for random reasons. Eg they really care about government being honest or us not torturing prisoners or conservationism or something, and they’ll work on those problems as best as they can. Other humans are born with a more general altruistic instinct and will move between problems according to how important/neglected/tractable the problems are. Also humans are generally altruistic and will reward some social status to humans who do things that make the world better, as best they can tell. Of course, there’s an incentive to trick people into thinking that they can achieve their altruistic aims in a way that helps you out, so we expect these altruistic efforts to get less and less effectual.

And as society gets powerful, a lot of things also get better not out of altruism but because capitalism does *the thing it’s supposed to do*, and we figure out more efficient ways to get people the stuff that they want and are willing to pay for. I think this effect is significant. I’m not sure how it plays out at really large scales of human society.

For these reasons, I think it’s quite plausible that humans are fundamentally unable to have a “good" society with a population greater than some threshold, particularly if all these people have access to modern technology. Humans don’t have the rigidity to maintain social institutions in the face of that kind of optimization process. I think it is unlikely but possible (10%?) that this threshold population is smaller than the current population of the US, and that the US will crumble due to the decay of these institutions in the next fifty years if nothing totally crazy happens.

I don’t think there’s really anything to be done about this. I don’t think it matters enormously compared to the other problems facing humanity, because I think that over the next ~50 years, to the extent that this effect is real it will mostly play out in relatively minor ways that don’t enormously affect the long term trajectory of humanity.

---

I mention this for a few reasons. To start with, I think that defenders of capitalism often go too far--they imply that capitalism has various properties which lead to it allocating resources in something close to the optimal manner. I don’t think that this is that accurate. Capitalism only does good things to the extent that it’s too dumb to do the more profitable bad things.

Instead of us thinking of [regulatory capture](https://en.wikipedia.org/wiki/Regulatory_capture) as a specific situation which can happen sometimes, I think that regulatory capture should be our default microeconomic model. (In particular, we should consider the rent-seeking situation where the benefits of regulatory capture are concentrated in the hands of the industry and the costs are diffused over the rest of society.)

I think that this might be a useful way to think about questions about what the scope of government power should be.

One major role of a government is to set up the incentives of individuals such that society is benefited from everyone following their own incentives. This intention could lead a government to a lot of different types of policy:

- Policing. The government threatens to hurt you if you violate other people’s property rights or personal safety. This removes the incentive to rob people.
- Redistribution. The government threatens to hurt you if you don’t give some of your money to poor people.
- [Pigovian taxes](https://en.wikipedia.org/wiki/Pigovian_tax). The government forces you to pay them money when you impose externalities, which when done correctly aligns individual incentives with the public good.
- Public science and engineering research. The government forces you to give them money, which they then spend on publicly available R&D work. For example, instead of all the car companies doing the same research on more efficient engines, the government does it and distributes the information freely. It would clearly increase efficiency if all of those researchers were entirely collaborative instead of competing with each other.
- Banning zero-sum advertisements. Companies spend a lot of money on advertising whose purpose is mostly to win market share from other companies with similar products. (Eg Coke and Pepsi.) Society would plausibly be better off if we didn’t waste money on this.
- Government-owned industries. Instead of trying to get good allocation of resources via trying to set up good incentives, we could just make the government do good things itself.

(See [SSC's Red Plenty](http://slatestarcodex.com/2014/09/24/book-review-red-plenty/) for more detail on the last few of those, and first section of [the Non-Libertarian FAQ](http://slatestarcodex.com/2017/02/22/repost-the-non-libertarian-faq/) for more fleshing out of this general idea.)

So these are all different ways of trying to set up society to flourish by setting incentives well. They all have the advantage of better aligning incentives between individuals and society. But they all have the same cost: whenever the government becomes more powerful, the incentives to pervert its intentions get stronger.

For this reason, I think that some of the interventions I proposed above are terrible ideas. I think that it makes sense for the government to have police; I think it probably makes sense to have redistribution and Pigouvian taxes; I think it probably doesn’t make sense to try to nationalize R&D or to ban advertisements; and I am very doubtful that we’d be better off if the government controlled more industries.

I think this is a good general framework for describing an important disagreement between libertarians, neoliberals, and socialists. When sophisticated libertarians argue with sophisticated neoliberals about whether we should have Pigovian taxes, the libertarians are claiming that the cost of regulatory capture is greater than the cost of market misalignment.

Most of my friends are staunchly anti-socialism. I agree that historically socialism has gone really badly, and overall I think the bits of American society I interact with outside my rationalist circles are too enthusiastic about solving problems with government force. But I think it’s worth appreciating that there are big problems with capitalism which can’t even be solved in theory, and socialism has problems that are at least *different*. I think that neglecting this point leads my friends to be overconfident in their libertarianism. I wish that they were more consistent in saying "Obviously capitalism does the wrong thing (to some extent) in every market, but overall it leads to less wrongness than we'd get from the increased regulatory capture and general lack of incentives to perform well that we'd get from increasing the power of government."
