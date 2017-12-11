{
  function pinSiteLogo(logo) {
    jQuery(window).scroll(() => {
      let scrollPosition = jQuery(document).scrollTop();
      if (scrollPosition > logo.offset().top) {
        logo.addClass('fixedTop');
      } else {
        logo.removeClass('fixedTop');
      }
    });
  }

  function showHideSidebar() {
    jQuery('.siteHeader__burgerMenu__button').click(function() {
      let elements = jQuery('.siteSidebarMenu, .siteHeader__burgerMenu__button');
      if (jQuery(this).hasClass('active')) {
        elements.removeClass('active');
      } else {
        elements.addClass('active');
      }
    });
  }
  if (jQuery('.siteSidebarMenu')) {
    showHideSidebar();
  }
  if (jQuery('.homeHeader__description .siteLogo')) {
    pinSiteLogo(jQuery('.homeHeader__description .siteLogo'));
  }
}
