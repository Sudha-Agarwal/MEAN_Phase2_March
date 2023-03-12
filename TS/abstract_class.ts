abstract class Employee{
    constructor(private firstName:string,private lastName:string){

    }
    abstract getsalary():number;

    get fullName():string{
        return `${this.firstName} ${this.lastName}`;
    }    

    compensationSatement():string{
        return `${this.fullName} makes ${this.getsalary()} a month `;
    }
}

class FullTimeEmployee extends Employee{
    constructor(firstName:string,
        lastName:string,
        private salary:number){
            super(firstName,lastName)
        }

        getsalary():number{
            //salary calculation here
            return this.salary;
        }
}

let emp1 = new FullTimeEmployee("Sudha1","Agarwal1", 20000);
console.log(emp1.compensationSatement());

export {}