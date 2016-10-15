---
layout: post
title:  "Threads vs processes"
date:   ""
---

Many programmers aren't very clear about the different between a thread and a process. I think that this is a really important distinction, and that it's not that hard to learn it properly. Here's the difference: Processes can have multiple threads, and threads share all their memory, while processes don't share their memory by default.

The first thing to understand is virtual memory. address space.

<script src="https://gist.github.com/bshlgrs/b708816e87c647795e17af34b36efad8.js"></script>


http://www.makelinux.net/books/lkd2/ch03lev1sec1
