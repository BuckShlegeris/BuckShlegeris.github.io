When I was in university, I had great fun playing with a little simulated microprocessor that the CS department had made as a Java app, called rPeANUt. It let you program it in assembly and it would run your code. You could step through your assembly and see the values in all your registers at any given point.

It was super fun! I even tried to write a compiler targeting it [1]! I targeted rPeANUt assembly instead of a real assembly language because the rPeANUt java app made debugging my generated assembly really easy.

Here’s what it looks like: https://www.dropbox.com/s/0j4kr31gegk7bz2/Screenshot%202016-08-16%2021.32.14.png?dl=0

Are there any tools that make writing a real assembly language (preferably x86) as easy as rPeANUt makes it?

The best thing would be some kind of x86 IDE which works on a Mac or Linux, which lets me do all of this.

[1] Source is at https://github.com/bshlgrs/rpeanut-compiler. The highlight of the project was when, in a petulant moment, I decided that I wanted to write an algorithms assignment for university in my sort-of-C source language. I successfully compiled two dynamic programing algorithms to rPeANUt: this was plausibly the most complicated algorithm ever run on the simulator.

