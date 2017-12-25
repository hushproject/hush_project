import ScrollMagic from "scrollmagic"; {
  function pinSiteLogo(logo) {
    let controller = new ScrollMagic.Controller(),
      scene = new ScrollMagic.Scene({
        triggerElement: ".homeHeader__description",
        offset: jQuery(window).height() / 2 - 200
      }),
      trigeredClasses = ".homeHeader__description .siteLogo, .siteHeader__burgerMenu__button, .siteHeader__logo";
    jQuery('.darkMenu').each(function(item) {
      jQuery(this).attr('id', `darkMenu-${item}`);
      new ScrollMagic.Scene({
        triggerElement: `#darkMenu-${item}`,
        duration: jQuery(this).height(),
        offset: jQuery(window).height() / 2
      }).setClassToggle(trigeredClasses, "darkThere").addTo(controller);
    });
    jQuery('.hideLogo').each(function(item) {
      jQuery(this).attr('id', `hideLogo-${item}`);
      new ScrollMagic.Scene({
        triggerElement: `#hideLogo-${item}`,
        duration: jQuery(this).height(),
        offset: jQuery(window).height() / 2
      }).setClassToggle(trigeredClasses, "hiddenLogo").addTo(controller);
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
  pinSiteLogo(jQuery('.homeHeader__description .siteLogo'));
}
