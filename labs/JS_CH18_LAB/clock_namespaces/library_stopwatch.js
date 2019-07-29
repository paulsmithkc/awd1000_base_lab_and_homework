"use strict";

var createStopwatch = function(minuteSpan, secondSpan, msSpan) {
    // private state
    var timer;
    var elapsed = { minutes:0, seconds:0, milliseconds:0 }; 
    
    var padSingleDigit = function(num) {
        return (num < 10) ? "0" + num : num;
    };
    
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
        minuteSpan.text( padSingleDigit(elapsed.minutes) );
        secondSpan.text( padSingleDigit(elapsed.seconds) );
        msSpan.text( elapsed.milliseconds );
    };
    
    // public methods
    return {
        start: function() {
			// do first tick of stop watch and then set interval timer to tick 
			// stop watch every 10 milliseconds. Store timer object in stopwatchTimer 
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

            minuteSpan.text( "00" );
            secondSpan.text( "00" );
            msSpan.text( "000" );
            return this;
        }
    };
};