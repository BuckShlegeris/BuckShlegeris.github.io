# Stats software I need

I am looking for some software which lets me manipulate extremely fat-tailed and irregular probability distributions.

## My motivation

Michael Dickens has been working on a [quantitative model for cause prioritization](mdickens.me/2016/05/17/a_complete_quantitative_model_for_cause_selection/).

## What I need

I need a class representing probability distributions over extremely wide ranges.

--------------

My friend and I need to make some calculations involving probability distributions over extremely wide ranges of values.

For example, I want to be able to take a bunch of lognormal distributions, add and multiply them together, then use this as a likelihood function in a Bayesian update of a Pareto distribution prior, and take the mean of the resulting posterior distribution.

My distributions often have significant probability mass over 50 orders of magnitude. So I can't just approximate everything as log-normal distributions. 

My friend has currently implemented this with buckets on a log scale, with about 4 buckets per order of magnitude. This is somewhat slow and we haven't proven any error bounds on this approach.

Is there an existing library that implements this kind of functionality?