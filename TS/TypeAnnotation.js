"use strict";
exports.__esModule = true;
var name1 = "Sudha";
var age = 30;
var active = true;
console.log(age);
//array Type
var arr = [1, 2, 3, 4];
//object type
var person;
person = { name: "sudha", age: 23 };
//function type
var greeting1;
greeting1 = function (name) {
    return 5;
};
//union type
var result;
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
var x = 5;
x = "5";
console.log(add(5, 3));
