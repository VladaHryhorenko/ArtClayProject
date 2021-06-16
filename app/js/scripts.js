$( document ).ready(function() {
    $('.burger-icon-wrapper').on('click', () => {
        $('.mobile-nav').toggleClass('mobile-hidden');
    });

    $('.plans-link').on('click', () => {
      $('.plans-link').toggleClass('button-is-active');
    });
    $('.item-history').on('click', () => {
      $('.history').toggleClass('history-hidden');
    });

    $('.item-services').on('click', () => {
      $('.services').toggleClass('services-hidden');
      $('.item-services').toggleClass('item-services-is-active');
    });

    /*$('.gallery-item').hover(() => {
      $('.gallery-item:hover').toggleClass('gallery-item-hover');
      $('.gallery-item').removeClass('gallery-item-hover');
    });*/
    let searchBlock = $('#form');
    $(document).on('click', '#open', function () {
        searchBlock.slideToggle();
        return false;
      });
    

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      arrows: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });



    function checkWidth() {
      var windowWidth = $('body').innerWidth(),
          elem = $('.plan-packets-item');
                             
      if(windowWidth < 1040){
        elem.addClass('plan-packets-bg-item');
      } else {
        elem.removeClass('plan-packets-bg-item');
      }
    }
  
    checkWidth(); // проверит при загрузке страницы
  
    $(window).resize(function(){
      checkWidth(); // проверит при изменении размера окна клиента
    });

    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.slider-progress').slick({
      //infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      pauseOnFocus: true,
      swipeToSlide: true,
      focusOnSelect: true,
      arrows: false,
  });

  
});