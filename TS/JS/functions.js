"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//function type
let add;
add = function (a, b) {
    return a + b;
};
//optional parameter
function multiply(a, b, c) {
    if (c) {
        return a * b * c;
    }
    return a * b;
}
multiply(2, 3, 4);
multiply(2, 3);
//default parameter
function applyDiscount(price, discount = 0.5) {
}
applyDiscount(1000, 1);
function overloaded_add(a, b) {
    return a + b;
}
function sum(a, b, c) {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
sum(1, 2, 3);
//method overloading
class MyClass {
    add(a, b) {
        return a + b;
    }
    add_any(a, b) {
    }
}
const myClass = new MyClass();
console.log(myClass.add(1, 2));
console.log(myClass.add("hello ", "world"));
console.log("hi");
