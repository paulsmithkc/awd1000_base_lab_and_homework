'use strict';

//const $ = (id) => document.getElementById(id);

function processEntries(e) {
  // get values for user entries
  const email = document.getElementById('email_address').value;
  const phone = document.getElementById('phone').value;
  const country = document.getElementById('country').value;
  const terms = document.getElementById('terms').checked;
  let contact = 
    document.getElementById('contact_email').checked ? 'Email' : 
    document.getElementById('contact_none').checked ? 'None' : 
    'Text';
  let isValid = true;

  // check user entries for validity
  if (!email) {
    document.getElementById('email_address_error').innerHTML = 'This field is required.';
    isValid = false;
  } else {
    document.getElementById('email_address_error').innerHTML = '';
  }
  if (!phone) {
    document.getElementById('phone_error').innerHTML = 'This field is required.';
    isValid = false;
  } else {
    document.getElementById('phone_error').innerHTML = '';
  }
  if (!country) {
    document.getElementById('country_error').innerHTML = 'Please select a country.';
    isValid = false;
  } else {
    document.getElementById('country_error').innerHTML = '';
  }
  if (!terms) {
    document.getElementById('terms_error').innerHTML = 'This box must be checked.';
    isValid = false;
  } else {
    document.getElementById('terms_error').innerHTML = '';
  }

  // if all fields are valid, then submit the form
  // otherwise diplay error messages instead
  if (!isValid) {
    e.preventDefault();
  }
}

function resetForm(e) {
  document.getElementById('email_address_error').innerHTML = '';
  document.getElementById('phone_error').innerHTML = '';
  document.getElementById('country_error').innerHTML = '';
  document.getElementById('terms_error').innerHTML = '';
  document.getElementById('email_address').focus();
}

window.onload = function () {
  const form = document.getElementById('registration_form');
  form.onsubmit = processEntries;
  form.onreset = resetForm;
};
