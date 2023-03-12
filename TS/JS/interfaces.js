"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let full_Name;
full_Name = function (firstName, lastName) {
    return `${firstName} ${lastName}`;
};
//here person is of Type Person
let person = {
    firstName: "Sudha",
    lastName: "Agarwal"
};
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
