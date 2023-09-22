const menu = document.querySelector('.nav__btn');
const navFirstItem = document.querySelector('.nav__first-item');
const navLastItem = document.querySelector('.nav__last-item');
const navMenu = document.querySelector('#nav');


const recycleFocus = (lastItem, firstItem) => {
  lastItem.addEventListener('blur', () => {
    firstItem.focus();
  });
};

const replaceFocus = () => {
  menu.addEventListener('blur', () => {
    if (navMenu.classList.contains('nav--opened')) {
      navFirstItem.focus();
      recycleFocus(navLastItem, navFirstItem);
    } else {
      const activeSlider = document.querySelector('.hero__slider.hero-slider.swiper-slide.swiper-slide-visible.swiper-slide-active');
      activeSlider.focus();
    }
  });
};

export {replaceFocus};
