'use strict';

function $(id) {
  return document.getElementById(id);
}

function joinList() {
  const emailAddress1 = document.getElementById('email_address1').value;
  const emailAddress2 = document.getElementById('email_address2').value;
  const firstName = $('first_name').value;
  let isValid = true;

  if (!emailAddress1) {
    $('email_address1_error').firstChild.nodeValue = 'This field is required.';
    isValid = false;
  } else {
    $('email_address1_error').firstChild.nodeValue = '';
  }

  if (emailAddress1 !== emailAddress2) {
    $('email_address2_error').firstChild.nodeValue = 'This entry must equal first entry.';
    isValid = false;
  } else {
    $('email_address2_error').firstChild.nodeValue = '';
  }

  if (!firstName) {
    $('first_name_error').firstChild.nodeValue = 'This field is required.';
    isValid = false;
  } else {
    $('first_name_error').firstChild.nodeValue = '';
  }

  if (isValid) {
    $('email_form').submit();
  }
}

window.onload = function onload() {
  $('join_list').onclick = joinList;
  $('email_address1').focus();
};
