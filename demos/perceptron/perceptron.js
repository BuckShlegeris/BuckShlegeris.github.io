
var svg = document.getElementById("perceptron-svg");
var WIDTH = 600;
var HEIGHT = 600;
var SCALE = 50;

function drawingX(x) {
  return x * SCALE + WIDTH / 2;
}

function drawingY(y) {
  return -y * SCALE + WIDTH / 2;
}

function draw(circles, xWeight, yWeight) {
  var circlesSvg = circles.map((c) =>
    `<circle cx=${drawingX(c.x)} cy=${drawingY(c.y)} r="10" class="circle" />`
  ).join("\n");

  var xAxis = `<line x1="0" x2="${WIDTH}" y1="${HEIGHT / 2}" y2="${HEIGHT / 2}" class="axis" />`
  var yAxis = `<line y1="0" y2="${HEIGHT}" x1="${WIDTH / 2}" x2="${WIDTH / 2}" class="axis" />`

  return circlesSvg + xAxis + yAxis; 
}

console.log("drawing");
svg.innerHTML = draw([{x: 1, y: 3}, {x: 2, y: 5}]);
