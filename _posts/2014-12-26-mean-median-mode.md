---
layout: post
title:  "Mean, median, mode"
date:   2014-12-26
tags: math
---

Probably four years ago, a friend told me that he wanted to find nice axioms for averages like the ones you learn in high school–mean, median, and mode.

I said that I didn’t think there was a nice, natural way of relating all three of those concepts. Yesterday I realised I was wrong. Forgive me if this is totally obvious to people who know statistics, but it certainly wasn’t obvious to me.

We want to put our average in the middle of a set. One way of doing this is to say that the average is the point which minimises its total distance to all the other points in the set. Of course, to do this we need a distance function.

If we use the distance function $$ d(x,y) = abs(x-y)$$, then the point which minimises the total distance is the median.

If we use the distance function $$ d(x,y) = (x-y)^2$$, then the point which minimises the total distance is the mean.

And if we use the distance function where $$ d(x,y)$$ is 0 if x = y and 1 otherwise, the the point which minimises the total distance is the mode.

For extra neatness points, we can write all of these as $$ d_n(x,y)= abs((x-y)^n)$$, with mode, median, and mean being n = 0, 1, and 2, if we take $$ 0^0 = 0$$.
