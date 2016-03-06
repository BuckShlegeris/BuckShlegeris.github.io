// // main.js
// var React = require('react');
// var ReactDOM = require('react-dom');
// var $ = require('jquery');

var renderThings = {}

renderThings.Example = <h1>Hello, world!</h1>;

var ABApp = renderThings.ABApp = React.createClass({
  getInitialState() {
    return {
      controlConversions: "1",
      controlTotal: "10",
      experimentalConversions: "2",
      experimentalTotal: "10"
    }
  },

  controlConversions() {
    return parseInt(this.state.controlConversions);
  },

  controlTotal() {
    return parseInt(this.state.controlTotal);
  },

  experimentalConversions() {
    return parseInt(this.state.experimentalConversions);
  },

  experimentalTotal() {
    return parseInt(this.state.experimentalTotal);
  },

  setA1(e) {
    this.setState({controlConversions: e.target.value});
  },

  setA2(e) {
    this.setState({controlTotal: e.target.value});
  },

  setB1(e) {
    this.setState({experimentalConversions: e.target.value});
  },

  setB2(e) {
    this.setState({experimentalTotal: e.target.value});
  },

  controlFraction() {
    return this.controlConversions() / this.controlTotal();
  },

  experimentalFraction() {
    return this.experimentalConversions() / this.experimentalTotal();
  },

  overallConversions () {
    return this.controlConversions() + this.experimentalConversions();
  },

  overallTotal () {
    return this.controlTotal() + this.experimentalTotal();
  },

  overallFraction () {
    return this.overallConversions() / this.overallTotal();
  },

  render() {
    return (
      <div>
        <h3>AB app</h3>

        <div className="panel panel-default">
          <div className="panel-body">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th/>
                  <th>Conversions</th>
                  <th>Total</th>
                  <th>Percentage</th>
                </tr>
                <tr>
                  <td>Control group</td>
                  <td>
                    <input
                      value={this.state.controlConversions}
                      onChange={this.setA1}/>
                  </td>
                  <td>
                    <input
                      value={this.state.controlTotal}
                      onChange={this.setA2}/>
                  </td>
                  <td>{(this.controlFraction() * 100).toPrecision(2)}%</td>
                </tr>
                <tr>
                  <td>Experimental group</td>
                  <td>
                    <input
                      value={this.state.experimentalConversions}
                      onChange={this.setB1}/>
                  </td>
                  <td>
                    <input
                      value={this.state.experimentalTotal}
                      onChange={this.setB2}/>
                  </td>
                  <td>{(this.experimentalFraction() * 100).toPrecision(2)}%</td>
                </tr>
                <tr>
                  <td>Overall</td>
                  <td>{this.overallConversions()}</td>
                  <td>{this.overallTotal()}</td>
                  <td>{(this.overallFraction() * 100).toPrecision(2)}%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h4>Likelihood ratios</h4>
        <LikelihoodRatioGraph
          controlConversions={this.controlConversions()}
          controlTotal={this.controlTotal()}
          experimentalConversions={this.experimentalConversions()}
          experimentalTotal={this.experimentalTotal()} />
      </div>);
  }
});

