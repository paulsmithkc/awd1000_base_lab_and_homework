"use strict";
$(document).ready(function() {
    // setting up the click event handler for the h2 elements
    $("#faqs h2").click(function(evt) {
        $(this).toggleClass("minus");
        if ($(this).attr("class") !== "minus") {
            $(this).next().hide();
        } else {
            $(this).next().show();
        }
		evt.preventDefault();
    }); // end click
	$("#faqs a:first").focus();  
}); // end ready
