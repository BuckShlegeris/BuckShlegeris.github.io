
var ReblogButton = React.createClass({displayName: "ReblogButton",
  render () {
    var props = this.props;

    return (
        React.createElement("span", {
          onClick: props.handleClick, 
          className: "glyphicon glyphicon-retweet grow icon-button", 
          "aria-hidden": "true"}
        )
    );
  }
});
