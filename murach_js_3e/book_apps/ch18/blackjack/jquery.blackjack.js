(function($){
    $.fn.blackjack = function(options) {  
        var o = $.extend({
            "dealerName": "Dealer",
            "playerName": "Player",
            "bet": 5
        }, options);
        
        // preload card images
        for (var i in deck.cards) {
            var img = new Image();
            img.src = "cards/" + deck.cards[i] + ".png";
        }

        return this.each(function() {
            // add class used to format HTML elements
            $(this).addClass("blackjack");
            
            // create and load HTML for plugin
            var html = "<label>" + o.dealerName + ":</label>";
            html = html + "<span>&nbsp;</span>";
            html = html + "<div id='dealer'>&nbsp;</div>";
            
            html = html + "<label>" + o.playerName + ":</label>";
            html = html + "<span>&nbsp;</span>"; 
            html = html + "<div id='player'>&nbsp;</div>";
            
            html = html + "<input type='button' id='deal' value='Deal'>"; 
            html = html + "<input type='button' id='hit' value='Hit'>";
            html = html + "<input type='button' id='stand' value='Stand'><br>";
            html = html + "<span>Bet: " + o.bet + "</span>";
            html = html + "<label id='balance' class='balance'>Balance: 0</label>";
            html = html + "<label id='outcome' class='outcome'>&nbsp;</label>";
            $(this).html(html);

            // create functions used by click event handlers
            var clear = function() {
                $("#dealer").html( "" );
                $("#dealer").prev().text( "" );
                $("#player").html( "" );
                $("#player").prev().text( "" );
                $("#outcome").text( "" );
                $("#hit").prop('disabled', false);
                $("#stand").prop('disabled', false);
            };
            var showCards = function(cardsArray, showHoleCard) {
                var i = 0, html = "";
                
                if (showHoleCard === false) {
                    i = 1; // skip first card in cards array
                    html = "<img src='cards/back.png'>";
                }
                for (i; i < cardsArray.length; i++) {
                    html = html + "<img src='cards/" + cardsArray[i] + ".png'>";
                }
                html = html + "<p class='clear'></p>";
                return html;
            };
            var showResults = function() {
                $("#dealer").html( showCards(game.dealer.cards ) );
                $("#dealer").prev().text( game.dealer.total );
                $("#player").html( showCards(game.player.cards ) );
                $("#player").prev().text( game.player.total );
                $("#hit").prop('disabled', true);
                $("#stand").prop('disabled', true);
                if ( game.playerWins() ) {
                    $("#outcome").text( "You Win!" );
                    game.updateBalance( o.bet );
                } else if ( game.dealerWins() ) {
                    $("#outcome").text( "You Lose :(" );
                    game.updateBalance( - o.bet );
                } else {
                    $("#outcome").text( "PUSH" );
                }
                $("#balance").text( "Balance: " + game.balance );
            };

            // attach click event handlers
            $("#deal").click( function() {
                //alert(this.parentElement.id);
                clear();
                game.deal();

                if ( game.dealer.hasBlackJack() || game.player.hasBlackJack() ) {
                    showResults();            
                } else {
                    $("#dealer").html( showCards(game.dealer.cards, false ) ); // don't show hole card
                    $("#player").html( showCards(game.player.cards ) );
                    $("#player").prev().text( game.player.total );
                }
            });

            $("#hit").click( function() {
                game.hit("player");
                if ( game.player.busted() ) {
                    showResults();
                } else {
                    $("#player").html( showCards(game.player.cards ) );
                    $("#player").prev().text( game.player.total );
                }
            });

            $("#stand").click( function() {
                $("#hit").prop('disabled', true);
                $("#stand").prop('disabled', true);

                $("#dealer").html( showCards(game.dealer.cards ) );
                $("#dealer").prev().text( game.dealer.total );

                var timer = setInterval( function() {
                    if ( game.dealer.mustHit() ) {
                        game.hit("dealer");
                        $("#dealer").html( showCards(game.dealer.cards ) );
                        $("#dealer").prev().text( game.dealer.total );
                    } else {
                        clearInterval(timer);
                        showResults();
                    }
                }, 
                1000);
            });

			// set focus on load
            $("#deal").focus();
        });
    };
})(jQuery);