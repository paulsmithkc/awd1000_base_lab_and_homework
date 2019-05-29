"use strict";
$( document ).ready(function() {
    // create the slideshow object 
    var slideshow = createSlideshow();
    
    var slides = [
        {href:"release.jpg", title:"Catch and Release"}, 
        {href:"deer.jpg", title:"Deer at Play"},
        {href:"hero.jpg", title:"The Big One!"},
        {href:"bison.jpg", title:"Roaming Bison"}    
    ];
    
    $("#play_pause").click( slideshow.createToggleHandler() );  
    
    slideshow.loadImages(slides).startSlideShow( $("#image"), $("#caption") );
});