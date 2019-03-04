---
layout: post
title:  "Why are dependent tuples sums when normal tuple types are products?"
date:   "2018-04-11"
tags:
  programming
  math
---

I've been learning a bit about dependent types recently. While talking to Nate Soares about them last night, he gave a wonderfully simple answer to a question I'd had: In normal type theory, tuples are product types and functions are exponential types. Why is it that in dependent type theory, we represent dependent tuples with sigma types that correspond to sums, and we represent dependent function with pi types that correspond to products?

