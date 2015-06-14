/** @jsx React.DOM */



var ReblogAndLikeCounters = React.createClass({displayName: "ReblogAndLikeCounters",
  render () {
    var props = this.props;
    var post = props.post;

    if (props.collapsible_reblogs && post.reblogs.length) {
      var reblog_stuff = React.createElement("span", null, 
        React.createElement("a", {onClick: props.toggleShowComments}, 
          post.number_of_reblog_descendants + " notes"
        ), 
        React.createElement("span", null, ", ")
      );
  
    } else {
      var reblog_stuff = React.createElement("span", null, post.number_of_reblog_descendants + " notes, ");
    }
    
    return (
      React.createElement("span", null, 
        post.is_rebloggable && reblog_stuff, 
        post.number_of_likes + " likes."
      )
    );
  }
});
