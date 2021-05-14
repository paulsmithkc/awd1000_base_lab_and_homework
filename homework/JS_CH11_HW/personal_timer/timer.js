'use strict';

$(() => {

  $('#start_timer').click(() => {
    const totalTime = parseFloat($('#time').val()) * 1000;
    const interval = parseFloat($('#interval').val()) * 1000;
    let isValid = true;

    // validate the time
    if (!totalTime) {
      $('#time_error').text('Time must be a number.');
      isValid = false;
    } else {
      $('#time_error').text('');
    }

    // validate the interval
    if (!interval) {
      $('#interval_error').text('Interval must be a number.');
      isValid = false;
    } else {
      $('#interval_error').text('');
    }

    if (isValid) {
      let elapsedTime = 0;
      const timer = setInterval(() => {
        elapsedTime += interval;
        let displaySeconds = elapsedTime / 1000;
        if (displaySeconds < 60) {
          $('#elapsed').val(`${displaySeconds.toFixed(0)} seconds`);
        } else {
          const displayMinutes = displaySeconds / 60;
          displaySeconds %= 60;
          if (displaySeconds === 0) {
            $('#elapsed').val(`${displayMinutes.toFixed(0)} minutes`);
          } else {
            $('#elapsed').val(`${displayMinutes.toFixed(0)} minutes ${displaySeconds.toFixed(0)} seconds`);
          }
        }
        if (elapsedTime >= totalTime) {
          clearInterval(timer);
          $('#complete span').text('Time is up!');
        }
      }, interval);
    }
  });

  $('#totalTime').focus();

});
