{
  jQuery('.closePopup').click(() => {
    jQuery('.sitePopup').removeClass('active');
  });
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
}
