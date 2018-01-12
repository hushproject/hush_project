{
  function showHideForm(scrollPosition) {
    if (!scrollPosition) {
      scrollPosition = jQuery(window).scrollTop();
    }
    jQuery('.enquireCallForm').click(function(e) {
      scrollPosition = jQuery(window).scrollTop();
      jQuery('.sitePopup').addClass('active');
      jQuery("body").addClass('noScroll');
      jQuery("body").css("top", scrollPosition * -1);
      jQuery("#buttonidinputname").val(jQuery(this).attr('href') + '-' + jQuery('body').attr('data-page-id'));
      if (readCookie('_hashtaginputname') != null) {
        jQuery('#hashtaginputname').val(readCookie('_hashtaginputname'));
      }
      e.preventDefault();
    });
    jQuery('.closePopup').click(() => {
      if(jQuery('.siteSidebarMenu').hasClass('active')) {
        jQuery('.sitePopup').removeClass('active');
      }else {
        jQuery("body").removeClass('noScroll');
        $("html, body").animate({
          scrollTop: scrollPosition
        }, 0, function () {
          jQuery('.sitePopup').removeClass('active');
            scrollPosition = 0;
        });
      }
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
    jQuery('.sendRequest__wrapper').fadeOut(300);
    jQuery('.formSending').fadeIn(300);
    if (jQuery('#getuserlocation').length) {
      getPosition().then((position) => {
        jQuery('#getuserlocation').val(`${position.coords.latitude},${position.coords.longitude}`);
        sendForm(_this);
      }).catch((err) => {
        sendForm(_this);
      });
    } else {
      sendForm(_this);
    }
  });

  function sendForm(_this) {
    $.getJSON(
      _this.action + "?callback=?",
      $(_this).serialize(),
      function(data) {
        if (data.Status === 400) {
          alert("Error: " + data.Message);
        } else {
          jQuery('.formSending').hide();
          jQuery('.sitePopup__content__thankU').addClass('active');
        }
      });
  }
  jQuery('.closeAfterSending').click(() => {
    jQuery('.sitePopup__content__thankU').removeClass('active');
    jQuery('.sendRequest__wrapper').show();
  });

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
}
