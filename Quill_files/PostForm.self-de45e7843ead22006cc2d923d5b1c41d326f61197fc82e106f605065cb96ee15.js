
const PostForm = React.createClass({displayName: "PostForm",
  getInitialState () {
    if (this.props.resource == "new") {
      return {
        tags: "",
        is_private: false,
        is_rebloggable: true
      };
    } else if (this.props.resource == "edit") {
      var post = this.props.post;
      return {
        tags: post.tags.join(" "),
        is_private: post.is_private,
        is_rebloggable: post.is_rebloggable
      };
    } else {
      throw "resource is broken: " + this.props.resource;
    }
  },
  handlePostClick (e) {
    e.preventDefault();
    this.postForm("active");
  },
  handleSaveToDraftsClick (e) {
    e.preventDefault();
    this.postForm("draft");
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
    var props = this.props;
    var post = props.post;

    var specificStuff = undefined; // depends on post type

    if (props.post_type == "text_post") {
      specificStuff = React.createElement(TextPostBodyForm, {ref: "sub_form", post: post});
    } else if (props.post_type == "reblog") {
      // this shouldn't happen, I think?
      // throw "I don't think you should be able to make reblogs like this..."
      specificStuff = React.createElement(ReblogBodyForm, {ref: "sub_form", post: post});
    } else {
      throw "unrecognised post type: " + props.post_type;
    }
    return (
      React.createElement("div", null, 
        this.props.children, 

        specificStuff, 

        React.createElement("br", null), 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("label", {htmlFor: "tags"}, "tags"), 
          React.createElement("input", {
            className: "form-control", 
            name: "tags", 
            value: this.state.tags, 
            onChange: this.handleTagsChange})
        ), 

        React.createElement("span", null, 
          React.createElement("label", {htmlFor: "post[is_rebloggable]"}, "rebloggable"), 
          React.createElement("input", {
            type: "checkbox", 
            name: "post[is_rebloggable]", data: true, 
            size: "mini", 
            checked: this.state.is_rebloggable, 
            onChange: this.handleIsRebloggableChange})
        ), 

        React.createElement("span", null, 
          React.createElement("label", {htmlFor: "post[is_private]"}, "private"), 
          React.createElement("input", {
            type: "checkbox", 
            name: "post[is_private]", "data-": true, 
            size: "mini", 
            checked: this.state.is_private, 
            onChange: this.handleIsPrivateChange})
        ), 

        React.createElement("button", {className: "btn pull-right btn-primary btn-md", onClick: this.handlePostClick}, 
          props.resource == "new" ? "Post" : "Update"
        ), 
        React.createElement("button", {className: "btn pull-right btn-success btn-md", onClick: this.handleSaveToDraftsClick}, 
          "Save to drafts"
        ), 
        React.createElement("br", null)
      )
    );
  }
});
