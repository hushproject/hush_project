import slick from "slick-carousel"; {
    if ($('#testimonialSlider').length) {
        let speed = $('#testimonialSlider').attr('data-speed');
        if (speed.length > 0) {
            $('#testimonialSlider').slick({
                slidesToShow: 1,
                arrows: true,
                dots: false,
                speed: 600,
                autoplay: true,
                autoplaySpeed: speed,
                fade: true,
                adaptiveHeight: false,
                centerMode: true,
                centerPadding: '60px',
                responsive: [{
                    breakpoint: 640,
                    settings: {
                        slidesToShow: 1,
                        adaptiveHeight: true,
                        autoplay: false,
                        fade: false,
                        centerMode: true,
                        centerPadding: '0px'
                    }
                }]
            }).on('afterChange', function(event, slick,
                currentSlide, nextSlide) {
                if ($(window).width() < 600) {
                    $('html, body').animate({
                        scrollTop: $("#testimonialSlider").offset().top - 100
                    }, 500);
                }

            });
        }
    }
}