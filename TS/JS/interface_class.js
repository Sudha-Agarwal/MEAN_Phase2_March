"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    dowork() {
    }
}
let emp = new Employee("Sudha", "Agarwal");
console.log(emp.dowork());
