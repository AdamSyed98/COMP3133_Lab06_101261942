var Customer3 = /** @class */ (function () {
    function Customer3(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    Customer3.prototype.greeter = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
    return Customer3;
}());
var customer = new Customer3("John", "Doe");
customer.greeter();
