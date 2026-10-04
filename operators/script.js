/*  
ARITHMETIC OPERATORS 
+ - / * % **
** ->  used for powers 


ASSIGNMENT OPERATORS 
= += -= /= *= %=


COMPARISON OPERATORS 
==
===   (strictly checking )
!=
!==
>=
<=
>
<


LOGICAL OPERATORS 
&&   AND     (both side true needed )
||   OR      (one true will be gtg)
!    NOT 
!true  -> will be false 




TERNARY OPERATOR
?:
left side ->condition (true or false )

true/false(condition? true:false




NULLISH COALESCING
??  -> null, undefined
|| -> false, 0,-0, NaN, null, undefined, "", 0n

*/
console.log(2+5);
console.log(2+'rag');

console.log(true&&true&&true);
console.log(true&&true&&false);
console.log(true||false||true);
console.log(true||false||false);
console.log(false||false||false);
console.log(!true);
console.log(!false);

true? console.log("true "):console.log("false");
false? console.log("true "):console.log("false");
false? console.log("true "):console.log("false");
2+2==10? console.log("true "):console.log("false");
2+2==2+2? console.log("true "):console.log("false");

console.log(undefined??"name");
console.log(0??"name");
console.log(null??"name");

console.log(null||"name");
console.log(0||"name");


