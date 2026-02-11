//Inputs
var button = document.querySelector(".button1");
var form = document.querySelector(".new-item-form");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
//classes
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.print = function () {
        console.log("Client ".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details));
    };
    return Invoice;
}());
//const invoice = new Invoice(tofrom, details, amount);
//  const invOne = new Invoice("Mario", "Website work", 200);
//   const invTwo = new Invoice("Amir", "Website work", 300);
//    const invThree = new Invoice("Mina", "Website work", 400);
//  invoices.push(invOne);
//  invoices.push(invTwo);
//   invoices.push(invThree);
var invoices = [];
//Handle form data
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var temp = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    invoices.push(temp);
});
invoices.forEach(function (inv) {
    inv.print();
});
// test button
function text() {
    button.innerHTML = "clicked";
}
;
button.addEventListener("click", function () {
    text();
});
