# fun things about Scala, etc

My darling Emily. I'm on a plane. I feel tired. I got somewhat less than eight hours of sleep last night. I don't know what I should do at the moment, so I'm writing to you about some things about Scala which I want to make sure you run across, and also some random thoughts of mine about other things.

## General notes

Scala is gigantic and confusing. There are a lot of features of Scala which I don't understand at all. I feel like I understand Python much, much better than I understand Scala, even though I've been a professional and hobbyist Scala programmer for more than a year now, and I've never written much Python professionally.

This is by design. Martin Odersky wanted to make a scalable language. Here's a quote from the first chapter of his book "Programming in Scala" (cowritten by Bill Venners, whose talk I competed with at Scala By The Bay).

> The name Scala stands for “scalable language.” The language is so named because it was designed to grow with the demands of its users. You can apply Scala to a wide range of programming tasks, from writing small scripts to building large systems.
> Scala is easy to get into. It runs on the standard Java platform and in- teroperates seamlessly with all Java libraries. It’s quite a good language for writing scripts that pull together Java components. But it can apply its strengths even more when used for building large systems and frameworks of reusable components.
> Technically, Scala is a blend of object-oriented and functional program- ming concepts in a statically typed language. The fusion of object-oriented and functional programming shows up in many different aspects of Scala; it is probably more pervasive than in any other widely used language. The two programming styles have complementary strengths when it comes to scalability. Scala’s functional programming constructs make it easy to build interesting things quickly from simple parts. Its object-oriented constructs make it easy to structure larger systems and to adapt them to new demands. The combination of both styles in Scala makes it possible to express new kinds of programming patterns and component abstractions. It also leads to a legible and concise programming style. And because it is so malleable, programming in Scala can be a lot of fun.

Scala goes farther than any other language I know at making its abstractions extremely general. Let's look at some examples of that:

- An initial boring example: you can define random combinations of symbols as method names, like `+` or `+&&&`. This is how mathematical operators are implemented. (You can choose custom precedences for your operators, but if you do, the Scala compiler sets your computer on fire as punishment.)
- Classes can override the `apply` method, which is the thing that gets called when you use function call syntax. For example, you might want to make a Set implementation which lets you check if something is in the set just by writing `myset(item)` instead of the more obvious `myset.contains(item)`:

```scala
class Set(val items = List[Int]) {
  def apply(item) = items.contain(item)
}
```

- It gets way crazier. Just like you can override the behavior of what happens when you use function application syntax by overriding the `apply` method, you can override what happens when you use pattern matching syntax by overriding the `unapply` method. This one is kind of crazy, and might be hard to understand right now. Maybe Google it for an explanation.

This comes at some cost, though. Sometimes Scala won't let me compile a file and I have no idea what its complaint is. The polymorphism is a bit confusing. The type system is sometimes surprising.

There are also a few rough edges in Scala which come from its tight Java integration. For example, it has `null`, which is very annoying. There are also some unpleasant details of dealing with exception handling in Scala.

## Classes etc

Here's the classic definition of a BST in Haskell:

```haskell
data BST a = Node a (BST a) (BST a) | Null

contains :: Ord a => BST a -> a -> Bool
contains Null _ = False
contains (Node item left right) target
  | item == target = True
  | item > target = contains left target
  | item < target = contains right target
```

Here's one way you could write this in Scala.

```scala

// `sealed` means that you're only allowed to instantiate this abstract class 
// in this file

// the `<:` symbol means that you're only allowed to instantiate BST with 
// types which inherit from Ordered, and so implement the `compare` function.
sealed abstract class BST[A <: Ordered] {
  def contains(target: A): Boolean = this match {
    case Null => false
    case Node(item, left, right) => {
      if (item == target)
        false
      else if (item > target)
        left.contains(target)
      else
        right.contains(target)  
    }
  }
}

// You need to explicitly say that Node is polymorphic over a single type with
// the square brackets after the class name. After you've written a type 
// argument there, you can use that type anywhere else in your class 
// definition.

case class Node[A](item: A, left: BST[A], right: BST[A]) extends BST[A]

// A case object is a class with only a single, publicly available instance.
// The underscore here means "whatever".
case object Null extends BST[_]
```

Alternatively, you could define the methods in the child classes:

