'use strict';

//const $ = (id) => document.getElementById(id);

function joinList(e) {
  const emailAddress1Input = document.getElementById('email_address1');
  const emailAddress2Input = document.getElementById('email_address2');
	const firstNameInput = document.getElementById('first_name');
	
  const emailAddress1Error = document.getElementById('email_address1_error');
  const emailAddress2Error = document.getElementById('email_address2_error');
  const firstNameError = document.getElementById('first_name_error');

  const emailAddress1 = emailAddress1Input.value;
  const emailAddress2 = emailAddress2Input.value;
  const firstName = firstNameInput.value;
  let isValid = true;

  // validate the first email address
  if (!emailAddress1) {
    emailAddress1Error.innerHTML = 'This field is required.';
    isValid = false;
  } else {
    emailAddress1Error.innerHTML = '';
  }

  // validate the second email address
  if (emailAddress1 != emailAddress2) {
    emailAddress2Error.innerHTML = 'This entry must equal first entry.';
    isValid = false;
  } else {
    emailAddress2Error.innerHTML = '';
  }

  // validate the first name
  if (!firstName) {
    firstNameError.innerHTML = 'This field is required.';
    isValid = false;
  } else {
    firstNameError.innerHTML = '';
  }

  // submit the form if all entries are valid
  if (!isValid) {
    e.preventDefault();
    e.stopPropagation();
  }
}

window.onload = function () {
  document.getElementById('email_form').onsubmit = joinList;
};
