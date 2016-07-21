---
layout: post
title:  "Annotations for Keith Schwarz's explanation of red-black trees"
date:   2016-09-30
---

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

Most programmers know that if you want to use a binary search tree in practice, it needs to have some kind of balancing mechanism. Most programmers don't understand any of the commonly used self-balancing BST mechanisms though. They have usually heard of AVL trees and/or red-black trees, but they don't know how those work.

Keith Schwarz at Stanford teaches a data structures course with a great explanation of red-black trees. I link people to [his slides on this](http://web.stanford.edu/class/cs166/lectures/05/Small05.pdf) so regularly that [Chrome autosuggests it when I type in "Stanford"](https://www.dropbox.com/s/2t01ucwtqtqkb08/Screenshot%202016-07-20%2016.51.52.png?dl=0). However, these are just slides and don't come with lecture notes. This is my attempt to annotate his slides with more explanation and links to further resources. All mistakes are of course mine.

So let's look at how you'd implement a self-balancing binary search tree.

## How balanced is balanced?

Let's start out by figuring out how balanced we need our tree to be.

Why do we care about trees being balanced in the first place? Well, all our primary operations (find, insert, delete) involve searching to the bottom of the tree. So to control the maximum time requirement of those operations, we need to control the maximum height of the tree.

If the tree doesn't have any balancing logic, then if you insert data in sorted order, your BST ends up being totally unbalanced, with height equal to its number of nodes. This means that all your operations will take $latex O(n)$ time.

If your tree happens to be perfectly balanced, then its height will clearly be logarithmic in the number of elements. So perfect balance is sufficient.

<a role="button" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Link with href
</a>

<div class="collapse" id="collapseExample">
  <div class="well">
    ...
  </div>
</div>
