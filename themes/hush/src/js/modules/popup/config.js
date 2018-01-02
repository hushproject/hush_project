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
  jQuery('#subForm').submit(function(e) {
    var getPosition = function() {
      return new Promise(function(resolve, reject) {
        return navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    };
    let _this = this;
    e.preventDefault();
    if (jQuery('#getuserlocation').length) {
      getPosition().then((position) => {
        jQuery('#getuserlocation').val(`latitude: ${position.coords.latitude}
            | longitude: ${position.coords.longitude}`);
        sendForm(_this);
      }).catch((err) => {
        sendForm(_this);
      });
    }
  });

  function sendForm(_this) {
    jQuery('.sendRequest__wrapper').fadeOut(300);
    jQuery('.formSending').fadeIn(300);
    $.getJSON(
      _this.action + "?callback=?",
      $(_this).serialize(),
      function(data) {
        if (data.Status === 400) {
          alert("Error: " + data.Message);
        } else {
          console.log(data);
          jQuery('.formSending').hide();
          jQuery('.sitePopup__content__thankU').addClass('active');
        }
      });
  }
  jQuery('.closeAfterSending').click(() => {
    jQuery('.sitePopup__content__thankU').removeClass('active');
    jQuery('.sendRequest__wrapper').show();
  });
}
