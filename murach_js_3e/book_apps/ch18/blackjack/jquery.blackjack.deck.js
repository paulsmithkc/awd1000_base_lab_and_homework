"use strict";

var deck = (function() {
    var resetCards = function() {  // protected private function
        var cards = [], suits = ["c","d","h","s"];
        for (var s in suits) {
            for (var i = 1; i <= 13; i++) {
                cards.push(i + "-" + suits[s]);
            }
        }
        return cards;
    };
    return {
        cards: resetCards(),
        needsShuffling: function() {
            return (this.cards.length < 10) ? true : false;
        },
        shuffle: function() {
            this.cards = resetCards();
            alert("Shuffling...");
        },
        deal: function() {
            var i = Math.floor(Math.random() * this.cards.length);
            var card = this.cards[i];
            this.cards.splice(i, 1); // remove card from deck
            return card;
        }
    };
})(); //IIFE
