require "set"

facts = []
sets = Set.new()

File.open("real-analysis.txt").each_line do |line|
  a, b = line.chomp.split("->").map(&:strip)
  facts << [a, b]
  sets.add(a)
  sets.add(b)
end

def correct_answer(start, target, theorems)
  if implies(start, target, theorems)
    "all"
  elsif implies(target, start, theorems)
    "some"
  else
    "none"
  end
end

def implies(start, target, theorems)
  if start == target
    true
  else
    theorems.select do |theorem|
      theorem[0] == start
    end.any? do |theorem|
      implies(theorem[1], target, theorems)
    end
  end
end

loop do
  item1 = sets.to_a.sample
  item2 = sets.to_a.sample
  next if item1 == item2

  puts "How many #{item1} are #{item2}? (some, all, none)"
  answer = gets.chomp
  the_correct_answer = correct_answer(item1, item2, facts)
  if answer == the_correct_answer
    puts "Great job!"
  else
    puts "Wrong, dipshit! the right answer is #{the_correct_answer}"
  end

  puts "\n"
end
