let score="33abc" 
console.log(typeof score);
console.log(typeof (score));

let valueInNumber= Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN - Not a number ; same o/p for undefined value

let score2=null
console.log(typeof score2);
let valueInNumber2= Number(score2)
console.log(valueInNumber2); //couldnot convert so 0

//"33"=>33
//"33abc"=>NaN
//true=>1
//false=>0
//null=>0
//undefined=>NaN
 console.log("***************");
let isLoggedIn=""
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1- true; 0 - false; "" - false; "abc" - true; null - false; undefined - false; NaN - false

//to string conversion

let number=33
let stringNumber=String(number)
console.log(typeof stringNumber);
console.log(stringNumber);