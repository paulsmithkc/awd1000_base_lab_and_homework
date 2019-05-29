"use strict";
var tax1 = {
    rate: 0.075,
    calc: function(sub) { return (sub + (sub * this.rate)).toFixed(2); },
    displayFullPrice: function(subtotal) {
        // call bind() method on inner function so that value of 'this' is
        // always tax object, no matter how inner function is invoked
        return function() {
            alert( "Full price = $" + this.calc(subtotal) ); 
        }.bind(this);
    }
};

var tax2 = {
    rate: 0.075,
    calc: function(sub) { return (sub + (sub * this.rate)).toFixed(2); },
    displayFullPrice: function(subtotal) {
        // store value of outer function 'this' keyword so inner function has
        // access to it as well as to its own 'this' keyword. If inner function
        // is used as an event handler, 'this' will be clicked HTML element.
        var that = this;
        return function() {
            alert( "Full price for " + this.id + " = $" + that.calc(subtotal) );
        };
    }
};

var today = "Today is the first day of the rest of your life.";
today = today + (function() {
    var today = new Date();
    if (today.getDay() === 0 || today.getDay() === 6) {
        return " Plus, it's the weekend!";
    } else { return ""; }
})();
console.log(today);

var createClickCounter = function() {
    var count = 0;    // outer function’s local variable

    // inner function that refers to the outer function's local variable
    var clickCounter = function() {
        count++;
        // the value of 'this' is the clicked element
        console.log(this.id + " count is " + count);
    };

    // returning the inner function, or closure, keeps the variables it
    // refers to "alive", even after the outer function is out of scope.
    return clickCounter;
};

$(document).ready(function(){
    $("#camera1").click( tax1.displayFullPrice(125) );
    $("#camera2").click( tax2.displayFullPrice(125) );
    
    // figure 18-1
    $("#first_button").click( createClickCounter() );
    $("#second_button").click( createClickCounter() );
    
    // figure 18-8 (Note: book doesn't cancel default action, but I do here
    // because I dislike applications that round trip unnecessarily...)
    var topSites = ["Google", "Facebook", "Twitter"];
    var links = $("#top_sites").find("a");
    for (var i in topSites) {
        $(links[i]).text(topSites[i]);
        
//        // wrong
//        $(links[i]).click( function(e) { 
//            alert("You clicked on " + topSites[i]);
//            e.preventDefault();
//        });

        //corrected with IIFE
        $(links[i]).click( 
            (function(name) {
                return function(e) {
                    alert("You clicked on " + name);
                    e.preventDefault();
                };
            })(topSites[i]) 
        );
    }
});