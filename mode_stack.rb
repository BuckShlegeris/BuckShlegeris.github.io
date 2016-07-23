
# This class contains a map from items to counts. It supports the following methods:

# getItemWithMaximumCount()
# incrementCount(item)
# decrementCount(item)
# insertItemWithCount1(item)

# All operations take constant time.

class FrequencyTracker
  attr_reader :map_from_items_to_nodes

  def initialize
    @top_tier = Tier.new(1)
    @bottom_tier = @top_tier
    @map_from_items_to_nodes = {}
  end

  def get_item_with_maximum_count
    @top_tier.favorite_node.item
  end

  def increment_count!(item)
    fail unless map_from_items_to_nodes[item]

    map_from_items_to_nodes[item].increment!
  end

  def decrement_count!(item)
    fail unless map_from_items_to_nodes[item]

    map_from_items_to_nodes[item].decrement!
  end

  class Tier
    attr_accessor :favorite_node

    def initialize(count)
      @count = count
      # This is just any node in the list. It doesn't matter which.
      @favorite_node = nil
    end

    def insert!(node)
      @favorite_node.prev.next = node if @favorite_node.prev
      @favorite_node.next.prev = node if @favorite_node.next
    end
  end

  class Node
    attr_accessor :next, :prev, :tier

    def initialize(item, tier)
      @item = item
      @tier = tier
      @next = nil
      @prev = nil
    end

    def detach_self!
      if self.tier.favorite_node == self
        self.tier.favorite_node = @next || @prev
      end

      @next.prev = @prev if @next
      @prev.next = @next if @prev
    end

    def increment!
      detach_self!

      next_tier = tier.get_or_create_next_tier

      next_tier.insert!(node)
    end
  end
end
