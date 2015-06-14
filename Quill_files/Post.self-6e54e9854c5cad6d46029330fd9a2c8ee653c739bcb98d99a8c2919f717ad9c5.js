var Post = React.createClass({displayName: "Post",
  getInitialState () {
    return { showingReblogForm: false,
             showingComments: true,
             showingEditForm: false,
             showingModifyButtons: false };
  },
  toggleReblogForm () {
    this.setState({showingReblogForm: ! this.state.showingReblogForm});
  },
  toggleEditForm () {
    this.setState({showingEditForm: ! this.state.showingEditForm});
  },
  parent_id () {
    var post = this.props.posts[this.props.post_id];

    if (post.post_type == "reblog" && post.body.trim() == "") {
      return post.parent_id;
    } else {
      return post.id;
    }
  },
  toggleShowComments () {
    this.setState({showingComments: ! this.state.showingComments});
  },
  render () {
    var props = this.props;
    var post = props.posts[props.post_id];
    var that = this;

    var user = this.props.users[post.user_id];

    var private_tag = post.is_private && React.createElement("span", {className: "label label-default"}, "Private");

    var body;

    if (post.post_type == "text_post") {
      body = React.createElement("div", {dangerouslySetInnerHTML: {__html: customRenderMarkdown(post.body)}});
    } else if (post.post_type == "reblog") {
      body = React.createElement("div", null, 
        React.createElement("div", {className: "ancestor-posts-container"}, 
          post.ancestors.map( function (ancestorPostId, n) {
            var ancestorPost = props.posts[ancestorPostId];
            return React.createElement(AncestorPost, React.__spread({
              post: ancestorPost, 
              key: ancestorPostId, 
              toggleLike: that.toggleLike, 
              deletePost: that.deletePost},  
              props));
          })
        ), 
        React.createElement("div", {dangerouslySetInnerHTML: {__html: customRenderMarkdown(post.body)}})
      );
    } else {
      throw "unrecognised post type: " + post.post_type;
    }


    var tags = post.tags.map(function(tag, n) {
      return React.createElement(Tag, {tag: tag, key: tag+"/"+n});
    });

    var date = React.createElement("span", {className: "pull-right"}, React.createElement("small", null, humaneDate(new Date(post.created_at))));

    var showBody = (
      React.createElement("div", {className: "panel-body"}, 
         props.display_author && 
          React.createElement("a", {href: "/blogs/" + user.username + "/posts/" + post.id}, 
            React.createElement("strong", null, user.username)
          ), 

          date, 

        React.createElement("a", {href: "/blogs/" + user.username + "/posts/" + post.id}, 
           props.big_title 
            ? React.createElement("h2", null, post.title, " ", private_tag)
            : React.createElement("h3", null, post.title, " ", private_tag)
          
        ), 

        body
      ));

    var editBody = (
      React.createElement("div", {className: "panel-body"}, 
        React.createElement(PostForm, {post: post, post_type: post.post_type, resource: "edit"})
      ));

    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "panel panel-default post"}, 
           props.display_author && 
            React.createElement("a", {href: "/blogs/"+user.username}, 
              React.createElement(ProfilePicture, {src: user.guaranteed_profile_pic_url})
            ), 
          

           this.state.showingEditForm ? editBody : showBody, 

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

        React.createElement(ReactCSSTransitionGroup, {transitionName: "example"}, 
           this.state.showingReblogForm &&            
            React.createElement(NewReblogForm, {toggleReblogForm: this.toggleReblogForm, parent_id: this.parent_id()})
          
        ), 

         this.state.showingComments && React.createElement(CommentsSection, {post_id: post.id, posts: props.posts, users: props.users})
      )
    );
  }
});
