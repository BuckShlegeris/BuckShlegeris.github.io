#!/usr/bin/ruby

command = ARGV[0]

case command
when "draft"
  p ARGV[1]
  File.write("drafts/#{ARGV[1]}.md", <<-MD
---
layout: post
title:  "#{ARGV[1]}"
date: "not a real date"
---

hello!
MD
  )
  `subl drafts/#{ARGV[1]}.md`
  `sleep 1 && open http://localhost:4000/drafts/#{ARGV[1]}`
when "post"
  name = ARGV[1].split("/").last

  now = Time.now
  date_string = "#{Time.now.year}-#{Time.now.month}-#{Time.now.day}"
  new_path = "_posts/#{date_string}-#{name}"
  `sed -e 's/\"not a real date\"/#{date_string}/' #{ARGV[1]} > #{new_path}`
  `rm #{ARGV[1]}`
when "unpost"
  `mv #{ARGV[1]} drafts/#{ARGV[1].split("/").last}`
when "fb"
  string = File.read(ARGV[1])
  # references = string.scan(/\[[^\]]*\]\(([\)]*\))/)
  references = string.scan(/\[[^\]]*\]\(([^\)]*)\)/).map(&:first)
  p references
  n = 0
  puts string.gsub(/\[([^\]]*)\]\([^\)]*\)/) { n += 1; Regexp.last_match[1] + "[#{n.to_s}]" }
end
