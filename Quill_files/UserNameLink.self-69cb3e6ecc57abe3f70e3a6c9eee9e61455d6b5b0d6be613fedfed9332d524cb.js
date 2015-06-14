
var UserNameLink = React.createClass({displayName: "UserNameLink",
  render () {
    return (
      React.createElement("strong", null, 
        React.createElement("a", {href: "/blogs/" + this.props.username}, 
           this.props.username
        )
      )
    );
  }
});
