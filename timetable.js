var rawLessons = [];
var timetableData = {};

$.get("/timetable.json", {}, function (data) {
  rawLessons = data;
  timetableData = rearrangeLessons(rawLessons);

});

var lessonTemplate = "<div class='lesson' data-name='<%= item.name %>' data-id='<%= item.id %>'><p><b><%= item.name %></b>. <i><%= item.location %></i>. <%= item.info %> <a>(remove)</a></p></div>";

var putItemInCalendar = function (item) {
  var place = _($(".timeslot")).filter(function(x) {
    return $(x).data("day") == item.day &&
                $(x).data("hour") == item.hour; })[0];
  var thing = $(_.template(lessonTemplate, { item: item }));
  $(thing.find("a")[0]).on("click", function (event) {
    event.preventDefault();
    thing.remove();
  })
  $(place).append(thing);
}

var courses = [];

var getCourse = function() {
  var courseName = $("#course-name").val().toUpperCase();
  if (courseName.length == 8 && courses.indexOf(courseName) === -1) {
    if (courseName == "ENGN1211") {
      $("#warningModal").modal();
    } else {
      $("#add-course").html("adding...");
      $("#course-name").val("");
      addCourse(courseName);
    }
  }
}

var addCourse = function (courseName) {
  data = _(rawLessons).filter(function (x) {return x.name == courseName;}).sort();

  if (data.length > 0) {
    $("#add-course").html("add course");

    _(data).each(putItemInCalendar);

    var newCourseLabel = $("<a class='btn btn-danger'>delete " + courseName + "</a>");
    $("#courses").append(newCourseLabel);
    newCourseLabel.on("click", function (event) {
      removeCourse(courseName, event);
    })
    courses.push(courseName);
    if (courseName == "MATH1115") {
      $("#math1115_ad").removeClass("hidden");
    }
  } else {
    $("#add-course").html("course not found!");
    setTimeout(function () {
      $("#add-course").html("add course");
    }, 500);
  }
}

var removeCourse = function(courseName, event) {
  event.preventDefault();
  event.target.remove();
  courses = _(courses).without(courseName);
  $(".lesson").each(function(index, lesson) {
    var $lesson = $(lesson);
    if ($lesson.data("name") == courseName) {
      $lesson.remove();
    }
  });
}

$(function() {
  $(document).keydown(function(e) {
    if (e.which == 13) {
      event.preventDefault();
      getCourse();
    }
  });

  $("#add-course").on("click", function(event) {
    getCourse();
    event.preventDefault();
  });

  $(".confirmDE").on("click", function(event) {
    $("#add-course").html("adding...");
    $("#course-name").val("");
    addCourse("ENGN1211");
  });

  $("#download").on("click", function (event) {
    var ids = _($(".lesson")).map(function(x) { return $(x).data("id") } );

    var calString = $("#cal-header").text();

    var eventTemplate = _.template($("#event-template").html());

    _(rawLessons).each(function (lesson) {
      if (ids.indexOf(lesson.id) >= 0) {
        var day = ["mon","tue","wed","thu","fri"].indexOf(lesson.day);
        calString += eventTemplate({
          padded_hour: (lesson.hour < 10 ? "0" : "") + lesson.hour,
          padded_end_hour: (lesson.hour < 9 ? "0" : "") + (lesson.hour + 1),
          first_day: 16 + day,
          day: lesson.day,
          description: lesson.info,
          location: lesson.location,
          course: lesson.name + " " + lesson.info,
          id: lesson.id,
          holiday1: (6 + day < 10) ? "0" + (6 + day) : (6 + day),
          holiday2: 13 + day
        });
      }
    });

    calString += "\nEND:VCALENDAR";
    download(calString, "anu_s1_timetable.ics", "text/plain");
  })
})