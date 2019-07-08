"use strict";

myapp.time.clock = (function() {
    // private state
    var u = myapp.utility; // alias
    
    var spans = { hour: null, minute: null, second: null, ampm: null };
    
    var displayCurrentTime = function() {
        var now = new Date();
        var hours = now.getHours();
        var ampm = "AM"; // set default value

        // correct hours and AM/PM value for display
        if (hours > 12) { // convert from military time
            hours = hours - 12;
            ampm = "PM";
        } else { // adjust 12 noon and 12 midnight
             switch (hours) {
                case 12: // noon
                    ampm = "PM";
                    break;
                case 0:  // midnight
                    hours = 12;
                    ampm = "AM";
            }
        }
        // diplay time
        spans.hour.text( hours );
        spans.minute.text( u.padSingleDigit(now.getMinutes()) );
        spans.second.text( u.padSingleDigit(now.getSeconds()) );
        spans.ampm.text( ampm );
    };
    
    // public methods
    return {
        start: function(hourSpan, minuteSpan, secondSpan, ampmSpan) {
            // store span elements
            spans.hour = hourSpan;
            spans.minute = minuteSpan;
            spans.second = secondSpan;
            spans.ampm = ampmSpan;
            
            // set initial clock display and then set interval timer to display
            // new time every second (1000 milliseconds). Don't store timer object
            // because it won't be needed - clock will just run.
            displayCurrentTime();
            setInterval(displayCurrentTime, 1000);
            return this;
        }
    };

})(); // Invoke IIFE
