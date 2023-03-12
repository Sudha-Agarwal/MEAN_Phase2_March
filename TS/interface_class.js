"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.fullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Employee.prototype.dowork = function () {
    };
    return Employee;
}());
var emp = new Employee("Sudha", "Agarwal");
console.log(emp.dowork());