```scala
sealed abstract class BST[A <: Ordered] {
  def contains(target: A): Boolean
}

case class Node[A <: Ordered](item: A, left: BST[A], right: BST[A]) extends BST[A] {
  def contains(target: A): Boolean = {
    if (target == item)
      true
    else if (target.compare(item))
      left.contains(item)
    else
      right.contains(item)
  }
}

case object Null extends BST[_] {
  def contains(target: _): Boolean = false
}

```

What differences do we notice?

Obviously a bunch of syntactic ones. Whatever.

### ADTs vs inheritance

In Haskell, when you define an ADT, you don't have to give names for your fields. So you can read `data BST a = Node a (BST a) (BST a) | Null` and have no idea what the different arguments to Node mean.

Also, there's no proper Node type in the above Haskell definition. Like, you might want to write a helper function which only runs on nodes, like, I dunno, a function which tells you if the left subtree is larger than the right subtree:

```haskell
isLeftSubtreeLarger :: Node a -> Bool
isLeftSubtreeLarger (Node _ l r) = size l > size r
```

But that's not legal Haskell: there's no Node type, only a BST type.

In Scala, it's easy to do that. You can either put that method inside the definition of the Node class, or just as a standalone method.

Also, Scala allows you multiple levels of inheritance. For example, if you have a class `MathExpr` in a computer algebra system (CAS) that you're writing, you might want to have an inheritance hierarchy like this:

```scala
sealed abstract class MathExpr {
  def variables: List[String]
}

case class Number(n: Int) extends MathExpr {
  def variables = List()
}

case class Variable(name: String) extends MathExpr {
  def variables = List(name)
}

sealed abstract class BinaryOperation(left: MathExpr, right: MathExpr) 
    extends MathExpr {
  def variables = left.variables ++ right.variables

  def isCommutative: Boolean
}

case class Addition(left: MathExpr, right: MathExpr) 
    extends MathExpr(left, right) {
  def isCommutative = true
}
```

So we have our main abstract class MathExpr. It has a method called `variables` which returns a list of the variables in the expression.

It's extended directly by Number and Variable. These both provide an implementation of `variables`.

`MathExpr` is also extended by `BinaryOperation`, which is also an abstract class. Things which extend `BinaryOperation` are required to implement an additional function, `isCommutative`.

I really really like these multiple levels of inheritance. They let you do some incredibly complex things in an extremely reliable and typesafe way.

### Type constraints

You can't have BSTs of unorderable items. (A classic example of something which doesn't have an ordering defined on it is a function.) In Haskell, this is expressed in the function type for the `contains` method:

```haskell
contains :: Ord a => BST a -> a -> Bool
```

In Scala, this constraint is expressed in the class declaration, like `class BST[A <: Ordered]`.

This is a neat other thing Scala will do for you.


## Functional programming in Scala

Here are some things you might enjoy:

### Anonymous functions

You can make super simple anonymous functions with an underscore, like `List(1, 2, 3).map(_ + 4)`. I think this is awesome.

Sometimes you need to use more types in your anonymous functions, for reasons that I don't understand. Here are some alternative ways of writing the previous thing:

```scala
List(1, 2, 3).map((x: Int) => x + 4)
```

or

```scala
List(1,2,3).map({ (x: Int) =>
  x + 4
})

Sometimes Scala's syntax with braces can be confusing. When your IDE is complaining and you don't know why, try adding more type annotations.

### Basic data types

Lists are easy. `List(1,2,3)`. To get the empty list, you can write `Nil` or `List()`. There's some insane reason for this distinction, but I don't know what it is. You can attach lists to each other like this: `1 :: 2 :: 3 :: Nil`, which is similar to the Haskell `1 : 2 : 3 : []`. (In Haskell, : means "cons" and :: means "is of type"; they're reversed in Scala, which is initially confusing.)

Maps are like this: `Map(1 -> 2, 3 -> 4)`. The `->` is just syntactic sugar which turns two things into a tuple.

The Scala version of Haskell's Maybe is called Option, and its two constructors are Some and None, as opposed to Haskell's Just and Nothing.

### For comprehensions

Scala has for comprehensions. They look like this:

```scala
for {
  x <- List(1,2,3)
  y <- List("a", "b", "c")
} yield (x, y)
```

"So what," you might say. "Python and Haskell have for comprehensions too. Nothing special happening here."

"You fool!" I respond. "Python and Haskell only let you use for comprehensions with lists! Scala lets you use them with all monads!"

What do I mean by that? It's easier to show by example than to actually explain it. Suppose you want to get someone's mother's father's mother.

```case class Person(name: String, mother: Option[Person], father: Option[Person]) {
  def mothersFathersMother: Option[Person] = {
    mother.match {
      case Some(actualMother) => actualMother.father match {
        case Some(actualFather) => actualFather.mother match {
          case Some(actualAnswer) => Some(actualAnswer)
          case None => None
        }
        case None => None
      }
      case None => None
    }
  }
}
```

But that's really annoying to read, because it's getting more and more nested. We'd much rather express that using a sequence of flatMaps. Here's the definition of flatMap for Option:

```scala

