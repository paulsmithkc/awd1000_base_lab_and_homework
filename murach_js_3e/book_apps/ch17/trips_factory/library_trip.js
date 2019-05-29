"use strict";
var getTrip = function(destination, miles, gallons) {
    var tripPrototype = {
        isValid: function() {
            if ( this.destination === "" || isNaN(this.miles) || isNaN(this.gallons) ) {
                return false;
            } else if ( this.miles <= 0 || this.gallons <= 0 ) {
                return false;
            } else {
                return true;
            }
        }, 
        calculateMpg: function() {
            return this.miles / this.gallons;
        },
        toString: function() {
            var mpg = this.calculateMpg().toFixed(1);
            return this.destination + ": Miles - " 
                + this.miles + "; MPG - " +  mpg;
        }
    };
    
    var trip = Object.create( tripPrototype );
    trip.destination = destination;
    trip.miles = parseFloat( miles );
    trip.gallons = parseFloat( gallons );
    return trip;
};
