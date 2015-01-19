var lessons = [];

var table = $($("center table")[0]);

var $rows = $(table.find("tbody")[0]).children();

var num = 0;
for (var hour = 1; hour < $rows.length; hour++) {
  var row = $($rows[hour]).children();

  for (var day = 1; day < row.length; day++) {
    var $cell = $(row[day]);
    var data = $($cell.children()[0]).children();

    var lesson = {id: num++};

    for (var k = 0; k < data.length; k++) {
      var shitty_thing = $(data[k]);
      if (shitty_thing.is("font")) {
        if (shitty_thing.attr("size") != "-2") {
          var stuff = shitty_thing.text();
          lesson.name = stuff.slice(0,8);
          lesson.info = stuff.slice(11);
        } else {
          lesson.location = shitty_thing.html().slice(6);
        }
      }
      else if (shitty_thing.is("hr")) {
        lesson.hour = hour + 7;
        lesson.day = ["mon","tue","wed","thu","fri"][day - 1];
        lessons.push(lesson);
        lesson = {id: num++};
      }
    };
    if (lesson.course) {
      lesson.hour = hour + 7;
      lesson.day = ["mon","tue","wed","thu","fri"][day - 1];
      lessons.push(lesson);
    }
  };
};

console.log(JSON.stringify(lessons));