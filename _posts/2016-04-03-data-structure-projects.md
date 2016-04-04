---
layout: post
title:  "Data structure projects"
date:   2016-04-03
---

Here are some ideas for fun projects with data structures! I get really excited about data structures and if you want to ask me for clarification of any of these I'm super super happy to talk to you about them!

* Binary search trees! There are lots of little-known self-balancing BST implementations. Basically no-one has heard of any except AVL trees, red-black trees, and BTrees.
    * Implement a lesser-known BST in a language of your choice; figure out how fast it is; try to make it as fast as a reference implementation. Try to find a semi-realistic application where your implementation is faster than a competitor. (For example, splay trees probably outperform red-black trees in cases with serious temporal locality.) This project is definitely possible.
        * Here are the main BST implementations (from Wikipedia)
            * [2-3 tree](https://en.wikipedia.org/wiki/2-3_tree)
            * [AA tree](https://en.wikipedia.org/wiki/AA_tree)
            * [AVL tree](https://en.wikipedia.org/wiki/AVL_tree)
            * [Red-black tree](https://en.wikipedia.org/wiki/Red-black_tree)
            * [Scapegoat tree](https://en.wikipedia.org/wiki/Scapegoat_tree)
            * [Splay tree](https://en.wikipedia.org/wiki/Splay_tree)
            * [Treap](https://en.wikipedia.org/wiki/Treap)
    * Investigate optimal treap parameters for this process described on Wikipedia:
        * “Aragon and Seidel also suggest assigning higher priorities to frequently accessed nodes, for instance by a process that, on each access, chooses a random number and replaces the priority of the node with that number if it is higher than the previous priority. This modification would cause the tree to lose its random shape; instead, frequently accessed nodes would be more likely to be near the root of the tree, causing searches for them to be faster.”
        * This one is fun because there's a chance of making an original and somewhat useful discovery. It's also definitely doable. It's reasonably likely that the answer ends up being the null hypothesis ("you are better off never changing the priority of the node"), but it's probably fun either way.
    * I had a neat idea for a somewhat original data structure related to BSTs, but my implementation is wrong and it has a logical error (if you insert in descending order, it gets arbitrarily unbalanced). [Here's the repo](https://github.com/bshlgrs/random-balanced-trees) describing it. You could read my description of the data structure, figure out a way to fix the problem with it, and fix it, then implement it and benchmark it. This project is certainly possible, but might be too easy.
* Useful data structures that haven't been implemented in many programming languages:
    * Binary search trees where each node memoizes a function of its subtrees. For example, you could have a BST of humans, ordered by age, and have each node store the maximum income of the humans stored in its children. This is neat because then you can then answer queries like "what's the maximum income of people with ages between 20.3 and 25.3" in log time. You can also update in log time. This is related to finger trees. This structure is not very hard to implement--it's just a self-balancing BST with some extra book-keeping. For bonus points, implement it in C but with bindings to a nice language like Ruby, and a convenient API which lets me specify both my ordering function and my sub-tree memoizing function as lambda functions.
* Things which should be possible, but I've never seen implemented:
    * Self-balancing KD trees. This is a research project as much as an implementation project. I believe this is possible but can't find a full description of it anywhere. If you implement this and test it well, people would maybe use it.
* Highly general project: When people want to make their Ruby/Python programs fast, they often implement the key data structures in C/C++ and then make binding code to call them from their high level language. This is annoying because C/C++ are really annoying and error prone to code in. There are more modern languages which you could use for this, but no-one has really done that very much. I think it would be cool to choose some data structure, implement it in a more modern low level language (eg Go or Rust), then create the bindings to your high level language.
    * This project is probably doable.
    * Much of the effort in this project is probably figuring out how to get the bindings to work nicely. This is a problem because your lecturer might not be that interested in that work, so you might not get credit for it. Also, figuring out how to make bindings work sounds like a pretty annoying and potentially very difficult task. I really don't know.
    *  The valuable output of this project would be a very clear online tutorial of how you build data structures in Go and call them from Ruby (for example). Ideally this tutorial would be accompanied by several examples of how to do it.
    * You also have to learn Go or Rust for this project.
    * If you made this work, this would be awesome. Best case scenario, you make it easy for people to do this in future, and then you get to take credit for a shift in how people write performance-critical data structures.
