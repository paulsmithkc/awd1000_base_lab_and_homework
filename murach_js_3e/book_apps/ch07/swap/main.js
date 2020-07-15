'use strict';

//const $ = (id) => document.getElementById(id);

window.onload = function () {
  const listElement = document.getElementById('image_list'); // the ul element
  const captionElement = document.getElementById('caption'); // the h2 element for the caption
  const imageElement = document.getElementById('main_image'); // the main img element

  // process image links
  const links = listElement.getElementsByTagName('a');
  for (const linkElement of links) {
    // preload image
    const image = new Image();
    image.src = linkElement.getAttribute('href');
    image.title = linkElement.getAttribute('title');
    // attach event handler
    const handler = (e) => {
      e.preventDefault();
      imageElement.src = image.src;
      captionElement.innerHTML = image.title;
    };
    linkElement.onclick = handler;
    linkElement.onfocus = handler;
  }

  // set focus on first image link
  links[0].focus();
};
