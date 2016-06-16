---
layout: post
title:  "Quickselect on multiple sorted arrays"
date:   2016-06-12
---

**Edit: Thanks heaps to [Evgeny Kluev](http://stackoverflow.com/users/1009831/evgeny-kluev), the author of that original StackOverflow answer, for noticing that I'd made a mistake in the total time complexity calculation.**

Suppose I have $latex m$ sorted arrays of length $latex n$. How quickly can I search to find the $latex k$th item in them?

[This StackOverflow answer](http://stackoverflow.com/a/26299986/1360429) mentions this problem offhandedly, but doesn't clearly explain the algorithm, and it implies that the answer it's thinking of is $latex O(m^2 \log(n)^2)$.

We can do better. You can modify quickselect to get an algorithm which takes $latex O(m \log(n) \log(m \cdot n))$ average case, and I suspect you can adapt [median of medians](https://en.wikipedia.org/wiki/Median_of_medians) to get that time in the worst case.

The quickselect adaptation is pretty simple. We're going to be do a simultaneous binary search on every array. For simplicity, let's assume that all items in arrays are unique.

We're going to need a `rank` method, which does a binary search to determine the number of items in an array smaller than its argument `x`. Here is such a method:

```ruby
# Returns the number of items in arr smaller than x.
def rank(arr, x, start_idx = 0, end_idx = nil)
  return 0 if arr.empty?

  end_idx = arr.length if end_idx.nil?

  # this makes sense I promise, I'll explain later
  return arr.length if start_idx == arr.length
  return 0 if end_idx == 0

  loop do
    mid_idx = ((start_idx + end_idx) / 2).floor

    if arr[mid_idx] == x
      return mid_idx
    elsif arr[mid_idx] > x
      return start_idx if end_idx - start_idx <= 1
      end_idx = mid_idx
    else
      return end_idx if end_idx - start_idx <= 1
      start_idx = mid_idx
    end
  end
end
```

Now here's how the select method is going to work. We're going to start by setting up a `limits` variable. Normally in binary search, you need to store two variables, `start_idx` and `end_idx`. In our case, we're going to store these two variables for every array we're working with.

Every iteration, we're going to randomly choose a pivot from the elements that haven't been ruled out yet. Then we're going to binary search all of the arrays to find the rank of the pivot in each of the arrays. We can add all these ranks together to find the rank of the pivot overall.

If the rank of the pivot is equal to `k`, then we return our pivot and stop recursing.

If the rank of the pivot is greater than `k`, our pivot is larger than the true result. So we can rule out every value which is larger than our pivot. For every array, we set its `end_idx` to the rank which it computed for the pivot.

If the rank of the pivot is smaller than k, then do the opposite: set the `start_idx` array to the rank array.

Here's an implementation of that:

```ruby
def quickselect_in_sorted_arrays(arrays, k)
  return arrays.first[k] if arrays.length == 1

  arrays.select! { |x| x.length > 0 }

  return nil if k >= arrays.map(&:count).reduce(&:+)

  # In a single binary search, we have variables `start_idx`
  # and `end_idx`.

  # In this binary search, we need those variables for
  # every array. So we'll keep them in these arrays.
  start_indexes = arrays.map { 0 }
  end_indexes = arrays.map { |arr| arr.length }

  loop do
    # Randomly select an item from the viable candidates.
    # (This is obviously not an efficient implementation)
    pivot = arrays.map
                  .with_index do |arr, idx|
                    arr[start_indexes[idx], end_indexes[idx]]
                  end
                  .flatten
                  .sample


    # Find the rank of the pivot in every array.
    pivot_ranks = arrays.map.with_index do |arr, idx|
      rank(arr, pivot, start_indexes[idx], end_indexes[idx])
    end

    # What is `pivot`'s overall rank in these arrays?
    overall_rank_of_pivot = pivot_ranks.reduce(&:+)

    if overall_rank_of_pivot == k
      # we're done! woohoo!
      return pivot
    elsif overall_rank_of_pivot > k
      # our pivot was apparently too big.

      # On the plus side, we now know that wherever our binary
      # searches just finished, everything to the right of that
      # in that array is now guaranteed not to be the result.
      pivot_ranks.each_with_index do |rank, idx|
        end_indexes[idx] = rank
      end
    else
      # If our pivot was too small, then we can rule out
      # everything to the left of those ranks.
      pivot_ranks.each_with_index do |rank, idx|
        start_indexes[idx] = rank
      end
    end
  end
end
```

For full source code including some random testcases, [look here](https://gist.github.com/bshlgrs/14801efbb27d447fa7a2afba97ab70b4).

How fast is this method? The main loop costs $latex m \log(n)$ per iteration. How many times will we run it? Well, every time we run the iteration, we cut out all the elements which are on the wrong side of the result from our pivot. Worst case, we keep choosing the worst possible pivot and only ruling it out, which means we need to run that iteration once for every item in all of the arrays. This is $latex O(m^2 n \log(n))$.

But on average, we'll cut a constant fraction of our search space out every time. So we should expect to have to do that iteration $latex \log(m\cdot n) = \log(m) + \log(n)$ times, for an overall time complexity of $latex O(m \log(n) \log(m \cdot n))$.


(Incidentally, when I was initially thinking about this, I thought we might get some speedup because our call to `rank` is going to be on a smaller and smaller section of its array every iteration throuhgh the loop. But I don't think that's true, because to get an asympotic decrease in the sum of a bunch of logarithms, you need to make your problem sizes decrease extremely quickly; exponentially decaying problem size doesn't cut it. For example:

$$O\left(\sum_{i=0}^n \log(2^i) \right) = O(\log(n)^2) = O\left(\sum_{i=0}^n \log(2^n) \right)$$

because

$$O\left(\sum_{i=0}^n i \right) = O(n^2) = O\left(\sum_{i=0}^n n \right)$$

So I don't think we can make that work.)

One final question: can we generalize the [median of medians](https://en.wikipedia.org/wiki/Median_of_medians) algorithm to get this to be guaranteed fast, rather than expected fast? The answer is almost certainly yes; I'll probably try to prove it sometime.


