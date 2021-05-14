'use strict';

$(() => {
  $.getJSON('team.json', (data) => {
    $.each(data, (index, element) => {
      $.each(element, (key, value) => {
        $('#team').append(`
            <img src='${value.image}'>
            <h3>${value.full_name}</h3> 
            <h3>${value.title}</h3> 
            <p>${value.tag_line}</p>
        `);
      });
    });
  });
});
