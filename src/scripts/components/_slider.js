import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiperOptions = {
  slidesPerView: 1,
  modules: [Navigation, Pagination],
  spaceBetween: 30,
  pagination: {
    clickable: true,
  },
  grabCursor: true,
};

const swiperReviews = new Swiper('.reviews__slider', {
  ...swiperOptions,
  navigation: {
    nextEl: '.reviews .slider-btn--next',
    prevEl: '.reviews .slider-btn--prev',
  },
});

// const swiperPortfolio = new Swiper('.portfolio__slider', {
//   ...swiperOptions,
//   navigation: {
//     nextEl: '.portfolio .slider-btn--next',
//     prevEl: '.portfolio .slider-btn--prev',
//   },
// });

// const sliderElement = document.querySelector('.blog__slider');

// if (sliderElement) {
//   const swiperBlog = new Swiper('.blog__slider', {
//     ...swiperOptions,
//     navigation: {
//       nextEl: '.blog__slider-button--next',
//       prevEl: '.blog__slider-button--prev',
//     },
//     breakpoints: {
//       300: {
//         centeredSlides: true,
//         slidesPerView: 1,
//       },
//       560: {
//         centeredSlides: false,
//         slidesPerView: 2,
//       },
//       768: {
//         slidesPerView: 2,
//       },
//       991: {
//         slidesPerView: 3,
//       },
//       1200: {
//         slidesPerView: 4,
//       },
//     },
//     on: {
//       init: function () {
//         updateSlideVisibility(this);
//       },
//       slideChange: function () {
//         updateSlideVisibility(this);
//       },
//       resize: function () {
//         updateSlideVisibility(this);
//       },
//       setTranslate: function () {
//         updateSlideVisibility(this);
//       }
//     }
//   });

//   function updateSlideVisibility(swiper) {
//     const slides = swiper.slides;
//     const swiperEl = swiper.el;
//     const swiperRect = swiperEl.getBoundingClientRect();
//     const leftEdge = swiperRect.left;
//     const rightEdge = swiperRect.right;

//     slides.forEach((slide) => {
//       const slideRect = slide.getBoundingClientRect();
//       const slideLeft = slideRect.left;
//       const slideRight = slideRect.right;

//       const isVisible = (slideRight > leftEdge && slideLeft < rightEdge);

//       if (isVisible) {
//         slide.classList.remove('blog__item--faded');
//       } else {
//         slide.classList.add('blog__item--faded');
//       }
//     });
//   }

//   swiperBlog.el.addEventListener('transitionend', () => {
//     updateSlideVisibility(swiperBlog);
//   });

//   window.addEventListener('resize', () => {
//     updateSlideVisibility(swiperBlog);
//   });

//   swiperBlog.on('scroll', () => {
//     updateSlideVisibility(swiperBlog);
//   });
// }

// const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
//   let swiper;
//   const sliderElement = document ?.querySelector(swiperClass);


//   breakpoint = window.matchMedia(breakpoint);

//   const enableSwiper = function (className, settings) {

//     if (document.querySelector(className)) {
//       swiper = new Swiper(className, settings);

//       if (callback) {
//         callback(swiper);
//       }
//     }
//   };

//   const checker = function () {
//     if (breakpoint.matches) {
//       return enableSwiper(swiperClass, swiperSettings);
//     } else {
//       if (swiper !== undefined) swiper.destroy(true, true);
//       return;
//     }
//   };

//   breakpoint.addEventListener('change', checker);
//   checker();
// };

// resizableSwiper(
//   '(max-width: 475px)',
//   '.team__slider', {
//     ...swiperOptions,
//     modules: [Pagination, Autoplay],
//     loop: true,
//     spaceBetween: 20,
//     loopFillGroupWithBlank: false,
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: false,
//     },

//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//       dynamicBullets: true,
//       renderBullet: function (index, className) {
//         return '<span class="' + className + ' swiper-pagination-bullet--animation"><svg width="26" height="26" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="12" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="6" stroke-width="3"></circle></svg></span>';
//       },
//     },
//   },
// );
