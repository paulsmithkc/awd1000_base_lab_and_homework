'use strict';

$(() => {

  $('#calculate').on('click', () => {
    const investment = parseFloat($('#investment').val());
    const annualRate = parseFloat($('#rate').val());
    const years = parseInt($('#years').val(), 10);

    if (!investment || investment <= 0) {
      alert('Investment must be a valid number greater than zero.');
    } else if (!annualRate || annualRate <= 0) {
      alert('Annual rate must be a valid number greater than zero.');
    } else if (!years || years <= 0) {
      alert('Years must be a valid number\nand greater than zero.');
    } else {
      let futureValue = investment;
      for (let i = 1; i <= years; i++) {
        futureValue += (futureValue * annualRate) / 100;
      }
      $('#future_value').val(futureValue.toFixed(2));
    }
  });

  $('#investment').focus();

});
