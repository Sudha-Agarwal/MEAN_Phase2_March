class Person{
    private ssn:string;
    public firstName:string;
    protected lastName:string;

    constructor(ssn:string,
        firstName:string,
        lastName:string){
            this.ssn = ssn;
            this.firstName = firstName;
            this.lastName = lastName
        }

      getFullName():string{
        return `${this.ssn} ${this.firstName} ${this.lastName}`;
      }  
}

let person = new Person("123", "Sudha", "Agarwal");
//person.ssn = "1234";
console.log(person.getFullName());
