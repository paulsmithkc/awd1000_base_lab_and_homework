"use strict";
$(document).ready(function() {
    $("#calculate").click(function() {
        var cents, quarters, dimes, nickels, pennies;
    
        // get the number of cents from the user
        cents = Math.floor( parseInt( $("#cents").val() ) );

        if (isNaN(cents) || cents < 0 || cents > 99) {
            alert("Please enter a valid number between 0 and 99");
        } else {
            // calculate the number of quarters
            quarters = cents / 25;      // get number of quarters
            quarters = Math.floor(quarters);
            cents = cents % 25;         // assign the remainder to the cents variable

            // calculate the number of dimes
            dimes = cents / 10;         // get number of dimes
            dimes = Math.floor(dimes);
            cents = cents % 10;         // assign the remainder to the cents variable

            // calculate the number of nickels
            nickels = cents / 5;
            nickels = Math.floor(nickels);

            // calculate the number of nickels and pennies
            pennies = cents % 5;

            // display the results of the calculations
            $("#quarters").val( quarters );
            $("#dimes").val( dimes );
            $("#nickels").val( nickels );
            $("#pennies").val( pennies );
            
            // select cents text box for next entry
            $("#cents").select();
        }
    }); // end click()
    
    // set focus on initial load
    $("#cents").focus();
    
}); // end ready()