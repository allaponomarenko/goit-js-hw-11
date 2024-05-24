import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightbox;

export const renderImages = (images) => {
  const markup = images
    .map(
      (image) => `
        <div class="image-card">
          <a href="${image.largeImageURL}" class="gallery-item">
            <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info_p">
              <span class="label">Likes:</span>
              <span class="value">${image.likes}</span>
            </p>
            <p class="info_p">
              <span class="label">Views:</span>
              <span class="value">${image.views}</span>
            </p>
            <p class="info_p">
              <span class="label">Comments:</span>
              <span class="value">${image.comments}</span>
            </p>
            <p class="info_p">
              <span class="label">Downloads:</span>
              <span class="value">${image.downloads}</span>
            </p>
          </div>
        </div>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox = new SimpleLightbox('.gallery-item');
  lightbox.refresh();
};

export const clearGallery = () => {
  gallery.innerHTML = '';
};
