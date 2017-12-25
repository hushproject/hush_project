{
  function scrollToAnchor() {
    jQuery('.scrollToAnchor, .buttonToAnchor').click(function functionName(e) {
      e.preventDefault();
      let anchor;
      if(jQuery(this).hasClass('buttonToAnchor')) {
        anchor = jQuery(this).attr('data-href');
      }else {
        anchor = jQuery(this).attr('href');
      }
      $("html, body").animate({
        scrollTop: jQuery(anchor).offset().top
      }, 500, function functionName() {
        window.location.hash = anchor.replace('#', '');
      });
    });
  }
  if(jQuery(window).width() < 1024) {
    scrollToAnchor();
  } 
}
