
var NestedReblogPost = React.createClass({displayName: "NestedReblogPost",
  getInitialState () {
    return { showingForm: false }
  },
  flip () {
    this.setState({showingForm: ! this.state.showingForm});
  },
  goToPost () {
    var post = this.props.posts[this.props.post_id];
    var username = this.props.users[post.user_id].username;
    location.pathname = "/blogs/"+username+"/posts/"+this.props.post_id;
  },
  render () {
    var props = this.props;
    var post = props.posts[props.post_id];
    var user = this.props.users[post.user_id];
    var that = this;

    var body = React.createElement("div", {dangerouslySetInnerHTML: {__html: customRenderMarkdown(post.body)}});

    var date = React.createElement("span", {className: "pull-right"}, React.createElement("small", null, humaneDate(new Date(post.created_at))));

    var tags = post.tags.map(function(tag, n) {
      return React.createElement(Tag, {tag: tag, key: tag+"/"+n});
    });

    var nonEmptyVersion = (
      React.createElement("div", null, 
        React.createElement("div", {className: "nested-reblog-post"}, 
          React.createElement("div", {onClick: this.goToPost}, 
            React.createElement("a", {href: "/blogs/" + user.username + "/posts/" + post.id}, 
              React.createElement("strong", null, user.username)
            ), 

            date, 
        
            body
          ), 
          React.createElement("div", {className: "panel-footer"}, 
            React.createElement("div", null, 
              React.createElement(ReblogAndLikeCounters, {
                post: post, 
                toggleShowComments: this.toggleShowComments, 
                collapsible_reblogs: props.collapsible_reblogs}), 

               current_user &&
                React.createElement(PostButtons, {
                  post: post, 
                  user: user, 
                  toggleLike: props.toggleLike, 
                  deletePost: props.deletePost, 
                  is_rebloggable: post.is_rebloggable, 
                  updatePostStatus: props.updatePostStatus, 
                  toggleReblogForm: this.toggleReblogForm, 
                  handleToggleEditFormClick: this.toggleEditForm})
              
            ), 

             current_user.id == post.user_id && 
              React.createElement(PostModifyButtons, {
                post: post, 
                deletePost: undefined, 
                handleToggleEditFormClick: this.toggleEditForm, 
                handleToggleIsPrivateClick: this.toggle}), 
              
             tags 
          )
        ), 

        React.createElement("div", {className: "nested-reblogs"}, 
          post.reblogs.map( function (reblog_id, n) {
              if (props.posts[reblog_id].body.trim().length) {
                return React.createElement(NestedReblogPost, {
                post_id: reblog_id, 
                key: reblog_id, 
                posts: props.posts, 
                users: props.users});
              }
            })
        ), 

        React.createElement(ReactCSSTransitionGroup, {transitionName: "example"}, 
           this.state.showingForm &&            
            React.createElement(NewReblogForm, {flip: this.flip, parent_id: post.id})
          
        )
      )
    );

    var emptyVersion = (
      React.createElement("div", {className: "nested-reblog-post"}, 
        date, 
        React.createElement("a", {href: "/blogs/" + user.username + "/posts/" + post.id}, 
          React.createElement("strong", null, user.username), " reblogged this"
        )
      )
      );

    return post.body.trim().length ? nonEmptyVersion : emptyVersion;
  }
});
