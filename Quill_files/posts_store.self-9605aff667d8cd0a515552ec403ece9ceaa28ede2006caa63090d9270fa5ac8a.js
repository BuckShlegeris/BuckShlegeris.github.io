var fluxPosts = {};
 
fluxPosts.constants = {
  UPDATE_POST: "UPDATE_POST",
  ADD_POST: "ADD_POST",
  DELETE_POST: "DELETE_POST"
};

fluxPosts.store = Fluxxor.createStore({
  initialize: function(posts) {
    this.posts = posts;
    /* Those posts can be updated and deleted */
    // this.bindActions(fluxPosts.constants.UPDATE_INGREDIENT, this.onUpdateIngredient, fluxPosts.constants.DELETE_INGREDIENT, this.onDeleteIngredient);
  },
  getState: function() {
    /* If someone asks the store what the posts are, show them */
    return {
      posts: this.posts,
    };
  },
  onUpdateIngredient: function(payload) {
    /* Update the model if an ingredient is renamed */
    payload.ingredient.item = payload.new_name;
    this.emit("change")
  },
  onDeleteIngredient: function(payload) {
    /* Update the model if an ingredient is deleted */
    this.posts = this.posts.filter(function(ingredient) {
      return ingredient.id != payload.ingredient.id
    });
    this.emit("change");
  }
});

fluxPosts.actions = {
  toggleLike (post_id) {
    var postIndex = _.findIndex(this.state.posts, function (x) { return x.id == post_id; });
    var post = this.state.posts[postIndex];

    if (post) {
      var posts = this.state.posts;

      if (post.current_user_likes_this) {
        posts[postIndex].current_user_likes_this = false;
        posts[postIndex].number_of_likes -= 1;
        var action = "unlike";
      } else {
        posts[postIndex].current_user_likes_this = true;
        posts[postIndex].number_of_likes += 1;
        var action = "like";
      }

      var that = this;

      $.ajax("/api/posts/" + post_id + "/" + action, {
        method: "POST",
        success: function () {
          that.setState({posts: posts});
        },
        error: function () {
          $.notify({
            message: "the attempt to " + action + " that post was unsuccessful."
          },{
            type: 'danger'
          });
        }
      });
    }
  },
  updatePostStatus (post_id, field, newValue) {
    var postIndex = _.findIndex(this.state.posts, function (x) { return x.id == post_id; });
    var post = this.state.posts[postIndex];
    var that = this;

    if (post) {
      var posts = this.state.posts;
      
      var data = {}
      data["post[" + field + "]"] = newValue;

      $.ajax("/api/posts/" + post_id, {
        data: data,
        method: "PATCH",
        success: function () {
          post[field] = newValue;
          that.setState({posts: posts});
        },
        error: function () {
          $.notify({
            message: "that was unsuccessful."
          },{
            type: 'danger'
          });
        }
      });
    }
  },
  deletePost (post_id) {
    $.ajax("/api/posts/" + post_id, { method: "DELETE" });
    this.setState({posts: _.reject(this.state.posts, function (x) { return x.id == post_id; })});
  },
    postForm (post_status) {
    var data = {
      "post[tags]": this.state.tags,
      "post[is_private]": this.state.is_private,
      "post[is_rebloggable]": this.state.is_rebloggable,
      "post[post_status]": post_status,
      "post[post_type]": this.props.post_type
    };

    _.defaults(data, this.refs.sub_form.bodyData());

    var that = this;

    var method = this.props.resource == "new" ? "post" : "put";
    
    var url = this.props.resource == "new" ? "/api/posts" : "/api/posts/" + this.props.post.id;

    $.ajax(url, {
      method: method,
      data: data,
      success: function (newPost) {
        if (post_status == "active") {
          var newPosts = DashboardPostListGetState().posts;
          newPosts.unshift(newPost);
          DashboardPostListSetState({posts: newPosts});          
        } else {
          $.notify({
            message: "Successfully saved as draft"
          },{
            type: 'success'
          });
        }
        that.setState(that.getInitialState())
        $("#newTextPost").collapse("hide");
      },
      error: function (x) {
        x.responseJSON.map(function(error) {
          $.notify({
            message: error
          },{
            type: 'danger'
          });
        });
      }
    });
  }
};

fluxPosts.init = function(posts) {
  var tempStore = {
    PostsStore: new fluxPosts.store({
      posts: posts
    })
  };
  fluxPosts.flux = new Fluxxor.Flux(tempStore, fluxPosts.actions);
};
