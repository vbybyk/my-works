
$(document).ready(function(){
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

  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function(){
    console.log("клик по кнопке");
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom__visible")

  });
  $('.newsletter').parallax({
  imageSrc: '../img/newsletter-bg.jpg', 
  speed: 0.6,
  });

  var modalButton = $('[data-toggle=modal]');
  var closemodalButton = $(".modal-dialogue__close");
  
  //  console.log(modalButton);                  //проверить наличие в консоли
  
  // modalButton.on('click', function(){
  //   console.log('вы кликнули по кнопке');       //аналог addEventListener
  // });
    modalButton.on('click', openModal);
    closemodalButton.on('click', closeModal);

    function openModal() {
      // console.log($(this).attr("data-href"));   // проверить this 
      var targetModal = $(this).attr("data-href");
      $(targetModal).find(".modal-overlay").addClass("modal-overlay__visible");
      $(targetModal).find(".modal-dialogue").addClass("modal-dialogue__visible");
    }
    function closeModal(event) {
      event.preventDefault();  //не бросает в начало страницы
      var modalOverlay = $(".modal-overlay");
      var modalDialogue = $(".modal-dialogue");
      modalOverlay.removeClass("modal-overlay__visible");
      modalDialogue.removeClass("modal-dialogue__visible");
    }
    
    $(document).keyup(function(e) {                     // закрывает окно кнопкой ESC
	if (e.key === "Esc" || e.keyCode === 27) {
		var modalOverlay = $(".modal-overlay");
    var modalDialogue = $(".modal-dialogue");
    modalOverlay.removeClass("modal-overlay__visible");
    modalDialogue.removeClass("modal-dialogue__visible");
	}
});
  
});

