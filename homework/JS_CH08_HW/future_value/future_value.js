var $ = function (id) {
    return document.getElementById(id);
};
var calculateClick = function () {
    var investment = parseFloat( $("investment").value );
    var annualRate = parseFloat( $("rate").value );
    var years = parseInt( $("years").value );
	
	if (isNaN(investment) || investment <= 0) {
		alert("Investment must be a valid number greater than zero.");
	} 
	else if(isNaN(annualRate) || annualRate <= 0) {
		alert("Annual rate must be a valid number greater than zero.");
	}
	else if(isNaN(years) || years <= 0) {
		alert("Years must be a valid number\nand greater than zero.");
	}
	// if all entries are valid, calulate future value
	else {
		futureValue = investment;
		for ( i = 1; i <= years; i++ ) {
			futureValue += futureValue * annualRate / 100;
		}
		$("future_value").value = futureValue.toFixed();
	} 
};
window.onload = function () {
    $("calculate").onclick = calculateClick;
    $("investment").focus();
};