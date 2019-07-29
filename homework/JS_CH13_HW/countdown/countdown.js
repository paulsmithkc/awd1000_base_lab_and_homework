"use strict";
$(document).ready(function() {
    $("#countdown").click(function() {
        var event = $("#event").val();
        var dt = $("#date").val();  
        var message = $("#message");  
        var date, days, today, oneDay;

        // clear previous message
        message.text( " " );

        //make sure task and due date are entered and correct
        if (event.length === 0 || dt.length === 0) {
            message.text( "Please enter both a name and a date." );
        } else {
            //make sure due date string has slashes and a 4-digit year
            if (dt.indexOf("/") === -1) { 
                message.text( "Please enter the date in MM/DD/YYYY format." );
            } 

            var year = dt.substring(dt.length - 4); 
            if (isNaN(year)) {
                message.text( "Please enter the date in MM/DD/YYYY format." );
            }  

            //convert due date string to Date object and make sure date is valid
            date = new Date(dt);
            if (date === "Invalid Date") {
                message.text( "Please enter the date in MM/DD/YYYY format." );
            }
        }  

        // if no error messages, calculate and display days until event
        if (message.text() === " ") {

            //calculate days
            today = new Date();
            oneDay = 24*60*60*1000; // hours * minutes * seconds * milliseconds    
            days = ( date.getTime() - today.getTime() ) / oneDay;
            days = Math.ceil(days);

            //create and display message 
            if (days === 0) {
                message.text( "Hooray! Today is " + event + "!" );
            }
            if (days < 0) {
                event = event.substring(0,1).toUpperCase() + event.substring(1); // capitalize event
                message.text( event + " happened " + Math.abs(days) + " day(s) ago." );        
            }
            if (days > 0) {
                message.text( days + " day(s) until " + event + "!" );
            }
        }
    }); // end click()
    
    // set focus on initial page load
    $("#event").focus();
}); // end ready()
