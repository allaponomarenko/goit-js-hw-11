import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const query = e.target.elements.query.value.trim();
  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
    });
    return;
  }

  clearGallery(gallery);

  try {
    const images = await fetchImages(query);
    if (images.length === 0) {
      iziToast.info({
        title: 'No Results',
        message: 'No images found. Please try a different query.',
      });
      return;
    }
    renderImages(gallery, images);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
    });
  }
});
