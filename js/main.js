$(function () {

  $('.header__slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt=""></button>',
    vertical: true,
    responsive: [
      {
        breakpoint: 410,
        settings: {
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000
        }
      }
    ]
  });

  $('.product__list').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.product__info',
    focusOnSelect: true,
    vertical: true,
    prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt=""></button>',
    centerMode: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          vertical: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          vertical: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          dots: true
        }
      }
    ]
  });

  $('.product__info').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__list',
    fade: true,
    arrows: false
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active')
  });

});