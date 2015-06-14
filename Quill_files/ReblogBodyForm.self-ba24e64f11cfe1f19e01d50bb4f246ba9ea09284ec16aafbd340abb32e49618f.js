
const ReblogBodyForm = React.createClass({displayName: "ReblogBodyForm",
  getInitialState () {
    return this.props.post || {
      body: ""
    };
  },
  handleBodyChange (e) {
    this.setState({body: e.target.value});
  },
  render () {
    var props = this.props;
    var that = this;
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "ancestor-posts-container"}, 
          props.post.ancestors.map( function (post, n) {
            return React.createElement(AncestorPost, {
              post: post, 
              key: post.id, 
              toggleLike: that.toggleLike, 
              deletePost: that.deletePost});
          })
        ), 
        React.createElement("div", {className: "nested-reblog-post"}, 
          React.createElement("textarea", {
            className: "form-control", 
            rows: "3", 
            name: "post[body]", 
            value: this.state.body, 
            onChange: this.handleBodyChange})
        )
      )
    );
  }
});
