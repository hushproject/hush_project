{
  function showHideSidebar() {
    jQuery('.siteHeader__burgerMenu__button').click(function() {
      let elements = jQuery('.siteSidebarMenu, .siteHeader__burgerMenu__button');
      if(jQuery(this).hasClass('active')) {
        elements.removeClass('active');
      }else {
        elements.addClass('active');
      }
    });
  }
  if(jQuery('.siteSidebarMenu')) {
    showHideSidebar();
  }
}
