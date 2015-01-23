(function (thing) {
  var BetterICS = thing.BetterICS = {};

  var Calendar = BetterICS.Calendar = function (options) {
    this.events = [];
    this.options = calendarDefaults;
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
    return calendarHeader(this.options);
  };

  Calendar.prototype.addEvent = function(event) {
    this.events.push(event);
  };

})(this)