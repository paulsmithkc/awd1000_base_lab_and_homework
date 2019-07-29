"use strict";
$(document).ready(function() {
    var topThree = [
        {product: "Fender Stratocaster", price: 699.00},
        {product: "Gibson Les Paul", price: 1199.00},
        {product: "Yamaha FG700S", price: 489.99}
    ];
    var links = $(document).find('a');
    
    for (var i in topThree) {
        var link = $(links[i]);
        link.text( topThree[i].product );
        link.attr("title", "$" + topThree[i].price.toFixed(2) );
        
        link.click( function() {
            var selection = topThree[i].product + ", price $" + topThree[i].price.toFixed(2);
            $("#selected").text( selection );
        });
    }
}); // end ready()
