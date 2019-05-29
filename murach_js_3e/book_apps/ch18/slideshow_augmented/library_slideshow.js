"use strict";
// create the namespace used by the application
var myapp = myapp || {};

// create the slideshow object and add it to the namespace
myapp.slideshow = (function() {
    // private variables and functions
    var timer, play = true, speed = 2000;
    var nodes = { image: null, caption: null };
    var img = { cache: [], counter: 0 };
    
    var stopSlideShow = function() { clearInterval( timer ); };
    var displayNextImage = function() {
        img.counter = ++img.counter % img.cache.length;
        var image = img.cache[img.counter];
        nodes.image.attr("src", image.src);
        nodes.caption.text( image.title );
    };

    // prototype object for public methods 
    var prototype = {
        loadImages: function(slides) {
            var image;
            for ( var i = 0; i < slides.length; i++ ) {
                image = new Image();
                image.src = "images/" + slides[i].href;
                image.title = slides[i].title;
                img.cache.push( image );
            }
            return this;
        },
        startSlideShow: function() {
            if (arguments.length === 2) { 
                nodes.image = arguments[0]; 
                nodes.caption = arguments[1];
            }
            timer = setInterval(displayNextImage, speed);
            return this;
        },
        createToggleHandler: function() {
            var me = this;       // store 'this', which is the object literal 
            return function() {
                // 'this' is the clicked button; 'me' is the object literal 
                if ( play ) { stopSlideShow(); } else { me.startSlideShow(); }
                this.value = (play)? "Resume" : "Pause";
                play = ! play;   // toggle play flag
            };
        }
    };
    
    // property descriptor object(s)
    var properties = {
        interval: { 
            get: function() { return speed; },
            set: function( s ) { 
                speed = ( isNaN(s) || s < 500 ) ? 2000 : s; 
                stopSlideShow();
            }
        },
        images: {
            get: function() {
                return img.cache.slice(0);
            }
        }
    };
    
    // create and return the slideshow object
    return Object.create( prototype, properties );

})(); // Invoke the IIFE