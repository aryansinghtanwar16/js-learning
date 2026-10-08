// palindrome 
//take a number from the user and print its reverse 
// whether it is a palindrome

let num=parseInt(prompt("Enter num:"));
let original=num;
let reversed =0;
while (num>0){
    let digit=num%10;
    reversed=reversed*10+digit;
    num=Math.floor(num/10);    // drop the decimal
}
console.log(reversed);
if (original===reversed){
    console.log("num is palindrome");
}else{
    console.log("num is not a palindrome");
}