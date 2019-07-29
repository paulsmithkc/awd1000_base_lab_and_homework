"use strict";
$(document).ready(function() {
        
    var displayScores = function () {   
        
    };
    
    $("#add_button").click(function() {
        
        
        // get the add form ready for next entry
        $("#first_name").val( "" );
        $("#last_name").val( "" );
        $("#score").val( "" );
        $("#first_name").focus();
    }); // end click()
    
    $("#clear_button").click(function() {


        // remove the score data from the web page
        $("#average_score").val( "" );
        $("#scores").val( "" );

        $("#first_name").focus();
    }); // end click()
       
    $("#sort_button").click(function() {

    }); // end click()
    
    $("#first_name").focus();
}); // end ready()