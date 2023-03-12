class Employee{
    private static _headcount:number = 0;

    constructor(
        private firstName:string,
        private lastName:string
    ){
        Employee._headcount ++;
    }

    //static getter method
    static get headcount(){
        return Employee._headcount;
    }

    public static getHeadcount(){
        return Employee._headcount;
    }
}

let emp1 = new Employee("ABC", "DEF");
let emp2 = new Employee("ABC1", "DEF1");


console.log(Employee.headcount);