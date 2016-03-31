---
layout: post
date:   2016-03-11
---

# Basic scaling advice

So you’ve made a pretty standard web application which currently has two components: a database and an application server. Your website suddenly gets super popular. How do you scale it? Here’s my opinionated and incomplete answer.

The first step in scaling a system is to make sure you have thorough monitoring and logging. This way, when something breaks, you’ll know what it is. Common tools for this include NewRelic, Nagios, and platform specific tools on AWS

Typically the first bottlenecks in your application will be that your database is getting too many reads, and that your application server is getting too many requests.

## Scaling your application layer

When your application server is too slow, you have to split it into multiple servers. This is normally relatively easy because your application server should be stateless, so you don’t need any synchronization between machines. You can just put it on multiple machines and have a load balancer give incoming requests to different servers, typically using a round-robin approach where they take turns.

## Scaling your database

The first step for scaling your database is optimizing your queries. Use your monitoring tool to determine which queries are taking the most time. Add or change indexes on the appropriate tables to make those queries faster. If your database is still struggling, next you want to try vertical scaling.

The next step is adding a caching layer. Caching layers let you store particular data for a predetermined amount of time. For example, Reddit probably caches their front page so that they don’t have to recalculate the top posts every time someone goes to reddit.com. The most popular caching server is Redis.

One obvious question with caching is how you decide what pages to cache. I often hear people propose super complicated schemes for determining popularity of pages. It turns out that the easiest and most popular solution is a least-recently-used or LRU cache. This means that when your cache is full and you want to add a new thing to it, you replace the item in your cache which was least recently used.

When you’ve done as much caching as you can, you probably want to try adding read slaves. Read slaves are basically clones of your database which let you run queries, but don’t let you modify data. So all write requests are still directed to the master database. Every few minutes the read slaves update their data to match the contents of the master database.

## Sharding

Sharding is when you split your SQL database into multiple databases. You can shard either by concern, eg having all your user-related tables on one machine and all your product-related tables on another, or by location, eg having one database for California and another for New York.

Sharding is really annoying and difficult to do. It is not a good idea to immediately suggest sharding as soon as someone asks you how to scale your database. People often suggest it anyway :(

## Other resources

To solidify some of these concepts, I recommend reading some descriptions of the stacks of various mid-sized websites, like [Imgur](https://blog.imgur.com/2013/06/04/tech-tuesday-our-technology-stack/) and [Patreon](http://highscalability.squarespace.com/blog/2016/2/1/a-patreon-architecture-short.html). I also like the links and advice provided [here](http://www.hiredintech.com/system-design).

[This](https://blog.hartleybrody.com/scale-load/) is a good blog post which says the same things I said here, but it’s more detailed about specific technologies.

[This](https://www.airpair.com/aws/posts/building-a-scalable-web-app-on-amazon-web-services-p1) is a great post with even more detail about scaling, specifically on AWS. It’s really long and detailed, but it’s a good read.
