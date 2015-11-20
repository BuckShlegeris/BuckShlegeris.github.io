## Stage 0: Write a skip list.

Have `includes?`, `insert`, `remove`

Then add some methods which derive from those, like `SkipList.new(enum)`, which takes an enumerable and inserts everything from it into a skip list.

Other easy methods: first, last, length, each, to_a

## Stage 1: Implement fast indexing.

you know how to do this. Implement it with the `[]` operator.

After doing that, implement `median`.

## Stage 3: custom ordering

Add an optional `ordering` argument to the `SkipList.new` method, which lets you specify a function to run on values to determine their order in the node. By default it should not do anything. If it's a symbol, you should interpret that as a method to be called on the value. If it's a lambda, you should interpret it as a lambda.

```ruby
SkipList.new([1, 2, 3]) # orders normally
SkipList.new([1, 2, 3], ordering: :to_s) # orders by alphabetical order
SkipList.new([1, 2, 3], ->(x) { -x } ) # orders backwards!
```

## Stage 4: custom monoids

Add a custom `sums` argument to the `SkipList.new` method, like this:

```ruby
sl = SkipList.new(people, ordering: :income, sums: [:age])
sl.sum_between_values(20_000, 50_000, :age) # returns the sum of ages between those values
```

This will be stored by a hash on every `SkipListNode`, and updated when things are inserted or removed.

You can do the same thing for `maximums`.

You could even allow people to define totally custom monoids by passing you in two `Proc`s.

## Stage 5: Skip List Views

When you do `skip_list.drop(10)`, it shouldn't return you an array, it should return a `SkipListView` instance which knows that its first element is the skip list's tenth element.

So there are a bunch of methods on `SkipList` which should return `SkipListView`s. And calling those methods on `SkipListView`s should also return `SkipListView`s. Eg `skip_list.drop(5).drop(5)` should return you the same kind of `SkipListView` as `skip_list.drop(10)`.

The point of this is that it makes it super idiomatic to write things like `skip_list.take(10).average(:age)`.

If the skip list changes (eg `add` is called on it), the skip list view becomes invalid. You can make this happen safely by having all skip list views register themselves as observers of a `change` event for the `SkipList` they are viewing, and when the `SkipList` changes, it tells all its observers to invalidate themselves, and if you call any methods on them afterwards they throw an exception.

## Stage 6 (optional, can be done later): `SkipListElement` mixin

```ruby
class Person
  # this gives you an add_to_skip_list method and a update_skip_lists method,
  # and a skip_list_data instance variable. Otherwise if you edit your values,
  # the skip lists you're in might get out of date.
  include SkipListElement 

  attr_reader :income, :age, :height
end
```


## final product

```ruby
list = SkipList.new(
  order_by: :income,
  sums: [:age],
  maximums: [:height]
)

list.push_all(stuff)

p list.first # poorest person
p list.last # richest person
p list.median # middle person
p list[5] # fifth poorest person
p list.take(10) # skip list view of ten poorest people
p list.average(:age)

p list.ordered_before(20_000) # skip list view of people whose income < 20k
p list.ordered_before(20_000).length
p list.ordered_before(20_000).average(:age)
p list.ordered_before(20_000).sum(:age)

# skip list view of the 20 poorest people with incomes >= 20k
p list.ordered_after_or_at(20_000).take(20) 

p list.drop(100).take(10).maximum(:height)

# classes: SkipList
# methods: first, last, median, [], add, average, take, drop, ordered_before, ordered_after,
#          sum, maximum
```