---
layout: post
date:   ""
title: "Gini coefficient calculator"
---
<script src="https://bshlgrs.github.io/economics-demos/build/bundle.js"></script>


<div class="react-demo" data-demo-name="gini-demo">
  app is loading!
</div>

<script defer>
  loadAllDemos();
</script>

----

Here are some ideas for things to do with the above app:

- Do you know what the US Gini coefficient of income is? If not, play around with different income distributions for a while and try to guess. You can check [here](http://data.worldbank.org/indicator/SI.POV.GINI?end=2013&locations=US&start=1986&view=chart&year_high_desc=false).
  - So I don't really care about income inequality per se, I care about equality of consumption. That is, I mostly care about whether people get to consume similar amounts of societal resources, as opposed to what their before-tax income is. The Gini coefficient isn't quite a fair measure of overall equality, because it doesn't include taxes (which are progressive), government transfers (which are mostly targeted towards lower-income people), or the amount that the government spends on public goods which are shared equally by everyone (and therefore increase equality). It also doesn't include the cost-of-living differences between different places--higher income people live in states and suburbs where prices are higher.

    Sometimes people directly try to measure consumption inequality, and they get lower numbers than the income inequality numbers--[this report](http://gini-research.org/system/uploads/443/original/US.pdf?1370077377) finds that US consumption Gini coefficient is about 0.1 lower than the US income Gini coefficient.
- What's the Gini coefficient of a population where there are two equally sized population groups, where one group has much higher income than the other?
- Suppose I start out with a very equal population, with an income of 2 each. What happens to the Gini coefficient as I add many higher-income people?
- Compare the Lorenz curves for the populations [10, 20, 35, 35] and [15, 15, 30, 40]. Their Gini coefficients are the same, but I think that this is a weakness of the index--I think the latter is a more equitable income distribution.
