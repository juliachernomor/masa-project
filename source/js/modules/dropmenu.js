let navDropmenuNews = document.querySelector('.nav__item--news');
let navDropmenuProgramms = document.querySelector('.nav__item--programms');

let navItemProgrammsButton = document.querySelector('.nav__item-programs-button');
let navItemNewsButton = document.querySelector('.nav__item-news-button');

const closeMenu = (elementItem) => {
  elementItem.classList.add('nav__item--button-close');
  elementItem.classList.remove('nav__item--button-open');
};

const openMenu = (elementItem) => {
  elementItem.classList.remove('nav__item--button-close');
  elementItem.classList.add('nav__item--button-open');
};


const effectDropMenuNews = () => {
  navItemNewsButton.addEventListener('click', function () {
    if (navDropmenuNews.classList.contains('nav__item--button-close')) {
      openMenu(navDropmenuNews);
    } else {
      closeMenu(navDropmenuNews);
    }
  });
};

const effectDropMenuProgramms = () => {
  navItemProgrammsButton.addEventListener('click', function () {
    if (navDropmenuProgramms.classList.contains('nav__item--button-close')) {
      openMenu(navDropmenuProgramms);
    } else {
      closeMenu(navDropmenuProgramms);
    }
  });
};

export {effectDropMenuNews, effectDropMenuProgramms};
