import L from '../vendor/leaflet';

const iconOptions = {
  iconUrl: 'img/sprite/pin.svg',
  className: 'map__map-pin',
};

const element = document.getElementById('map');

const initmap = () => {
  const map = L.map(element, {center: [55.026471, 82.926801], zoomSnap: 0, scrollWheelZoom: false, zoom: 16});

  L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=WuihtyzONCDMrCzLaEOa').addTo(map);

  let customIcon = L.icon(iconOptions);
  const markerOptions = {
    icon: customIcon,
    draggable: true,
    title: 'Мы находимся здесь!',
  };

  L.marker([55.028565349999994, 82.9281325], markerOptions).addTo(map).bindPopup('Прекрасного дня!');
};

export {initmap};
