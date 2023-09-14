let navDropmenuButtons = document.querySelectorAll('.nav__button-dropdown');
let nav = document.querySelector('.nav');

const closeMenu = (elementItem) => {
  elementItem.classList.add('nav__item--button-close');
  elementItem.classList.remove('nav__item--button-open');
  nav.classList.remove('nav__dropdown--opened');
};

const openMenu = (elementItem) => {
  elementItem.classList.remove('nav__item--button-close');
  elementItem.classList.add('nav__item--button-open');
  nav.classList.add('nav__dropdown--opened');
};


const effectDropMenu = () => {
  if (document.body.contains(document.querySelector('.nav__item-dropdown'))) {
    navDropmenuButtons.forEach((navDropmenuButton) =>
      navDropmenuButton.addEventListener('click', function () {
        const dropMenu = navDropmenuButton.parentElement;
        if (dropMenu.classList.contains('nav__item--button-close')) {
          openMenu(dropMenu);
        } else {
          closeMenu(dropMenu);
        }
      })
    );
  }
};


export {effectDropMenu};
