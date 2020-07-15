'use strict';

//const $ = (id) => document.getElementById(id);

window.onload = function () {
  const listElement = document.getElementById('image_list'); // the ul element
  const captionElement = document.getElementById('caption'); // the h2 element for the caption
  const imageElement = document.getElementById('image'); // the img element for the show

  // Preload images from links and copy title property
  const links = listElement.getElementsByTagName('a');
  const imageCache = [];
  for (const linkElement of links) {
    const image = new Image();
    image.src = linkElement.getAttribute('href');
    image.title = linkElement.getAttribute('title');
    imageCache.push(image);
  }

  // Start slide show
  let imageCounter = 0;
  setInterval(function () {
    imageCounter = (imageCounter + 1) % imageCache.length;
    const image = imageCache[imageCounter];
    imageElement.src = image.src;
    captionElement.innerHTML = image.title;
  }, 2000);
};
