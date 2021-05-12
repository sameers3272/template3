// Preloader
 $(window).on('load', function() {
  if ($('#preloader').length) {
    $('#preloader').delay(200).fadeOut('slow', function() {
      $(this).remove();
    });
  }
});


// display Image Slider
var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});




var servicesOwlCarousel = $('#services-owl-carousel');
servicesOwlCarousel.owlCarousel({
  nav: true,
  center:true,
  navText: ["<i class='icofont-rounded-left'></i>", "<i class='icofont-rounded-right'></i>"],
    items:3,
    navClass:['own-prev','own-next'],
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:6000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        900:{
            items:3,
            nav:true,
        },
        1500:{
          items:3,
          nav:true,
          center:false,
        }
    }

});

var clientsOwlCarousel=$('#clients-owl-carousel');
clientsOwlCarousel.owlCarousel({
  items:5,
  loop:true,
  center:true,
  autoplay:true,
  autoplayTimeout:5500,
  autoplayHoverPause:false,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:3,
          nav:true
      },
      900:{
          items:5,
          nav:true,
      },
      1500:{
        items:5,
        nav:true,
        center:false,
      }
  }

})


const box = document.querySelectorAll(".text-box");
document.addEventListener("scroll", () => {
  for (i = 0; i < box.length; i++) {
    var ele = box[i];
    animate(ele, "animate__fadeInUp");
  }
});

const inView= (element) => {
  var elementHeight = element.clientHeight;
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  var scrollPosition = scrollY + windowHeight;
  var elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight;
  if (scrollPosition > elementPosition) {
    return true;
  }

  return false;
}

const animate = (element, animation) => {
  if (inView(element)) element.classList.add(animation);
}
// Why US section
jQuery(document).ready( (a)=> {
  a(".wdp-why-choose-box.box-left").easyTicker({
    direction: "down",
    visible: 4,
    easing: "swing",
  });
});

jQuery(document).ready( (a)=> {
  a(".wdp-why-choose-box.box-right").easyTicker({
    direction: "up",
    visible: 4,
    easing: "swing",
  });
});



// ============== Potfolio ================

$(document).ready(()=>{
  let $btns =$('.project-area .button-group button');
    
  $btns.click(function(e){
    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
      filter:selector,
    }).isotope( 'reloadItems' ).isotope();
    return false;
  });

  $('.project-area .button-group #btn1').trigger('click');

  $('.project-area .grid .test-popup-link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    mainClass: 'mfp-with-zoom', 
    zoom: {
      enabled: true, 
      duration: 300, 
      easing: 'ease-in-out',
      opener: (openerElement)=> openerElement.is('img') ? openerElement : openerElement.find('img'),
      
    }
  });

})



/*=============================WEBSITE DEVELOPMENT PAGE===========================*/

// 
var award=$('#award-carousel');
award.owlCarousel({
  items:1,
  loop:true,
  center:true,
  autoplay:true,
  autoplayTimeout:3500,
  autoplayHoverPause:false,
  pagination: false,

})

var reviewsOwlCarousel=$('#reviews-carousel');
reviewsOwlCarousel.owlCarousel({
  items:5,
  loop:true,
  autoplay:true,
  margin:20,
  autoplayTimeout:3500,
  autoplayHoverPause:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
         
      },
      1500:{
        items:2,
        
      }
  }

});

AOS.init({
  offset:400,
  duration:800
});