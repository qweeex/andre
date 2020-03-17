import jQuery from "jquery";
import Swiper from "swiper";

if (window.$ === undefined){
  window.$ = jQuery;
}

jQuery(function() {

  jQuery(document).ready(function () {


     // Instagram
     InitInstagram();

     // Saratov SLider
     SaratovSlider()

  });

  function InitInstagram() {
    let offsetLeft = $('.container')[0].offsetLeft;
    offsetLeft = offsetLeft + 15;
    let insta = new Swiper('.insta-slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: true,
    });
    $('.insta-slider .swiper-wrapper').css('transform', 'translate3d('+offsetLeft+'px, 0px, 0px)');

    $('.instagram-arrows__left').on('click', function () {
        insta.slidePrev();
    });
    $('.instagram-arrows__right').on('click', function () {
        insta.slideNext();
    });

  }

  function SaratovSlider() {
      let saratov = new Swiper('.about-photos__carousel', {
          slidesPerView: 1,
          fadeEffect: {
              crossFade: true
          },
      });

      $('.about-arrows__left').on('click', function (e) {
          e.preventDefault();
        saratov.slidePrev();
        console.log('Saratov prev');
      });

      $('.about-arrows__right').on('click', function (e) {
          e.preventDefault();
          saratov.slideNext();
          console.log('Saratov next');
      });

  }

});
