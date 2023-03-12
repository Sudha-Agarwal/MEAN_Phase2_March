interface IName{
    firstName:string;
    lastName: string;

    fullName():string;
}

interface IWork{
    dowork():void;
}

class Employee implements IName, IWork{
    firstName: string;  
    lastName: string;
    constructor(firstName: string,
        lastName:string){
            this.firstName = firstName;
            this.lastName = lastName;
    }

    fullName():string{
        return `${this.firstName} ${this.lastName}`;
    }
    dowork(): void {        
    }
}

let emp = new Employee("Sudha","Agarwal");
console.log(emp.dowork());
export{}