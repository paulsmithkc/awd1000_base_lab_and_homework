"use strict";

var game = {
    dealer: new Hand(),
    player: new Hand(),
    balance: 0,
    deal: function() {
        if ( deck.needsShuffling() ) { deck.shuffle(); }
        this.dealer = new Hand();
        this.player = new Hand();
        this.player.add( deck.deal() );
        this.dealer.add( deck.deal() );
        this.player.add( deck.deal() );
        this.dealer.add( deck.deal() );
    },
    hit: function(hand) {
        if ( hand.toLowerCase() === "dealer" ) {
            this.dealer.add( deck.deal() );
        }
        else { this.player.add( deck.deal() ); }
    },
    playerWins: function() {
        if (this.dealer.busted() || (!this.player.busted() 
                && this.dealer.total < this.player.total) ) {
            return true;
        }
        else { return false; }
    },
    dealerWins: function() {
        if (this.player.busted() || (!this.dealer.busted() 
                && this.player.total < this.dealer.total) ) {
            return true;
        }
        else { return false; }
    },
    updateBalance: function(amount) {
        if ( this.player.hasBlackJack() ) {
        	amount = amount + (amount * 0.50);
        }
        this.balance = this.balance + amount;
    }
};