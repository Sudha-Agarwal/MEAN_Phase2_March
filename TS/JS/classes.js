"use strict";
class Person {
    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.ssn} ${this.firstName} ${this.lastName}`;
    }
}
let person = new Person("123", "Sudha", "Agarwal");
//person.ssn = "1234";
console.log(person.getFullName());
