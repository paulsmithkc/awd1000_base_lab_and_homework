'use strict';

const names = ['Ben', 'Joel', 'Judy', 'Anne'];
const scores = [88, 98, 77, 88];

function $(id) {
  return document.getElementById(id);
}

function addScore() {
  // get user entries
  const name = $('name').value;
  const score = parseFloat($('score').value);

  // check entries for validity
  if (!name || !score || score < 0 || score > 100) {
    alert('You must enter a name and a valid score');
  } else {
    names[names.length] = name;
    scores[scores.length] = score;
    $('name').value = '';
    $('score').value = '';
  }
  $('name').focus();
}

window.onload = function () {
  $('add').onclick = addScore;
  $('name').focus();
};
