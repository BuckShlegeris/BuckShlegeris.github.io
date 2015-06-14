const TopPostsList = React.createClass({displayName: "TopPostsList",
  mixins: [FluxMixin(React), StoreWatchMixin("PostsStore", "UsersStore")],
  getStateFromFlux () {
    var flux = this.getFlux();
    return {
      posts: flux.store("PostsStore").getState().posts,
      users: flux.store("UsersStore").getState().users
    };
  },
  render () {
    return (React.createElement("div", null, 
      React.createElement(PostList, {
         posts: this.state.posts, 
         post_list: this.props.top_level_posts, 
         users: this.state.users, 
         display_author: true})
    ));
  }
});

// big_title: false,
//   collapsible_reblogs: true,
//   display_author: true
