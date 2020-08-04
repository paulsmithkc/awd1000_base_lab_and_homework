$(() => {
  $('#contact-form').submit((evt) => {
    evt.preventDefault();

    const email = $('#email').val();
    const message = $('#message').val();

    $.ajax('/contactme', { method: 'POST', data: { email, message } })
     .done((data) => {
       //alert(data);
       $('#contact-form').slideUp();
       $('body').append(`<h2>${data.error}</h2>`);
     })
     .fail((xhr, textStatus, errorThrown) => {
       alert(errorThrown);
     });
  });
});