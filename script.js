var menu01 = new MobileMenu;

menu01.init();

function MobileMenu(){
  
  // set variables
  var $body = $('body');
  var $btnMenu = $('.btn-menu');
  var $header = $('header');
  // get the nav li elements from the 
  // desktop menu
  var navLiHTML = $('header nav ul').html();
  // create the mobile menu from the desktop li elements...
  var mobileNavHTML = $('<nav class="mobile-nav"><ul>' + navLiHTML  + '</ul></nav>');
  
  // Add the mobile menu to the main element...
  $('main').prepend(mobileNavHTML);
  
  // select the newly created mobile menu
  var $mobileNav = $('.mobile-nav');
  
  
  // initialization method for the
  // MobileMenu class 
  this.init = function(){
    
    // get header height
    var mobileHeaderHeight = $header.height();

    // Click event handler for the mobile menu
    $btnMenu.click(function(){
      // check if body element has the
      // class show
      if($body.hasClass('show')){
        // menu is open...
        // remove any heights set on the mobile nav
        $mobileNav.removeAttr('style');
        // remove the "show" class from the body
        // element
        $body.removeClass('show');
      }else{
        // menu is closed...
        // set height of mobile menu to the open height
        $mobileNav.css('height', $(document).height() - mobileHeaderHeight);
        // add the class "show" to the body element
        $body.addClass('show'); 
      } // end if menu is open...
        
    }); // end mobile menu click event handler

  } // end init()
  
} // end MobileMenu Constructor