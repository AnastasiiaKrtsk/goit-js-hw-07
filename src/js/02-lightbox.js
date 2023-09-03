import { galleryItems } from './gallery-items.js';

//todo 1
function createGallery(items) {
  const galleryList = document.querySelector('.gallery');
  const galleryMarkup = items
    .map(
      item => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
      </a>
    </li>
  `
    )
    .join('');
  galleryList.innerHTML = galleryMarkup;
}
createGallery(galleryItems);
console.log(galleryItems);

//todo 2
document.addEventListener('DOMContentLoaded', function () {
  const gallery = new SimpleLightbox('.gallery a.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  gallery.on('show.simplelightbox', function () {});
  gallery.on('closed.simplelightbox', function () {});
});
