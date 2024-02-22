$(function () {

   var mixer = mixitup('.products__holder-wrap');

   $('.products__btn').first().click();

   $(document).on('click', '.products__btn', function () {
      $('.products__btn').removeClass('mixitup-control-active');
      $(this).addClass('mixitup-control-active');
   });

});