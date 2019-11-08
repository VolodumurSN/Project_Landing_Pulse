$(document).ready(function(){ //download document with JQuery and run code when it ready
    $('.carousel__inner').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider_prev.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider_next.svg"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows:false,
                respondTo: '.carousel__inner'
              }
            }
          ]
        
    });
  });