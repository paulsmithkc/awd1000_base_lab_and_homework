'use strict';

function calculateDiscount(customer, subtotal) {
  switch (customer) {
    case 'reg':
      if (subtotal < 100) {
        return 0;
      }
      if (subtotal < 250) {
        return 0.1;
      }
      if (subtotal < 500) {
        return 0.25;
      }
      return 0.3;
    case 'loyal':
      return 0.3;
    case 'honored':
      return subtotal < 500 ? 0.4 : 0.5;
    default:
      return 0;
  }
}

$(() => {
  $('#calculate').click(() => {
    // get values from page
    const customerType = $('#type').val();
    const subtotal = parseFloat($('#subtotal').val());

    // call function to get discount percent
    const discountPercent = calculateDiscount(customerType, subtotal);

    // calculate discount amount and invoice total
    const discountAmount = subtotal * discountPercent;
    const invoiceTotal = subtotal - discountAmount;

    // display subtotal to 2 decimals, and all other values
    $('#subtotal').val(subtotal.toFixed(2));
    $('#percent').val((discountPercent * 100).toFixed(2));
    $('#discount').val(discountAmount.toFixed(2));
    $('#total').val(invoiceTotal.toFixed(2));

    // set focus on customer dropdown
    $('#type').focus();
  });

  // set focus on initial load
  $('#type').focus();
});
