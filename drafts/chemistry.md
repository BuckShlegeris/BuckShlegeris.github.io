---
layout: post
title:  "chemistry"
date:   ""
---


Chemistry is the thing life comes from

I'm assuming a Newtonian-mechanics-ish universe.

Features of our universe that allow for life:

- The Earth is a large rocky object. It has graviational attraction. This is convenient because:
  - it means that we have an atmosphere
    - TODO: do we actually need that?
  - it means that we can have the right temperature
  - there is a lot of stuff all in the same place.
- Features of chemistry required for life:
  - Stable structures
  - Reactions
  - Storage of chemical energy
  - Enzymes
  - Usage of chemical energy to create mechanical energy and cause energetically disfavored reactions.
- Nice facts about chemistry:
  - Highly varying reaction times
  - Electronegativity
  - Things usually stick together, because intermolecular forces are attractive beyond a very short range.
    - Any two molecules have attractive forces at long range. I am pretty sure this is a theorem, though I haven't seen a proof. In my understanding, it's true for the same reason that if two people have largely uncorrelated investments, they can increase expected total utility by trading.


- Features of physics that lead to chemistry:
  - Integral nuclear charges that vary from 1 to a couple hundred.
    - If you want something to come in integral amounts, the obvious way to do that is to make it out of multiple identical parts. In our case, that's protons.
    - Nuclear physics basically arises from the following rules:
      1. Protons are positively charged, and so repel each other. Neutrons don't participate in electromagnetic interactions.
      2. Nucleons attract each other at very short ranges--close enough that if you have $$n$$ nucleons, the total energy of the attraction is linear rather than quadratic, because nuclei are mostly only attracted to their neighbors.
      3. Similarly to how electrons have to obey the Pauli exclusion principle and so if you have many electrons, most of them can't be in the ground state, protons and neutrons both obey Pauli exclusion principles.
    - Let's consider what happens if you don't have all those rules:
      - Does everything work if the strong nuclear force acts at longer ranges? If you just increased the range of the strong nuclear force and left everything else constant, you might get too many large nuclei. But if you increase the power of rule 3, that effect would be dampened. I don't know how that would play out. I could figure this out pretty quickly by playing with parameters in the liquid drop model.
      - If you don't have rule 3, then atoms are strictly more stable when they have more neutrons. This might cause problems?
  - Electrons are much lighter than nuclei.
    - I think chemistry still works if the ratio was closer. Eg if nucleons were 10x lighter than electrons, instead of 2000x, it would be chill.
  - Electrons have two spin states, and the Pauli exclusion principle. If we don't have the Pauli exclusion principle, I'm pretty sure you don't get interesting chemistry. I'm unsure what happens if you have a number of spins different from two. (Note that QFT says it's impossible to have particles that have the Pauli exclusion principle but have one spin state.)
  - Gravity is present at large scales but weak enough to not matter at chemical scales. TODO: how much weaker is it?


Note that various other things give us quantum chemistry:

- Born Oppenheimer approximation
- Hartree-Fock
- DFT


Other things to investigate:

- Non-two numbers of spins
- 2D, 4D
