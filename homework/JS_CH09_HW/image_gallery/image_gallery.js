'use strict';

$(() => {

  $('#image_list a').each((index, element) => {
    // get the image URL and caption for each image
    const imageURL = $(element).attr('href');
    const caption = $(element).attr('title');

    // preload the image for each link
    const galleryImage = new Image();
    galleryImage.src = imageURL;

    // set up the event handlers for each link
    $(element).click((evt) => {
      $('#image').attr('src', imageURL);
      $('#caption').text(caption);
      // cancel the default action of each link
      evt.preventDefault();
    }); // end click

  }); // end each

  // move the focus to the first link
  $('li:first-child a').focus();

}); // end ready
