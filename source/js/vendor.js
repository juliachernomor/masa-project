// Swiper 7.4.1
import './vendor/focus-visible-polyfill';
import './vendor/leaflet';
import './vendor/swiper';

import {initAutoResizeTextarea} from './vendor/auto-resize-textarea';

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initAutoResizeTextarea();
  });
});
