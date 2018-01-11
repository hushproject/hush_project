// import ScrollMagic from "scrollmagic";
{
  function pinSiteLogo(logo) {
    let controller = new ScrollMagic.Controller(),
      trigeredClasses = ".homeHeader__description .siteLogo, .siteHeader__burgerMenu__button, .siteHeader__logo",
      hideMenuWord = ".pinHeader";
    if(jQuery(hideMenuWord).length) {
      new ScrollMagic.Scene({
        triggerElement: hideMenuWord,
      }).setClassToggle(trigeredClasses, "fixedTop").addTo(controller).triggerHook(0.1);
    }
    jQuery('.darkMenu').each(function(item) {
      jQuery(this).attr('id', `darkMenu-${item}`);
      new ScrollMagic.Scene({
        triggerElement: `#darkMenu-${item}`,
        duration: jQuery(this).outerHeight()
      }).setClassToggle(trigeredClasses, "darkTheme").addTo(controller).triggerHook(0.1);
    });
    jQuery('.lightMenu').each(function(item) {
      jQuery(this).attr('id', `light-${item}`);
      new ScrollMagic.Scene({
        triggerElement: `#light-${item}`,
        duration: jQuery(this).outerHeight(),
      }).setClassToggle(trigeredClasses, "lightMenu").addTo(controller).triggerHook(0.1);
    });
    jQuery('.hideLogo').each(function(item) {
      jQuery(this).attr('id', `hideLogo-${item}`);
      new ScrollMagic.Scene({
        triggerElement: `#hideLogo-${item}`,
        duration: jQuery(this).outerHeight()
      }).setClassToggle(trigeredClasses, "hiddenLogo").addTo(controller).triggerHook(0.1);
    });
    jQuery('.animate').each(function(item) {
      var id = `#animated-${item}`;
      if(jQuery(this).attr('id')) {
        id = `${jQuery(this).attr('id')}`
      }else {
        id = `animated-${item}`
      }
      jQuery(this).attr('id', id);
      new ScrollMagic.Scene({
        triggerElement: `#${id}`
      }).setClassToggle(`#${id}`, `${jQuery(this).attr('data-animation')}`)
      .addTo(controller)
      .triggerHook(1);
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
