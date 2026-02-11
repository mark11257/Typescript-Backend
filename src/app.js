//Inputs
var button = document.querySelector(".button1");
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
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
// test button
function text() {
    button.innerHTML = "clicked";
}
;
button.addEventListener("click", function () {
    text();
});
//const invoice = new Invoice(tofrom, details, amount);
var invOne = new Invoice("Mario", "Website work", 200);
console.log(invOne);
//Handle form data
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
