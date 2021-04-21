var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
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
          items:4,
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
})


var box = document.querySelectorAll(".text-box");
document.addEventListener("scroll", () => {
  for (i = 0; i < box.length; i++) {
    var ele = box[i];
    animate(ele, "animate__fadeInUp");
  }
});

function inView(element) {
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

function animate(element, animation) {
  if (inView(element)) {
    element.classList.add(animation);
  }
}
