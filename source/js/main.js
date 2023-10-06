import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {createHeroSlider, createProgramsSlider, createNewsSlider, createReviewsSlider} from './modules/sliders';
import {effectMenu} from './modules/menu';
import {effectDropMenu} from './modules/dropmenu';
import {initAccordions} from './vendor/init-accordion';
import {initmap} from './modules/map';
import {CustomSelect} from './select/custom-select';
import {replaceCurrentClass} from './modules/news-filter';
import {replaceFocus} from './modules/focus';
import {initAutoResizeTextarea} from './vendor/auto-resize-textarea';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  replaceCurrentClass();
  createHeroSlider();
  createProgramsSlider();
  createNewsSlider();
  createReviewsSlider();
  iosVhFix();
  effectMenu();
  effectDropMenu();
  initAccordions();
  initmap();
  replaceFocus();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initAutoResizeTextarea();
    initModals();
    const select = new CustomSelect();
    select.init();

    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
