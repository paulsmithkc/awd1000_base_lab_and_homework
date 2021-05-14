'use strict';

$(() => {

  $('#faqs h2').click(function onclick(evt) {
    $(this).toggleClass('minus');
    if ($(this).attr('class') !== 'minus') {
      $(this).next().hide();
    } else {
      $(this).next().show();
    }
    evt.preventDefault();
  });

  $('#faqs').find('a:first').focus();

});
