
var ProfilePicture = React.createClass({displayName: "ProfilePicture",
  render () {
    return (
      React.createElement("div", {style: {position: "relative"}}, 
        React.createElement("div", {className: "profile-picture-lg profile-picture-floater-lg profile-picture"}, 
          React.createElement("img", {src: this.props.src})
        )
      ));
  }
});
