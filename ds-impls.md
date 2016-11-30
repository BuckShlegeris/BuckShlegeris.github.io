---
layout: post
date:   ""
title: "Implementations of data structures in practice"
---

thanks heaps to Kent Ross for helping me out with a bunch of this.

## Hash maps

### Design questions

- what kind of hash map do you use? linear probing, quadratic probing, chaining?
- if linear probing or quadratic probing, what do you use as your tombstone?

### Practical implementations

- Python: [open addressing with a funky scheme](http://www.laurentluce.com/posts/python-dictionary-implementation/). According to that article:
  > the dictionary is resized if the number of used slots + dummy slots is greater than 2/3 of the array’s size."
  >
  > Note that the delete item operation doesn’t trigger an array resize if the number of used slots is much less that the total number of slots. However, when a key/value pair is added, the need for resize is based on the number of used slots + dummy slots so it can shrink the array too."
  >
  > dictresize() is called with minused = 24 in our case which is 4 * ma_used. 2 * ma_used is used when the number of used slots is very large (greater than 50000).
  - source code [here](https://github.com/python/cpython/blob/master/Objects/dictobject.c)
  - Relevant video [here](https://www.youtube.com/watch?v=rWdF7oW6z18).
  - The open addressing scheme is explained in the source code [here](https://github.com/python/cpython/blob/master/Objects/dictobject.c#L132-L222). The core of the loop is like this:

```c
i = hash, perturb = hash;
do {
    i = 5*i + 1 + perturb;
    perturb >>= 5;
    check_index(i % size);
}
```

- Java: [chaining](http://netjs.blogspot.in/2015/05/how-hashmap-internally-works-in-java.html)
  > in Java 8 hash elements use balanced trees instead of linked lists after a certain threshold is reached. Which means HashMap starts with storing Entry objects in linked list but after the number of items in a hash becomes larger than a certain threshold, the hash will change from using a linked list to a balanced tree, this will improve the worst case performance from O(n) to O(log n).
  - According to [here](http://www.nurkiewicz.com/2014/04/hashmap-performance-improvements-in.html) the threshold is 8 elements
    > Well, this optimization is described in [JEP-180](http://openjdk.java.net/jeps/180). Basically when a bucket becomes too big (currently: `TREEIFY_THRESHOLD = 8`), `HashMap` dynamically replaces it with an ad-hoc implementation of tree map. This way rather than having pessimistic O(n) we get much better O(logn). How does it work? Well, previously entries with conflicting keys were simply appended to linked list, which later had to be traversed. Now `HashMap` promotes list into binary tree, using hash code as a branching variable. If two hashes are different but ended up in the same bucket, one is considered bigger and goes to the right. If hashes are equal (as in our case), `HashMap` hopes that the keys are `Comparable`, so that it can establish some order. This is not a requirement of `HashMap` keys, but apparently a good practice. If keys are not comparable, don't expect any performance improvements in case of heavy hash collisions.
- C/C++:
  - STL: [chaining](http://stackoverflow.com/a/31113618/1360429)
    > The Standard effectively mandates std::unordered_set and std::unordered_map implementations that use open hashing, which means an array of buckets, each of which holds the head of a logical (and typically actual) list. That requirement is subtle: it's a consequence of the default max load factor being 1.0 and the guarantee that the table will not be rehashed unless grown beyond that load factor: that would be impractical without chaining, as the collisions with closed hashing become overwhelming as the load factor approaches 1
  - Linux has a [fixed sized hashtable which uses chaining](http://lxr.free-electrons.com/source/include/linux/hashtable.h), which it uses internally [a bunch of places](https://www.quora.com/How-are-hash-tables-implemented-in-Linux-Kernel-How-do-they-work-for-different-data-types-and-structures/answer/Davidlohr-Bueso).
  - Google SparseHashMap and DenseHashMap: [quadratic probing](https://github.com/sparsehash/sparsehash)
    > This directory contains several hash-map implementations, similar in API to SGI's hash_map class, but with different performance characteristics.  sparse_hash_map uses very little space overhead, 1-2 bits per entry.  dense_hash_map is very fast, particulary on lookup. (sparse_hash_set and dense_hash_set are the set versions of these routines.)  On the other hand, these classes have requirements that may not make them appropriate for all applications.
    >
    > All these implementation use a hashtable with internal quadratic probing.  This method is space-efficient -- there is no pointer overhead -- and time-efficient for good hash functions.
    >
    > ...
    >
    >   The usage of these classes differ from SGI's hash_map, and other
     hashtable implementations, in the following major ways:
    >
    > 1) dense_hash_map requires you to set aside one key value as the 'empty bucket' value, set via the set_empty_key() method.  This *MUST* be called before you can use the dense_hash_map.  It is illegal to insert any elements into a dense_hash_map whose key is equal to the empty-key.
    >
    > 2) For both dense_hash_map and sparse_hash_map, if you wish to delete elements from the hashtable, you must set aside a key value as the 'deleted bucket' value, set via the set_deleted_key() method.  If your hash-map is insert-only, there is no need to call this method.  If you call set_deleted_key(), it is illegal to insert any elements into a dense_hash_map or sparse_hash_map whose key is equal to the deleted-key.
- Ruby: [this sketchy site says chaining](https://www.sitepoint.com/diving-into-how-hashes-work-in-ruby/)
  - source [here](https://github.com/ruby/ruby/blob/1b5acebef2d447a3dbed6cf5e146fda74b81f10d/st.c)
  - Kent comments:
  > The struct is hash, key, record, *next, *fore, *back. So it's a linked hash set with buckets, and a threshold load factor of 500%. They seem ready to, but not yet actually, use custom allocation methods to put them close together, and will at least reallocate all the bins together when copying I think. It looks like it has a 'packed' mode too presumably for passing hashes around on the stack or something. That has up to... 18 entries? seems like a lot. But yeah no special care is taken in this code to allocate them anywhere in particular.
  >
  > Bucket count in this code is always a power of two, bitmasked, according to line 89
- JRuby: chaining
  - [source](https://github.com/jruby/jruby/blob/master/core/src/main/java/org/jruby/RubyHash.java)
  >  Design overview:
  >
  > RubyHash is implemented as hash table with a singly-linked list of RubyHash.RubyHashEntry objects for each bucket.  RubyHashEntry objects are also kept in a doubly-linked list which reflects their insertion order and is used for iteration.
  - It also has [min capacity 8 and a max load factor of five](https://github.com/jruby/jruby/blob/master/core/src/main/java/org/jruby/RubyHash.java#L476-L477)
- Rust: ["linear probing with Robin Hood bucket stealing."](https://doc.rust-lang.org/std/collections/struct.HashMap.html)
  - this had a [super neat bug](http://accidentallyquadratic.tumblr.com/post/153545455987/rust-hash-iteration-reinsertion)
- C#: [open addressing with double hashing](https://msdn.microsoft.com/en-us/library/ms379571(v=vs.80).aspx#datastructures20_2_topic5)
  - From the same article, this hilarious tidbit:
  > In an overloaded form of the Hashtable's constructor, you can specify a loadFactor value between 0.1 and 1.0. Realize, however, that whatever value you provide, it is scaled down 72%, so even if you pass in a value of 1.0 the Hashtable class's actual loadFactor will be 0.72. The 0.72 was found by Microsoft to be the optimal load factor, so consider using the default 1.0 load factor value (which gets scaled automatically to 0.72). Therefore, you would be encouraged to use the default of 1.0 (which is really 0.72).
  - Also, that documentation consistently writes 'rehasing' when I am almost sure they mean 'rehashing'
- Golang [uses chaining](https://golang.org/src/runtime/hashmap.go):
    > A map is just a hash table. The data is arranged
    > into an array of buckets. Each bucket contains up to
    > 8 key/value pairs. The low-order bits of the hash are
    > used to select a bucket. Each bucket contains a few
    > high-order bits of each hash to distinguish the entries
    > within a single bucket.
    >
    > If more than 8 keys hash to a bucket, we chain on
    > extra buckets.
    >
    > When the hashtable grows, we allocate a new array
    > of buckets twice as big. Buckets are incrementally
    > copied from the old bucket array to the new bucket array.
    >

  According to the same file, the default average load factor at which a resizing is triggered is 6.5.
- PHP [uses chaining](http://nikic.github.io/2014/12/22/PHPs-new-hashtable-implementation.html)
  - Also, PHP hash tables are ordered by default, which [sparks controversy on HN](https://news.ycombinator.com/item?id=8787638). (In case you were wondering, my opinion is that having your hashmaps ordered by default is awful.)
