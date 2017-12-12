import ScrollMagic from "scrollmagic";

{
  function pinSiteLogo(logo) {
    let controller = new ScrollMagic.Controller(),
      scene = new ScrollMagic.Scene({
        triggerElement: ".homeHeader__description",
        offset: jQuery(window).height() / 2 - 200
      });
      scene.setClassToggle(".homeHeader__description .siteLogo, .siteHeader__burgerMenu__button","fixedTop");
      scene.addTo(controller);
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
  if (jQuery('.homeHeader__description')) {
    pinSiteLogo(jQuery('.homeHeader__description .siteLogo'));
  }
}
