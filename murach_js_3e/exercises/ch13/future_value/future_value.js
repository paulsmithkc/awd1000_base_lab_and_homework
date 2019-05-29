$(document).ready(function() {

	var getRandomNumber = function(max) {
    	var random;
    	if (!isNaN(max)) {
        	random = Math.random(); // value >= 0.0 and < 1.0
        	random = Math.floor(random * max); // value is an integer between 0 and max - 1
        	random = random + 1; // value is an integer between 1 and max
    	}
    	return random;
	};
	
	var calculateFV = function(investment,rate,years) {
		var futureValue = investment;
    	for (var i = 1; i <= years; i++ ) {
			futureValue += futureValue * rate / 100;
    	}
    	futureValue = futureValue.toFixed(2);
		return futureValue;
	};


	$("#calculate").click( function() {
    	var investment = parseFloat( $("#investment").val() );
    	var rate = parseFloat( $("#annual_rate").val() );
    	var years = parseInt( $("#years").val() );
		if (isNaN(investment) || investment <= 0) {
			alert("Must be > 0");
		}
		else if (isNaN(rate) || rate <= 0) {
		alert("Must be > 0");
		}	
		else if (isNaN(years) || years <= 0) {
			alert("Must be > 0");
			allValid = false;
		}
		else {
			$("#future_value").val(calculateFV(investment,rate,years));
		}
	});
	
    $("#investment").focus();
});

