var a = "50";
var b = 50;
var c = 100;
var d = c % b; // 0
var e = c / 2; //50

var expression1 = (b === e); // 50 === 50 // true
var expression2 = (e < d); // 50 < 0 // false

// Use comparison operators so all expressions below log to the console as true
// console.log(a === b); false 
// console.log(a !== e); false 
// console.log(c < b); false 
// console.log(d > 0); false 


console.log(a == b); // true
console.log(b == e); // true
console.log(c > b); // true 
console.log(d == 0); // true 

// Use logical operators so all expressions below log to the console as true
// console.log(expression1 && expression2);  false 

console.log(expression1 || expression2); // 
// or you can do console.log(expression1 && !expression2);
console.log( expression1 || !expression2);
  
