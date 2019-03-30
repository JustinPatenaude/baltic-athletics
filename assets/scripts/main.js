$(document).ready(function(){
  /* ==========================
     MOBILE MENU
  ========================== */
  $('.nav__item--has-sub').on('click', function(){
    $(this).toggleClass('active');
  });
  $('.overlay').on('click', function(){
    $('body').removeClass('nav-opened');
  });

  /* ==========================
     HOME
  ========================== */
  $('.home__testimonials-slider').slick({
    dots: false,
    arrows: false
  });

  /* ==========================
     CATEGORY PHOTOS
  ========================== */
  $('.category__photo-wrapper').magnificPopup({
    type: 'image',
    gallery:{
      enabled: true
    }
  });

  /* ==========================
     CATALOGUE SEARCH
  ========================== */
  $('.category__search-form .search__input').on('keyup', function(e){
    var inputtedValue = e.target.value;
    $('.catalogue__category-title').each(function(){
      var title = $(this).text().toLowerCase();
      if(title.indexOf(inputtedValue) < 0){
        $(this).closest('.catalogue__category-wrapper').hide();
      } else {
        $(this).closest('.catalogue__category-wrapper').show();
      }
      if($(this).closest('.category').height() < 81){
        $(this).closest('.category').hide();
      } else {
        $(this).closest('.category').show();
      }
    });
  });

  /* ==========================
     RESPONSIVE MENU
  ========================== */
  // if($(window).width() > 768){
  //   $(window).resize(function(){
  //     responsiveNav();
  //   });
  //   responsiveNav();
  // } else {
  //   $('.nav__item-wrapper .nav__item').prependTo('.sub-nav__inner').removeClass('nav__item').addClass('sub-nav__item');
  // }
});

// function responsiveNav(){
//   var maxWidth = $('.nav__wrapper').outerWidth(),
//       navItemWrapper = $('.nav__item-wrapper').outerWidth(),
//       navItemButton = $('.nav__item--has-sub').outerWidth(),
//       total = navItemWrapper+navItemButton+30;
//   if(total > maxWidth){
//     $('.nav__item-wrapper .nav__item').last().prependTo('.sub-nav__inner').removeClass('nav__item').addClass('sub-nav__item');
//     responsiveNav();
//   }
// }