import slick from "slick-carousel";
{
  if($('#testimonialSlider').length) {
    let speed = $('#testimonialSlider').attr('data-speed');
    if(speed.length > 0) {
      $('#testimonialSlider').slick({
        slidesToShow: 1,
        arrows: true,
        dots: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: speed,
        fade: true
      });
    }
  }
}
