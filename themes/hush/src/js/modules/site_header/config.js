import ScrollMagic from "scrollmagic"; {
  function pinSiteLogo(logo) {
    let controller = new ScrollMagic.Controller(),
      controller2 = new ScrollMagic.Controller(),
      scene = new ScrollMagic.Scene({
        triggerElement: ".homeHeader__description",
        offset: jQuery(window).height() / 2 - 200
      }),
      trigeredClasses = ".homeHeader__description .siteLogo, .siteHeader__burgerMenu__button";
    jQuery('.hideLogoOnThisSection').each(function() {
      let el = `#${jQuery(this).attr('id')}`;
      new ScrollMagic.Scene({
        triggerElement: el,
        duration: jQuery(this).height()
      }).setClassToggle(trigeredClasses, "noLogo").addTo(controller);
    });
    jQuery('.darkMenu').each(function() {
      let el = `#${jQuery(this).attr('id')}`;
      new ScrollMagic.Scene({
        triggerElement: el,
        duration: jQuery(this).height()
      }).setClassToggle(trigeredClasses, "darkThere").addTo(controller);
    });
    scene.setClassToggle(trigeredClasses, "fixedTop");
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
      $(".stick").toggleClass(function() {
        return $(this).is('.open, .close') ? 'open close' : 'open';
      });
    });
  }
  if (jQuery('.siteSidebarMenu')) {
    showHideSidebar();
  }
  if (jQuery('.homeHeader__description')) {
    pinSiteLogo(jQuery('.homeHeader__description .siteLogo'));
  }
}
