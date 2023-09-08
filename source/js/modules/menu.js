import {ScrollLock} from '../utils/scroll-lock';
window.scrollLock = new ScrollLock();


let nav = document.querySelector('.nav');
let navButton = document.querySelector('.nav__btn');
let header = document.querySelector('#header');
// let navItems = document.querySelectorAll('.nav__item');


nav.classList.remove('nav--nojs');

const closeMenu = () => {
  nav.classList.add('nav--closed');
  nav.classList.remove('nav--opened');
  header.classList.remove('header--active');
  window.scrollLock.enableScrolling();
  document.removeEventListener('click', onDocumentOutside);
  document.removeEventListener('keydown', onDocumentEscape);

};

const openMenu = () => {
  nav.classList.remove('nav--closed');
  nav.classList.add('nav--opened');
  header.classList.add('header--active');
  window.scrollLock.disableScrolling();
  document.addEventListener('click', onDocumentOutside);
  document.addEventListener('keydown', onDocumentEscape);
};

const onDocumentOutside = (evt) => {
  if (evt.target === header || header.contains(evt.target)) {
    return;
  } else {
    closeMenu();
  }
};

const onDocumentEscape = (evt) => {
  if (evt.key === 'Escape') {
    closeMenu();
  } else {
    return;
  }
};

// navItems.forEach((element) => element.addEventListener('click', (evt) => {
//   if (evt) {
//     if (nav.classList.contains('nav--opened')) {
//       closeMenu();
//     }
//   }
// }));

const effectMenu = () => {
  navButton.addEventListener('click', function () {
    if (nav.classList.contains('nav--closed')) {
      openMenu();
    } else {
      closeMenu();
    }
  });
};

export {effectMenu};
