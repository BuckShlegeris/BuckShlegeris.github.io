
const CommentsSection = React.createClass({displayName: "CommentsSection",
  render () {
    var props = this.props;
    var post = props.posts[props.post_id];
    var that = this;

    return (React.createElement("div", {className: "comments-section", ref: "comments-section"}, 
        post.reblogs.length != 0 ? (
          React.createElement("div", null, 
            React.createElement("h4", null, "notes"), 
            post.reblogs.map( function (reblog_id, n) {
              return React.createElement(NestedReblogPost, {
                post_id: reblog_id, 
                key: reblog_id, 
                posts: props.posts, 
                users: props.users});
            })
          )) : React.createElement("p", null, "no notes")
      ));
  }
});

