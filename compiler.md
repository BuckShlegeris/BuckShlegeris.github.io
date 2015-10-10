# Writing a compiler

## Types

The input is going to be a string. Multiple files are a complication, but who cares.



## Steps

### Parser

you know this stuff. TODO: decide a good parser library to use. Options:

- Java parser generator
- Scala parser generator
- java C parser
- maybe https://github.com/itsmeritesh/Java-Parser-for-C/tree/master/C_parser

You don't need this for the moment, because you can just create the AST directly to start with.

### Type checker

Walk over the tree, and complain for each thing which doesn't type check.

This step is optional, and you don't need to do it to start with.

### AST to IR

Most of the logic here involves turning control flow into jumps.

Probably don't bother using SSA form.

### IR to assembly

register allocation

## How I would approach this project

There are two possible approaches to large, multistage projects. You can implement the stages completely, one at a time. Or you can start by implementing a tiny subset of the functionality of each stage, so you can see your project working as early as possible. I think the second option is more fun.

So here's what I'd do first. Implement a subset of a compiler which can only compile arithmetic expressions. So for example, your input is:

    (x + y * 2) / z

and you parse it to an AST like

    BinOp Divide (BinOp Plus (Variable "x") (BinOp Multiply (Variable "y") (Number 2))) (Variable "z")

and then you assume that it type checks, because YOLO. And then you turn it to an intermediate representation like this:

    %temp1 = y * 2
    %temp2 = x + %temp1
    %temp3 = %temp2 / z
    return %temp3

and then you turn that into some rPeANUt like this:

    ; variable allocation: x in R0, y in R1, z in R2.
    ; %temp1 = y * 2
    LOAD #2 R3
    MULT R2 R3 R3
    ; %temp2 = x + %temp1
    ADD R0 R3 R3
    ; %temp3 = %temp2 / z
    DIV R3 R2 R3;
    RETURN R3;

After you've implemented that much of it, you should evaluate how much fun you're having. There are a lot more interesting and fun twists to make it work completely.

## Notes

- There are a million parser libraries, you probably don't want to roll your own.
- You can use Sympy to automatically simplify expressions.