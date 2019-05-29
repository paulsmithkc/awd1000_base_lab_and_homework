"use strict";

(function(mod) {
    mod.changeSpeed = function(speed) {
        this.interval = parseInt(speed);  
        return this; // return 'this' so can be chained
    };
    mod.displaySlides = function() {
        var slides = this.images.map( function( current ) {
            var pieces = current.src.split("/");
            return pieces[pieces.length - 1]; // return last array element
        });
        return slides.join(", ");
    };
})(myapp.slideshow); // invoke IIFE; import the object to be augmented
