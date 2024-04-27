$(function () {

   $(window).scroll(function () {
      var stickyHeaderTop = $('.header').offset().top;
      var scrollTop = $(window).scrollTop();
      var $header = $('.header');
      if (scrollTop > stickyHeaderTop) {
         $header.addClass('header--sticky');
      } else if (scrollTop === 0) {
         $header.removeClass('header--sticky');
      }
   });

   $(".menu__box a, .menu__list a, .logo").on("click", function (event) {
      event.preventDefault();
      var id = $(this).attr('href');
      if (id === '#') {
         $('body,html').animate({ scrollTop: 0 }, 1500);
      } else {
         var stickyHeaderHeight = $('.header').outerHeight();
         var top = $(id).offset().top - stickyHeaderHeight;
         $('body,html').animate({ scrollTop: top }, 1500);
      }
   });

   document.addEventListener("DOMContentLoaded", function () {
      var currentPage = document.URL; // Получаем текущий URL страницы

      // Добавляем класс .menu__link--active соответствующей ссылке в зависимости от текущей страницы
      if (currentPage.includes("index")) {
         document.querySelector('.menu__item:nth-child(1) .menu__link').classList.add('menu__link--active');
      } else if (currentPage.includes("catalog")) {
         document.querySelector('.menu__item:nth-child(2) .menu__link').classList.add('menu__link--active');
      } else if (currentPage.includes("product-page")) {
         document.querySelector('.menu__item:nth-child(3) .menu__link').classList.add('menu__link--active');
      }
   });





   $(".feedback__rating").rateYo({
      starWidth: "17px",
      normalFill: "#c1c1c14d",
      ratedFill: "#FFB800",
      // readOnly: true,
      starSvg: '<svg width="16.000000" height="15.000000" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path id="Vector" d="M-0.24 5.16C-0.19 4.99 -0.04 4.87 0.13 4.84L5.08 4.12L7.29 -0.38C7.37 -0.54 7.53 -0.64 7.71 -0.64C7.89 -0.64 8.05 -0.54 8.13 -0.38L10.34 4.12L15.29 4.84C15.46 4.87 15.61 4.99 15.66 5.16C15.72 5.33 15.67 5.52 15.55 5.64L11.97 9.14L12.81 14.08C12.84 14.25 12.77 14.43 12.63 14.54C12.55 14.6 12.45 14.63 12.35 14.63C12.28 14.63 12.2 14.61 12.13 14.57L7.71 12.24L3.29 14.57C3.13 14.66 2.94 14.64 2.8 14.54C2.65 14.43 2.58 14.25 2.61 14.08L3.45 9.14L-0.12 5.64C-0.25 5.52 -0.3 5.33 -0.24 5.16Z" fill-rule="nonzero"</svg>'
   });

   const firstButton = document.querySelector('.tabs__btn');
   if (firstButton) {
      firstButton.classList.add('mixitup-control-active');
   }
   
   $('.product-page__images').slick({

   });

   $('.interest-slider__list').slick({
      slidesToShow: 5,
      responsive: [
         {
            breakpoint: 1230,
            settings: {
               slidesToShow: 1,
               arrows: false,
               dots: true
            }
         }
      ]
   });

   $('.reviews__items').slick({
      dots: true,
      infinite: false,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               dots: false
            }
         }
      ]
   })
});

$(window).on('load resize', function () {
   if ($(window).width() < 992) {
      $('.discount__inner:not(.slick-initialized)').slick({
         arrows: false,
         dots: true,
         infinite: true,
         speed: 100,
         slidesToShow: 1
      });
   } else {
      $(".discount__inner.slick-initialized").slick("unslick")
   }
});
$(window).on('load resize', function () {
   if ($(window).width() < 770) {
      $('.restaurant__items:not(.slick-initialized)').slick({
         arrows: false,
         dots: true,
         infinite: true,
         speed: 100,
         slidesToShow: 1
      });
   } else {
      $(".restaurant__items.slick-initialized").slick("unslick")
   }
});

$('.burger, .shadow-line').on('click', function () {
   $('.burger-list, .burger').toggleClass('active');
   $('body').toggleClass('lock');
   $('.burger').toggleClass('burger--active');
});

$('.burger-list .menu__link').on('click', function () {
   $('.burger-list, .burger').removeClass('active');
   $('body').removeClass('lock');
   $('.burger').removeClass('burger--active');
});

$('.catalog-products__filter-btn, .catalog-filter__shadow, .catalog-filter__cross').on('click', function () {
   $('.catalog-filter').toggleClass('active');
})

$(document).ready(function () {
   var $range = $(".catalog-filter__price-input"),
      $inputFrom = $(".catalog-filter__price-from"),
      $inputTo = $(".catalog-filter__price-to"),
      min = parseInt($range.attr('data-min')),
      max = parseInt($range.attr('data-max'));
   $range.ionRangeSlider({
      type: "double",
      onStart: updateInputs,
      onChange: updateInputs
   });
   var instance = $range.data("ionRangeSlider");
   function updateInputs(data) {
      $inputFrom.val(data.from);
      $inputTo.val(data.to);
   }
   $inputFrom.on("input", function () {
      var val = parseInt($(this).val());
      instance.update({ from: val < min ? min : val > max ? max : val });
   });
   $inputTo.on("input", function () {
      var val = parseInt($(this).val());
      instance.update({ to: val < min ? min : val > max ? max : val });
   });
});

document.addEventListener('DOMContentLoaded', () => {
   document.querySelectorAll('.counter__button.counter__decrement').forEach(button => {
      button.addEventListener('click', function () {
         let valueElement = this.nextElementSibling;
         let value = parseInt(valueElement.textContent);
         if (value > 1) valueElement.textContent = --value;
      });
   });
   document.querySelectorAll('.counter__button.counter__increment').forEach(button => {
      button.addEventListener('click', function () {
         let valueElement = this.previousElementSibling;
         let value = parseInt(valueElement.textContent);
         valueElement.textContent = ++value;
      });
   });
});

var mixer = mixitup('.products__holder-wrap, .tabs__items');
