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

  function showHideSidebar(scrollPosition) {
    jQuery('.siteHeader__burgerMenu__button').click(function() {
      let elements = jQuery('.siteSidebarMenu, .siteHeader__burgerMenu__button');
      if (!scrollPosition || scrollPosition === 0) {
        scrollPosition = jQuery(window).scrollTop();
      }
      if (jQuery(this).hasClass('active')) {
        jQuery("body").removeClass('noScroll');
        $("html, body").animate({
          scrollTop: scrollPosition
        }, 0, function functionName() {
          elements.removeClass('active');
          scrollPosition = 0;
        });
      } else {
        elements.addClass('active');
        jQuery("body").addClass('noScroll');
        jQuery("body").css("top", scrollPosition * -1);
      }
      $(".stick").toggleClass(function() {
        return $(this).is('.open, .close') ? 'open close' : 'open';
      });
    });
  }
  if (jQuery('.siteSidebarMenu').length) {
    showHideSidebar();
  }
  if (jQuery('.homeHeader__description').length) {
    pinSiteLogo(jQuery('.homeHeader__description .siteLogo'));
  }
}
