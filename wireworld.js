$(function() {
  var world = {10: {3:"head", 4:"tail",5:"wire"},
               11: {2:"wire",6:"wire"},
               12: {3:"wire",4:"wire",5:"wire"}}
  var pixelsPerCell = 10;
  var screenX = 0;
  var screenY = 0;
  var canvas = $("#c")[0];
  var ctx = canvas.getContext("2d");

  var dragX;
  var dragY;

  var playingEvent = undefined;

  var colors = {"head": "rgb(255,0,0)",
                "tail": "rgb(0,0,255)",
                "wire": "rgb(200,200,100)"};

  var mode = "view";

  var drawCell = function(x, y, cellType) {
    if (cellType) {
      var startX = (x - screenX) * pixelsPerCell;
      var startY = (y - screenY) * pixelsPerCell;
      ctx.fillStyle = colors[cellType];
      ctx.fillRect(startX, startY, pixelsPerCell, pixelsPerCell);
    }
  }

  var drawWorld = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var y in world) {
      if (world.hasOwnProperty(y)) {
        for (var x in world[y]) {
          if (world[y].hasOwnProperty(x)) {
            drawCell(x, y, world[y][x]);
          }
        }
      }
    }

    if (!playingEvent) {
      ctx.fillStyle = "rgba(100, 100, 200, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }

  var evolve = function () {
    var newWorld = {};

    for (var y in world) {
      if (world.hasOwnProperty(y)) {
        y = parseInt(y);
        newWorld[y] = {}
        for (var x in world[y]) {
          if (world[y].hasOwnProperty(x)) {
            x = parseInt(x);
            var cell = world[y][x];

            if (cell == "tail") {
              newWorld[y][x] = "wire";
            } else if (cell == "head") {
              newWorld[y][x] = "tail"
            } else if (cell == "wire") {
              var count = 0;
              for (var dx = -1; dx <= 1; dx++) {
                for (var dy = -1; dy <= 1; dy++) {
                  if (world[y+dy] && world[y+dy][x+dx] == "head") {
                    count++;
                  }
                };
              };

              if (count == 1 || count == 2) {
                newWorld[y][x] = "head";
              } else {
                newWorld[y][x] = "wire";
              }
            }
          }
        }
      }
    }
    world = newWorld;
    drawWorld();
  }

  var play = function () {
    if (!playingEvent) {
      playingEvent = setInterval(evolve, 100);
    }
  }

  var pause = function () {
    if (playingEvent) {
      clearInterval(playingEvent);
      playingEvent = undefined;
      drawWorld();
    }
  }

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  function getMouseCell(canvas, evt) {
    var pos = getMousePos(canvas, evt);
    return {x: Math.floor(pos["x"] / pixelsPerCell + screenX),
            y: Math.floor(pos["y"] / pixelsPerCell + screenY)};
  }

  var mousePressed = false;

  var handleClick = function(e) {
    mousePressed = true;
    if (mode=="view") {
      var pos = getMousePos(canvas, e);
      dragX = pos["x"];
      dragY = pos["y"];
    } else if (mode == "draw") {
      var cell = getMouseCell(canvas, e);
      if (!world[cell["y"]]) {
        world[cell["y"]] = {};
      }
      if (!world[cell["y"]][cell["x"]])
        world[cell["y"]][cell["x"]] = "wire";
      else if (world[cell["y"]][cell["x"]] == "wire")
        world[cell["y"]][cell["x"]] = "head";
      else if (world[cell["y"]][cell["x"]] == "head")
        world[cell["y"]][cell["x"]] = "tail";
      else if (world[cell["y"]][cell["x"]] == "tail")
        world[cell["y"]][cell["x"]] = undefined;


      drawWorld();
    }
    e.preventDefault();
  };

  var handleUnclick = function(e) {
    mousePressed = false;
  }

  var handleDrag = function(e) {
    if (mode=="view" && mousePressed) {
      var pos = getMousePos(canvas, e);
      screenX += (dragX - pos.x)/pixelsPerCell;
      screenY += (dragY - pos.y)/pixelsPerCell;
      dragX = pos.x;
      dragY = pos.y;
      drawWorld();
    } else if (mode=="draw" && mousePressed) {
      var cell = getMouseCell(canvas, e);
      if (!world[cell.y] || !world[cell.y][cell.x]) {
        var count = 0;
        var x = cell.x;
        var y = cell.y;
        for (var dx = -1; dx <= 1; dx++) {
          for (var dy = -1; dy <= 1; dy++) {
            if (world[y+dy] && world[y+dy][x+dx] == "wire") {
              count++;
            }
          };
        };

        if (count == 1 || count == 0) {
          if (!world[cell["y"]]) {
            world[cell["y"]] = {};
          }
          if (!world[cell["y"]][cell["x"]]) {
            world[cell["y"]][cell["x"]] = "wire";
            drawWorld();
          }
        }
      }
    }
  }

  $("#step").on("click", evolve);
  $("#play").on("click", play);
  $("#pause").on("click", pause);
  $("#c").on("mousedown", handleClick);
  $("#c").on("mouseup", handleUnclick);
  $("#c").on("mousemove", handleDrag);

  $("#view").on("click", function () {
    mode = "view";
  });

  $("#draw").on("click", function() {
    mode = "draw";
  });

  $("#zoom_in").on("click", function() {
    pixelsPerCell *= 1.5;
    drawWorld();
  })

  $("#zoom_out").on("click", function() {
    pixelsPerCell /= 1.5;
    drawWorld();
  })

  drawWorld();
});