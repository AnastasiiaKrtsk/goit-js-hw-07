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
  // Створюємо екземпляр SimpleLightbox та передаємо селектор елементів галереї
  const gallery = new SimpleLightbox('.gallery a.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250, // Затримка відображення підпису (у мілісекундах)
  });

  // Опціонально, додайте обробники подій для галереї
  gallery.on('show.simplelightbox', function () {
    // Код, який виконується під час відображення зображення
  });

  gallery.on('closed.simplelightbox', function () {
    // Код, який виконується після закриття галереї
  });
});
