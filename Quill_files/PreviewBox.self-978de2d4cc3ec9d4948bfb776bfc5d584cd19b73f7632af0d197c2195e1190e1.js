
var PreviewBox = React.createClass({displayName: "PreviewBox",
  render () {
    return (
      React.createElement("div", null, 
        React.createElement("strong", null, "preview:"), 
        this.props.handleHintRequest && 
          React.createElement("small", null, React.createElement("a", {onClick: this.props.handleHintRequest}, "get help with formatting")), 
        React.createElement("div", {
          className: "content panel-default panel-body panel", 
          dangerouslySetInnerHTML: {
            __html: customRenderMarkdown(this.props.content)
          }})
      ));
  }
});
