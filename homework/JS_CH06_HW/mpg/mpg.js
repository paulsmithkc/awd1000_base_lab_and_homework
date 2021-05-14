'use strict';

function $(id) {
  return document.getElementById(id);
}

function calculateMpg(miles, gallons) {
  return (miles / gallons).toFixed(1);
}
function processEntries() {
  const miles = parseFloat($('miles').value);
  const gallons = parseFloat($('gallons').value);
  let isValid = true;

  if (!miles || miles <= 0) {
    alert('Miles must be numeric and greater than zero');
    isValid = false;
  }
  if (!gallons || gallons <= 0) {
    alert('Gallons must be numeric and greater than zero');
    isValid = false;
  }
  if (isValid) {
    $('mpg').value = calculateMpg(miles, gallons);
  }
}
function clearEntries() {
  $('miles').value = '';
  $('gallons').value = '';
  $('mpg').value = '';
}

window.onload = function onload() {
  $('calculate').onclick = processEntries;
  $('clear').onclick = clearEntries;
  $('miles').ondblclick = clearEntries;
  $('miles').focus();
};
