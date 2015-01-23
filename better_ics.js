(function (thing) {
  var BetterICS = thing.BetterICS = {};

  var Calendar = BetterICS.Calendar = function (options) {
    this.events = [];
    this.options = {}

    for (key in calendarDefaults){
      this.options[key] = calendarDefaults[key];
    }

    for (key in options) {
      this.options[key] = options[key];
    }
  };

  var calendarDefaults = {
    calendarName: "",
    timezone: "America/Los Angeles",
    calendarDescription: ""
  }

  var calendarHeader = _.template([
    "BEGIN:VCALENDAR",
    "PRODID:-//Google Inc//Google Calendar 70.9054//EN",
    "VERSION:2.0",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:<%= calendarName %>",
    "X-WR-TIMEZONE:<%= timezone %>",
    "X-WR-CALDESC:<%= calendarDescription %>"
  ].join("\n"));

  Calendar.prototype.render = function () {
    var start = calendarHeader(this.options);
    var end = "END:VCALENDAR";
  };

  Calendar.prototype.addEvent = function(event) {
    this.events.push(event);
  };

  var eventTemplate = _.template([
    "BEGIN:VEVENT",
    "DTSTART;TZID=Australia/Sydney:201502<%= first_day %>T<%= padded_hour %>0000",
    "DTEND;TZID=Australia/Sydney:201502<%= first_day %>T<%= padded_end_hour %>0000",
    "RRULE:FREQ=WEEKLY;COUNT=15;BYDAY=<%= day.slice(0,2).toUpperCase() %>",
    "EXDATE;TZID=Australia/Sydney:201504<%= holiday2 %>T<%= padded_hour %>0000",
    "EXDATE;TZID=Australia/Sydney:201504<%= holiday1 %>T<%= padded_hour %>0000",
    "DTSTAMP:20150119T180209Z",
    "CREATED:20150119T172444Z",
    "DESCRIPTION:<%= description %>",
    "LAST-MODIFIED:20150119T172540Z",
    "LOCATION:<%= location %>",
    "SEQUENCE:1",
    "UID:buck_anu2015s1_<%= id %>",
    "STATUS:CONFIRMED",
    "SUMMARY:<%= course %>",
    "TRANSP:OPAQUE",
    "END:VEVENT"
  ].join("\n"));

})(this)