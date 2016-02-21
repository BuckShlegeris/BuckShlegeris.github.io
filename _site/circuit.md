Here's a circuit diagram

    ----R---
    |      |
    |      |
    |      |
    |---R--|
    |      |
    |      |
    |      |
    |--V--R|

where V is a voltage source, and R is a resistor.

We can represent this as a multigraph, where we have two nodes 0 and 1, and three edges. Two of the edges just have a resistor, and one of the edges has a battery and a resistor in series.


    [
      (0, 1, [Resistor(2)]),
      (0, 1, [Resistor(2)]),
      (0, 1, [VoltageSource(6), Resistor(2)])
    ]

(this means that the resistors are all 2 ohms, and the voltage is 6 volts)

The resistance of this circuit as perceived by the battery is 2 + (1/(1/2 + 1/2)) = 3 ohms, so the current is 2A.

Write a program which can calculate this.