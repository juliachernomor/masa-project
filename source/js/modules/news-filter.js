const container = document.querySelector('.news__buttons-wrapper');

let currentButton = container.querySelector('.news__button--current');

const replaceCurrentClass = () => {
  container.addEventListener('click', (evt) => {
    if (evt.target.matches('.news__button')) {
      currentButton.classList.remove('news__button--current');
      evt.target.classList.add('news__button--current');
      currentButton = evt.target;
    }
  });
};


export {replaceCurrentClass};
