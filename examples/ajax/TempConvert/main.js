$('#ConvertFtoC').submit(function(e) {
  e.preventDefault();

  // const value = $('#ConvertFtoC-value').val();
  // $.get('http://iwt.ranken.edu/ExampleWebServices/Temperature/ConvertFtoC', { value })
  //   .done(function(data) {
  //     $('#ConvertFtoC-output').text(data.trim() || 'no response');
  //   })
  //   .fail(function(err) {
  //     console.log(err);
  //     $('#ConvertFtoC-output').text(`${err.status} ${err.statusText}`);
  //   });

  const formData = $('#ConvertFtoC').serialize();
  $.post('http://iwt.ranken.edu/ExampleWebServices/Temperature/ConvertFtoC', formData)
    .done(function(data) {
      $('#ConvertFtoC-output').text(data.trim() || 'no response');
    })
    .fail(function(err) {
      console.log(err);
      $('#ConvertFtoC-output').text(`${err.status} ${err.statusText}`);
    });
});
