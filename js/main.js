// --> My Script Begin

let openModal = document.querySelector('.ag-modal'),
openModalBtn = document.querySelectorAll('.ag-food-overlay-link'),
modalCloseBtn = document.querySelector('.ag-modal__close'),
body = document.querySelector('body');


for (let i = 0; i < openModalBtn.length; i++) {
  openModalBtn[i].addEventListener('click', () => {
    openModal.style.opacity = '5';
    openModal.style.visibility = 'visible';
    body.style.overflow = 'hidden';
  });
}

modalCloseBtn.addEventListener('click', () => {
  openModal.style.opacity = '0';
  openModal.style.visibility = 'hidden';
  body.style.overflow = 'auto';
});

window.onclick = function(event) {
  if (event.target == feedBack) {
    openModal.style.opacity = '0';
    openModal.style.visibility = 'hidden';
    body.style.overflow = 'auto';
  }
}

//  --> My Script End

// $(document).ready(function() {
//     $("a.ag-header-btn").click(function () {
//         var elementClick = '#'+$(this).attr("href").split("#")[1]
//         var destination = $(elementClick).offset().top;
//         jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
//         return false;
//     });
// });

$(document).ready(function(){
    $('.ag-comments-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: true,
    });
});
