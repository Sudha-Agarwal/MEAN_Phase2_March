"use strict";
exports.__esModule = true;
var button = document.querySelector("#myButton");
button.addEventListener("click", function () {
    alert("button clicked");
});
var person_1 = { name: "Sudha", age: 30 };
var element = document.createElement("div");
element.textContent = "Name: ".concat(person_1.name, ", Age: ").concat(person_1.age);
document.body.appendChild(element);
