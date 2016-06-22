const LogarithmDemo = React.createClass({
  getInitialState () {
    return { base: 0 };
  },
  changeLogarithmBase (e) {
    this.setState({ base: parseFloat(e.target.value) })
  },
  splineChart() {

    if (this.brd) {
      JXG.JSXGraph.freeBoard(this.brd);
    }


    var addRandPoint = (x) => {
      p.push(this.brd.create('point',
                  [x,(Math.random()-0.5)*3],{style:6}));
      this.brd.update();
    };


    // Init board
    this.brd = JXG.JSXGraph.initBoard('box',
                {axis:true, boundingbox:[-5, 10, 5, -10]});

    // Create points
    var p = [];
    p[0] = this.brd.create('point', [-4,2], {style:6});
    p[1] = this.brd.create('point', [3,-1], {style:6});
    addRandPoint(-2);
    addRandPoint(0.5);
    addRandPoint(1);

    // Draw function graph
    var pol = JXG.Math.Numerics.lagrangePolynomial(p);
    var g = this.brd.create('functiongraph', [pol, -10, 10], {strokeWidth:1});

    // Draw derivative
    var g2 = this.brd.create('functiongraph', [JXG.Math.Numerics.D(pol), -10, 10],
               {dash:3, strokeWidth:1, strokeColor:'#ff0000'});

  },
  componentDidUpdate () {
    this.splineChart();
  },
  render () {
    return (
    <div>
      rendered
      <input type="range" value={this.state.base} onChange={this.changeLogarithmBase} />
      {this.state.base}
      <div id="jxgbox" className="jxgbox" width="500" height="500"></div>
    </div>);
  }
});

ReactDOM.render(<LogarithmDemo/>, document.getElementById("logarithm-demo"));
