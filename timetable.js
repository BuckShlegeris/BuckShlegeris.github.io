 var timetable_data = [];

  $.get("/timetable.json", {}, function (data) {
    timetable_data = data;
  })

  var lesson_template = "<div class='lesson' data-name='<%= item.name %>' data-id='<%= item.id %>'><p><b><%= item.name %></b>. <i><%= item.location %></i>. <%= item.info %> <a>(remove)</a></p></div>";

  var putItemInCalendar = function (item) {
    var place = _($(".timeslot")).filter(function(x) {
      return $(x).data("day") == item.day &&
                  $(x).data("hour") == item.hour; })[0];
    var thing = $(_.template(lesson_template, { item: item }));
    $(thing.find("a")[0]).on("click", function (event) {
      event.preventDefault();
      thing.remove();
    })
    $(place).append(thing);
  }

  var courses = [];

  var getCourse = function() {
    var course_name = $("#course-name").val().toUpperCase();
    if (course_name.length == 8 && courses.indexOf(course_name) === -1) {
      if (course_name == "ENGN1211") {
        $("#warningModal").modal();
      } else {
        $("#add-course").html("adding...");
        $("#course-name").val("");
        addCourse(course_name);
      }
    }
  }

  var addCourse = function (course_name) {
    data = _(timetable_data).filter(function (x) {return x.name == course_name;})
    if (data.length > 0) {
      $("#add-course").html("add course");
      _(data).each(putItemInCalendar);
      var new_course_label = $("<a class='btn btn-danger'>delete " + course_name + "</a>");
      $("#courses").append(new_course_label);
      new_course_label.on("click", function (event) {
        removeCourse(course_name, event);
      })
      courses.push(course_name);
      if (course_name == "MATH1115") {
        $("#math1115_ad").removeClass("hidden");
      }
    } else {
      $("#add-course").html("course not found!");
      setTimeout(function () {
        $("#add-course").html("add course");
      }, 500);
    }
  }

  var removeCourse = function(course_name, event) {
    event.preventDefault();
    event.target.remove();
    courses = _(courses).without(course_name);
    $(".lesson").each(function(index, lesson) {
      var $lesson = $(lesson);
      if ($lesson.data("name") == course_name) {
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

      var cal_string = $("#cal-header").text();

      var event_template = _.template($("#event-template").html());

      _(timetable_data).each(function (lesson) {
        if (ids.indexOf(lesson.id) >= 0) {
          var day = ["mon","tue","wed","thu","fri"].indexOf(lesson.day);
          cal_string += event_template({
            padded_hour: (lesson.hour < 10 ? "0" : "") + lesson.hour,
            padded_next_hour: (lesson.hour < 9 ? "0" : "") + (lesson.hour + 1),
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

      cal_string += "\nEND:VCALENDAR";
      download(cal_string, "anu_s1_timetable.ics", "text/plain");
    })
  })