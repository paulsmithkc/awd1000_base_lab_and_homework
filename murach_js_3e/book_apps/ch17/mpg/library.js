"use strict";
var mpg = {
    miles: 0,
    gallons: 0,
    isValid: function() {
        if ( isNaN(this.miles) || isNaN(this.gallons) ) {
            return false;
        } else if ( this.miles <= 0 || this.gallons <= 0 ) {
            return false;
        } else {
            return true;
        }
    },
    calculate: function() {
        var mpg = this.miles / this.gallons;
        return mpg.toFixed(1);
    }
};