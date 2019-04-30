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
     MASONRY
  ========================== */
  var macyColumns = 1;
  var macyContainer = '#suppliers';
  if($('#suppliers-2').length){
    console.log('suppliers 2');
    macyColumns = 2;
    macyContainer = '#suppliers-2';
  } else if($('#suppliers-3').length){
    console.log('suppliers 3');
    macyColumns = 3;
    macyContainer = '#suppliers-3';
  }
  console.log('macyColumns', macyColumns);
  var macyInstance = Macy({
    container: macyContainer,
    trueOrder: false,
    waitForImages: false,
    columns: macyColumns,
    margin: 20
  });

  macyInstance.on(macyInstance.constants.EVENT_IMAGE_COMPLETE, function (ctx) {
    $('.suppliers__all').removeClass('fade-out').addClass('fade-in');
    $('.suppliers__loading').removeClass('fade-in').addClass('fade-out');
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
      // console.log($(this).text(), $(this).closest('.category').height());
      if($(this).closest('.category').height() < 81){
        $(this).closest('.category').hide();
      } else {
        $(this).closest('.category').show();
      }
    });
  });

  /* ==========================
     SUPPLIER SEARCH
  ========================== */
  $('.supplier__search-form .search__input').on('keyup', function(e){
    var inputtedValue = e.target.value;
    $('.supplier[data-title]').each(function(){
      var title = $(this).text().toLowerCase();
      if(title.indexOf(inputtedValue) < 0){
        $(this).hide();
      } else {
        $(this).show();
      }
    });
    macyInstance.recalculate();
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