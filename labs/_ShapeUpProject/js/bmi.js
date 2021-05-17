'use strict';

$(() => {
  $('#calculate').on('click', () => {
    const feet = parseFloat($('#feet').val());
    const inches = parseFloat($('#inch').val());
    const weight = parseFloat($('#weight').val());

    const height = feet * 12 + inches;
    const heightSquared = height * height;
    const bmi = (weight / heightSquared) * 703;

    $('#bmi_result').value = bmi.toFixed(2);
  });
});
