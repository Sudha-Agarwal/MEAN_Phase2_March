let name1:string = "Sudha";
let age:number = 30;
let active:boolean = true;

console.log(age);

//array Type
let arr:number[] = [1,2,3,4];

//object type
let person: {
    name:string,
    age:number
}
person = {name:"sudha",age:23};

//function type
let greeting1 : (name:string) => string | number;

greeting1 = function(name:string){
   return 5;
}

//union type
let result: number | boolean | string;
result = true;

function add(a:number | string, b:number | string) : number | string | void{
    if(typeof a === 'number' && typeof b ==='number'){
        return a + b;
    }
    else if(typeof a === 'string' && typeof b ==='string'){
        return a.concat(b);
    }  

    return undefined;

}

let x:any = 5;
x = "5";

console.log(add(5,3));

//never
function raiseError(message:string):never{
    throw new Error(message);
}

function validation(){
    //some validation code
    raiseError("not valid");
}


//type aliases
type chars = number;

let message1:chars;
let z:chars;

export {};