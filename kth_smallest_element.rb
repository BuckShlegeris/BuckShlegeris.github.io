
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

def single_test
  arrays = Array.new(Random.rand(30) + 1) { Array.new(Random.rand(30) + 1) { Random.rand }.sort }

  proper = arrays.flatten.sort

  item = proper.sample

  item == quickselect_in_sorted_arrays(arrays, proper.index(item))
end

def test
  1000.times do
    fail unless single_test
  end
end

test
