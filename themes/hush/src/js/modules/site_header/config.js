import ScrollMagic from "scrollmagic"; {
  function pinSiteLogo(logo) {
    let controller = new ScrollMagic.Controller(),
      trigeredClasses = ".homeHeader__description .siteLogo, .siteHeader__burgerMenu__button, .siteHeader__logo";
    if(jQuery('.homeHeader__description, .contentPage__header__text, .findUsPage').length) {
      new ScrollMagic.Scene({
        triggerElement: ".homeHeader__description, .contentPage__header__text, .findUsPage",
        offset: jQuery(window).outerHeight() / 2
      }).setClassToggle(trigeredClasses, "fixedTop").addTo(controller);
    }
    jQuery('.darkMenu').each(function(item) {
      jQuery(this).attr('id', `darkMenu-${item}`);
      new ScrollMagic.Scene({
        triggerElement: `#darkMenu-${item}`,
        duration: jQuery(this).outerHeight(),
        offset: jQuery(window).outerHeight() / 2
      }).setClassToggle(trigeredClasses, "darkTheme").addTo(controller);
    });
    jQuery('.lightMenu').each(function(item) {
      jQuery(this).attr('id', `light-${item}`);
      new ScrollMagic.Scene({
        triggerElement: `#light-${item}`,
        duration: jQuery(this).outerHeight(),
        offset: 50
      }).setClassToggle(trigeredClasses, "lightMenu").addTo(controller);
    });
    jQuery('.hideLogo').each(function(item) {
      jQuery(this).attr('id', `hideLogo-${item}`);
      new ScrollMagic.Scene({
        triggerElement: `#hideLogo-${item}`,
        duration: jQuery(this).outerHeight(),
        offset: jQuery(window).outerHeight() / 1.8
      }).setClassToggle(trigeredClasses, "hiddenLogo").addTo(controller);
    });
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
