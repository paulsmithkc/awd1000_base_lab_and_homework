"use strict";
$( document ).ready(function() {
    $("#calculate").click( function() {
        mpg.miles = parseFloat( $("#miles").val() );
        mpg.gallons = parseFloat( $("#gallons").val() );
        if ( !mpg.isValid() ) {
            alert("Both entries must be numeric and greater than zero");
        } else {
           $("#mpg").val( mpg.calculate() ); 
           $("#miles").select();
        }
    });
    
    $("#clear").click( function() {
        $("#miles").val( "" );
        $("#gallons").val( "" );
        $("#mpg").val( "" );
        
        $("#miles").focus();
    });
    
    $("#miles").focus();
});