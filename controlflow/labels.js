// labels are just used to in loops to break outer loops also 
//ex
outerLoop: for(let i=0; i<5; i++){
    for (let j=0; j<5; j++){
if (i===2 && j ===2){
    break outerLoop;
}
console.log(i, j);
    }
}