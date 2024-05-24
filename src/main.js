import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.search-form');
  const gallery = document.querySelector('.gallery');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value.trim();
    if (!query) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query',
      });
      return;
    }
    clearGallery();
    try {
      const images = await fetchImages(query);
      if (images.length === 0) {
        iziToast.error({
          title: 'Error',
          message: 'No images found. Please try another search term.',
        });
        return;
      }
      renderImages(images);
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
    }
  });
});
