---
layout: post
title:  "Hyperactive Record"
date:   2016-04-14
tags: programming
---

Here is a fun open source project which someone should build! I've written a readme and put it [on Github](https://github.com/bshlgrs/HyperactiveRecord/blob/master/README.md) but I don't think I have the time to actually build this. I present it here in the hope that one of you might decide that you like it and want to build it!

It's called HyperactiveRecord. It's an ActiveRecord plugin which tries harder to provide an intuitive, consistent, simple interface for SQL.

For example. You're making a blog site. You have posts and comments. Posts are either public or private. I want to load all of the publicly available comments of a user--that is, all their comments which are on public posts. (I use this example because it's analogous to something that I did at work today.)

Here’s what I intuitively want to do: `user.comments.filter { |c| c.post.public }`. This is much simpler and more readable than the ActiveRecord solution. I want to make a library whose goal is to be as simple, composable, and unsurprising as that. We’re already used to the APIs of map, flatMap, filter, reduce, and so on. That’s how our queries should work.

This would be written basically the same way ActiveRecord is: each query method is just constructing a lazy query object which is only actually executed when accessed. Making DSLs which accept blocks is already done in Ruby all over the place; why not do it here too?

There are some super fun places you could take this project. For example, a SQL enthusiast could devote themselves to the project of building a query generator for recursive method calls. That is, compiling

```ruby
class Comment
  def descendants
     Hyperactive.union(self, self.children.flat_map(&:descendants)
  end
end
```

into something which you can do in SQL with stored procedures or whatever. You’d have to do this by building the query graph, detecting the cycle, and doing magic SQL things which I don’t understand.

I think this would be a super fun project! The one downside is that it involves learning to deal with ActiveRecord, which seems potentially difficult. If you want to just build a proof of concept, you could build this as a standalone library with Arel or just building SQL queries manually.

I’d love to work with someone on this if they wanted to do the bulk of the implementation work!
