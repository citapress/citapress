

function changePage(url, title) {
  $('article').load(url);
  window.history.pushState({
    name: title,
    url:url
  }, title, "#" + url.match(/(?:ajax\/)(.*)(?:\.html)/)[1]);
}

// function getURLFrom

window.onpopstate = function(e){
    if(e.state) {
      $('article').load(e.state.url);
    }
};

$(document).on('click', 'a', function (e) {

  // BORRAR CUANDO ESTÉN TODAS ==================================
  console.log(e.target);
  if (e.target.getAttribute("data-comingsoon")) {
    console.log("Ajá")
    e.preventDefault();
    var alreadyHidden = false;
    $('body').addClass('hide');
    $('#section-title').text("Coming soon");

    $("main").one("transitionend webkitTransitionEnd oTransitionEnd", function() {
      if (!alreadyHidden) {
        alreadyHidden = true;
        $('body').addClass('unhide');
        // Remove unnecessary classes after 0.4 seconds
        setTimeout(function(){
          $('body').removeClass('hide');
          $('body').removeClass('unhide');
        }, 600);
      }
    });
    return;
  }
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
  // console.log(e.target.href);
  // console.log(document.domain);
  // console.log("AAAAAAAAAAAA");
});