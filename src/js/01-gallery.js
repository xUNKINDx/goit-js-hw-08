import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const markup = galleryItems
  .map(
    photo =>
      `<a class="gallery__item" href="${photo.original}">
        <img class="gallery__image" src="${photo.preview}" alt="${photo.description}" />
    </a>`
  )
  .join('');
gallery.insertAdjacentHTML('beforeend', markup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
