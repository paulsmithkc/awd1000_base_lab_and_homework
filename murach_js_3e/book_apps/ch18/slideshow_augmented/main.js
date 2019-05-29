"use strict";
$( document ).ready(function() {
    // create the slideshow object 
    var slideshow = myapp.slideshow; // use an alias to make code shorter
    
    var slides = [
        {href:"release.jpg", title:"Catch and Release"}, 
        {href:"deer.jpg", title:"Deer at Play"},
        {href:"hero.jpg", title:"The Big One!"},
        {href:"bison.jpg", title:"Roaming Bison"}    
    ];
    
    $("#play_pause").click( slideshow.createToggleHandler() );  
    $("#change_speed").click( function() {
        var ms = prompt( "Current speed is " 
            + slideshow.interval + " milliseconds.\n"
            + "Please enter a new speed in milliseconds."
       , 2000 );
        slideshow.changeSpeed(ms).startSlideShow();
    });
    $("#view_slides").click( function() {
        alert( slideshow.displaySlides() );
    });
    
    slideshow.loadImages(slides).startSlideShow( $("#image"), $("#caption") );
});