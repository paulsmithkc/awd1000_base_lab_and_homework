"use strict";
var mpg = {
    calculate: function(miles, gallons) {
        var mpg = parseFloat( miles ) / parseFloat( gallons );
        return mpg.toFixed(1);
    }
};