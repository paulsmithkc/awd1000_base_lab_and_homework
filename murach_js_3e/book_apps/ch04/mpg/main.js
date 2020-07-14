'use strict';

//const $ = (id) => document.getElementById(id);
const calculateMpg = (miles, gallons) => (miles / gallons).toFixed(1);

function processEntries(e) {
  const milesInput = document.getElementById('miles');
  const gallonsInput = document.getElementById('gallons');
  const mpgOutput = document.getElementById('mpg');

  const miles = parseFloat(milesInput.value);
  const gallons = parseFloat(gallonsInput.value);

  if (!miles || !gallons) {
    alert('Both entries must be numeric');
  } else if (miles <= 0 || gallons <= 0) {
    alert('Both entries must be greater than zero');
  } else {
    mpgOutput.value = calculateMpg(miles, gallons);
    milesInput.focus();
  }
}
window.onload = function () {
  document.getElementById('calculate').onclick = processEntries;
};
