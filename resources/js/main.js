$(document).ready(function(){
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: false,
    nextArrow: false,
    draggable: false,
    pauseOnHover:false
  });
});

var scrolled = 0;   // x

$(window).scroll(function(evt) {
  var scrollTop = $(this).scrollTop();    // y

  if (scrollTop - scrolled >= 50) {
    var navbarHeight = $('.navbar').css('height');   // z
    $('.navbar').animate({top: '-' + navbarHeight}, 150);
    scrolled = scrollTop;
  } else if (scrolled - scrollTop >= 50) {
    var navbarHeight = $('.navbar').css('height');   // z
    $('.navbar').animate({top: 0}, 150);
    scrolled = scrollTop;
  }
})
