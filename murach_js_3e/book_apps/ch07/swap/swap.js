"use strict";
var $ = function(id) { return document.getElementById(id); };

window.onload = function() {
    var listNode = $("image_list");           // the ul element
    var captionNode = $("caption");           // the h2 element
    var imageNode = $("main_image");          // the main img element
    
    var imageLinks = listNode.getElementsByTagName("a");
    
    // process image links
    var i, image, link;
    for ( i = 0; i < imageLinks.length; i++ ) {
        
        // preload image 
        image = new Image();
        image.src = imageLinks[i].getAttribute("href");
        
        // attach event handler
        imageLinks[i].onclick = function(evt) {
            link = this; // 'this' = the link that was clicked
            
            // set new image and caption
            imageNode.src = link.getAttribute("href");
            captionNode.firstChild.nodeValue = link.getAttribute("title");
            
            // cancel the default action of the event
            if (!evt) { evt = window.event; }
            if (evt.preventDefault) { evt.preventDefault(); }
            else { evt.returnValue = false; } 
        };
    }
    
    // set focus on first image link
    imageLinks[0].focus();
};
