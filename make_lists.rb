json_file = <<-JAVASCRIPT
var allFiles = #{`find .`.split("\n")};
var allSubdirectories = #{`find . -type d`.split("\n")};
JAVASCRIPT

File.open("file_data.js", "w") do |f|
  f.write(json_file)
end