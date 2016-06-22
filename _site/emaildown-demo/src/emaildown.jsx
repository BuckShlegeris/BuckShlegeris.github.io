const Emaildown = React.createClass({
  componentWillMount () {
    this.template = parseEmaildown(this.props.templateString)
  },

  getInitialState() {
    return {
      checks: {},
      vars: {}
    };
  },

  handleCheckToggle(lineNumber, e) {
    var newChecks = JSON.parse(JSON.stringify(this.state.checks));
    newChecks[lineNumber] = !newChecks[lineNumber];
    this.setState({checks: newChecks});
    e.preventDefault();
  },

  renderEmaildownNode(node, disabled) {
    var showing = !node.optional || this.state.checks[node.lineNumber];
    return <div className={!showing && "greyed-out"}>
      {node.optional && <input
        checked={this.state.checks[node.lineNumber]}
        onChange={(e) => this.handleCheckToggle(node.lineNumber, e)}
        disabled={disabled}
        type="checkbox"/>}
      <span
        onClick={(e) => !disabled && this.handleCheckToggle(node.lineNumber, e) || e.preventDefault()}
        dangerouslySetInnerHTML={{__html: node.html}}>
      </span>
      {node.children && <ul>
        {node.children.map((x, idx) => {
          return <li key={idx}>{this.renderEmaildownNode(x, disabled || (node.optional && !this.state.checks[node.lineNumber]))}</li>;
        })}
      </ul>}
    </div>;
  },

  getResultString(node) {
    if (!node.optional || this.state.checks[node.lineNumber]) {
      return node.html + " " + node.children.map(this.getResultString).join(" ");
    }
  },

  result() {
    return <div>{this.template.map((child, idx) => {
      return <p key={idx} dangerouslySetInnerHTML={{__html: this.getResultString(child)}}/>
    })}</div>;
  },

  render () {
    return <div>
      <div className="row">
        <div className="col-xs-6">
          {this.template.map((x, idx) => <div key={idx} className="emaildownTemplate">
            {this.renderEmaildownNode(x, false)}
          </div>)}
        </div>
        <div className="col-xs-6">
          {this.result()}
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <h3>Template:</h3>
          <pre>
            {this.props.templateString}
          </pre>
        </div>
      </div>
    </div>;
  }
});


function parseEmaildown(text) {
  var lines = []

  text.split("\n").forEach((line) => {
    var indentationLevel = line.search(/\S|$/) / 2;

    var contents = line.trim();

    lines.push([indentationLevel, contents]);
  })

  var out = [];
  var i = 0

  while (i < lines.length) {
    var [newChild, newI] = recursiveDescent(lines, i);
    i = newI;
    if (newChild.html || newChild.children) {
      out.push(newChild);
    }
  }

  return out;
}

// takes a position, eg line 5. Say that's at indentation level 4
// returns a map of everything from there, and returns the line number of the
// first line which is level 4 again

function recursiveDescent(lines, startPos) {
  var level = lines[startPos][0];
  var html = lines[startPos][1];
  var children = [];
  var i = startPos + 1;

  while (lines[i] && lines[i][0] > level) {
    var [newChild, newI] = recursiveDescent(lines, i);
    i = newI;
    children.push(newChild);
  }

  return [{ html: html, children: children, optional: level != 0, lineNumber: startPos }, i];
}

var mystr = "hello\n  what\n  what2\n    wer\n  fdssf\ndffd";


ReactDOM.render(<Emaildown templateString={$("#email2").text()}/>, document.getElementById("emaildown"));
// ReactDOM.render(<Emaildown template={parseEmaildown(mystr)}/>, document.getElementById("emaildown"));

