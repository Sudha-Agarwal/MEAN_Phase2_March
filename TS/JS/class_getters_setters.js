"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    get age() {
        return this._age;
    }
    set age(theAge) {
        if (theAge <= 0 || theAge >= 200) {
            console.log("The age is invalid");
        }
        else {
            this._age = theAge;
        }
    }
}
let person = new Person();
person.age = -1; //will call setter method
console.log(person.age); //will call getter method
