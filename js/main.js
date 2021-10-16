const swiper = new Swiper('.hotel-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

});

const revswiper = new Swiper('.reviews-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--prev',
    prevEl: '.reviews-slider__button--next',
  },

});

$('.newsletter').parallax({
  imageSrc: '../img/newsletter-bg.jpg', 
  speed: 0.6,
},
);

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function(){
  console.log("клик по кнопке");
  document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom__visible")

})