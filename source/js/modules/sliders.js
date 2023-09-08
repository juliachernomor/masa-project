import swiper from '../vendor/swiper';

const elementHero = document.querySelector('.swiper--1');
const createHeroSlider = () => {
  if (elementHero) {
    /* eslint-disable */
    new swiper('.swiper--1', {
    /* eslint-enable */
      speed: 1500,
      loop: true,
      effect: 'fade',
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      breakpoints: {
        320: {
          allowTouchMove: true,
        },
        768: {
          allowTouchMove: true,
        },
        1200: {
          allowTouchMove: false,
        },
      },
      pagination: {
        el: '.hero-slider__pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  }
};

export {createHeroSlider};
