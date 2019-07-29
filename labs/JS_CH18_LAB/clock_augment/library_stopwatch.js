"use strict";

myapp.time.stopwatch = (function() {
    // private state
    var u = myapp.utility; // alias
    
    var timer;
    var elapsed = { minutes:0, seconds:0, milliseconds:0 }; 
    var spans = { minute: null, second: null, millisecond: null };
    
    var tickStopwatch = function() {    
        // increment milliseconds by amount of interval
        elapsed.milliseconds = elapsed.milliseconds + 10;

        // roll over milliseconds to seconds, seconds to minutes
        if (elapsed.milliseconds === 1000) {
            elapsed.seconds++;
            elapsed.milliseconds = 0;
        }
        if (elapsed.seconds === 60) {
            elapsed.minutes++;
            elapsed.seconds = 0;
        }

        //display new stopwatch time
        spans.minute.text( u.padSingleDigit(elapsed.minutes) );
        spans.second.text( u.padSingleDigit(elapsed.seconds) );
        spans.milliseconds.text( elapsed.milliseconds );
    };
    
    // public methods
    return {
        start: function(minuteSpan, secondSpan, msSpan) {
            // store span elements
            spans.minute = minuteSpan;
            spans.second = secondSpan;
            spans.milliseconds = msSpan;
            
            // do first tick of stop watch and then set interval timer to tick 
            // stop watch at set interval. Store timer object in stopwatchTimer 
            // variable so next two functions can stop timer.
            tickStopwatch();
            timer = setInterval(tickStopwatch, 10);
            return this;
        },
        stop: function() {
            clearInterval(timer);
            return this;
        },
        reset: function() {
            clearInterval(timer);
            elapsed = { minutes:0, seconds:0, milliseconds:0 }; 
            
            spans.minute.text( "00" );
            spans.second.text( "00" );
            spans.milliseconds.text( "000" );
            return this;
        }
    };
    
})(); // Invoke IIFE