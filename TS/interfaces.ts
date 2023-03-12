interface Person{
    firstName:string;
    lastName?:string; //optional value   
}

interface fullName{
    (firstName:string, lastName:string):string;
}

let full_Name:fullName;

full_Name = function(firstName:string,lastName:string){
    return `${firstName} ${lastName}`;
}

//here person is of Type Person
let person:Person = {
    firstName:"Sudha",
    lastName:"Agarwal"    
}

function getFullName(person:Person){
    return `${person.firstName} ${person.lastName}`;
}


export{}