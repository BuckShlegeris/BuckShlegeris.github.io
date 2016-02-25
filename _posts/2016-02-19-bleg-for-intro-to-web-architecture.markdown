---
layout: post
title:  "Bleg for intro to web architecture"
date:   2016-02-19
---
I want a good resource for learning about general concepts in web application architecture?
Most of the content would be grouped by application layer. So the main sections would be like: data persistence, application servers, caching layers...

For example, the data persistence section would cover material like this: the current landscape of relational databases, basic SQL table design stuff, database indexes (what they are, a little about how they’re implemented, what a composite index is), what a query planner is, what the sql command EXPLAIN is, what normalization is, what an ORM is and why it makes sense to use it (eg reducing SQL injection vulnerability, agnosticism about database configuation). Then it would talk about database scaling: “When you want to scale a database, start out by checking your indexes and looking for the most time-consuming queries. Scale up before scaling out. To deal with read load, use read slaves. Then you might consider splitting up your database by concerns. If that’s not enough, you might need to shard your database. You also might consider batched writes.” Then it would give an introduction to distributed databases and why they’re a nightmare. Then it would talk about NoSQL databases like Mongo and Cassandra, and talk about their advantages and disadvantages and scaling properties. Finally it would talk about how you should use S3 or your own FTP server to store user-provided files.

One problem with this topic is that it’s rapidly changing, and a lot of it is quite subjective, so it’s kind of hard to write about.

[This article](https://www.airpair.com/aws/posts/building-a-scalable-web-app-on-amazon-web-services-p1) covers similar material to what I'm interested in, but talks too much about practicalities and not enough about the relevant concepts. [highscalability.com](http://highscalability.com/) is full of case studies which you can read one at a time to get many of these concepts, but that isn’t quite as systematic as I’d like.

In lieu of this resource, my current approach is to ask people about a bunch of subtopics (database indexes, what normalization is…) and then for every subtopic, send them a link to a short article on it if they don’t know much about it. But this doesn’t work very well when they know very little about a topic and need an introduction to all of it.
