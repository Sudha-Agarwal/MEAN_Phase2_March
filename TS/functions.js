"use strict";
exports.__esModule = true;
//function type
var add;
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
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.5; }
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
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.add = function (a, b) {
        return a + b;
    };
    MyClass.prototype.add_any = function (a, b) {
    };
    return MyClass;
}());
var myClass = new MyClass();
console.log(myClass.add(1, 2));
console.log(myClass.add("hello ", "world"));
console.log("hi");
