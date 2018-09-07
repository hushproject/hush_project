import validate from "jquery-validation"; {
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
            if (jQuery('.siteSidebarMenu').hasClass('active')) {
                jQuery('.sitePopup').removeClass('active');
            } else {
                jQuery("body").removeClass('noScroll');
                $("html, body").animate({
                    scrollTop: scrollPosition
                }, 0, function() {
                    jQuery('.sitePopup').removeClass('active');
                    scrollPosition = 0;
                });
            }
        });
    };
    showHideForm();
    jQuery('#subForm').submit(function(e) {
        e.preventDefault();
        let val1 = jQuery('input[name=cm-name]').val(),
            val2 = jQuery('input[name=cm-fvktd-fvktd]').val(),
            val3 = jQuery('select[name=cm-fo-vjldkt]').val(),
            email = /\S+@\S+\.\S+/.test(val2);
        if (val1.length > 2 && email === true && val3 !== null) {
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
                        sendForm(_this)
                    }).catch((err) => {
                        sendForm(_this)
                    });
                } else {
                    sendForm(_this)
                }
            });
        }
        if (val1.length < 2) {
            jQuery('input[name=cm-name]').addClass('error');
        } else {
            jQuery('input[name=cm-name]').removeClass('error');
        }
        if (!email) {
            jQuery('input[name=cm-fvktd-fvktd]').addClass('error');
        } else {
            jQuery('input[name=cm-fvktd-fvktd]').removeClass('error');
        }
        if (val3 === null) {
            jQuery('select[name=cm-fo-vjldkt]').addClass('error');
        } else {
            jQuery('select[name=cm-fo-vjldkt]').removeClass('error');
        }
    });


    function sendForm(_this) {
		let form_id = jQuery('#subForm').attr('data-id');
		let email = jQuery("input.js-cm-email-input");
		let request_data = "email=" + encodeURIComponent(email.val()) + "&data=" + form_id;
		// Prepare tokenRequest.
		let tokenRequest = new XMLHttpRequest();
		tokenRequest.open('POST', 'https://createsend.com//t/getsecuresubscribelink', true);
		tokenRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		tokenRequest.send(request_data);
		tokenRequest.onreadystatechange = function() {
			if (this.readyState === 4) {
				if (this.status === 200) {
					let subscribeRequest = new XMLHttpRequest();
					subscribeRequest.open('POST', this.responseText, true);
					subscribeRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					subscribeRequest.send(jQuery("#subForm").serialize());
					// On ready state call response function.
					subscribeRequest.onreadystatechange = function() {
						if (this.readyState === 4) {
							  if (this.status === 200) {
								
								if (jQuery( this.response ).find('.g-recaptcha').length) {
									let form_id = jQuery('#subForm').attr('data-id');
									let email = jQuery("input.js-cm-email-input");
									let request_data = "email=" + encodeURIComponent(email.val()) + "&data=" + form_id;
									// Prepare tokenRequest.
									let tokenRequest = new XMLHttpRequest();
									tokenRequest.open('POST', 'https://createsend.com//t/getsecuresubscribelink', true);
									tokenRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
									tokenRequest.send(request_data);
									tokenRequest.onreadystatechange = function() {
										if (this.readyState === 4) {
											if (this.status === 200) {
												document.querySelector('#subForm').action=this.responseText,
												document.querySelector('#subForm').submit();
											}
										}
									}
								}
								else {
									jQuery('.formSending').hide();
									jQuery('.sitePopup__content__thankU').addClass('active');
								}
							}
						}
					}
				}
			}
		}
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
    jQuery('#brochureInput').click(function() {
        let valueYes = jQuery(this).attr('data-yes'),
            valueNo = jQuery(this).attr('data-no'),
            valueCurrent = jQuery(this).val();
        if (valueCurrent == valueYes) {
            jQuery(this).val(valueNo);
        } else {
            jQuery(this).val(valueYes);
        }
    });
}