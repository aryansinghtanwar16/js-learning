// DEFAULT PARAMETER 

let pizzaOrder=(size="medium" )=>{                    // this is paramter while taking value 
    console.log("pizza preparing of size ", size);
};
pizzaOrder();     // if we dont give value while calling the default one will print 
pizzaOrder("large")   // here we gave size so ts will be printed
// this is argument 




//2-> REST PARAMETER
// when user doesnt know how much arguments to pass  at a point of time so he can use rest 
//   ...this is syntax


//ex
let numbers=(num1,num2)=>{
    console.log("we have numbers", num1 ,num2);
};
numbers(2 , 5 ,7 ,7 ,11);     // here the rest numbers will not be printing

// rest 
let numberss=(num3 ,num4, ...rest)=>{
    console.log("we have numbers", num3, num4 , ...rest);
};
numberss(2,4,67,123,77,709,"hello");




//3-> SPREAD OPERATOR---
// rule1->only use in reference data type
//references value-> object, array, funtion


let a={
name: "varun",
age: "19",
};

a.name="Aaditya";

let b=a;
b.name="Ankit";
console.log("a->", a);
console.log("b->",b);    
// as name will change because theyre sharing the same address


let c={};
c.name="aryan";
c.age="17";
console.log("c->" ,c);

// if we want a property of a object in just another object we'll be using spread operator in that case 

let d={...c};
console.log("d->",d);    //SPREAD OPERATOR 
//spread operator only points value from any reference data type





let arr1=[1,2,4,5,6,768];
let arr2=[8,78,94,928];
console.log(arr1+arr2);   // only printing in sting
console.log([arr1+arr2])  // will be printing in array but in string

//spread operator 
let result=[...arr1,...arr2];
console.log(result);



// practice ques1 - create a user profile , which takes name,age,city(optional)
// which takes 2 arguments and 1 optional


function userProfile(name,age1, city="Bhopal"){
let obj={
    name: name,
    age1: age1,
    city: city,

};
return obj;

}
console.log(userProfile("Vipul", 34));





//prac-ques2-> create a bill calculator funnction in which user 
//will send the price of dishes as arguments return a total cost 

let calculateBill=(...rest)=>{
let sum=0;
for (let i=0; i<rest.length; i++){
    sum+=rest[i];

}
return sum;
};

console.log(calculateBill(134,56,456,789,321,123));



// prac ques->3 check the strength of password if password<8 weak password else strong password

let checkPassword=(password)=>{
    if (password.length>8) return "Strong password ";

    return "Weak password";
};

let res= checkPassword("1191A@di");
console.log(res);

