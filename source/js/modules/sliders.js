const Swiper = window.Swiper;

const elementHero = document.querySelector('.swiper--1');
const createHeroSlider = () => {
  if (elementHero) {
    /* eslint-disable */
    new Swiper(".swiper--1", {
      /* eslint-enable */
      speed: 1500,
      loop: true,
      effect: 'fade',
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
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
    new Swiper(".swiper--2", {
      /* eslint-enable */
      speed: 1500,
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
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

// const buttons = document.querySelector('.news__buttons');
// const slideItems = document.querySelectorAll('.news__slider');
const elementNews = document.querySelector('.news__swiper');
const createNewsSlider = () => {
  if (elementNews) {
    /* eslint-disable */
    new Swiper(".news__swiper", {
      /* eslint-enable */
      speed: 1500,
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          grid: {
            rows: 2,
            fill: 'row',
          },
          spaceBetween: 20,
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
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      /* eslint-enable */
      navigation: {
        nextEl: '.news__button-next',
        prevEl: '.news__button-prev',
      },
      // on: {
      //   init: function (evt) {
      //     if (evt.target.closest('.news__button')) {
      //       let activeButton = evt.target.closest('.news__button');

      //       if (activeButton.classList.contains('news__button--current')) {
      //         return;
      //       } else {
      //         buttons.forEach((button) =>
      //           button.classList.remove('news__button--current'));
      //         activeButton.classList.add('news__button--current');
      //       }

      //       let filterClass = activeButton.dataset['filter'];

      //       if (filterClass === 'all') {
      //         let slides = [];

      //         slideItems.forEach((slideItem) => {
      //           slides.push(slideItem);
      //           slideItem.style.opacity = '0';
      //           slideItem.classList.remove('news__slide--big');
      //           slideItem.style.display = 'flex';

      //           setTimeout(() => {
      //             slideItem.style.opacity = '1';
      //           }, 300);
      //         });

      //         slides[0].classList.add('news__slide--big');
      //       } else {
      //         let slides = [];

      //         slideItems.forEach((slideItem) => {
      //           slideItem.style.opacity = '0';

      //           setTimeout(() => {
      //             slideItem.style.display = 'none';
      //             slideItem.classList.remove('news__slide--big');
      //           }, 300);

      //           if (slideItem.dataset['filter'] === filterClass) {
      //             slides.push(slideItem);
      //             setTimeout(() => {
      //               slideItem.style.display = 'flex';
      //             }, 300);
      //             setTimeout(() => {
      //               slideItem.style.opacity = '1';
      //             }, 400);
      //           }
      //         });

      //         setTimeout(() => {
      //           slides[0].classList.add('news__slide--big');
      //         }, 400);
      //       }

      //       setTimeout(() => {
      //         swiperNews.update();
      //       }, 500);
      //     }
      //   },
      // },
    });
  }
};

const elementReviews = document.querySelector('.swiper--4');
const createReviewsSlider = () => {
  if (elementReviews) {
    /* eslint-disable */
    new Swiper('.swiper--4', {
      /* eslint-enable */
      speed: 1500,
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 7.5,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 1.279,
          spaceBetween: 30,
          allowTouchMove: true,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 32,
          allowTouchMove: false,
        },
      },
      scrollbar: {
        el: '.reviews__scrollbar',
      },
      navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev',
      },
    });
  }
};

export {
  createHeroSlider,
  createProgramsSlider,
  createNewsSlider,
  createReviewsSlider
};
