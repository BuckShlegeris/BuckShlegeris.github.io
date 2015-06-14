const UserPostList = React.createClass({displayName: "UserPostList",
  mixins: [FluxMixin(React), StoreWatchMixin("PostsStore")],
  getStateFromFlux () {
    var flux = this.getFlux();
    return {
      posts: flux.store("PostsStore").getState().posts
    };
  },
  choosePosts () {
    return _.sortBy(
      _.filter(this.state.posts, function (post) { return post.user_id == current_user.id; }),
      function (post) { return post.created_at; }
    );
  },
  render () {
    return React.createElement(PostList, {posts: this.choosePosts()});
  }
});
