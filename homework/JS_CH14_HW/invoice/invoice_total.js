"use strict";
$( document ).ready(function() {
    var calculateDiscount = function(customer, subtotal) {
        switch( customer ) {
            case "reg":
                if (subtotal < 100) {
                    return 0;
                } else if (subtotal >= 100 && subtotal < 250) {
                    return .1;
                } else if (subtotal >= 250 && subtotal < 500) {
                    return .25;
                } else if (subtotal >= 500) {
                    return .3;
                }
                break;
            case "loyal":
                return .3;
                break;
            case "honored":
                return (subtotal < 500) ? .4 : .5;
                break;
            default:
                return 0;
                break;
        }
    };
    
    $("#calculate").click(function() {
        var discountAmount, invoiceTotal, discountPercent;

        // get values from page
        var customerType = $("#type").val();
        var subtotal = $("#subtotal").val();  
        subtotal = parseFloat(subtotal);
        
        // call function to get discount percent
        discountPercent = calculateDiscount(customerType, subtotal);

        // calculate discount amount and invoice total
        discountAmount = subtotal * discountPercent;
        invoiceTotal = subtotal - discountAmount;

        // display subtotal to 2 decimals, and all other values
        $("#subtotal").val( subtotal.toFixed(2) );
        $("#percent").val( (discountPercent * 100).toFixed(2) );
        $("#discount").val( discountAmount.toFixed(2) );
        $("#total").val(  invoiceTotal.toFixed(2) );
        
        // set focus on customer dropdown 
        $("#type").focus();
    });
    
    // set focus on initial load
    $("#type").focus();
});