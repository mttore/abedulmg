let clickDelay = 200,
clickDelayTimer = null;


$('.burger-click-region').on('click', function () {

if(clickDelayTimer === null) {
  let $burger = $(this);
  $burger.toggleClass('active');
  $(".menu__list").addClass("menu__list--active");

  if(!$burger.hasClass('active')) {
    $burger.addClass('closing');
    $(".menu__list").removeClass("menu__list--active");
  }

  clickDelayTimer = setTimeout(function () {
    $burger.removeClass('closing');
    
    clearTimeout(clickDelayTimer);
    clickDelayTimer = null;
  }, clickDelay);
}
});

$('.menu__link').on('click', function () {
  if(clickDelayTimer === null) {
    let $burger = $('.burger-click-region');
    $burger.removeClass('active');
  
    if(!$burger.hasClass('active')) {
      $burger.addClass('closing');
      $(".menu__list").removeClass("menu__list--active");
    }
    clickDelayTimer = setTimeout(function () {
      $burger.removeClass('closing');
      
      clearTimeout(clickDelayTimer);
      clickDelayTimer = null;
    }, clickDelay);
  }
  });