class Option[A] {
  def flatMap[B](f: A => Option[B]): Option[B] = this match {
    case None => None
    case Some(x) => f(x)
  }
}
```

So you could rewrite the `mothersFathersMother` function like this:

```scala
  def mothersFathersMother: Option[Person] = {
    mother.flatMap(_.father).flatMap(_.mother)
  }
```

And this is a lot more elegant. But you can also use for comprehension to make it, well, arguably less elegant in this case, but often more elegant in different cases:

```scala
  def mothersFathersMother: Option[Person] = {
    for {
      m <- mother
      mf <- m.father
      mfm <- mf.mother
    } yield mfm
  }
```

I think this is super cool!

## Notes on the compiler project

C has lazy evaluation, for example on boolean operators like `&&`. `0 && g()` should not evaluate `g`. This means that you have to be clever about compiling that kind of operator. The ternary operator is a more general case of a lazily evaluated operator.

Here are some nonobvious questions of C semantics:

- What happens if you write `f() + g()`? Is the compiler obligated to respect the order of that expression, or can it modify it to `g() + f()` if it thinks that's faster for some reason? Can you look this up in the C standard for me?
- How do you implement the increment operator, like `a++`?
- In C, the assignment operator is really an expression. So it's totally valid to write `x = y = 2`, which is parsed as `x = (y = 2)`. I think maybe you should have assignment be a type of expression instead of a type of statement. (This also works more nicely with the increment operator.)

After you write your compiler, you should deploy it to the internet somehow. Digital Ocean or AWS seem like two good options.

## Notes about job search for you

After you write your compiler, you'll be an impressive looking candidate.

I think I should work on your compiler a little bit with you, so that I can claim to have worked with you closely, so that I can compliment you more realistically.

Here are all of my ideas on jobs:

- Google: any of my Googler friends would refer you.
- Facebook, through my student Stepan.
- Uber, through Simon Chaffetz
- Twitter, through my old manager Taylor Leese
- That coding challenge YC-company-recruiter thing that I did last night. Maybe it doesn't accept people without US work authorization, I don't know.

Want to do some more practice interview questions with me sometime?

## Things not (directly) about Scala

I love you very much. I felt emotional getting off the BART at SFO today, because I was remembering seeing you there for the first time in ages a few months ago. I can't wait to see you again.

I love how caring you are, and really admire that.

I bought another bird skull necklace of the type you gave me. I still don't know where I lost the original. I know where I lost my replacement for the original, but that was a long time ago now.

Blossom was hiding in her box again this morning. I think that she gets less tame after I let her wander around on her own in our room: she objects more to me picking her up, and she seems to want to burrow and hide more. I wonder if that's her Syrian ancestry calling out to her more after she experiences something closer to freedom.

### concerns about Wave not loving me enough

Whenever I'm talking to companies that aren't Wave, I feel like they treat me like I'm much more experienced than the single year of engineering work on my resume would suggest. I think that this is totally legit, because I am both smarter and more hardworking than most engineers with a year's experience.

But at Wave, they're proposing to just give me the salary and equity of someone with 1-2 years' software experience (they call this level 2). This makes me slightly uncomfortable. I think I might try to talk them into giving me more.

On the other hand, I'm legit unsure how good I am at the stuff they care about. I haven't actually built large web applications recently. I don't have that much experience with dev ops.

I'll have to ask Wave how happy they are to promote me based on performance, and whether they increase my equity when I get promoted.

OTOH, Ben Kuhn is a level 2 software engineer, and he's a sharp motherfucker. So maybe I can't talk them into letting me be more impressively ranked than him.

I wish I could ask someone for advice about this, but I don't really have anyone I can ask.

 

