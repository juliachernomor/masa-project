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

const elementNews = document.querySelector('.news__swiper');
const createNewsSlider = () => {
  if (elementNews) {
    /* eslint-disable */
  let newSwiper = new Swiper('.news__swiper', {
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
      on: {
        /* eslint-disable */
        init: function () {
          /* eslint-enable */
          const newsBtns = document.querySelectorAll('.news__button');
          const newsItems = document.querySelectorAll('.news__slider');
          let activeBtn = 'all';
          showNewsMenu(activeBtn);

          function showNewsMenu(newNewsBtn) {
            activeBtn = newNewsBtn;
            let slides = [];
            newsItems.forEach((newsItem) => {
              newsItem.classList.remove('news__slide--big');
              if (newsItem.classList.contains(activeBtn)) {
                slides.push(newsItem);
                slides[0].classList.add('news-slider--big');
                newsItem.style.display = 'block';

              } else {
                newsItem.style.display = 'none';
              }
            });
          }

          newsBtns.forEach((newsBtn) => {
            newsBtn.addEventListener('click', () => {
              resetActiveNewsBtn();
              showNewsMenu(newsBtn.id);
              newsBtn.classList.add('news__button--current');
              newSwiper.update();
            });
          });

          function resetActiveNewsBtn() {
            newsBtns.forEach((newsBtn) => {
              newsBtn.classList.remove('news__button--current');
            });
          }
        },
      },
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
