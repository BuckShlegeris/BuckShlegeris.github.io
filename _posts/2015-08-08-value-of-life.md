---
layout: post
title:  "Saving lives vs improving them"
date:   2015-08-08
---

**Throughout this essay I ignore flow through effects, non human animals, and effects on the distant future, even though I don’t discount those in my personal altruistic decisions. Feel free to expand this analysis if you want to include those factors.**

**Obvious disclaimers: I think it’s a dumb idea to kill poor people. Also, well being varies for reasons other than poverty.**

<div class="panel panel-default"><div class="panel-body">TL; DR: If we're choosing between spending money on saving lives and reducing poverty, we need to consider how to compare the happiness created by saving a life to the happiness created by increasing the consumption in a society. Differentiating an estimate of happiness as a function of income lets you estimate the happiness created by increasing marginal consumption. If you assume happiness is logarithmic in income, then the dollar amount at which you're indifferent between saving a life and increasing total consumption that much increases as income * log(income). My extremely tentative numbers suggest that AMF is a much better charity for hedonic utilitarians than GiveDirectly.</div></div>

**Thanks to Claire Zabel, Marie La, Daniel Filan, and others who helped me with this.**

Sometimes it’s useful to be able to put a value on a human life. To use a crass metaphor, these days human lives go for [about $3400](http://www.givewell.org/international/top-charities/amf#Costperlifesaved) if you want to buy them from AMF. That’s the seller’s price. I’m interested in calculating the maximum price at which we should be interested in _buying_ human lives.

One way of defining this “buyer’s price” of a human life is the maximum price at which we as a society would rather save someone’s life than just keep the money. People are happier when they have higher consumption. If I could save the life of one American, but reduce American GDP by 10%, I’m pretty sure that would overall not be a good trade.

So we need to have a way of comparing the damage done by reducing the consumption of an economy by some amount of money to the damage done by someone in the economy dying.

## Logarithmic happiness

It’s pretty common to approximate happiness as linear in the logarithm of income, which I’m going to equivocate with consumption for the rest of this post. Consumption just means “the total value of all the things you consume in a given year”. Average happiness in a population where everyone has consumption $latex c$ can be written as:

average happiness = $latex \log c + k$

where $latex c$ is consumption and $latex k$ is a constant that tells us about the consumption level at which a life is so meagre and deprived that it isn’t worth living, and also tells us how rapidly happiness increases relative to wealth. If people have a life expectancy of $latex t$ years, then we have the total happiness-years of a person as $latex t \log c + t k$.

Anyway, back to the math. The derivative of this function with respect to consumption is $latex \frac{1}{y}$. So if we reduce the size of an entire economy by some small amount $latex \Delta c$ evenly spread across the whole population of n people, then the reduction in happiness per person is:

$latex \Delta \text{happiness per person} = \frac{\Delta c}{c n}$

but there are $latex n$ people, so the total reduction in happiness is:

$latex \Delta \text{total happiness} = \frac{n \Delta c}{n c} = \frac{\Delta c}c$.

So if we have the option to spend $latex \Delta c$ to save a life, we should be indifferent to doing so if the total reduction of happiness caused by reducing the total consumption by $latex \Delta c$ would be the same as the happiness of a given person:

$latex t (\log c + k) = \frac{\Delta c}{c}$

We can solve this for $latex \Delta c$:

$latex \Delta c = c t (\log c + k)$

Now we can substitute the value that we end up choosing for $latex k$ below to figure out that America should be willing to spend up to about $10 million to save an American baby. You can see the calculation [here](https://docs.google.com/spreadsheets/d/1ofwjlxGFlgG7cVnuySiga8yApl6AWLDlyZPa-c5ZHRc/edit#gid=0).

That’s all the math. Now, let’s spend two thousand words trying to figure out precisely how much fun it is to be extremely poor!

## Thinking theoretically about $latex k$

The biggest judgement call in this essay is that $latex k$ constant. The consumption at which a life has 0 value according to the above formula is $latex 10^{-k}$. So if you think that life isn’t worth living if you’re consuming less than $1000 a year, then you think $latex k$ is -3.

That’s the literal meaning of $latex k$. However, it seems plausible to me that our log model breaks down when people are incredibly poor. So I think we should use two different strategies to think about $latex k$. **Firstly**, we should think about it assuming the model is correct, looking for the level of consumption at which life seems to not be worth living. **Secondly**, we should try ignoring its literal meaning and just trying to directly estimate it by looking at happiness variation across relatively small consumption variations. This should hopefully provide a good estimate over the kind of range we’re interested in.

Imagine we decided that living on $100,000 a year is twice as much fun as living on $10,000 a year. This would mean that $latex log 100000 + k$ is twice as much as $latex log 10000 + k$. So $latex k$ would be -3\. If we thought poverty was not as bad as that, then maybe we’d be saying that living on $1,000 a year is half as good as $10,000\. In that case, $latex k$ would be -2\. I think that the first of those is probably truer, so this is another argument for estimating $latex k$ as about -3.

Maybe we should be concerned by this, because more than a billion humans have less than $1000 annual consumption. I have a few thoughts on this. To start with, it seems plausible that the purchasing power parity adjustment I’m using isn’t powerful enough. It’s cheap to have a place to sleep in rural Malawi, much more than it is in America. If there were a Malawian rural town within commuting distance of my office in SoMa, I’d be ecstatic to pay $200 a month to live in a thatch-roofed hut there. (I’m not kidding: I lived on an air mattress on the floor of my office for six months last year.) There are lots of really cheap goods available to Malawians, like thatched roof huts and really cheap shitty rice, which are unavailable to me but make it much more easy to live cheaply.

To some extent, I’m willing to buy that living in SF counts as bonus consumption, because I’m closer to fun things, but mostly I just live here so that I can work here, which feels more like an employment-related expenditure than consumption to me. So maybe I don’t buy that as someone with an annual consumption of $30k, I’m really getting 40 times the consumption in my life as the average resident of Malawi.

The book [Poor Economics](https://www.dropbox.com/s/vwtxhtjokdokvcx/Poor-Economics.pdf?dl=0) tells the story (starting on page 20) of this extremely poor Indonesian guy called Pak Solhin. He used to live on $2 USD PPP a day, until he lost his job, after which he lived like this:

> Pak Solhin himself survived on about 9 pounds of subsidized rice he got every week from the government and on fish that he caught from the edge of a lake (he could not swim). His brother fed him once in a while. In the week before we last spoke with him, he had had two meals a day for four days, and just one for the other three.

That life is being classified as significantly less than $2 PPP a day, which I don’t think includes the benefits of free rice, his brother’s food, or fishing in the river.

I’m not trying to trivialize extreme poverty here: that life sounds pretty shit, and I’m incredibly glad I don’t have it. But I don’t think it’s entirely sensible to call that "living on $1 a day”.

On the other hand, I get the benefits of a lot of government spending which Malawians don’t: I have subsidized public transport, and reasonably good police, and good roads, and so on.

Here’s another fact about consumption levels and happiness. Under most natural circumstances, if you consume extremely small amounts (like $1 a year), then you aren’t extremely sad, you just die from hunger or exposure. In fact, the consumption levels at which my happiness function predicts your life isn’t worth living is actually pretty close to where I’d imagine that you’d die from hunger if we were really adjusting for PPP correctly. This is either incredibly interesting or a surprising coincidence. I am interested in hearing speculation about this.

The variability of consumption also plays into this. If it costs you a dollar a day to not die of hunger, then if your monthly consumption has a standard deviation of 50c per day, I suspect you’d die in a few months. So even if the lowest survivable level of poverty is bad enough that your life is barely worth living, perhaps not many people will live at that level of poverty for long.

My co-blogger Marie points out that another way of estimating this would be to look at the mortal risks people take when they are starving. We could look at situations where people had a choice between remaining in a place suffering from famine, or doing something extremely dangerous to escape. She points out the example of post-war Vietnam, where the South Vietnamese who tried to escape faced about a 50% chance of death and tried to escape anyway, partially because they were so enormously hungry. One particularly good way of estimating this would be to look at neighboring regions where escaping is roughly as risky but the levels of famine were different, and comparing the rates at which people tried to escape. There would obviously be a million confounders here, like how unpleasant the regime was or how much people expected the situation to improve, but we might get some useful data regardless.

That’s all been trying to estimate $latex k$ by looking at happiness at the lowest end: how about if we try to estimate it by looking at how much a 10% change in consumption changes happiness in a nation? This has fewer philosophical issues, so I’m not going to discuss them. This way of indirectly estimating $latex k$ is closer to how we’re going to estimate it in the next section.

You also might be interested in looking up the paper which had happiness as a function of consumption _within_ particular poor countries, then trying to solve for $latex k$ within that much smaller and easier to measure range. However, this requires making a judgement call about how to translate the descriptions of happiness into real numbers. Depending on your feelings, this judgement call might be worse or better than what I did.

## Numerically estimating $latex k$

Here’s a few data points to use to estimate $latex k$:

*   A few weeks ago I was talking to this dude who grew up in poverty in Mexico and illegally immigrated to America when he was 12\. We chatted about his previous quality of life for a while: not getting enough food, only getting one pair of shoes a year, and so on. My impression is that his life in Mexico seemed about half as worth living as his life here is. From his description of his quality of life, and my understanding of Mexican poverty, I would guess he was living on maybe $4000 a year. I wish that I’d thought to ask him for a numeric statement of how much better his life here was, but I didn’t think of this. Next time.
*   Slate Star Codex [did a survey](http://slatestarcodex.com/2013/04/30/utility-weight-results/) trying to calculate the relative quality of life in different situations. Respondents thought that Ethiopian life is 50% as good as American life, and Chinese life was 85% as good.

I’m a lot more averse to poverty than SSC readers, apparently.

From these [we get an average estimate](https://docs.google.com/spreadsheets/d/1ofwjlxGFlgG7cVnuySiga8yApl6AWLDlyZPa-c5ZHRc/edit?usp=sharing) of $latex k$ as about -2.2\. This number is low enough that nations with average consumption PPP less than $latex 10^{2.2} = 158$ are classified to have a negative quality of life. I think this is stupid. I removed the China data point because I think that the people answering the Slate Star Codex survey overestimated how rich China is. I vaguely recall the survey implying that you lived in a city in China or something, as opposed to living in rural China as 50% of Chinese actually do.

Overall, I think that this model of happiness as logarithmic in consumption is good but gives bad results for extremely poor countries, because we are underestimating the consumption of extremely poor people.

## Application to global poverty charities

One interpretation of these numbers is “the price at which we are indifferent to decreasing total consumption by that much to save a single life”. Another interpretation, though, is “the price at which saving a single life is better value for money than just increasing consumption by that much”. This is really important, because as philanthropists we have the option of doing both of these things, most obviously through GiveDirectly and AMF. Let’s quickly review the levels of poverty of the people affected by these programs:

AMF operates mostly in Malawi and the DRC. Bednet distribution is slightly cheaper in Malawi. Malawi has a GDP PPP per capita of about $226\. Apparently, this is [pretty unevenly distributed](http://www.osisa.org/sites/default/files/sup_files/chapter_2_-_malawi.pdf). So the people saved by AMF, who I think mostly live in rural areas (from looking up regions listed [here](https://www.againstmalaria.com/Distributions.aspx)), are probably poorer than average for Malawians. (AMF’s distributors seem to find that [most of the houses they look at need LLINs](http://www.givewell.org/files/DWDA%202009/AMF/Netcheu-PreDistributionRegistrationSurvey-Data-Rcvd24Dec11-names%20withheld.xls) (Excel file), so we don’t need to worry about saving unusually poor people among rural Malawians.)

Kenyans who receive GiveDirectly grants have a [median nominal consumption of $0.55 per day](http://www.givewell.org/international/top-charities/give-directly#footnoteref85_siu35s3). (I use median instead of mean because I suspect that log(consumption) is more normally distributed than consumption; this is suggested by the mean being higher than the median.) The nominal-to-PPP conversion for Kenya seems to be about 2.18 (from comparing nominal and PPP GDP estimates), so that’s yearly consumption of about $408\. This is almost twice Malawi’s mean consumption, and as I said above the Malawians saved by AMF are probably poorer than above. Obviously, these numbers are so bad that they’re almost useless. The Malawian consumption estimates [here](http://www.osisa.org/sites/default/files/sup_files/chapter_2_-_malawi.pdf) try to include sustenance farming, but it’s really hard to get that right. According to the table on page 24 of [this report](http://documents.wfp.org/stellent/groups/public/documents/newsroom/wfp274603.pdf), Malawi’s proportion of undernourished people is 23.1% while Kenya’s is 30.4%. (Undernourished means that you are below the "minimum level of dietary energy consumption”.) These numbers kinda look like they fit with my hypothesis that GiveDirectly recipients have pretty similar levels of consumption to Malawians saved through AMF.

We’ve got a plethora of extra factors in this particular case. To start with, maybe there are flow-through effects of cash transfers which case them to increase consumption more. Also, bednets have other positive effects than saving lives, like preventing developmental impairments from malaria that limit lifetime earning potential, preventing malaria death in the above-5 year old age group (which isn’t counted) and prevention of other mosquito-borne illnesses. And having a marginal human might increase the consumption of other people in their society in some situations, but I don’t know which situations that is. Also, GiveDirectly might save lives as well, by giving people money to buy things like medicine and medical care and better food, or indirectly by allowing people to get e.g. metal roofs and thus having better hygiene in their houses.

I think that my formula is totally useless for answering the question of how much we should be willing to spend per life saved by AMF if our alternative is giving to GiveDirectly, because it’s so sensitive to changes in my $latex k$, and estimating $latex c$ is also really hard for super poor people. However, I did get some feeling about it from doing the research into poverty in Malawi and Kenya I did to write this discussion section. The people whose lives you save by giving to AMF seem to be pretty intensely impoverished. If 30% of Malawians are undernourished in general, and people saved by AMF are unusually poor, I suspect that probably a majority of the lives saved there are undernourished. That means that these people feel hungry _all the time_. I have a lot of sympathy for the perspective that those lives sound perhaps not worth living, in which case making them better is the better option. I also think it’s pretty plausible that these lives are actually pretty okay.

GiveWell has obviously thought about how to compare saving lives to increasing consumption, but AFAICT they haven’t considered it this explicitly. In 2012 they said that they suspected AMF was a [much better deal](http://blog.givewell.org/2012/12/19/cost-effectiveness-of-nets-vs-deworming-vs-cash-transfers/) than GiveDirectly. However, GiveWell hasn’t tried to quantify the value of increasing consumption vs saving lives like I have here. They probably haven’t tried because it turns out that when you do, you get shit results, as I did above.

Carl Shulman has also written about [happiness as log of consumption and GiveDirectly](reflectivedisequilibrium.blogspot.com/2014/03/givedirectly-happiness-and-log-income.html?m=1) before--I hadn't seen his post before I wrote all this.

If I donated to global poverty causes, I really don’t know which of these I’d give to.

## Conclusion

The value of saving a life increases linearithmicly with consumption. This is neat. I am pretty sure this is correct, and I’m really happy to have a principled derivation for it.

I think my equation for the value of saving a life is quite good for richer countries where it’s easier to measure consumption. Maybe one day, we will have ended global poverty, and the $latex \Delta c = c t (\log c + k)$ equation will be actually useful when we’re trying to decide whether a particular hovercar safety measure is worth it.
