var prices = [25.99, 12.87, 87.99, 21.99, 4.56];

var taxRate = 7;

function writeList(list) {
    for (i = 0; i < list.length; i++) {
        document.write("<p>$" + list[i] + "</p>");
    }
}

writeList(prices);

function calculateSubTotal(list) {
  var total = 0;
  for (i = 0; i < list.length; i++) {
      total+=list[i];
}
  total = total.toFixed(2);   
  document.write("<p>Sub Total: $"+total+"</p>");
  return(total);
}
var sub = calculateSubTotal(prices);


function calculateTax(subTotal) {
  var total = subTotal*taxRate/100;
  total = total.toFixed(2);
  document.write("<p>Tax: $"+total+"</p>");
  return(total);
}
var tax = calculateTax(sub);

function finalTotal(subTotal,tax) {
  var total = parseFloat(subTotal)+parseFloat(tax);
  total = total.toFixed(2);
  document.write("<p>Total: $"+total+"</p>");
  return(total);
}
finalTotal(sub,tax);


