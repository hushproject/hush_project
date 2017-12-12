// import ScrollMagic from "scrollmagic";
// import debug from "plugins/debug.addIndicators.js"
{
  function pinSiteLogo(logo) {
    let controller = new ScrollMagic.Controller(),
      scene = new ScrollMagic.Scene({
        triggerElement: ".homeHeader__description",
        offset: jQuery(window).height() / 2 - 200
      });
      scene.setClassToggle(".homeHeader__description .siteLogo","fixedTop")
      .addTo(controller)
      .addIndicators();
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
