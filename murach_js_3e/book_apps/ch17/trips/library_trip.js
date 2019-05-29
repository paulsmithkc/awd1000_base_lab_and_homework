"use strict";
var Trip = function(destination, miles, gallons) {
    this.destination = destination;
    this.miles = parseFloat( miles );
    this.gallons = parseFloat( gallons );
};
Trip.prototype.isValid = function() {
    if ( this.destination === "" || isNaN(this.miles) || isNaN(this.gallons) ) {
        return false;
    } else if ( this.miles <= 0 || this.gallons <= 0 ) {
        return false;
    } else {
        return true;
    }
};
Trip.prototype.calculateMpg = function() {
    return this.miles / this.gallons;
};
Trip.prototype.toString = function() {
    var mpg = this.calculateMpg().toFixed(1);
    return this.destination + ": Miles - " + this.miles + "; MPG - " +  mpg;
};