
var UserName = React.createClass({displayName: "UserName",
  render () {
    var props = this.props;

    return (
      React.createElement("span", null, 
        React.createElement(UserNameLink, {username: props.user.username})
      )
    )
  }
});
