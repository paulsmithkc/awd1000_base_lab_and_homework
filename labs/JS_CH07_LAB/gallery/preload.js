'use strict';

let gCurrentSlide = 0;
let gTimer;

const showSlide = (activeLink) => {
  const fullImage = document.querySelector('.gallery-full-img img');
  const caption = document.querySelector('.gallery-caption');
  fullImage.src = activeLink.href;
  caption.textContent = activeLink.querySelector('img').alt;

  const links = document.querySelectorAll('.gallery-thumbnails a');
  for (const link of links) {
    if (link === activeLink) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  }

  // activeLink.classList.add('active');
};

const onClickThumbnail = (evt) => {
  evt.preventDefault();
  showSlide(evt.currentTarget);
  clearInterval(gTimer);
};

const onFocusThumbnail = (evt) => {
  showSlide(evt.currentTarget);
  clearInterval(gTimer);
};

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.gallery-thumbnails a');
  for (const link of links) {
    const image = link.querySelector('img');
    link.addEventListener('click', onClickThumbnail);
    link.addEventListener('focus', onFocusThumbnail);
    link.setAttribute('title', image.alt);

    const img = new Image();
    img.src = link.href;
  }

  links[0].dispatchEvent(new Event('click'));

  gTimer = setInterval(() => {
    ++gCurrentSlide;
    if (gCurrentSlide >= links.length) gCurrentSlide = 0;
    showSlide(links[gCurrentSlide]);
  }, 3000);
});
