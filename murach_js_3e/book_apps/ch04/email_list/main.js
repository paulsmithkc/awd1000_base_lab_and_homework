'use strict';

//const $ = (id) => document.getElementById(id);

function joinList(e) {
  const emailAddress1Input = document.getElementById('email_address1');
  const emailAddress2Input = document.getElementById('email_address2');
  const firstNameInput = document.getElementById('first_name');

  const emailAddress1 = emailAddress1Input.value;
  const emailAddress2 = emailAddress2Input.value;
  const firstName = firstNameInput.value;
  let errorMessage = '';

  // validate the entries
  if (!emailAddress1) {
    errorMessage = 'First email address entry required';
    emailAddress1Input.focus();
  } else if (!emailAddress2) {
    errorMessage = 'Second email address entry required';
    emailAddress2Input.focus();
  } else if (emailAddress2 != emailAddress1) {
    errorMessage = 'Email address entries must match';
    emailAddress2Input.focus();
  } else if (!firstName) {
    errorMessage = 'First name entry required';
    firstNameInput.focus();
  }

  // submit the form if all entries are valid
  // otherwise, display an error message
  if (errorMessage) {
    e.preventDefault();
    e.stopPropagation();
    alert(errorMessage);
  }
}

window.onload = function () {
  document.getElementById('email_form').onsubmit = joinList;
  //$("join_list").onclick = joinList;
  //$("email_address1").focus();
};
