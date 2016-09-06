---
layout: post
title:  "Against the Gini coefficient"
date:   2016-09-04
---

The Gini coefficient is the most common statistic used to describe income inequality. I made a tool for visualizing the Gini coefficient of populations; [check it out](http://shlegeris.com/gini) if you want to quickly improve your intuitions about it.

The Gini coefficient doesn't recognize this. Here's the Lorenz curve for the incomes [1.5, 1.5, 3, 4]:

<div class="react-demo" data-demo-name="lorenz-curve" data-demo-props='{"incomes": [1.5,1.5,3, 4]}'>
  app is loading!
</div>

And here's the Lorenz curve for the incomes [1, 2, 3.5, 3.5]:

<div class="react-demo" data-demo-name="lorenz-curve" data-demo-props='{"incomes": [1,2,3.5,3.5]}'>
  app is loading!
</div>

<script src="https://bshlgrs.github.io/economics-demos/build/bundle.js"></script>
<script defer>
  loadAllDemos();
</script>
