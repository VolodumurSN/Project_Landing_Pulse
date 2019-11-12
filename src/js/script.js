$(document).ready(function(){ //download document with JQuery and run code when it ready
  /*  Slider 
   */ 
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

  /*  Tabs 
   */ 
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });


  /*  Tabs content
    */
  function toggleSlide(item) {
    $(item).each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      });
    });
  }
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');


  /*  Modal
    */
  $('[data-modal=consultation]').on('click', function () {
    $('.overlay, #consultation').fadeIn('slow');    
  });
  $(document).mouseup(function (i){
    const modal = $('#consultation, #order, #thanks');
    if (!modal.is(i.target) && modal.has(i.target).length === 0) {
			$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
		}
	});
  $('.modal__close').on('click', function () {
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });
  $('.button_mini').each(function (i) {
    $(this).on('click', function () {
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  });

  /*   Validation
   */
  function valideForms(form) {
    $(form).submit(function(f) {
      f.preventDefault(); //cancel page reload
    }).validate({
      rules:{
        name: "required",
        phone: "required",
        email: {
          required:true,
          email:true
        }
      },
      messages: {
        name: "Пожалуйста, введите свое имя",
        phone: "Пожалуйста, введите свой телефон",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Введите почту в формате name@domain.com"
        }
      },
      submitHandler: function (event) {
        $.ajax({  
          type: "POST",
          url: "mailer/smart.php",
          data: $(event).serialize()
        }).done(function () {
          $(event).find('input').val('');
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn();
          $('form').trigger('reset'); 
        });
      }
    });
  }
  valideForms('#consultation-form');
  valideForms('#consultation form');
  valideForms('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");


  /*  Smooth scroll and pageup
   */
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600){
      $('.pageup').fadeIn();
    }else{
      $('.pageup').fadeOut();
    }
  });

  $("a[href^='#']").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  new WOW().init();
  


});

