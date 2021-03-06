{
    function pinSiteLogo(logo) {
        let controller = new ScrollMagic.Controller(),
            trigeredClasses = ".homeHeader__description .siteLogo, .siteHeader__burgerMenu__button, .siteHeader__logo",
            hideMenuWord = ".pinHeader";
        console.log(hideMenuWord.length);
        if (jQuery(hideMenuWord).length) {
            new ScrollMagic.Scene({
                    triggerElement: hideMenuWord,
                }).setClassToggle(trigeredClasses, "fixedTop")
                .addTo(controller).triggerHook(0.1);
        }
        if (jQuery('#contentPageHeader').length) {
            var el = jQuery('#contentPageHeader');
            new ScrollMagic.Scene({
                triggerElement: el,
                duration: el.outerHeight(),
            }).addTo(controller).triggerHook(0).on("progress", function(e) {
                el.css("opacity", 1 - e.progress.toFixed(2))
            });
        }
        jQuery('.darkMenu').each(function(item) {
            jQuery(this).attr('id', `darkMenu-${item}`);
            new ScrollMagic.Scene({
                triggerElement: `#darkMenu-${item}`,
                duration: jQuery(this).outerHeight()
            }).on("enter", function(e) {
                jQuery(trigeredClasses).removeClass('lightMenu');
                jQuery(trigeredClasses).removeClass('whiteMenu');
                jQuery(trigeredClasses).addClass('darkTheme');
            }).addTo(controller).triggerHook(0);
        });
        jQuery('.lightMenu').each(function(item) {
            jQuery(this).attr('id', `light-${item}`);
            new ScrollMagic.Scene({
                triggerElement: `#light-${item}`,
                duration: jQuery(this).outerHeight(),
            }).on("enter", function(e) {
                jQuery(trigeredClasses).removeClass('darkTheme');
                jQuery(trigeredClasses).removeClass('whiteMenu');
                jQuery(trigeredClasses).addClass('lightMenu');
            }).addTo(controller).triggerHook(0);
        });
        jQuery('.whiteMenu').each(function(item) {
            jQuery(this).attr('id', `white-${item}`);
            new ScrollMagic.Scene({
                triggerElement: `#white-${item}`,
                duration: jQuery(this).outerHeight(),
            }).on("enter", function(e) {
                jQuery(trigeredClasses).removeClass('darkTheme');
                jQuery(trigeredClasses).removeClass('lightMenu');
                jQuery(trigeredClasses).addClass('whiteMenu');
            }).addTo(controller).triggerHook(0);
        });
        jQuery('.hideLogo').each(function(item) {
            jQuery(this).attr('id', `hideLogo-${item}`);
            new ScrollMagic.Scene({
                    triggerElement: `#hideLogo-${item}`,
                    duration: jQuery(this).outerHeight()
                }).setClassToggle(trigeredClasses, "hiddenLogo")
                .addTo(controller).triggerHook(0.1);
        });
        jQuery('.animate').each(function(item) {
            var id = `#animated-${item}`;
            if (jQuery(this).attr('data-animation')) {
                if (jQuery(this).attr('id')) {
                    id = `${jQuery(this).attr('id')}`
                } else {
                    id = `animated-${item}`
                }
                jQuery(this).attr('id', id);
                new ScrollMagic.Scene({
                        triggerElement: `#${id}`
                    }).setClassToggle(`#${id}`, `${jQuery(this).attr('data-animation')}`)
                    .addTo(controller)
                    .triggerHook(1);
            }
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

    jQuery(window).scroll(function() {
        var $this = jQuery(this),
            menu = jQuery('body[data-page-id="privacy"] .siteHeader__burgerMenu__button');
        if ($this.scrollTop() > 200) {
            menu.find('i').css('display', 'none')
        } else {
            menu.find('i').css('display', 'block')
        }
    })

    jQuery(window).bind("load resize", function() {

        if (jQuery(window).width() < 600) {
            jQuery('.siteHeader__logo.fixedTop').css('opacity', 1);
            jQuery('.siteHeader__burgerMenu__button.fixedTop i').css('opacity', 1);
            jQuery(window).scroll(function() {
                var $this = jQuery(this),
                    menu = jQuery('body');
                if ($this.scrollTop() > 200) {
                    jQuery('.siteHeader__logo.fixedTop').css('opacity', 0);
                    jQuery('.siteHeader__burgerMenu__button.fixedTop i').css('opacity', 0);
                } else {
                    jQuery('.siteHeader__logo.fixedTop').css('opacity', 1);
                    jQuery('.siteHeader__burgerMenu__button.fixedTop i').css('opacity', 1);
                }
            })

        } else {
            $('.aside-panel').removeClass('mobile');
        }
    });


}