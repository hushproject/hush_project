import slick from "slick-carousel"; {
    if ($('#testimonialSlider').length) {
        let speed = $('#testimonialSlider').attr('data-speed');
        if (speed.length > 0) {
            $('#testimonialSlider').slick({
                slidesToShow: 1,
                arrows: true,
                dots: true,
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
                        slidesToScroll: 1,
                        autoplay: false,
                        fade: false,
                        adaptiveHeight: true
                    }
                }]
            });
        }
    }
}