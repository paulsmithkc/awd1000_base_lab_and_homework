"use strict";

var Hand = function() {
    this.cards = [];
    this.total = 0;
};
Hand.prototype.hasAce = function() {
    return this.cards.some( function(curr) {
        return (curr.split("-")[0] === "1") ? true : false;
    });
};
Hand.prototype.add = function(card) {
    this.cards.push(card);
    var total = this.cards.reduce( function(prev, curr) {
        var num = parseInt(curr.split("-")[0]);
        if (num > 10) { return prev + 10; /* face card */ } 
        else { return prev + num; }
    }, 0); // set initial value of prev parameter to zero

    if ( total <= 11 && this.hasAce() ) { // adjust for ace 
        total = total + 10;
    }
    this.total = total;
};
Hand.prototype.hasBlackJack = function() {
    if (this.cards.length === 2 && this.total === 21 ) { return true; }
};
Hand.prototype.busted = function() {
    return (this.total > 21) ? true : false; 
};
Hand.prototype.mustHit = function() { // only applies to dealer
    if (this.total < 17) { return true; } 
    else if (this.total === 17 && this.cards.total === 2 && this.hasAce() ) { return true; } 
    else { return false; }
};