"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var errorMessage = "";

    // validate the entries
    if (emailAddress1 == "") {
    	errorMessage = "First email address entry required";
        $("email_address1").focus();
    } else if (emailAddress2 == "") {
    	errorMessage = "Second email address entry required";
    	$("email_address2").focus();
    } else if (emailAddress2 != emailAddress1) {
    	errorMessage = "Email address entries must match";
    	$("email_address2").focus();
    } else if (firstName == "") {
    	errorMessage = "First name entry required";
    	$("first_name").focus();
    }

    // submit the form if all entries are valid
    // otherwise, display an error message
    if (errorMessage == "") {
        $("email_form").submit(); 
    } else {
    	alert(errorMessage);
    }
};

window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
};
