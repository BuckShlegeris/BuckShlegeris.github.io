$(function () {
  selectedPlace = "#";

  window.moveToPlace = function (place) {
    var oldLink = _($("a")).filter(function(x) {
      return $(x).attr("href") == selectedPlace;
    });

    $(oldLink).removeClass("selected");

    if (selectedPlace[0] == "#") {
      $(selectedPlace).removeClass("selected");
    }

    var newLink = $(_($("a")).filter(function(x) { return $(x).attr("href") == place; }))
    $(newLink).addClass("selected");

    if (place[0] == "#") {
      $(place).addClass("selected");
      $("html, body").scrollTop($(place).offset().top - 40);
    }

    selectedPlace = place;
  }

  places = ["#buck","./buck_shlegeris_resume.pdf","#background",
  "#programming",
  "#past-projects",
  "#submission-app",
  "#gem",
  "#compiler",
  "#other-coding",
  "#music",
  "#effective-altruism",
  "#donations",
  "http://bshlgrs.tumblr.com"]

  $(document).keydown(function(e){

    if (e.keyCode == 38) {
      placeIndex -= 1;
      if (placeIndex == -1) {
        placeIndex += places.length;
      }
      moveToPlace(places[placeIndex]);

      e.preventDefault();
    }
    if (e.keyCode == 40) {
      placeIndex += 1;
      if (placeIndex == places.length) {
        placeIndex = 0;
      }

      moveToPlace(places[placeIndex]);
      e.preventDefault();
    }
  });

  placeIndex = 0;

  moveToPlace("#buck");
})


