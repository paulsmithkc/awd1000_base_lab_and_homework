"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    var image1 = $("image1");           
    var image2 = $("image2");           
    
    // preload images 
    var links = $("image_list").getElementsByTagName("a");
    var i, link, image;
    

    // attach mouseover and mouseout events for each image
    image1.onmouseover = function() {
        
    };
    image1.onmouseout = function() {
        
    };
    
    image2.onmouseover = function() {
        
    };
    image2.onmouseout = function() {
        
    };
};
