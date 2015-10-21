var prices = [2.99, 5.99, 20.99, 4.99, 13.99];
var taxRate = 0.075;
var total = 0;
var subtotal = 0;
var grandtotal = 0;

calculateSubtotal(prices);

function calculateSubtotal(list) {
    for (i = 0; i < list.length; i++) {
        document.write("<p>$" + list[i] + "</p>");
        subtotal = list[i] + subtotal;
    }
        document.write("<p>Subtotal $" + subtotal + "</p>");
        calTax = subtotal*taxRate;
        document.write("<p>Tax $" + calTax.toFixed(2) + "</p>");
        grandTotal = subtotal+calTax;
        document.write("<p>Grand Total $" + grandTotal.toFixed(2) + "</p>");
}