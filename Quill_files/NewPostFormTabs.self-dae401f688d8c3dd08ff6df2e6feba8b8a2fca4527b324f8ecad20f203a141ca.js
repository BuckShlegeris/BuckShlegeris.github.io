
const NewPostFormTabs = React.createClass({displayName: "NewPostFormTabs",
  getInitialState() {
    return {
      key: "text_post"
    };
  },

  handleSelect(key) {
    this.setState({key});
  },

  render() {
    return (
      React.createElement(ReactBootstrap.Panel, {collapsible: true, defaultCollapsed: true, header: "New post"}, 
        React.createElement(ReactBootstrap.TabbedArea, {activeKey: this.state.key, onSelect: this.handleSelect}, 
          React.createElement(ReactBootstrap.TabPane, {eventKey: "text_post", tab: "Text post"}, 
            React.createElement(PostForm, {post_type: "text_post", resource: "new"})
          )
        )
      )
    );
  }
});
