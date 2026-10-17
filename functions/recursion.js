// Recursion = Base case + Recursive case
// Without a base case, a recursive function may continue calling itself until JavaScript runs out of call stack space


// basic 
function countdown(n){
    if (n===0) return 0;  //base case 

    console.log(n);
    countdown(n-1);
};
countdown(3);



// sum through recursion

function sum(n){
if (n===0) return 0 ;

return n+sum(n-1);
}
console.log(sum(3));



// Pattern C: Factorial
// Factorial means multiplying a positive integer by all the positive integers below it.
// For example, \(4! = 4 \times 3 \times 2 \times 1 = 24\).

function factorial(n){
    if(n===0) return 0;

    return n*factorial(n-1);
}
console.log(factorial(4));



