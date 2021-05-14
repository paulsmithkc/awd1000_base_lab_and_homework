'use strict';

function $(id) {
  return document.getElementById(id);
}

function processEntries() {
  let isValid = true;

  // get values for user entries
  const email = $('email_address').value;
  const phone = $('phone').value;
  const country = $('country').value;
  // const contact = $('text').checked ? 'Text' : $('email').checked ? 'Email' : 'None';
  const terms = $('terms').checked;

  // check user entries for validity
  if (!email) {
    $('email_address').nextElementSibling.firstChild.nodeValue = 'This field is required.';
    isValid = false;
  } else {
    $('email_address').nextElementSibling.firstChild.nodeValue = '';
  }

  if (!phone) {
    $('phone').nextElementSibling.firstChild.nodeValue = 'This field is required.';
    isValid = false;
  } else {
    $('phone').nextElementSibling.firstChild.nodeValue = '';
  }

  if (!country) {
    $('country').nextElementSibling.firstChild.nodeValue = 'Please select a country.';
    isValid = false;
  } else {
    $('country').nextElementSibling.firstChild.nodeValue = '';
  }

  if (!terms) {
    $('terms').nextElementSibling.firstChild.nodeValue = 'This box must be checked.';
    isValid = false;
  } else {
    $('terms').nextElementSibling.firstChild.nodeValue = '';
  }

  if (isValid) {
    $('registration_form').submit();
  }
}

function resetForm() {
  $('registration_form').reset();
  $('email_address').nextElementSibling.firstChild.nodeValue = '*';
  $('phone').nextElementSibling.firstChild.nodeValue = '*';
  $('country').nextElementSibling.firstChild.nodeValue = '*';
  $('terms').nextElementSibling.firstChild.nodeValue = '*';
  $('email_address').focus();
}

window.onload = function onload() {
  $('register').onclick = processEntries;
  $('reset_form').onclick = resetForm;
  $('email_address').focus();
};
