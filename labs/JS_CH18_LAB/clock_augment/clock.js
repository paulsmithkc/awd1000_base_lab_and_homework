"use strict";
$(document).ready(function() {
    // aliases 
    var clock = myapp.time.clock;
    var stopwatch = myapp.time.stopwatch;

    // start clock
    clock.start( $("#hours"), $("#minutes"), $("#seconds"), $("#ampm") );

    // set up stopwatch event handlers
    $("#start").click( function() {
        stopwatch.start( $("#s_minutes"), $("#s_seconds"), $("#s_ms") );
    });
    $("#stop").click( function() {
        stopwatch.stop();
    });
    $("#reset").click( function() {
        stopwatch.reset();
    }); 
}); // end ready()