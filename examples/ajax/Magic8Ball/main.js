$('#Magic8Ball').submit(function(e) {
  e.preventDefault();

  $.post('http://iwt.ranken.edu/ExampleWebServices/Magic8Ball')
    .done(function(data) {
      $('#Magic8Ball-output').text(data);
    })
    .fail(function(err) {
      $('#Magic8Ball-output').text(err.responseText || err.statusText);
    });
});
