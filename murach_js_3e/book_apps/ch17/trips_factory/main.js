"use strict";
$( document ).ready(function() {
    var trips = [];
    
    var displayTrips = function() {
        var displayString = "", mpgTotal = 0;
        
        for (var i in trips) {
            displayString += trips[i].toString() + "\n";
            mpgTotal += trips[i].calculateMpg();
        }
        var cumulativeMpg = mpgTotal / trips.length;
        displayString += "\nCumulative MPG:" + cumulativeMpg.toFixed(1);
        
        $("#trip_list").val( displayString );
        $("#destination").select();
    };
    
    $("#add_trip").click( function() {
        var trip = getTrip( 
            $("#destination").val(), $("#miles").val(), $("#gallons").val() );
        if ( !trip.isValid() ) {
            alert("Please complete all fields. " 
                + "Miles and gallons must be numeric and greater than zero.");
        } else {
           trips.push( trip ); 
           displayTrips();
        }
    });
    
    $("#destination").focus();
});