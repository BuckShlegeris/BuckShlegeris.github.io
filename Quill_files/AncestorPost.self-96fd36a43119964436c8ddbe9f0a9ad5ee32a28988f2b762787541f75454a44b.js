
var AncestorPost = React.createClass({displayName: "AncestorPost",
  goToPost () {
    var props = this.props;
    var user = props.users[props.post.user_id];
    location.pathname = "/blogs/"+user.username+"/posts/"+props.post.id;
  },
  render () {
    var props = this.props;
    var user = props.users[props.post.user_id];
    var date = React.createElement("span", {className: "pull-right"}, React.createElement("small", null, humaneDate(new Date(props.post.created_at))));

    return (
      React.createElement("div", {className: "panel panel-default ancestor-post"}, 
        React.createElement(SmallFloatingProfilePicture, {src: user.guaranteed_profile_pic_url}), 
        React.createElement("div", {className: "panel-body", onClick: this.goToPost}, 
          date, 
          React.createElement(UserNameLink, {username: user.username}), React.createElement("br", null), 
           props.post.title && React.createElement("h4", null, props.post.title), 
          React.createElement("div", {dangerouslySetInnerHTML: {__html: customRenderMarkdown(props.post.body)}})
        )
      ));
  }
});
