let greeting: string = 'Hello World!';

console.log(greeting);

let userId : number = 1234 ;

console.log(userId);
let hero: string ;
function getHero() {
    return "Thor";
}

hero = getHero();
console.log(hero);

// noImplicitAny stops prog to implicitly assign any to a variable which is not defined as , implicitly it is defined as any 

function signUp(name:string, email:string, isPaid:boolean ,useId : number = 132) {
    // here , we have defined useId as optional parameter with default value of 132
    console.log("usrName is: " + name);
}

signUp("1","2",true) 
// ^
// function(argumentname1: type, argumentname2: type): returnType {} ==> syntax of function in TS

// for errors , we use the never type with throw statement in TS
function error(errmsg: string): never {
    throw new Error(errmsg);
}


export {};
