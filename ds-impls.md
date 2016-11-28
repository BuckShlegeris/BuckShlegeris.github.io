---
layout: post
date:   ""
title: "Implementations of data structures in practice"
---

## Hash maps

### Design questions

- what kind of hash map do you use? linear probing, quadratic probing, chaining?
- if linear probing or quadratic probing, what do you use as your tombstone?

### Practical implementations

- Python: [quadratic probing](http://www.laurentluce.com/posts/python-dictionary-implementation/)
  - source [here](https://github.com/python/cpython/blob/master/Objects/dictobject.c)
  - growth rate: [used*2 + capacity/2](https://github.com/python/cpython/blob/master/Objects/dictobject.c#L401-L412)
  - Also, there are some interesting subtleties to how the hash function works, explained in the source code [here](https://github.com/python/cpython/blob/master/Objects/dictobject.c#L132-L222).
- Java: [chaining](http://netjs.blogspot.in/2015/05/how-hashmap-internally-works-in-java.html)
  > in Java 8 hash elements use balanced trees instead of linked lists after a certain threshold is reached. Which means HashMap starts with storing Entry objects in linked list but after the number of items in a hash becomes larger than a certain threshold, the hash will change from using a linked list to a balanced tree, this will improve the worst case performance from O(n) to O(log n).
- C++ STL: [chaining](http://stackoverflow.com/a/31113618/1360429)
    > The Standard effectively mandates std::unordered_set and std::unordered_map implementations that use open hashing, which means an array of buckets, each of which holds the head of a logical (and typically actual) list. That requirement is subtle: it's a consequence of the default max load factor being 1.0 and the guarantee that the table will not be rehashed unless grown beyond that load factor: that would be impractical without chaining, as the collisions with closed hashing become overwhelming as the load factor approaches 1
- Ruby: [this sketchy site says chaining](https://www.sitepoint.com/diving-into-how-hashes-work-in-ruby/)
- Google SparseHash: [quadratic probing](https://github.com/sparsehash/sparsehash)
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

