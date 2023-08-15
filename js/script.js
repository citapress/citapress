// Disable auto scroll restoration on chrome 43 onwards
if ("scrollRestoration" in history) {
  // Back off, browser, I got this...
  history.scrollRestoration = "manual";
}

// Constants for dealing with dynamic book links
const FRONT_VIEW = "FRONT";
const WEB_VIEW = "WEB";

var booksMetadata = `books/${document.documentElement.lang}.json`;
if (document.documentElement.lang != "en") {
  booksMetadata = "../" + booksMetadata;
}

// reads the book json and adds a ../ prefix if the language is not english
//
function readBooks(callback) {
  $.getJSON(booksMetadata, function (metadata) {
    if (document.documentElement.lang == "en") {
      callback(metadata);
      return;
    }
    console.log(metadata);
    console.log(metadata.keys);

    $.each(metadata, function (bookName, book) {
      $.each(book, function (attribute, value) {
        if (value.startsWith("assets") || value.startsWith("./assets")) {
          metadata[bookName][attribute] = "../" + value;
        }
      });
    });
    callback(metadata);
  });
}

// reads the url and goes to the appropriate place
// (only to be executed on the main page)
//
function readURL(url) {
  var index = url.lastIndexOf("#");
  if (index !== -1) {
    var suffix = "#books/";
    var bookName = url.match(/(?:#books\/)((\w|\d|-)*)(?:(\b|\/))/);

    // if page is a dynamic book page
    if (bookName != null) {
      // check for suffixes
      if (url.endsWith("web")) {
        loadBookWeb(bookName[1], true);
      } else {
        loadBookFront(bookName[1], true);
      }
    } else {
      var name = url.substr(index + 1, url.length);
      changePage("pages/" + name + ".html", name, true);
    }
  } else {
    changePage("pages/home.html", "Home", true);
  }
}

// change page function
//
function changePage(url, title, shouldPushState, callback) {
  $("article").load(url, function () {
    window.scrollTo(0, 0);

    console.log(url);
    var urlTarget = url.match(/(?:pages\/)([-a-zA-Z]*)(?:\.html)?/);
    console.log(urlTarget);

    if (shouldPushState) {
      window.history.pushState(
        {
          title: title,
          url: url,
        },
        title,
        "#" + urlTarget[1]
      );
    }

    $("main").attr("id", urlTarget[1]);

    if (callback != null) {
      callback();
    }
  });
}

// animates a change of page
// todo is a function of the form todo(callback) where callback
// should be called when all content is loaded properly
//
function animateChange(title, todo) {
  var alreadyHidden = false;
  $("body").addClass("hide");

  $("#section-title").text(title);

  $("main").one(
    "transitionend webkitTransitionEnd oTransitionEnd",
    function () {
      if (!alreadyHidden) {
        alreadyHidden = true;

        // Do what we need to do
        // Send a callback to the function
        // Higher order functions yay!
        todo(function () {
          $("body").addClass("unhide");

          // Remove unnecessary classes after 0.4 seconds
          setTimeout(function () {
            $("body").removeClass("hide");
            $("body").removeClass("unhide");
          }, 600);
        });
      }
    }
  );
}

// loads books dinamically in div
//
function loadBooks() {
  readBooks(function (data) {
    var items = [];
    $.each(data, function (key, val) {
      items.push(
        "<a href='#' class='book-link' alt='" +
          val["title"] +
          "' data-title='" +
          val["title"] +
          "' id='" +
          key +
          "' style='background-image: url(" +
          val["square-thumbnail"] +
          ")'></a>"
      );
    });
    $(".books").html(items.join(""));
  });
}

// load book front
//
function loadBookFront(book, shouldPushState, callback) {
  readBooks(function (data) {
    $("article").load("pages/books/front.html", function () {
      // Fix for scroll restoration
      window.scrollTo(0, 0);

      var title = data[book]["title"];

      if (shouldPushState) {
        window.history.pushState(
          {
            bookId: book,
            mode: FRONT_VIEW,
            title: title,
          },
          title,
          "#books/" + book
        );
      }

      $.each(data[book], function (key, val) {
        $("#" + key).html(data[book][key]);
      });

      // If there's a book file, change links, otherwise show conming soon
      if (
        data[book]["html-content"] !== "#" &&
        data[book]["html-content"] !== ""
      ) {
        $("a#read-print").attr("href", "print#" + book);
      } else {
        $("a#read-print").attr("href", "#");
        $("a#read-print").removeAttr("id");
        $("a#read-web").removeAttr("id");
      }

      $("#cover-img").attr("src", data[book]["cover-image"]);

      if (callback != null) {
        callback();
      }
    });
  });
}

// load book Print
// (only to be used in print/index.html)
//
function loadBookPrint(book) {
  $.getJSON("../" + booksMetadata, function (data) {
    Bindery.makeBook({
      content: {
        selector: "#book-html-content",
        url: "../" + data[book.substr(1, book.length)]["html-content"],
      },
    });
  });
}

// load book in Web reading version
//
function loadBookWeb(book, shouldPushState, callback) {
  readBooks(function (data) {
    $("article").load("pages/books/web.html", function () {
      $("a#read-print").attr("href", "print#" + book);

      $("#book-web-content").load(data[book]["html-content"], function () {
        if (shouldPushState) {
          window.history.pushState(
            {
              bookId: book,
              mode: WEB_VIEW,
              title: "Read online",
            },
            book,
            "#books/" + book + "/web"
          );
        }
      });

      if (callback != null) {
        callback();
      }
    });
  });
}

// on-popstate
//
window.onpopstate = function (e) {
  if (e.state != null) {
    animateChange(e.state.title, function (callback) {
      if (e.state.url) {
        changePage(e.state.url, e.state.title, false, callback);
      } else if (e.state.bookId) {
        if (e.state.mode == WEB_VIEW) {
          loadBookWeb(e.state.bookId, false, callback);
        } else if (e.state.mode == FRONT_VIEW) {
          loadBookFront(e.state.bookId, false, callback);
        }
      }
    });
  }
};

// mouse functions to enable gifs
//
$(document).on("mousemove", function (e) {
  $("span.gif-link > img").offset({ left: e.pageX + 10, top: e.pageY + 10 });
});

$(document)
  .on("mouseenter", "span.gif-link", function (event) {
    $(event.target.children[0]).css("opacity", 1);
  })
  .on("mouseleave", "span.gif-link", function () {
    $("span.gif-link > img").css("opacity", 0);
  });

// on-click
//
$(document).on("click", "a", function (e) {
  // Read selected language
  const selectedLang = $(".language-picker").attr("data-selected-lang");
  // If it's a languaet)ge picker button
  if ($(e.target).is("[data-selected-lang] > a")) {
    e.preventDefault();

    const clickedLanguage = $(e.target).attr("data-lang");
    console.log(clickedLanguage);
    console.log(selectedLang);

    if (clickedLanguage == selectedLang) {
      return; // Already selected.
    }
    const paths = (location.pathname + location.hash).split("/");
    // Testing only, in case we're serving the page from a path with dist/
    const distPathIndex = paths.indexOf("dist");
    const baseIndex = distPathIndex < 0 ? 1 : distPathIndex + 1;

    if (clickedLanguage != "en") {
      paths.splice(baseIndex, 0, clickedLanguage);
    } else {
      paths.splice(baseIndex, 1);
    }
    console.log(paths.join("/"));
    location.href = paths.join("/");
  }

  // If it's a book link inside the page
  if ($(e.target).hasClass("book-link")) {
    e.preventDefault();
    var title = e.target.getAttribute("data-title");
    animateChange(title, function (callback) {
      loadBookFront(e.target.id, true, callback);
    });
    return;
  }

  // If it's a book link inside the page
  if ($(e.target).hasClass("font-size")) {
    e.preventDefault();

    var fontSize = parseInt($("#book-html-content p").css("font-size"));
    if ($(e.target).hasClass("plus")) {
      fontSize = fontSize + 1 + "px";
    } else {
      fontSize = fontSize - 1 + "px";
    }

    $("#book-html-content p").css({ "font-size": fontSize });
    return;
  }

  // If it's a books web or books print link inside the page
  var suffix = "#books/";
  var indexBooks = document.URL.lastIndexOf(suffix);
  if (indexBooks !== -1) {
    var bookName = document.URL.substr(
      indexBooks + suffix.length,
      document.URL.length
    );

    if ($(e.target).is("#read-web")) {
      e.preventDefault();
      animateChange("Read online", function (callback) {
        loadBookWeb(bookName, true, callback);
      });
      return;
    } else if ($(e.target).is("#read-print")) {
      return;
    }
  }

  // If it's a normal link inside the page
  if (e.target.href.indexOf(window.location.origin) > -1) {
    e.preventDefault();

    // if it's a normal tag anchor link within the same page
    var hash = e.target.href.match(/(?:#)((\w)*)/);
    if (hash != null) {
      if (hash[0] == "#") {
        var targetOffset = $(e.target).offset();
        targetOffset.top = targetOffset.top - 20;

        $("#coming-soon").css("display", "inline-block");
        $("#coming-soon").css("opacity", 1);

        $("#coming-soon").offset(targetOffset);
        $("#coming-soon").animate({ opacity: 0 }, 500);
      } else {
        $("html, body").animate(
          {
            scrollTop: $("#" + hash[1]).offset().top - 100,
          },
          800
        );
      }
      return;
    }

    var title = e.target.getAttribute("data-title");

    // If it's a menu link
    if (
      $(e.target).hasClass("menu-link") &&
      window.matchMedia("(max-width: 768px)").matches
    ) {
      // Load page
      changePage(e.target.href, title, true, function () {
        $(".mobile-nav").removeAttr("style");
        $("body").removeClass("show");
      });
    } else {
      // If it's a non-menu link

      var title = e.target.getAttribute("data-title");

      animateChange(title, function (callback) {
        window.changePage(e.target.href, title, true, callback);
      });
    }
    return;
  }
});

// on-load
// enables highlight sharing on page load
//
$(document).ready(function () {
  var val = HighlightShare({
    selector: "#book-web-content",
    sharers: [
      HighlightShareViaFacebook,
      HighlightShareViaTwitter,
      HighlightShareViaEmail,
      HighlightShareViaCopy,
    ],
  });
  val.init();
});

// on-scroll
// displays a reading marker on book view
//
$(document).on("scroll", function () {
  var total = $(document).height() - window.innerHeight;
  var position = $(document).scrollTop();

  var barHeight = $("#progress-bar").height() - 20;
  var progress = position / total;
  var value = !isNaN(progress) ? Math.round(progress * 100) : 0;

  $("#progress-indicator").css("margin-top", progress * barHeight);
  $("#progress-indicator > span").text(value + "%");
});
