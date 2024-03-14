$(function () {

   $(window).scroll(function () {
      var stickyHeaderTop = $('.header__sticky').offset().top;
      if ($(window).scrollTop() > stickyHeaderTop) {
         $('.header__sticky').addClass('sticky');
      } else {
         $('.header__sticky').removeClass('sticky');
      }
   });

   function changeBackgroundColor() {
      var scrollPosition = $(window).scrollTop();
      if (scrollPosition > 60) {
         $('.header__sticky').css('background-color', '#fff');
         $('.header__sticky').css('padding', '15px');
         $('.header__sticky').css('border-bottom', '1px solid #ff6838');
         if ($(window).width() >= 1200) {
            $('.header__sticky .menu').css('padding-top', '0');
         }
      } else {
         $('.header__sticky').css('background-color', 'transparent');
         if ($(window).width() <= 1230) {
            $('.header__sticky').css('padding-top', '15px');
         } else {
            $('.header__sticky').css('padding-top', '60px');
         }
         $('.header__sticky').css('border-bottom', 'transparent');
         if ($(window).width() <= 768) {
            $('.header__sticky').css('padding-right', '80px');
         } else {
            $('.header__sticky').css('padding-right', '0');
         }
      }
   }


   $('.reviews__items').slick({
      dots: true,
      infinity: false
   })

   $(window).scroll(changeBackgroundColor);


   var mixer = mixitup('.products__holder-wrap');
});

$(document).ready(function () {
   function initSlick() {
      console.log("Ширина экрана:", $(window).width()); // Вывод текущей ширины экрана в консоль
      if ($(window).width() < 768) {
         console.log("Инициализация слайдера...");
         $('.restaurant__items').slick({
            dots: true,
            arrows: false
         });
      } else {
         console.log("Уничтожение слайдера...");
         $('.restaurant__items').slick('unslick');
      }
   }

   // Вызов функции при загрузке страницы
   initSlick();

   // Вызов функции при изменении размера окна
   $(window).on('resize', function () {
      initSlick();
   });
});


document.addEventListener('DOMContentLoaded', () => {
   const burger = document.querySelector('.burger');
   const mobileMenu = document.querySelector('.menu');
   const bodyLock = document.querySelector('body');
   const lockParent = document.querySelector('.lock-parent');

   burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('menu--active');
      burger.classList.toggle('burger--active');
      bodyLock.classList.toggle('lock');
   });

   lockParent.addEventListener('click', (event) => {
      if (event.target.classList.contains('lock') || event.target.classList.contains('lock::before')) {
         if (bodyLock.classList.contains('lock')) {
            mobileMenu.classList.remove('menu--active');
            burger.classList.remove('burger--active');
            bodyLock.classList.remove('lock');
         }
      }
   });
});

