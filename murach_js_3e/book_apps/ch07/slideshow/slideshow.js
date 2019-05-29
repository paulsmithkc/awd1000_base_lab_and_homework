"use strict";
var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
    var listNode = $("image_list");    // the ul element
    var captionNode = $("caption");    // the h2 element for the caption
    var imageNode = $("image");        // the img element for the show
        
    var links = listNode.getElementsByTagName("a");
    
    // Process image links
    var i, linkNode, image;
    var imageCache = [];
    for ( i = 0; i < links.length; i++ ) {
        linkNode = links[i];

        // Preload image and copy title properties
        image = new Image();
        image.src = linkNode.getAttribute("href");
        image.title = linkNode.getAttribute("title");
        imageCache[imageCache.length] = image;
    }

    // Start slide show
    var imageCounter = 0;
    var  timer = setInterval(
        function () { 
            imageCounter = (imageCounter + 1) % imageCache.length;
            image = imageCache[imageCounter];
            imageNode.src = image.src;
            captionNode.firstChild.nodeValue = image.title;
        },
        2000);
};

