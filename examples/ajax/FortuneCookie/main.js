function getFortune() {
  $.post('http://iwt.ranken.edu/ExampleWebServices/FortuneCookie/GetFortuneJSON')
    .done(function(data) {
      $('#CurrentFortune').text(data.Fortune);
      $('#LastUpdated').text(data.LastUpdated);
    })
    .fail(function(err) {
      $('#CurrentFortune').text(err.responseText || err.statusText);
      $('#LastUpdated').text(Date.now());
    });
}

$(getFortune);

setInterval(getFortune, 10000);
