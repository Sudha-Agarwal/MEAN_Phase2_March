"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationSatement() {
        return `${this.fullName} makes ${this.getsalary()} a month `;
    }
}
class FullTimeEmployee extends Employee {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getsalary() {
        //salary calculation here
        return this.salary;
    }
}
let emp1 = new FullTimeEmployee("Sudha1", "Agarwal1", 20000);
console.log(emp1.compensationSatement());
