"use strict";
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        Employee._headcount++;
    }
    //static getter method
    static get headcount() {
        return Employee._headcount;
    }
    static getHeadcount() {
        return Employee._headcount;
    }
}
Employee._headcount = 0;
let emp1 = new Employee("ABC", "DEF");
let emp2 = new Employee("ABC1", "DEF1");
console.log(Employee.headcount);
