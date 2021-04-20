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

var mini = new Swiper('.con', {
  speed: 400,
  spaceBetween: 100
});

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
