"use strict";

var calculateFV = function( investment, rate, years ) {
    if ( isNaN(investment) || investment <= 0 ) {
        throw new Error( 
            "calculateFVrequires an investment amount greater than zero." );
    }
    if ( isNaN(rate) || rate <= 0 ) {
        throw new Error( 
            "calculateFV requires an annual rate greater than zero." );
    }
    if ( isNaN(years) || years <= 0 ) {
        throw new Error( 
            "calculateFV requires a years entry greater than zero." );
    }
    
    var futureValue = investment;
		
    for ( var i = 1; i <= years; i++ ) {
        futureValue += futureValue * rate / 100;
    }
    return futureValue.toFixed(2);
};


$(document).ready(function(){   
    $("#calculate").click( function() {
        var investment = parseFloat( $("#investment").val() );
        var rate = parseFloat( $("#rate").val() );
        var years = parseInt( $("#years").val() );
        
        try { 
            $("#future_value").text( calculateFV(investment, rate, years) ); 
        } catch(error) {
            alert ( error.name + ": " + error.message);
        } finally {
            $("#investment").focus();
            $("#investment").select();
        }
    });
    
    // set focus on initial load
    $("#investment").focus();
});