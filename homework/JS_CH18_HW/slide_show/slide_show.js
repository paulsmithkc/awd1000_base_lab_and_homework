"use strict";
$(document).ready(function() {
    var slides = [
        {href:"dusk.jpg", title:"Dusk"}, 
        {href:"gear.jpg", title:"Gear"},
        {href:"hero.jpg", title:"Hero"},
        {href:"lunch.jpg", title:"Lunch"},
        {href:"plane.jpg", title:"Plane"},
        {href:"release.jpg", title:"Catch and Release"}
    ];
    myapp.slideshow.loadImages(slides).startSlideShow( $("#image"), $("#caption") );
    
    $("#play_pause").click( myapp.slideshow.createToggleHandler() );
    
    $("#change_speed").click( function() {
        var msg = "Current speed is ".concat(myapp.slideshow.slideShowSpeed,
            " milliseconds.\n", 
            "Please enter a new speed in milliseconds (200 min).");
        var ms = prompt(msg, 2000);
        myapp.slideshow.changeSpeed(ms).startSlideShow();
    });
    
    $("#info").click( function() {
        var message = "Properties of the current slide\n";
        message = message + "---------------------------------\n";
        // add info re: current image in slideshow
        alert(message);
    });
}); // end ready()
