var unescapeHtmlEntities = function (string) {
  var d = $("<div>");
  d.html(string);
  return d.text();
}

var customRenderMarkdown = function (string) {
  try {
    var initialResult = marked(string);  
  }
  catch (err) {
    initialResult = string;
  }

  // todo: think a bit more about JS injection here

  return initialResult.replace(/<pre><code>\$(.*?)\$\n<\/code><\/pre>/g, function(match, string) {
    try {
      return katex.renderToString(unescapeHtmlEntities(string), { displayMode: true });
    }
    catch (err) {
      console.error("this thing is broken");
      console.error(err);
      return string;
    }
  }).replace(/<code>\$(.*?)\$<\/code>/g, function(match, string) { 
    try {
      return katex.renderToString(unescapeHtmlEntities(string), { displayMode: false });
    }
    catch (err) {
      console.error("this thing is broken");
      console.error(err);
      return string;
    }
  });
};
