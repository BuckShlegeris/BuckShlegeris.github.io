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

    var newLink = $(_($("a")).filter(function(x) { return $(x).attr("href") == place; }))[0]
    $(newLink).addClass("selected");

    if (place[0] == "#") {
      $(place).addClass("selected");
      $("html, body").scrollTop($(place).offset().top - 40);
    }

    selectedPlace = place;

    $("#helpful-hint").hide();
  }

  places = _($("#sidebar").find("a")).map(function(x) { return $(x).attr("href") });

  $(document).keydown(function(e){
    if (e.which == 13) {
      window.open(places[placeIndex], places[placeIndex]=="./browser.html"? "_self" : 0)
      e.preventDefault();
    }
    if (e.which == 38 || e.which == 37) {
      placeIndex -= 1;
      if (placeIndex == -1) {
        placeIndex += places.length;
      }
      moveToPlace(places[placeIndex]);

      e.preventDefault();
    }
    if (e.which == 40 || e.which == 39) {
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
  $("#helpful-hint").show();
})


