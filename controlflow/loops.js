/*


 */


//sum of even n numbers 
let n= parseInt(prompt("Enter N"));
let sum=0;
for (let i=2; i<=n; i+=2){
    sum+=i;
}
console.log("total sum is :", sum);