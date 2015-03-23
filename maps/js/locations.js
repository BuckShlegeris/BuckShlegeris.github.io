$(function () {
  var Location = function (lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }

  Location.prototype.toArray = function () {
    return [this.lon, this.lat];
  }

  var events = [];

  $.get("./history-03-22-2015.kml", function (data) {
    var $data = $(data);
    var whens = $data.find("when");
    var coords = $data.find("coord");

    for (var i = 0; i < whens.length; i++) {
      var dateTime = new Date($(whens[i]).text());
      var placeText = $(coords[i]).text().split(" ")
      events.push([dateTime, new Location(Number(placeText[0]), Number(placeText[1]))]);
    };
  
    initializeMaps();
  });

  var initializeMaps = function () {
    var firstLocation = events[0][1]
    // create a map in the "map" div, set the view to a given place and zoom
    
    var map = L.map('map').setView(firstLocation.toArray(), 10);

    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var latLngs = _(events).map(function(x) {
      return x[1].toArray();
    });

    var polyline = L.polyline(latLngs, {color: 'red'}).addTo(map);
    map.fitBounds(polyline.getBounds());
  }
});