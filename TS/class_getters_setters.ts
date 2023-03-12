class Person{
    private _age:number;
    private firstName:string;
    private lastName:string;

    public get age(){
        return this._age;
    }

    public set age(theAge:number){
        if(theAge <=0 || theAge >=200){
            console.log("The age is invalid");
        }
        else{
            this._age = theAge;
        }
    }
}
let person = new Person();
person.age = -1; //will call setter method
console.log(person.age); //will call getter method


export{}