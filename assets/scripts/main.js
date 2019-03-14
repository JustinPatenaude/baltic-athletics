$(document).ready(function(){
  /* ==========================
     MOBILE MENU
  ========================== */
  $('.js-mobile-menu-btn').on('click', function(){
    $('body').toggleClass('nav-opened');
  });
  $('.overlay').on('click', function(){
    $('body').removeClass('nav-opened');
  });
  $('.home__testimonials-slider').slick({
    dots: false,
    arrows: false
  });

  /* ==========================
     RESPONSIVE MENU
  ========================== */
  $(window).resize(function(){
    responsiveNav();
  });

  responsiveNav();

  /* ==========================
     RESPONSIVE MENU
  ========================== */
  $('.category__search-form .search__input').on('keyup', function(e){
    var inputtedValue = e.target.value;
    $('.catalogue__category-title').each(function(){
      var title = $(this).text().toLowerCase();
      console.log(inputtedValue, title, title.indexOf(inputtedValue));
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
});

function responsiveNav(){
  var maxWidth = $('.nav__wrapper').outerWidth(),
      navItemWrapper = $('.nav__item-wrapper').outerWidth(),
      navItemButton = $('.nav__item--has-sub').outerWidth(),
      total = navItemWrapper+navItemButton+30;
      console.log(total, maxWidth, navItemWrapper, navItemButton);
  if(total > maxWidth){
    $('.nav__item-wrapper .nav__item').last().prependTo('.sub-nav__inner').removeClass('nav__item').addClass('sub-nav__item');
    responsiveNav();
  }
}