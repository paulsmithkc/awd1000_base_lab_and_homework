'use strict';

$(() => {
  // preload images
  $('#image_list a').each(function preloadImage() {
    const image = new Image();
    image.src = $(this).attr('href');
  });

  // set up event handlers for links
  $('#image_list a').on('click', function swapImage(evt) {
    // swap image
    const imageURL = $(this).attr('href');
    $('#image').attr('src', imageURL);

    // swap caption
    const caption = $(this).attr('title');
    $('#caption').text(caption);

    // cancel the default action of the link
    evt.preventDefault();
  }); // end click

  // move focus to first thumbnail
  $('li:first-child a:first-child').focus();

});
