"use strict";
$(document).ready(function() {
    $("#validate").click(function() {
        var phone = $("#phone").val();
        var pattern = /^\d{3}-\d{3}-\d{4}$/;                        // 999-999-9999
        var isValid = pattern.test(phone);

        $("#message").text( (isValid) ? "Valid phone number" : "Invalid phone number" );
        $("#phone").focus();
    }); // end click()
    
    $("#phone").val( "123-456-7890" );  // set default phone number
    $("#phone").focus(); // set focus on initial load
    
}); // end ready()