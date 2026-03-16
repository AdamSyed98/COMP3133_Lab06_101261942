var Customer2 = /** @class */ (function () {
    function Customer2() {
    }
    Customer2.prototype.greeter = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
    return Customer2;
}());
var customer = new Customer2();
customer.firstName = "John";
customer.lastName = "Doe";
customer.greeter();
