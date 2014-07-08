# Lecture

Javascript history

"If I had done classes in JavaScript back in May 1995, I would have been told that it was too much like Java or that JavaScript was competing with Java … I was under marketing orders to make it look like Java but not make it too big for its britches … [it] needed to be a silly little brother language."

All you need to know about Javascript design:
- Very simple.
- Massive rush job and needs to look like c, and you can't fix it.
- Needs to have callbacks
- Massively underdesigned for how important it is, like King Joffrey.

The theme of this lecture is that Javascript is really small, and we build things out of it in slightly weird ways. Because it's small, and we have to.

## JS scope

	var f = function (x) {
	  return function () {
	    return x;
	  }();
	}

What does that return?

How about this?

	var f = function (x) {
	  return g();
	}
	var g = function () {
	  return x;
	};

So javascript scoping works based on where a variable was defined, not where it's called.

How about this:

	var f = function () {
	  var x = 4;
	  g(function() {console.log(x);});
	}
	var g = function (h) {
	  var x = 5;
	  h();
	}

## Callbacks
A callback is a function passed to another function to be called later.

For example, file IO. Let's write a function to reverse every line in a file.

You are very lucky to have this stuff exposed to you so early.

## `this` and that

`this` is like self.

One way it's set: method style

Also, when you say `new Whatever`, `this` is set to the blank object.

Now, let's define a class that way.

	var Cat = function (name) {
		this.name = name;
	};
	Cat.prototype.meow = function () {
		console.log(this.name + " meows")
	};
	
	var breakfast = new Cat;
	var gizmo = new Cat;
	
	f = breakfast.meow;
	console.log(f); // what do we see
	
	breakfast.meow === gizmo.meow;

So these functions are identical. So calling them should give the same value, right? (This is set to window, btw)

So how should method style calling work?

In Ruby, all functions are really methods. In Javascript, it's the other way around.

There are therefore two ways of setting `this`. You can call a function method style. There has to be some other way. That's `apply`.

	obj = {name: "Earl Watts" };
	function greet(msg) {
	  console.log(msg + ": " + this.name);
	}
	greet.apply(obj, ["hello"]);

So we can make bind out of this. Let's write a version of `bind`.

	function SumCalculator() {
	  this.sum = 0;
	}
	SumCalculator.prototype.addNumbers = function (numbers) {
	  numbers.forEach(function (number) {
	    this.sum += number; // noooo!
	  });
	  return this.sum;
	};

## Module pattern

First try: everything is global
Problems: overwriting

Second try: everything is a property of a module object
Problems: very annoying, you don't care about all your variables

Third try: Inside a closure, setting a module object
Problem: Behaves badly with multiple files

True Path: thing || {}