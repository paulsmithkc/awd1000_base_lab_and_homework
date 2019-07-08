"use strict";
$(document).ready(function() {
    // create clock and stopwatch objects
    var clock = createClock( $("#hours"), $("#minutes"), $("#seconds"), $("#ampm") );
    var stopwatch = createStopwatch( $("#s_minutes"), $("#s_seconds"), $("#s_ms") );
    
    // start clock
    clock.start();
    
    // set up stopwatch event handlers
    $("#start").click( function() {
        stopwatch.start();
    });
    $("#stop").click( function() {
        stopwatch.stop();
    });
    $("#reset").click( function() {
        stopwatch.reset();
    });
}); // end ready()