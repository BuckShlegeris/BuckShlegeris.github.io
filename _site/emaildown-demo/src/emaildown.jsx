const Emaildown = React.createClass({
  componentWillMount () {
    this.templates = {};

    for (let entry of this.props.templateStrings) {
      this.templates[entry[0]] = parseEmaildown(entry[1]);
    }
  },

  getInitialState() {
    return {
      checks: {},
      vars: {},
      selectedTemplate: this.props.initiallySelectedTemplate,
      displayFormattedResult: true
    };
  },

  handleCheckToggle(lineNumber, e) {
    var newChecks = JSON.parse(JSON.stringify(this.state.checks));
    newChecks[lineNumber] = !newChecks[lineNumber];
    this.setState({checks: newChecks});
    if (e.target.nodeName != "INPUT") {
      e.preventDefault();
    }
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
          return <li key={idx}>
            {this.renderEmaildownNode(x, disabled || (node.optional && !this.state.checks[node.lineNumber]))}
          </li>;
        })}
      </ul>}
    </div>;
  },

  getResultString(node) {
    if (!node.optional || this.state.checks[node.lineNumber]) {
      return node.html + " " + node.children.map(this.getResultString).join(" ");
    }
  },

  currentTemplate () {
    return this.templates[this.state.selectedTemplate];
  },

  result() {
    return <div>{this.currentTemplate().map((child, idx) => {
      if (this.state.displayFormattedResult) {
        return <p key={idx} dangerouslySetInnerHTML={{__html: this.getResultString(child)}}/>;
      } else {
        return <p key={idx}>{this.getResultString(child)}</p>;
      }
    })}</div>;
  },

  render () {
    return <div>
      <span className="pull-right">
        {Object.keys(this.templates).map((x, idx) => {
          return <button
                    key={idx}
                    onClick={(e) => this.setState({selectedTemplate: x})}
                    className="btn btn-default">{x}</button>
        })}
      </span>

      <button className="btn btn-danger" onClick={(e) => this.setState({checks: {}})}>
        Clear selection
      </button>
      <label>Display formatted result:
        <input
          type="checkbox"
          checked={this.state.displayFormattedResult}
          onChange={() => this.setState({displayFormattedResult: !this.state.displayFormattedResult})}/>
      </label>
      <h2>Emaildown!</h2>
      <div className="row">
        <div className="col-sm-6">


          {this.currentTemplate().map((x, idx) => <div key={idx} className="emaildownTemplate">
            {this.renderEmaildownNode(x, false)}
          </div>)}
        </div>
        <div className="col-sm-6">
          {this.result()}
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


$.get("./prep.txt", function (prepTemplate) {
  $.get("./rejection.txt", function (rejectionTemplate) {
    var templateStrings = [["prep", prepTemplate], ['rejection', rejectionTemplate]];
    ReactDOM.render(<Emaildown templateStrings={templateStrings} initiallySelectedTemplate="prep"/>,
      document.getElementById("emaildown"));
  });
});



