
// change page function
//
function changePage(url, title) {
  $('article').load(url);
  window.history.pushState({
    name: title,
    url: url
  }, title, "#" + url.match(/(?:ajax\/)(.*)(?:\.html)/)[1]);
}

// function getURLFrom
//
window.onpopstate = function(e){
  if(e.state) {
    $('article').load(e.state.url);
  }
};

// load books
//
function loadBooks() {
  $.getJSON( "js/books.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<a class='book-link' id='" + key + "' style='background-image: url(" + val["square-thumbnail"] + ")'></a>" );
    });

    $('.books').html(items.join(''));
  });
}

// load book
//
function loadBookFront(book) {
  $.getJSON( "js/books.json", function( data ) {
    $('article').load("ajax/books/front.html", function() {
      var title = data[book]["title"];
      window.history.pushState({ name: title }, title, "#books/" + book);
      $.each( data[book], function( key, val ) {
        $("#" + key).html(data[book][key]);
      });
    });
  });
}

// load book Print
//
function loadBookPrint(book) {
  $.getJSON( "js/books.json", function( data ) {
  // var title = data[book]["title"];
    // window.history.pushState({ name: book }, book, "#books/" + book);
    Bindery.makeBook({
      content: {
        selector: '#book-html-content',
        url: data[book]["html-content"]
      }
    });
    
  });
}

// load book Web
//
function loadBookWeb(book) {
  console.log(book)
  $.getJSON( "js/books.json", function( data ) {
    $('article').load("ajax/books/web.html", function() {
      $('#book-web-content').load(data[book]["html-content"], function() {
        console.log("done");
        // window.history.pushState({ name: book }, book, "#books/" + book);
      })
      //var title = data[book]["title"];
      
    });
  });
}

// on-click
//
$(document).on('click', 'a', function (e) {
  console.log($(e.target));

  if ($(e.target).hasClass("book-link")) {
    e.preventDefault();
    loadBookFront(e.target.id);
    return;
  }

  var suffix = '#books/';
  var indexBooks = document.URL.lastIndexOf(suffix);
  if (indexBooks !== -1) {
    var bookName = document.URL.substr(indexBooks + suffix.length,document.URL.length);

    if ($(e.target).is("#read-web")) {
      e.preventDefault();
      loadBookWeb(bookName);
      return;
    }

    if ($(e.target).is("#read-print")) {
      e.preventDefault();
      loadBookPrint(bookName);
      return;
    }
  }

  



  // BORRAR CUANDO ESTÉN TODAS ==================================
  // console.log(e.target);
  // if (e.target.getAttribute("data-comingsoon")) {
  //   console.log("Ajá")
  //   e.preventDefault();
  //   var alreadyHidden = false;
  //   $('body').addClass('hide');
  //   $('#section-title').text("Coming soon");

  //   $("main").one("transitionend webkitTransitionEnd oTransitionEnd", function() {
  //     if (!alreadyHidden) {
  //       alreadyHidden = true;
  //       $('body').addClass('unhide');
  //       // Remove unnecessary classes after 0.4 seconds
  //       setTimeout(function(){
  //         $('body').removeClass('hide');
  //         $('body').removeClass('unhide');
  //       }, 600);
  //     }
  //   });
  //   return;
  // }
  // ============================================================
  
  // If the link goes within the same page
  if (e.target.href.indexOf(window.location.origin) > -1) {
    e.preventDefault();

    var title = e.target.getAttribute("data-title");

    // If it's a menu link
    if ($(e.target).hasClass('menu-link') && window.matchMedia('(max-width: 768px)').matches) {
      // Load page
      changePage(e.target.href, title);
      $('.mobile-nav').removeAttr('style');
      $('body').removeClass('show');

    } else { // If it's a non-menu link

      var alreadyHidden = false;
      $('body').addClass('hide');
      
      $('#section-title').text(e.target.getAttribute("data-title"));

      $("main").one("transitionend webkitTransitionEnd oTransitionEnd", function(){
      if (!alreadyHidden) {
        alreadyHidden = true;

        // Load page
        changePage(e.target.href, title);
        $('body').addClass('unhide');

        // Remove unnecessary classes after 0.4 seconds
        setTimeout(function(){
          $('body').removeClass('hide');
          $('body').removeClass('unhide');
        }, 600);
      }
    });
    }
    // Close menu
  } else {
    console.log("Goes somewhere else ");
  }
});





