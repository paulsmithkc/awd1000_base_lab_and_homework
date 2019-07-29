"use strict";
$( document ).ready(function() {
    $("#calculate").click( function() {
        var result = mpg.calculate( $("#miles").val(), $("#gallons").val() );
       $("#mpg").val( result ); 
       $("#miles").focus();
       $("#miles").select();
    });
    
    $("#clear").click( function() {
        $("#miles").val( "" );
        $("#gallons").val( "" );
        $("#mpg").val( "" );
        
        $("#miles").focus();
    });
    
    $("#miles").focus();
});