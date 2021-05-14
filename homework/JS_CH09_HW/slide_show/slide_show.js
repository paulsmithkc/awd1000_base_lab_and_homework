'use strict';

$(() => {
  // create an array of the slide images
  const imageCache = [];

  $('#slides img').each((index, element) => {
    const image = new Image();
    image.src = $(element).attr('src');
    image.title = $(element).attr('alt');
    imageCache.push(image);
  });

  // Start slide show
  let imageCounter = 0;
  setInterval(() => {
    $('#caption, #slide').fadeOut(1000, () => {
      imageCounter = (imageCounter + 1) % imageCache.length;
      const nextImage = imageCache[imageCounter];
      const nextCaption = nextImage.title;
      $('#slide').attr('src', nextImage.src).fadeIn(1000);
      $('#caption').text(nextCaption).fadeIn(1000);
    });
  }, 3000);
});