var LikelihoodRatioGraph = React.createClass({
  getInitialState() {
    return {
      mouseIsOver: false,
      mouseEffectSize: null,
      mouseLikelihood: null
    }
  },
  onCanvasMouseMove(info) {
    this.setState({
      mouseIsOver: true,
      mouseEffectSize: info.graphX,
      mouseLikelihood: this.likelihoodFunction(info.graphX)
    });
  },
  likelihoodFunction (effectSize) {
    var controlP = this.props.controlConversions / this.props.controlTotal;
    var successes = this.props.experimentalConversions;
    var failures = this.props.experimentalTotal - this.props.experimentalConversions;

    var p = effectSize + controlP;
    return p ** successes * (1 - p) ** failures;
  },
  render() {
    var controlP = this.props.controlConversions / this.props.controlTotal;
    var successes = this.props.experimentalConversions;
    var failures = this.props.experimentalTotal - this.props.experimentalConversions;

    var maxY = this.likelihoodFunction((successes / this.props.experimentalTotal) - controlP);
    return (
      <div>
        <LineGraph
          minY={0}
          maxY={maxY * 1.1}
          minX={-controlP}
          maxX={1-controlP}
          paddingBottom={35}
          graphedFunctions={[{func: this.likelihoodFunction, strokeStyle: "blue"}]}
          onCanvasMouseMove={this.onCanvasMouseMove}
          indexOfGraphToTrace={0}
          xAxisLabel="difference in conversion rate between control and experimental"/>
        {this.state.mouseIsOver && <div>
          <p>
            If people in the experimental group
            are <span style={{color: "darkred"}}>{showPercent(this.state.mouseEffectSize)}</span> more
             likely to convert than people in the control group</p>
          <p>--that is, the probability of someone converting in the experimental group
             is {showPercent(this.state.mouseEffectSize + controlP)}--</p>
          <p>then the chance of seeing exactly {successes} successes
            and {failures} failures is <span style={{color: "green"}}>
              {showPercent(this.state.mouseLikelihood)}</span>.</p>
        </div>}
      </div>
    );
  }
});

var LineGraph = React.createClass({
  getInitialState () {
    return {
      mousePixelX: null,
      mouseGraphX: null
    };
  },
  componentDidMount () {
    this.renderCanvas();
    var that = this;
    $(this.refs.canvas).on("mousemove", function (e) {
      var rect = that.refs.canvas.getBoundingClientRect();

      var pixelX = e.clientX - rect.left;
      var pixelY = e.clientY - rect.top;

      var [graphX, graphY] = pixelToPos(that.planeInfo, pixelX, pixelY);

      that.setState({mousePixelX: pixelX, mouseGraphX: graphX});

      that.props.onCanvasMouseMove({
        pixelX: pixelX,
        pixelY: pixelY,
        graphX: graphX,
        graphY: graphY
      });
    })
  },
  componentDidUpdate () {
    this.renderCanvas();
  },
  drawAxes(ctx) {
    var xSpan = this.props.maxX - this.props.minX;
    var ySpan = this.props.maxY - this.props.minY;

    var xTickSpan = chooseReasonableTickIntervals(xSpan, 10);

    var xTickPosition = (this.props.minX / xTickSpan | 0) * xTickSpan;
    ctx.font = "15px sans";
    ctx.textAlign="center";

    for(xTickPosition; xTickPosition < this.props.maxX; xTickPosition += xTickSpan) {
      var [x, y] = posToPixel(this.planeInfo, xTickPosition, 0);
      ctx.fillText((xTickPosition * 100).toPrecision(2)+"%", x, y + 15);
      drawLine(ctx, x, y, x, y+5);
    }

    var yTickSpan = chooseReasonableTickIntervals(ySpan, 10);

    var yTickPosition = (this.props.minY / yTickSpan | 0) * yTickSpan;

    ctx.textAlign="right";

    for(yTickPosition; yTickPosition < this.props.maxY; yTickPosition += yTickSpan) {
      if (yTickPosition === 0.0) {
        continue;
      }
      var [x, y] = posToPixel(this.planeInfo, 0, yTickPosition);
      ctx.fillText(showPercent(yTickPosition), x-10, y + 5);
      drawLine(ctx, x, y, x - 5, y);
    }

    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, this.planeInfo.yOriginCanvasOffset);
    ctx.lineTo(this.width, this.planeInfo.yOriginCanvasOffset);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.planeInfo.xOriginCanvasOffset, this.planeInfo.yOriginCanvasOffset);
    ctx.lineTo(this.planeInfo.xOriginCanvasOffset, 0);
    ctx.stroke();
  },
  renderCanvas() {
    var canvas = this.refs.canvas;
    var canvasContainer = this.refs.canvasContainer;
    canvas.width = $(canvasContainer).width();
    this.width = $(canvas).width();
    var height = $(canvas).height();
    var paddingBottom = this.props.paddingBottom;

    var paddingSides = 55;

    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, this.width, height);

    var xUnitInPixels = (this.width - paddingSides * 2) / (this.props.maxX - this.props.minX);
    var yUnitInPixels = (height - paddingBottom) / (this.props.maxY - this.props.minY);
    var xOriginCanvasOffset = -this.props.minX * xUnitInPixels + paddingSides;
    var yOriginCanvasOffset = height - this.props.minY * yUnitInPixels - paddingBottom;

    this.planeInfo = {
      xOriginCanvasOffset: xOriginCanvasOffset,
      xUnitInPixels: xUnitInPixels,
      yOriginCanvasOffset: yOriginCanvasOffset,
      yUnitInPixels: yUnitInPixels
    };

    this.drawAxes(ctx);

    ctx.textAlign="center";

    ctx.fillText(this.props.xAxisLabel, this.width / 2, height - 5);

    this.props.graphedFunctions.forEach((f) => {
      graphFunction(ctx, f, this.planeInfo, this.width - 2 * paddingSides, paddingSides);
    });

    if (this.props.indexOfGraphToTrace != -1 && this.state.mouseGraphX) {
      if (this.state.mouseGraphX > this.props.minX && this.state.mouseGraphX < this.props.maxX) {
        var x = this.state.mouseGraphX;
        var y = this.props.graphedFunctions[this.props.indexOfGraphToTrace].func(x);

        var [originX, pixelY] = posToPixel(this.planeInfo, 0, y);
        var originY = posToPixel(this.planeInfo, 0, 0)[1];

        ctx.strokeStyle = "green"
        drawLine(ctx, originX, pixelY, this.state.mousePixelX, pixelY);
        ctx.strokeStyle = "darkred"
        drawLine(ctx, this.state.mousePixelX, pixelY, this.state.mousePixelX, originY);
      }
    }
  },
  render() {
    return (
      <div ref="canvasContainer" style={{width: "100%"}}>
        <canvas ref="canvas" width="100%" height="400px"/>
      </div>
    );
  }
});

