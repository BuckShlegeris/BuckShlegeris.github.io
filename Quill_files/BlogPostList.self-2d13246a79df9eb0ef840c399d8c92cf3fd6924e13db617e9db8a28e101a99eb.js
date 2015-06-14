const BlogPostList = React.createClass({displayName: "BlogPostList",
  mixins: [FluxMixin(React), StoreWatchMixin("PostsStore")],
  getStateFromFlux () {
    var flux = this.getFlux();
    return {
      posts: flux.store("PostsStore").getState().posts,
      users: flux.store("UsersStore").getState().users
    };
  },
  render () {
    return React.createElement(PostList, {
            post_list: this.props.top_level_posts, 
            posts: this.state.posts, 
            users: this.state.users});
  }
});
