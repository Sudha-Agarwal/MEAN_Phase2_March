"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (theAge) {
            if (theAge <= 0 || theAge >= 200) {
                console.log("The age is invalid");
            }
            else {
                this._age = theAge;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.age = -1; //will call setter method
console.log(person.age); //will call getter method
