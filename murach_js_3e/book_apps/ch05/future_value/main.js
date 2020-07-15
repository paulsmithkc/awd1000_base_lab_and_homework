'use strict';

//const $ = (id) => document.getElementById(id);

function calculateFV(investment, rate, years) {
  let futureValue = investment;
  for (let i = 1; i <= years; ++i) {
    futureValue += (futureValue * rate) / 100;
  }
  return futureValue;
}

function processEntries() {
  const investmentInput = document.getElementById('investment');
  const rateInput = document.getElementById('rate');
  const yearsInput = document.getElementById('years');
  const fvOutput = document.getElementById('future_value');

  const investment = parseFloat(investmentInput.value);
  const rate = parseFloat(rateInput.value);
  const years = parseInt(yearsInput.value);
  let error = '';

  if (!investment || investment <= 0 || investment > 100000) {
    error = 'Investment must be a number greater than zero and less than or equal to 100,000';
    investmentInput.focus();
  } else if (!rate || rate <= 0 || rate > 15) {
    error = 'Rate must be a number greater than zero and less than or equal to 15';
    rateInput.focus();
  } else if (!years || years <= 0 || years > 50) {
    error = 'Years must be a number greater than zero and less than 50';
    yearsInput.focus();
  }

  if (!error) {
    fvOutput.value = calculateFV(investment, rate, years).toFixed(2);
  } else {
    alert(error);
  }
}

window.onload = function () {
  document.getElementById('calculate').onclick = processEntries;
};
