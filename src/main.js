import { Spinner } from 'spin.js';
import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.getElementById('loader');
const opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-more', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2000000000)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'absolute', // Element positioning
};
const spinner = new Spinner(opts);

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
let lightbox;

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = event.target.elements.query.value.trim();
  if (!query) return;

  clearGallery();

  spinner.spin(loader);
  try {
    const images = await fetchImages(query);
    renderImages(images);
    lightbox = new SimpleLightbox('.gallery a', { /* options */ });
  } catch (error) {
    console.error(error);
  } finally {
    spinner.stop();
  }
});
