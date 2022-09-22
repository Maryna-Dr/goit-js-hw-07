import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markupGalleryItem = galleryItems.map(it => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${it.original}">
    <img
      class="gallery__image"
      src="${it.preview}"
      data-source="${it.original}"
      alt="${it.description}"
    />
  </a>
</div>`; 
}).join('');

gallery.insertAdjacentHTML('afterbegin', markupGalleryItem);

gallery.addEventListener('click', onGalleryItemClick);

let modalCreate = null;

function onGalleryItemClick(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
        return;
    };
    
    const modal = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" heigth="600">
    `,
    {
        onClose: () => {
            window.removeEventListener('keydown', onWindowClickEscape)
            },
        onShow: () => {
            window.addEventListener('keydown', onWindowClickEscape)
        },
        },
    );

    modalCreate = modal;
    modal.show();     
};

function onWindowClickEscape(e) {
    if (e.code === 'Escape') {
        modalCreate.close();
    };
};
