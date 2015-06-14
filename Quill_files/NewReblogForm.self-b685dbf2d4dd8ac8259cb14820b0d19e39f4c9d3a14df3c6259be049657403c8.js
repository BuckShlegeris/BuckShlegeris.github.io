
const NewReblogForm = React.createClass({displayName: "NewReblogForm",
  getInitialState () {
    return {
      body: "",
      tags: "",
      is_private: false,
      is_rebloggable: true
    }
  },
  postForm (e) {
    e.preventDefault();
    var data = {
      "post[post_type]": "reblog",
      "post[body]": this.state.body,
      "post[tags]": this.state.tags,
      "post[is_private]": this.state.is_private,
      "post[is_rebloggable]": this.state.is_rebloggable,
      "post[parent_id]": this.props.parent_id
    };

    var that = this;
    
    $.ajax("/api/posts", {
      method: "POST",
      data: data,
      success: function (newPost) {
        if (location.pathname == "/") {
          var newPosts = DashboardPostListGetState().posts;
          newPosts.unshift(newPost)
          DashboardPostListSetState({posts: newPosts});
          that.setState(that.getInitialState());
          that.props.flip();
        } else {
          location.pathname = "/";
        }
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
  },
  handleTitleChange (e) {
    this.setState({title: e.target.value});
  },
  handleBodyChange (e) {
    this.setState({body: e.target.value});
  },
  handleTagsChange (e) {
    this.setState({tags: e.target.value});
  },
  handleIsRebloggableChange (e) {
    this.setState({ is_rebloggable: ! this.state.is_rebloggable });
  },
  handleIsPrivateChange (e) {
    this.setState({ is_private: ! this.state.is_private });
  },
  render () {
    return (
      React.createElement("div", {className: "nested-reblog-post"}, 
        React.createElement("form", null, 
          React.createElement("textarea", {
            className: "form-control", 
            rows: "3", 
            name: "post[body]", 
            value: this.state.body, 
            onChange: this.handleBodyChange}), 
          

          React.createElement("span", null, 
            React.createElement("label", {htmlFor: "post[is_rebloggable]"}, "rebloggable"), 
            React.createElement("input", {
              type: "checkbox", 
              name: "post[is_rebloggable]", data: true, 
              size: "mini", 
              checked: this.state.is_rebloggable, 
              onChange: this.handleIsRebloggableChange}), 

            React.createElement("label", {htmlFor: "post[is_private]"}, "private"), 
            React.createElement("input", {
              type: "checkbox", 
              name: "post[is_private]", "data-": true, 
              size: "mini", 
              checked: this.state.is_private, 
              onChange: this.handleIsPrivateChange}), 

            React.createElement("input", {
            className: "form-control input-sm", 
            name: "tags", 
            value: this.state.tags, 
            placeholder: "tags", 
            onChange: this.handleTagsChange})
          ), 

          React.createElement("button", {className: "btn pull-right btn-primary btn-sm", onClick: this.postForm}, "Post"), 

          React.createElement(PreviewBox, {content: this.state.body}), 

          this.state.tags && this.state.tags.split(" ").map(function(tag, n) { return React.createElement(Tag, {tag: tag, key: n})})
        )
      )
    );
  }
});
