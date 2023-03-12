//function type
let add: (a:number,b:number) => number;

add = function(a:number,b:number){
    return a + b;
}

//optional parameter
function multiply(a:number,b:number,c?:number):number{
    if(c){
        return a*b*c;
    }
    return a*b;
}

multiply(2,3,4);
multiply(2,3);

//default parameter
function applyDiscount(price:number, discount:number = 0.5){

}

applyDiscount(1000,1);

/*  
    you cannot include default parameters  in function type definition
*/
//let promotion : (price:number, discount:number =0.5) => number;

//function overloading

function overloaded_add(a:number,b:number):number;
function overloaded_add(a:string,b:string):string;
function overloaded_add(a:string, b:number):string;

function overloaded_add(a: any, b:any):any{
    return a+b;
}

//or
/*function overloaded_add(a:number | string, b:number | string) : number | string | void{
    if(typeof a === 'number' && typeof b ==='number'){
        return a + b;
    }
    else if(typeof a === 'string' && typeof b ==='string'){
        return a.concat(b);
    }
   
}*/

function sum(a:number,b:number):number;
function sum(a:number,b:number):string;
function sum(a:number,b:number,c:number):number;
function sum(a:number,b:number,c?:number):number | string{
    if(c){
        return a + b + c;
    }
    else{
        return a+ b;
    }
}

sum(1,2,3);

//method overloading
class MyClass{
    add(a:number,b:number):number;
    add(a:string,b:string):string;
    add(a:any,b:any):any{
        return a + b;
    }
    add_any(a:any,b:any){
    }
}

const myClass = new MyClass();
console.log(myClass.add(1,2));
console.log(myClass.add("hello ","world"));

console.log("hi");
export {};




