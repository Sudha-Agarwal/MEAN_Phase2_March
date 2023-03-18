const button = document.querySelector("#myButton") as HTMLButtonElement;

button.addEventListener("click", () =>{
    alert("button clicked");
});

interface Person1{
    name:string;
    age:number;
}

const person_1:Person1 = {name:"Sudha", age:30};

const element:HTMLElement = document.createElement("div");
element.textContent = `Name: ${person_1.name}, Age: ${person_1.age}`;

document.body.appendChild(element);



