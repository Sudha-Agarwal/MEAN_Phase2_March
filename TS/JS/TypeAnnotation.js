"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name1 = "Sudha";
let age = 30;
let active = true;
console.log(age);
//array Type
let arr = [1, 2, 3, 4];
//object type
let person;
person = { name: "sudha", age: 23 };
//function type
let greeting1;
greeting1 = function (name) {
    return 5;
};
//union type
let result;
result = true;
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    return undefined;
}
let x = 5;
x = "5";
console.log(add(5, 3));
//never
function raiseError(message) {
    throw new Error(message);
}
function validation() {
    //some validation code
    raiseError("not valid");
}
let message1;
let z;
