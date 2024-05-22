import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox;

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  const markup = images.map(image => `
    <a class="gallery__item" href="${image.largeImageURL}">
      <img class="gallery__image" src="${image.webformatURL}" alt="${image.tags}" />
      <div class="info">
        <p class="info-item"><b>Likes</b>${image.likes}</p>
        <p class="info-item"><b>Views</b>${image.views}</p>
        <p class="info-item"><b>Comments</b>${image.comments}</p>
        <p class="info-item"><b>Downloads</b>${image.downloads}</p>
      </div>
    </a>
  `).join('');
  gallery.innerHTML = markup;

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a');
  }
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
