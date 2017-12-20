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
    let formValues = {
      name: jQuery('input[name=name]').val(),
      whenAreYouThink: jQuery('select[name=whenareyouthinkingstring]').val(),
      howManyPeople: jQuery('select[name=howmanypeoplestring]').val(),
      email: jQuery('input[name=email]').val(),
      sendBrochure: jQuery('input[name=pleasesendmeabrochurestring]').val(),
      message: jQuery('textarea[name=message]').val(),
      addToMailList: jQuery('input[name=pleaseaddmetoyourmailingliststring]').val()
    },
    send = jQuery.ajax({
      url: "https://formspree.io/vlgutv@gmail.com",
      method: "POST",
      data: formValues,
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
