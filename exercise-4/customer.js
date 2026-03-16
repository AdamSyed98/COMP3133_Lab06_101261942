"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer4 = void 0;
var Customer4 = /** @class */ (function () {
    function Customer4(first, last, age) {
        this.firstName = first;
        this.lastName = last;
        this._age = age;
    }
    Customer4.prototype.greeter = function () {
        console.log("Hello, " + this.firstName + " " + this.lastName);
    };
    Customer4.prototype.GetAge = function () {
        console.log("Age: " + this._age);
        return this._age;
    };
    return Customer4;
}());
exports.Customer4 = Customer4;
