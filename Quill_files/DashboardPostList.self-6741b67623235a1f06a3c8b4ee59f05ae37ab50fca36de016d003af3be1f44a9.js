const DashboardPostList = React.createClass({displayName: "DashboardPostList",
  mixins: [FluxMixin(React), StoreWatchMixin("PostsStore")],
  getStateFromFlux () {
    var flux = this.getFlux();
    return {
      posts: flux.store("PostsStore").getState().posts
    };
  },
  choosePosts () {
    return _.sortBy(
      _.filter(this.state.posts, function (post) { return post.is_interesting_to_current_user; }),
      function (post) { return post.created_at; }
    );
  },
  render () {
    return React.createElement(PostList, {posts: this.choosePosts()});
  }
});
