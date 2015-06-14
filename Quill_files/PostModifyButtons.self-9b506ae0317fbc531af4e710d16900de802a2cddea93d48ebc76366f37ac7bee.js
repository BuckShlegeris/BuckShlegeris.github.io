
var PostModifyButtons = React.createClass({displayName: "PostModifyButtons",
  handleDeleteClick () {
    this.props.deletePost(this.props.post.id);
  },
  handleToggleIsPrivateClick () {
    var post = this.props.post;

    this.props.updatePostStatus(post.id, "is_private", !post.is_private)
  },
  handleToggleIsRebloggableClick () {
    var post = this.props.post;

    this.props.updatePostStatus(post.id, "is_rebloggable", !post.is_rebloggable)
  },
  render () {
    var props = this.props;

    return (
      React.createElement("div", null, 
        React.createElement("span", {
          onClick: props.handleDeleteClick, 
          className: "glyphicon glyphicon-trash icon-button", 
          "aria-hidden": "true"}
        ), 
        React.createElement("span", null, 
          React.createElement("label", null, "rebloggable"), 
          React.createElement("input", {
            type: "checkbox", 
            size: "mini", 
            checked: props.post.is_rebloggable, 
            onChange: props.handleToggleIsRebloggableClick})
        ), 
         React.createElement("span", null, 
          React.createElement("label", null, "private"), 
          React.createElement("input", {
            type: "checkbox", 
            size: "mini", 
            checked: props.post.is_private, 
            onChange: props.handleToggleIsPrivateClick})
        ), 
        React.createElement("span", null, 
          React.createElement("a", {onClick: this.props.handleToggleEditFormClick}, "Edit")
        )
      ));
  }
});
  
