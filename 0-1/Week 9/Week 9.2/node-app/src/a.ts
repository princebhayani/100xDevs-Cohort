let x: number = 1;
x = 234;
console.log(x);


const greeting = (fName :string) =>{
    console.log("Hello", fName);
    
}
greeting("prince");


const sum = ( a:number, b:number): number =>{
    return (a+b);
}
console.log(sum(5,9));


const isLegal =(age:number)=>{
    return age >18;
}
console.log(isLegal(10));
console.log(isLegal(55));

//THIS IS COMMENT
const inFunc = (func : ()=>void) =>{
    setTimeout(func,1000);
}
inFunc(function(){
    console.log("prince");
});



interface User {
    firstName : string;
    lastName : string;
    age:number;
    email?:string;
}
const legalAge=(user :User)=>{
    console.log("Hello last name " +user.lastName);
    return user.age>18
}
console.log(legalAge({
    lastName:"prince",
    age:30,
    firstName:"fd"
}));


function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("myString");
let output2 = identity<number>(100);
