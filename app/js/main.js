$(function () {

   // Добавляем липкую шапку при скролле
   $(window).scroll(function () {
      var stickyHeaderTop = $('.header__sticky').offset().top;
      if ($(window).scrollTop() > stickyHeaderTop) {
         $('.header__sticky').addClass('sticky');
      } else {
         $('.header__sticky').removeClass('sticky');
      }
   });

   // Функция для изменения цвета фона при скролле
   function changeBackgroundColor() {
      var scrollPosition = $(window).scrollTop(); // Получаем текущую позицию скролла

      // Условие: если позиция скролла больше 60px, добавляем background-color, иначе удаляем
      if (scrollPosition > 60) {
         $('.header__sticky').css('background-color', '#fff');
         $('.header__sticky').css('padding', '15px');
         $('.header__sticky').css('border-bottom', '1px solid #ff6838');
         if ($(window).width() >= 1200) {
            $('.header__sticky .menu').css('padding-top', '0');
         }
      } else {
         $('.header__sticky').css('background-color', 'transparent');
         $('.header__sticky').css('padding-top', '60px');
         $('.header__sticky').css('border-bottom', 'transparent');
      }
   }

   // Обработчик события скролла для изменения цвета фона
   $(window).scroll(changeBackgroundColor);


   var mixer = mixitup('.products__holder-wrap');
});