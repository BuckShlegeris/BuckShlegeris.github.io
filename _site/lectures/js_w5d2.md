# Lecture

Javascript history: When he wrote it, Brendan Eich was under crazy time and design restrictions. Quotes from him:

> JS had to "look like Java" only less so, be Java's dumb kid brother or boy-hostage sidekick. Plus, I had to be done in ten days or something worse than JS would have happened.


> If I had done classes in JavaScript back in May 1995, I would have been told that it was too much like Java or that JavaScript was competing with Java … I was under marketing orders to make it look like Java but not make it too big for its britches … [it] needed to be a silly little brother language.

Most important features of Javascript design:
- The language had to be very simple. No classes or anything built in. This is because the language was intended to be simple to use, and not look like a Java competitor, and because Eich was time constrained.
- Needed to have C syntax. To me, the saddest results of that are the brackets around conditionals in if statements and not having implicit return. Look up Coffeescript to see how beautiful the syntax for JS could have been.
- Needs to have callbacks. JS is fundamentally a language for asynchronous tasks: UI stuff, HTTP requests, and so on. So however it works, it needs to be comfortable with functions as values.
- When your code is wrong, the browser can't break visibly. This is a prisoner's dilemna. Browsers and programmers would rather that the browser gave stricter error messages, because that would make interpreting and writing JS much easier. However, if Chrome implements things like type errors for {} + {}, then a bunch of websites will stop working in Chrome, but will still work in IE or whatever. This will make people use IE, which Google doesn't want. So there's a constant pressure to be lax. (This same motive also affects CSS and HTML behaviour.)

The theme of this lecture is that Javascript is a fundamentally simple language, and we build our complex concepts (namespaces, classes, inheritance) in slightly weird ways. Because it's small, and we have to.

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

Why is this? Alpha-equivalence (from lambda-calculus). You couldn't locally refactor code otherwise.

## Callbacks
A callback is a function passed to another function to be called later.

For example, setTimeout and setInterval. Also file IO, user behavior, web requests, and so on.

You are very lucky to have this stuff exposed to you so early. Asynchronous programming is *very* important, and many CS students finish their degrees without the understanding of it which you will have.

It is important to understand scoping rules to understand callbacks.

## `this` and that

`this` is like §self.

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
	console.log(f); // a function
	
	breakfast.meow === gizmo.meow;

So these functions are identical. So calling them should give the same value, right? (`this` is set to window, btw)

So how should method style calling work? We want to be able to call functions *on* objects. Calling a function on an object, method style, does this by setting `this`.

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

## Epilogue

JS is lovely, and you get lots of intuition about things from it: callbacks, closures, scoping, asynchronous shit. If you ever learn Python or Haskell, JS will give you a good intuition for it. Be appreciative!