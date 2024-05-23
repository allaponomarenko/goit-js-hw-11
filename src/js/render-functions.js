export function renderImages(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = images.map(image => `
      <div class="image-card">
        <img src="${image.webformatURL}" alt="${image.tags}">
        <div class="info">
          <p>Likes: ${image.likes}</p>
          <p>Views: ${image.views}</p>
        </div>
      </div>
    `).join('');
  }
  
  export function clearGallery() {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
  }
  