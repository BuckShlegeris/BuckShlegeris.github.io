---
layout: post
title:  "Algorithm problems on arrays"
date:   2016-12-12
---

I hypothesize that you can express a lot of classic algorithm problems using a few primitives.

1. Suppose we are given an array of n integers representing stock prices on a single day. We want to find a pair (buyDay, sellDay), with buyDay ≤ sellDay, such that if we bought the stock on buyDay and sold it on sellDay, we would maximize our profit. (eg [here](http://stackoverflow.com/questions/7086464/maximum-single-sell-profit))

$$ \max

1. You are given a histogram (base widths all 1). Imagine the histogram is holding water poured onto it from the top. Determine the amount of water that can be held.

$$ \sum_{i = 0}^{n}
  \text{min}
    \left(\text{max}_{j \leftarrow [0...i-1]} arr_j\right)
    \left(\text{max}_{j \leftarrow [i+1...j]} arr_j\right)$$
