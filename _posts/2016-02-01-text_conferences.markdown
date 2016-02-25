---
layout: post
title:  "Talking at tech conferences"
date:   2016-02-01 10:23:59 -0800
---



If you're a good programmer, you can probably give a talk at a mediocre tech conference with as little as 20 hours of work. I think this is plausibly a good use of your time.


## My story

Last year, on a whim I submitted an abstract to Scala By The Bay. My abstract was about an open source project which I hadn't actually started writing yet. At the time, I had about four months of experience as a full time software engineer. They accepted my talk. (They gave me a 20 minute slot because I asked for one; in retrospect I should have asked for more.)

After recovering from the surprise of my abstract being accepted, I then spent 100+ hours writing the software that I eventually presented on, and 10+ hours practicing my presentation.

I then went to the conference (which I attended for free as a speaker; my manager was happy to give me the time off work without me using up PTO, which I think is typical.) My presentation was fun to give, and I got a neat video of it:

<iframe width="560" height="315" src="https://www.youtube.com/embed/oPFga7eg3Uw" frameborder="0" allowfullscreen></iframe>

After I did this presentation, I started getting way more recruiter spam for Scala jobs. More interestingly, a software book publishing company contacted me and asked if I was interested in writing a book for them. (It seemed like I'd end up making ballpark $25 an hour for writing the book, and I thought I could create career capital and income more effectively other ways, so I didn't end up doing it. But it was nice that they asked.)

I didn't get that much value from networking with the people I met at the conference; a bunch of people tried to get me to apply to their companies/startups, but I could have found most of those jobs anyway on the internet.

However, I've gotten a shit ton of value out of putting this project on my resume, and talking about it to potential employers. I think it's plausible that this presentation increased my annual salary by $10k. If I did 100 hours of work for $10k annual salary boost that only lasted for a year, that's $100 per hour, which is a pretty nice wage. (I also got other advantages out of doing this project, like becoming much more knowledgeable about data structures, and getting experience designing pretty complex and abstract software. I don’t know how much benefit I got from the actual learning vs the looking smarter.)

## How to

Suppose that you wanted to get this kind of advantage without putting in that much work, and without having particular inspiration for a project. How do you do it? Here are some ideas for talks that you can do without even doing any programming:

- Talk about something you’ve done at work. “How we used functional programming constructs to make hardened, well tested production code” is a totally passable talk.

- Give an introduction to a technical topic. Offer to explain technical details of eg efficiency considerations and best practices with Rails view rendering. (If they accept you, you can then probably learn enough about the topic to interest your audience.)

- Look up the hot new libraries in your programming language of choice; give a presentation about the basics of that library. As an example, John Backus's [blog post about mutation testing](https://blog.blockscore.com/how-to-write-better-code-using-mutation-testing/) is just begging to be adapted into a conference presentation. You can find other blog posts to plagiarize on Hacker News.

Got slightly more time and want to present on your hot open source project? I have the best sense of the Scala landscape, so I’ll be talking only about that here. Here are some ideas I have for projects which I bet I could get into a Scala conference with. I will probably present something like this at a conference this year.

There’s a bunch of hype about [Scala.js](http://www.scala-js.org/), which means easy conference presentations about it. These ideas look like some of the low hanging fruit to me. Easiest project: make Scala.js work with Meteor by writing the type shims for it, present on that. Alternative ideas: Implement a shitty prototype of something like Meteor in Scala. Implement a framework which can compile either to JS React apps or native Android apps: this just involves coming up with a UI DSL then writing functions which export from that to Android or Javascript, which involves me learning Android, which is like 10 hours of learning (less if I convince a friend to help me with it).

If you want to steal any of these ideas and present on them at a conference, please be my guest (but if you talk to me about it I can give you more advice, and I’d appreciate knowing about my influence :smile: ).

If you want to talk to me about doing tech conferences, I’m happy to try and share advice with you.

