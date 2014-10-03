$(function () {
  var example = ["binop", "and", ["var", "x"], ["var", "y"]];

  var height= function(stuff) {
    var max = 0;
    for (var i = stuff.length - 1; i >= 0; i--) {
      max = max > stuff[i].x ? max : stuff[i].x
    };
    return max + 1;
  }

  var moveDown = function (circuit, dy) {
    for (var i = circuit.length - 1; i >= 0; i--) {
      circuit[i].y += dy;
    };
  }

  var compileExpression = function (expr, dir){
    if (!dir) {
      dir = "down";
    }

    if (expr[0] == "var") {
      return [{component_type: "var", dir: dir, x:0, y:0}];
    } else if (expr[0] == "binop") {
      var lhs = compileExpression(expr[2], "down");
      var rhs = compileExpression(expr[3], "up");
      var size_l = height(lhs);
      var size_r = height(rhs);
      moveDown(rhs, size_l);

      out = [];
      out.concat(lhs);
      out.concat(rhs);

      for (var i = size_l; i < size_l + size_r - 1; i++) {
        out.push({component_type: "wire",
                  start_dir: "up",
                  end_dir: "down",
                  x: i,
                  y: 0});
      };

      for (var i = size_r; i < size_l + size_r - 1; i++) {
        out.push({component_type: "wire",
                  start_dir: "down",
                  end_dir: "up",
                  x: i,
                  y: size_l + size_r - 1 - i});
      };

      out.push({component_type: "gate",
                  gate_type: expr[1],
                  dir: dir,
                  x: size_l + size_r - 1,
                  y: 0})

      return out;

    }
  }
});