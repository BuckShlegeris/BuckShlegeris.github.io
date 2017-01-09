---
layout: post
date:   2016-02-21
uses_react: true
title: "To-prove list"
---

Here is a list of mathematical questions I want to investigate or find the answer to.

- Various results about [pain in reinforcement learning](/drafts/pain/balance-of-pain)
- Generalizations of my [optimal tax results](/2016/10/07/optimal-tax.html), as discussed by Toby and Owen [here](https://www.facebook.com/bshlgrs/posts/10208786840283081?comment_id=10208788070393833): "versions where there was redistribution by UBI (i.e. the problem you've analysed); versions where tax went to provide some public goods (such as legal systems) whose value is higher to those with more wealth; versions with diminishing utility of leisure time; allowing consumption and leisure to be complements (because of more leisure time to enjoy consumption) or substitutes (principally because consumption can buy you more genuine leisure time by removing unpaid work)."
  - Another generalization: what about if demand for labor isn't totally price inelastic?
  - What about if working has positive or negative externalities?
- Travelling maze coke salesman: prove it's NP hard. This problem is like TSP, except it's in a maze on a 2D plane, and every time the salesman gets to a city they double their speed.
  - If it's not on a 2D plane, then the proof is easy--you just apply the usual reduction from the Hamiltonian cycle problem. I can almost certainly solve this problem by reading the proof that TSP is hard even on a plane, and just applying it to this.
- Finding [optimally short templates](/notes/template-generator)

## Things that I wanted to prove, but then finished proving or found a proof of

- [Optimal redistribution by flat taxation and UBI in a society with varying wages](/2016/10/07/optimal-tax.html)
- [Fast data structure for range-k-smallest](/2016/06/16/kth-richest.html)
- [Optimal bundling](https://www.facebook.com/bshlgrs/posts/10208574426092859): find a fast algorithm or prove none exists. **Update: [I think Gabe B-F proved this one!](https://www.facebook.com/bshlgrs/posts/10208988756250854)**
- Generalize [the Alias method for sampling from discrete distributions](http://pandasthumb.org/archives/2012/08/lab-notes-the-a.html) to distributions which can change.
  - I asked this on StackOverflow; there exists an answer but it's [really complicated](http://stackoverflow.com/questions/40622450/data-structure-for-dynamic-loaded-dice/40626778#40626778).

## Things that I want to learn about, but which are probably mostly just looking things up

- How should you incentivise CEOs? [Discussion here](https://www.facebook.com/bshlgrs/posts/10208850864523647). If you pay them no stock, then they don't care about how well your company does. If you pay them entirely in stock, and that's a significant proportion of their income, then they're risk averse. If you pay them in something weird like an exponential function of share price, then they might have the right risk profile but they might end up demanding a higher-EV pay package than they'd require if it was less risky.
  - I am aware that this is a big area of research in finance. The answers are probably in a literature review somewhere, I just haven't gotten around to looking it up

