var Tag = React.createClass({displayName: "Tag",
  render () {
    var tag = this.props.tag;

    return React.createElement("a", {className: "btn btn-xs btn-default", href: "/tags/" + tag}, 
      React.createElement("span", {key: this.props.tag}, 
        "#", this.props.tag
      )
    );
  }
})
