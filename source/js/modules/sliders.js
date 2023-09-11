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


const elementPrograms = document.querySelector('.swiper--2');
const createProgramsSlider = () => {
  if (elementPrograms) {
    /* eslint-disable */
    new swiper('.swiper--2', {
      /* eslint-enable */
      speed: 1500,
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 2.13,
          spaceBetween: 30,
          allowTouchMove: true,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 32,
          allowTouchMove: false,
        },
      },
      scrollbar: {
        el: '.programs__scrollbar',
      },
      navigation: {
        nextEl: '.programs__button-next',
        prevEl: '.programs__button-prev',

      },
    });
  }
};

const elementNews = document.querySelector('.swiper--3');
const createNewsSlider = () => {
  if (elementNews) {
    /* eslint-disable */
    new swiper('.swiper--3', {
      /* eslint-enable */
      speed: 1500,
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          grid: {
            rows: 2,
            fill: 'row',
          },
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          grid: {
            rows: 2,
            fill: 'row',
          },
          allowTouchMove: true,
        },
        1200: {
          slidesPerView: 'auto',
          spaceBetween: 32,
          grid: {
            rows: 1,
          },
          allowTouchMove: false,
        },
      },
      pagination: {
        el: '.news__pagination',
        clickable: true,
        /* eslint-disable */
        renderBullet:
          function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
      },
      /* eslint-enable */
      navigation: {
        nextEl: '.news__button-next',
        prevEl: '.news__button-prev',
      },
    });
  }
};
export {createHeroSlider, createProgramsSlider, createNewsSlider};
