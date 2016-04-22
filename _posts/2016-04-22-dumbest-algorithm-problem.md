---
layout: post
title:  "The dumbest algorithm problem"
date:   2016-04-22
---

Want to know the dumbest algorithm problem in the entire world? Here it is:

"Find the $latex k$th last element of a linked list, in a single pass, with constant memory."

Let the length of the linked list be $latex n$. If we didn't have to follow the single-pass constraint, we'd solve this by finding the length of the linked list (which takes $latex n$ steps), then looking for the $latex(n - k)$th element. In total, we traversed $latex(2n - k)$ links.

However, my interviewer apparently measures code efficiency by "number of while loops in the function body", so we have to do better.

The canonical answer to this question is to make a while loop with two pointers, one of which trails k links behind the other. As soon as you get to the end with your leading pointer, you return whatever's at your trailing pointer.

Wow, so efficient, only one while loop! Let's see how much faster we made it!

Well, the leading pointer traversed n links, and the trailing pointer traversed $latex (n - k)$ links. That's...uh... exactly the same as the previous answer! Except you had to write a custom function instead of just calling `.length` and `.get`, which I assume your linked list already had! And now you're more exposed to a bug when the linked list is too short to have a $latex k$th last element!

(Full disclosure: for small $latex k$, this solution might be faster because of memory locality. But I've never heard anyone mention that as the rationale for this problem, so I'm not going to give the problem credit.)

In real life if this was going to happen a lot you'd store the length of your linked list somewhere. Knowing that you should wrap your linked list in another object which keeps track of its length is a million times more useful than being able to solve the problem as written.

This is algorithm interviewing at its worst. It's a brainteaser which actively penalizes you for a good sense of algorithmics or software engineering.

It makes me really sad that this question appears so often on lists of most common interview questions.

Cracking the Coding Interview mentions this question and gives this answer but doesn't claim it's better, Elements of Programming Interviews actively claims that this answer is the better one (page 105).

EDIT: In the comments, David gives a great solution that is way smarter than the traditional one. This makes me dislike the traditional answer even more.

> <p>Leading pointer is L steps ahead of trailing one. Remember where it is (say, OLD_LEAD). Move forward L more steps, while remembering how far ahead the leading one is of the trailing one (STEPS_AHEAD).</p><p>If you get to the end, do the right thing (using STEPS_AHEAD).</p><p>If STEPS_AHEAD gets to L, move trailing pointer to OLD_LEAD and update STEPS_AHEAD.</p>

-----

[view comments on Facebook](https://www.facebook.com/endofunctor/posts/10207496299980380?pnref=story)
