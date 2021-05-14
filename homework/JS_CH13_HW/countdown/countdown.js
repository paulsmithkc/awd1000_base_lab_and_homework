'use strict';

$(() => {
  $('#countdown').click(() => {
    const event = $('#event').val();
    const dt = $('#date').val();
    const message = $('#message');
    let date = null;

    // clear previous message
    message.text('');

    // make sure task and due date are entered and correct
    if (!event || !dt) {
      message.text('Please enter both a name and a date.');
    } else {
      // make sure due date string has at least one slash
      if (dt.indexOf('/') === -1) {
        message.text('Please enter the date in MM/DD/YYYY format.');
      }

      // make sure due date string ends with a 4-digit year
      const year = parseInt(dt.substring(dt.length - 4), 10);
      if (!year) {
        message.text('Please enter the date in MM/DD/YYYY format.');
      }

      // convert due date string to Date object
      date = new Date(dt);
    }

    // if no error messages, calculate and display days until event
    if (date) {
      // calculate days
      const today = new Date();
      const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
      const days = Math.ceil((date.getTime() - today.getTime()) / oneDay);

      // create and display message
      if (days === 0) {
        message.text(`Hooray! Today is ${event}!`);
      } else if (days < 0) {
        message.text(`${event} happened ${(-days).toFixed()} day(s) ago.`);
      } else if (days > 0) {
        message.text(`${days.toFixed()} day(s) until ${event}!`);
      } else {
        message.text('Please enter the date in MM/DD/YYYY format.');
      }
    }
  }); // end click()

  // set focus on initial page load
  $('#event').focus();
}); // end ready()
