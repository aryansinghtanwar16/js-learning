//FIRST CLASS FUNCTION 
// when function stores as a value that are First class function
//function=value
//ex
let greet=()=>{
    console.log("hello");
};
console.log(greet);
let abcd=(callback)=>{
    callback();
};
abcd(greet);


// CALLBACK FUNCTION
// a function which calls another function


let greeet=(a)=>{
    a();
};
greet( ()=>{
console.log("hey i m stange");
});




//HIGHER ORDER FUNCTIONS
// a function that does at least one of the things it either takes another function as an argument (a callback),
// or it returns a new function as its result 
//ex
let fn1=()=>{
    return ()=>{
        console.log("I m inner function");
    };
};

let outer=(s)=>{
    s();
};
outer(()=>{
    console.log("inner");
});
//in this case also outer is a higher order function



console.log(fn1());
// fn1 is a higher order function as it is returning a function inside

let global=()=>{
    return()=>{
        return()=>{
            return()=>{
                console.log("deepest function");
            };
        };
    };
};
console.log(global());
console.log(global()()());