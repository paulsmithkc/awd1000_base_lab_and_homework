'use strict';

$(() => {
  let nextSlide = $('#slides img:first-child');

  // the function for running the slide show
  const runSlideShow = () => {
    $('#caption').fadeOut(3000);
    $('#slide').fadeOut(3000, () => {
      nextSlide = nextSlide.next();
      if (!nextSlide[0]) {
        nextSlide = $('#slides img:first-child');
      }
      const nextSlideSource = nextSlide.attr('src');
      const nextCaption = nextSlide.attr('alt');
      $('#slide').attr('src', nextSlideSource).fadeIn(3000);
      $('#caption').text(nextCaption).fadeIn(3000);
    });
  };

  // start slide show
  let timer1 = setInterval(runSlideShow, 3000);

  // toggle the slideshow when the user clicks on a slide
  $('#slide').on('click', () => {
    if (timer1 != null) {
      clearInterval(timer1);
      timer1 = null;
    } else {
      timer1 = setInterval(runSlideShow, 1000);
    }
  });
});
