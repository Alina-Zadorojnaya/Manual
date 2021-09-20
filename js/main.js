$(function(){

    $(".rate-yo").rateYo({
        rating: 3.6,
        multiColor: {
          "startColor": "#00B67A", 
          "endColor"  : "#00B67A" 
        }
      });
      $(".slider-star").rateYo({
        rating: 5,
        starWidth: "20px",
        multiColor: {
          "startColor": "#ffffff", 
          "endColor"  : "#ffffff" 
        }
      });

      $(".slider__inner").slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1230,
            settings: {
              arrows: false
            }
          },
          {
            breakpoint: 820,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }
        ]
      });
      $(".guided-slider").slick({
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll:1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1379,
            settings: {
              slidesToShow: 3,
              slidesToScroll:1,
            }
          },
          {
            breakpoint: 1050,
            settings: {
              slidesToShow: 2,
              slidesToScroll:1,
            }
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 1,
              slidesToScroll:1,
            }
          }
          
        ]
      });


      $('.health-btn').on('click', function(){
        $('.health-btn').removeClass('health-btn--active');
        $(this).toggleClass('health-btn--active');
      });
      

      $('.menu-line').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
      });
});

