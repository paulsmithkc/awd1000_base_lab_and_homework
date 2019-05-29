"use strict";

var calculateFV = function(investment,rate,years) {
	try {
		var futureValue = investment;
		for (var i = 1; i <= years; i++ ) {
			futureValue += futureValue * rate / 100;
		}
		futureValue = futureValue.toFixed(2);
		return futureValue;	
	}
	catch(error) {
		alert (error.name + error.message)
	}
};

$(document).ready(function(){   
    $("#calculate").click( function() {
        var investment = parseFloat( $("#investment").val() );
        var rate = parseFloat( $("#rate").val() );
        var years = parseInt( $("#years").val() );
        
        $("#future_value").text( calculateFV(investment, rate, years) ); 

        $("#investment").focus();
        $("#investment").select();

    });
    
    // set focus on initial load
    $("#investment").focus();
});
