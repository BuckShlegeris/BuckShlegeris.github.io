
var UserThing = React.createClass({displayName: "UserThing",
  getInitialState () {
    return { current_user_is_following: this.props.user.current_user_is_following }
  },
  toggleFollow () {
    current_user_is_following = this.state.current_user_is_following;
    var action = current_user_is_following ? "unfollow" : "follow";

    var that = this;

    $.ajax("/api/users/" + this.props.user.id + "/" + action, {
      method: "POST",
      success: function () {
        that.setState({current_user_is_following: !current_user_is_following});
      },
      error: function () {
        $.notify({
          message: "the attempt to " + action + " " + that.props.user.username + " was unsuccessful."
        },{
          type: 'danger'
        });
      }
    })
  },
  numberOfFollowers () {
    return this.props.user.number_of_followers + this.state.current_user_is_following - this.props.user.current_user_is_following;
  },
  render () {
    var props = this.props;

    var follow_button = (React.createElement("button", {className: "btn btn-md btn-default", onClick: this.toggleFollow}, 
       this.state.current_user_is_following ? "unfollow" : "follow"
    ));

    return (
      React.createElement("div", {className: "user-thing panel panel-primary"}, 
        React.createElement("div", {className: "panel-body user-thing-body row"}, 
          React.createElement("div", {className: "user-thing-profile-pic col-xs-6"}, 
            React.createElement("a", {href: "/blogs/"+props.user.username}, 
              React.createElement("img", {src: props.user.guaranteed_profile_pic_url})
            )
          ), 
          React.createElement("div", {className: "user-thing-info col-xs-6"}, 
            React.createElement("strong", null, 
              React.createElement("a", {href: "/blogs/"+props.user.username}, 
                props.user.username
              )
            ), 

            React.createElement("p", null,  props.user.description), 

            React.createElement("p", null,  this.numberOfFollowers(), " followers"), 

             current_user && current_user.id != props.user.id && follow_button
          )
        )
      ));
  }
});
