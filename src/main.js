import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

console.log('Main.js is loaded');

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const loader = document.querySelector('.loader');

console.log('DOM elements are', { searchForm, searchInput, loader });

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log('Form submitted');

  const query = searchInput.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query.',
      position: 'topCenter',
    });
    return;
  }

  clearGallery();
  loader.classList.add('visible');

  try {
    const data = await fetchImages(query);
    loader.classList.remove('visible');

    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'No Results',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topCenter',
      });
    } else {
      renderImages(data.hits);
    }
  } catch (error) {
    loader.classList.remove('visible');
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topCenter',
    });
  }
});
