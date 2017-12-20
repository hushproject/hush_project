{
  function showHideForm(scrollPosition) {
    if (!scrollPosition) {
      scrollPosition = jQuery(window).scrollTop();
    }
    jQuery('.enquireCallForm').click(() => {
      scrollPosition = jQuery(window).scrollTop();
      jQuery('.sitePopup').addClass('active');
      jQuery("body").addClass('noScroll');
      jQuery("body").css("top", scrollPosition * -1);
    });
    jQuery('.closePopup').click(() => {
      jQuery("body").removeClass('noScroll');
      $("html, body").animate({
        scrollTop: scrollPosition
      }, 0, function functionName() {
        jQuery('.sitePopup').removeClass('active');
        scrollPosition = 0;
      });
    });
  };
  showHideForm();
  jQuery('#sendRequest').submit(function(event) {
    event.preventDefault();
    jQuery('.sendRequest__wrapper').fadeOut(300);
    jQuery('.formSending').fadeIn(300);
    let send = jQuery.ajax({
      url: "https://formspree.io/vlgutv@gmail.com",
      method: "POST",
      data: {
        message: "hello Chris it`s Vova)!"
      },
      dataType: "json"
    });
    send.then((result) => {
      jQuery('.formSending').hide();
      jQuery('.sitePopup__content__thankU').addClass('active');
    });
  });
  jQuery('.closeAfterSending').click(() => {
    jQuery('.sitePopup__content__thankU').removeClass('active');
    jQuery('.sendRequest__wrapper').show();
  });
}
