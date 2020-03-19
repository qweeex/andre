import jQuery from "jquery";
import Swiper from "swiper";

if (window.$ === undefined){
  window.$ = jQuery;
}

jQuery(function() {

  jQuery(document).ready(function () {


     // Instagram
     InitInstagram();

     // Menu category
      MenuCategory();

      // Menu item
      MenuItem();

      // Contact map
      ymaps.ready(contactMap);

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

    function MenuCategory() {

      let categoryMenu = new Swiper('.menu-category__slider' ,{
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 58,
          slideToClickedSlide: true
      });

      $('.menu-category__arrows > .arrows-left').on('click', function () {
          categoryMenu.slidePrev();
      });

      $('.menu-category__arrows > .arrows-right').on('click', function () {
          categoryMenu.slideNext();
      });

  }

    function MenuItem() {

      let menuItem = new Swiper('.vertical-content', {
          direction: 'vertical',
          slidesPerView: 10,
          autoHeight: false,
      });

      $(document).on('click', '.menu-info__arrows > .arrow-top', function () {
          menuItem.slidePrev();
      });
      $(document).on('click', '.menu-info__arrows > .arrow-bottom', function () {
          menuItem.slideNext();
      });

  }


    function contactMap () {
        let myMap = new ymaps.Map('contactMap', {
            center: [51.528934, 46.062145],
            zoom: 12,
            controls: ['zoomControl'],
        });
        myMap.geoObjects
            .add(new ymaps.Placemark([51.543142, 46.021680]))
            .add(new ymaps.Placemark([51.503741, 46.117476]));
    }

});
