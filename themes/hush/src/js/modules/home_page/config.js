{
    function scrollToAnchor() {
        jQuery('.scrollToAnchor, .buttonToAnchor').click(function functionName(e) {
            e.preventDefault();
            let anchor;
            if (jQuery(this).hasClass('buttonToAnchor')) {
                anchor = jQuery(this).attr('data-href');
            } else {
                anchor = jQuery(this).attr('href');
            }
            $("html, body").animate({
                scrollTop: jQuery(anchor).offset().top
            }, 500, function functionName() {
                window.location.hash = anchor.replace('#', '');
            });
        });
    }
    if (jQuery(window).width() < 1024) {
        scrollToAnchor();
    }

    jQuery('.siteSidebarMenu__inner ul:nth-child(1) > span').html('Take a Peek');
    jQuery('.siteSidebarMenu__inner ul:nth-child(2) > span').html('Ideas');
    jQuery('.siteSidebarMenu__inner ul:nth-child(3) > span').html('Stay with Us');
    jQuery('.siteSidebarMenu__inner ul:nth-child(4) > span').html('Learn More');
}