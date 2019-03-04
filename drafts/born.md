---
layout: post
title:  "born rule"
date:   ""
---

physics thing:

We’re trying to come up with an argument for the Born rule. Here’s our attempt:

Suppose you have a quantum state you want to measure (a photon with $$\alpha$$ spin up + $$\beta$$ spin down), and a human, and a heat bath. The human has two states: thumbs down and thumbs up. When the human measures the photon, the human evolves such that the state $$\lvert spin up, thumbs down\rangle$$ evolves to $$\lvert spin up, thumbs up\rangle$$ and $$\lvert spin down, thumbs down\rangle$$ evolves to $$\lvert spin down, thumbs up\rangle$$.

Let's call the photon's states $$\lvert 0\rangle$$ and $$\lvert 1\rangle$$, and the human's states $$\lvert h_0\rangle$$ and $$\lvert h_1\rangle$$.

We have the human measure the photon. At this point, we have the state $$\alpha \lvert 0 h_0\rangle + \beta \lvert 1 h_1\rangle$$.

Now, we have the human interact with the heat bath. The heat bath's state starts out randomly selected from the space of allowed wavefunctions $$\psi_H$$ over $$\mathbb{R}^n$$ for some $$n$$. Let's say that the Hamiltonian $$H$$ of the system is a random matrix. (??? What kind of random?) Now we evolve the system forward, and get to the state:

$^$\psi_\text{final} = e^{-iHt} (\alpha \lvert 0 h_0\rangle + \beta \lvert 1 h_1\rangle)$^$

where $$t$$ is the time, also selected randomly?? (I am not sure that that equation is correct.)

Here's the interesting question: Suppose the heat bath's wavefunction has a bunch of basis vectors $$\lvert x_i\rangle$$. We can get the values $$(\langle h_0 \rvert \otimes \langle x_i \rvert) \cdot \lvert\psi_\text{final}\rangle$$ and $$(\langle h_1 \rvert \otimes \langle x_i \rvert) \cdot \lvert\psi_\text{final}\rangle$$. Both of these are complex numbers. Now, I wonder if the probability of this first value being greater than the second value is equal to the norm squared of $$\alpha$$. If so, that would be a kind of counting argument for the Born rule.

We could maybe try to check this empirically by generating random matrices. Peter mentioned some kind of reason to think that there's a legit way of defining a "prior" over matrices, but I don't remember what it is.
