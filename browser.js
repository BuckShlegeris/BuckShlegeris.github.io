$(function () {

  var selectedIndex = 0;
  var relevantFileList = [];
  var currentFolder;
  var parentFolders = [];

  var isFolder = function (path) {
    return (allSubdirectories.indexOf(path) !== -1);
  };


  window.drawBrowser = function (folder) {
    var $p = $("#folder_name");
    $p.html("bshlgrs.github.io"+folder.slice(1,folder.length));

    console.log(folder);
    currentFolder = folder;
    var $ul = $("#file_list");
    $ul.empty();

    $ul.append("<li class='menu folder'>..</li>");

    var removeFolderName = function (filename) {
      return filename.slice(folder.length+1, filename.length)
    }

    var isRelevant = function(x) {
      return (x.indexOf(folder) === 0) &&
                    ! /\//.test(removeFolderName(x)) &&
                    x != folder;
    }

    // ["./a/b", "./a/c", "./b/d", "./a/b/d", "./a"]
    relevantFileList = allFiles.filter(isRelevant);

    var files = [];
    var folders = [];

    $(relevantFileList).each(function(index, thing) {
      if (isFolder(thing)) {
        folders.push("<li class='menu folder'>"+removeFolderName(thing)+"</li>");
      } else {
        files.push("<li class='menu'>"+removeFolderName(thing)+"</li>");
      }
    });
    _(folders.concat(files)).each(function(thing) {
      $ul.append(thing);
    });

    selectedIndex = 0;

    $($ul.children()[selectedIndex]).addClass("selected");

    return relevantFileList;
  }

  // var displayFile = function (path) {
  //   $('#file_list').load(path);
  // }

  var moveToIndex = function (index) {
    var $ul = $("#file_list");
    $ul.children().removeClass("selected");
    $($ul.children()[index]).addClass("selected");
  }

  $(document).keydown(function(e) {
    if (e.which == 13) { // enter
      if (selectedIndex === 0) {
        // go up a directory
        if (parentFolders.length > 0) {
          window.drawBrowser(parentFolders.pop());
        } else {
          window.open("./index.html", "_self");
        }

      } else {
        var newPlace = currentFolder + "/"+ $($("#file_list").children()[selectedIndex]).html();
        if (allSubdirectories.indexOf(newPlace) === -1) {
          // open file
          window.open(newPlace);
          // displayFile(newPlace);
        } else {
          // open folder
          parentFolders.push(currentFolder);

          window.drawBrowser(newPlace);
        }

      }
      e.preventDefault();
    }
    else if (e.which == 38 || e.which == 37) { // left/up
      selectedIndex -= 1;
      if (selectedIndex == -1) {
        selectedIndex += relevantFileList.length;
      }
      moveToIndex(selectedIndex);

      e.preventDefault();
    }
    else if (e.which == 40 || e.which == 39) { // right/down
      selectedIndex += 1;
      if (selectedIndex == relevantFileList.length + 1) {
        selectedIndex = 0;
      }

      moveToIndex(selectedIndex);
      e.preventDefault();
    }
  })

  window.drawBrowser(".");
})