jQuery(document).ready(function(){
  jQuery(function() {
    //caches a jQuery object containing the header element
    var header = $(".fixed-top");
    jQuery(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.addClass("is_sticky");
        } else {
            header.removeClass("is_sticky");
        }
    });
  });

  // Home Page Banner Slider JS
  jQuery(".home_banner_slider").slick({
    autoplay:true,
    autoplaySpeed:8000,
    speed:1000,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:false,
    pauseOnDotsHover:true,
    cssEase:'linear',
    draggable:true,
   // fade:true,
    arrows: false
    // prevArrow:'<button class="PrevArrow"></button>',
    // nextArrow:'<button class="NextArrow"></button>', 
  });

  // Our Work - (Finished Project) Slider JS
  jQuery(".ourWork_projects_slider").slick({
    autoplay:true,
    autoplaySpeed:8000,
    speed:1000,
    slidesToShow:3,
    slidesToScroll:2,
    pauseOnHover:false,
    dots:true,
    pauseOnDotsHover:true,
    cssEase:'linear',
    draggable:true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:1
        }
      }
    ]
  });

  
  // Our Team Slider JS
  jQuery(".ourTeam_slider").slick({
    autoplay:true,
    autoplaySpeed:8000,
    speed:1000,
    slidesToShow:3,
    slidesToScroll:2,
    pauseOnHover:false,
    dots:true,
    pauseOnDotsHover:true,
    cssEase:'linear',
    draggable:true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow:2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:1
        }
      }
    ]
  });

  // Our Team Slider JS
  jQuery(".testimonial_slider").slick({
    autoplay:true,
    autoplaySpeed:8000,
    speed:1000,
    slidesToShow:1,
    slidesToScroll:1,
    pauseOnHover:false,
    dots:true,
    pauseOnDotsHover:true,
    cssEase:'linear',
    draggable:true,
    arrows: false
    // prevArrow:'<button class="PrevArrow"></button>',
    // nextArrow:'<button class="NextArrow"></button>', 
  });
  
  jQuery('.counter-count').each(function () {
      jQuery(this).prop('Counter',0).animate({
          Counter: jQuery(this).text()
      }, {
        
        //chnage count up speed here
          duration: 4000,
          easing: 'swing',
          step: function (now) {
            jQuery(this).text(Math.ceil(now));
          }
      });
  });
  
  
// FOR ON HOVER POPOVER SHOW START JS
    jQuery('[data-toggle="popover"]').popover(); 


// FOR DROPDOWN MENU JS
  jQuery('.dropdown-toggle').dropdown()

})