function getFunctionRange(f, startX, endX, slices) {
  var yMin = 0;
  var yMax = 0;
  var pixel;

  for (pixel = 0; pixel < slices; pixel++) {
    var x = startX + pixel * (endX - startX) / slices;
    var y = f(x);
    if (pixel == 0) {
      yMin = y;
      yMax = y;
    } else {
      yMin = Math.min(yMin, y);
      yMax = Math.max(yMax, y);
    }
  }

  return [yMin, yMax];
}

function graphFunction(ctx, func, plane, width, offset) {
  var f = func.func;
  ctx.lineWidth = 1;
  ctx.strokeStyle = func.strokeStyle || "black";
  ctx.beginPath();
  var pixel;

  for (pixel = offset; pixel < width; pixel++) {
    var x = (pixel - plane.xOriginCanvasOffset) / plane.xUnitInPixels;
    var y = f(x);
    var yPixel = - (y * plane.yUnitInPixels - plane.yOriginCanvasOffset);

    if (pixel == 0) {
      ctx.moveTo(0, yPixel);
    } else {
      ctx.lineTo(pixel, yPixel);
    }
  }
  ctx.stroke();
};

function chooseReasonableTickIntervals(size, numberOfTicks) {
  var distance = parseFloat((size / numberOfTicks).toPrecision(1));
  return distance;
};

function posToPixel(planeInfo, x, y) {
  return [planeInfo.xUnitInPixels * x + planeInfo.xOriginCanvasOffset,
          -planeInfo.yUnitInPixels * y + planeInfo.yOriginCanvasOffset];
};

function pixelToPos(planeInfo, x, y) {
  return [(x - planeInfo.xOriginCanvasOffset) / planeInfo.xUnitInPixels,
          -(y - planeInfo.yOriginCanvasOffset) / planeInfo.yUnitInPixels];
};

function showPercent(n) {
  return (n * 100).toPrecision(2) + "%";
}

function drawLine(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

$(function () {
  $(".react-target").each((i, el) => {
    ReactDOM.render(React.createElement(renderThings[$(el).data("react-class")]), el);
  })
})

