"use strict";
$( document ).ready(function() {
    var getRandomNumber = function(max) {
        var random;
        if (!isNaN(max)) {
            random = Math.random();                
            random = Math.floor(random * max);
		    random = random + 1;
        }
        return random;
    };
    var changePlayer = function() {
        if ( $("#current").text() == $("#player1").val() ) { 
            $("#current").text( $("#player2").val() ); 
        } else { 
            $("#current").text( $("#player1").val() ); 
        }
        $("#die").val("0");
        $("#total").val("0");
        $("#roll").focus();
    };

    $("#new_game").click( function() {
        $("#score1").val("0");
        $("#score2").val("0");

        if ( $("#player1").val() == "" || $("#player2").val() == "" ) {
            $("#turn").removeClass("open");
            alert("Please enter two player names.");
        } else {  
            $("#turn").addClass("open");
            changePlayer();
        }
    });
    $("#roll").click( function() {
        var total = parseInt( $("#total").val() );
        var die = getRandomNumber(6);
        if (die == 1) { 
            total = 0; 
            changePlayer();
        } else { total = total + die; }

        $("#die").val(die);
        $("#total").val(total); 
    });
    $("#hold").click( function() {
        var score;
        var total = parseInt( $("#total").val() );
        if ( $("#current").text() == $("#player1").val() ) { 
            score = $("#score1"); 
        } else { score = $("#score2"); }

        score.val( parseInt( score.val() ) + total );
        if (score.val() >= 100) {
            alert( $("#current").text() + " WINS!" );
            newGame();
        } else { changePlayer(); }
    });
});