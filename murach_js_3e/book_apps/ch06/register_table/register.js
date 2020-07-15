'use strict';

const $ = (id) => document.getElementById(id);

function processEntries(e) {
  const required = '<span class="text-danger">Required field</span>';
  let isValid = true;
  let email = document.getElementById('email_address').value;
  let phone = document.getElementById('phone').value;
  let country = document.getElementById('country').value;
  let terms = document.getElementById('terms').checked;
  let contact = $('contact_email').checked ? 'Email' : $('contact_none').checked ? 'None' : 'Text';

  if (!email) {
    email = required;
    isValid = false;
  }
  if (!phone) {
    phone = required;
    isValid = false;
  }
  if (!country) {
    country = required;
    isValid = false;
  }
  if (!terms) {
    terms = required;
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
    $('registration_header').innerHTML = 'Please review your entries and complete all required fields';
    $('registration_info').innerHTML = `
        <colgroup>
          <col style="width: 7em;">
          <col style="width: auto;">
        </colgroup>
        <tbody>
          <tr><th>Email:</th><td>${email}</td></tr>
          <tr><th>Phone:</th><td>${phone}</td></tr>
          <tr><th>Country:</th><td>${country}</td></tr>
          <tr><th>Contact:</th><td>${contact}</td></tr>
          <tr><th>Terms:</th><td>${terms}</td></tr>
        </tbody>
        `;
  } else {
    $('registration_header').innerHTML = '';
    $('registration_info').innerHTML = '';
  }
}

function resetForm(e) {
  $('registration_header').innerHTML = '';
  $('registration_info').innerHTML = '';
  $('email_address').focus();
}

window.onload = function () {
  const form = document.getElementById('registration_form');
  form.onsubmit = processEntries;
  form.onreset = resetForm;
};
