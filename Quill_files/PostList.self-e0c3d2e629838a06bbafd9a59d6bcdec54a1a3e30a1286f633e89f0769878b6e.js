
const PostList = React.createClass({displayName: "PostList",
  render () {
    var that = this;
    var props = this.props;
    var state = this.state;
    var all_posts = (
      React.createElement("div", {className: "post-list"}, 
        this.props.post_list.map( function (post_id, n) {
          return React.createElement(Post, {
                    users: props.users, 
                    posts: props.posts, 
                    post_id: post_id, 
                    key: post_id, 
                    toggleLike: that.toggleLike, 
                    updatePostStatus: that.updatePostStatus, 
                    deletePost: that.deletePost, 
                    collapsible_reblogs: props.collapsible_reblogs, 
                    display_author: props.display_author});
        })
      )
    );

    return this.props.post_list.length > 0 ? all_posts : (
      React.createElement("div", null, React.createElement("p", null, this.props.empty_message || "Nothing to show here")));
  }
});
