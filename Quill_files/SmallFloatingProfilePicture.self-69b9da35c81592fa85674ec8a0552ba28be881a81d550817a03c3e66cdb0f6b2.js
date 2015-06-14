
var SmallFloatingProfilePicture = React.createClass({displayName: "SmallFloatingProfilePicture",
  render () {
    return (
      React.createElement("div", {style: {position: "relative"}}, 
        React.createElement("div", {className: "profile-picture-sm profile-picture-floater-sm profile-picture"}, 
          React.createElement("img", {src: this.props.src})
        )
      ));
  }
});
