// this allows us to do logic 
// if this is true then do this, if its false then do this

var a = 100;
var b = 10;
var c = "10";

// Arithmetic operators combine with numbers to form an expression that returns a single number

console.log(a + b); // 110
console.log(a - b); // 90
console.log(a / b); // 10
console.log(a * b); // 1000

// Modulus returns the remainder between two numbers.  
console.log(a % b); // 0 (100 divided by 10 is 10 so there is no remainder/left over)

// Comparison operators combine with strings, booleans and numbers to form an expression that evaluates to true or false
// Compares equality; always true or false

console.log(b == c); // true
// there are 2 equal sings
// b is a number and c is a string but they both have the same value - you're trying to make it a string
// we're going to allow you do type coercion, try to make them the same type before you do it



console.log(b != c); // false
// b is not equal to c, 



// Compares equality and type (strict equality)
console.log(b === c); // false
// is the value and the type the same? 



console.log(b !== c); //true 

// Greater than or less than
console.log(a > b); // true
console.log(a < b); // false 

// Greater than or equal to and less than or equal to
console.log(a <= b); // false
console.log(a >= b); // true

// Logical operators take in two or more expressions and return true or false 
var expression1 = (b == c); // true
var expression2 = (a > b); //true

// && Evaluates to true if expression1 AND expression2 are both true, otherwise false

console.log(expression1 && expression2); // true



// ||  Evaluates to true if expression1 OR expression2 is true, otherwise false

console.log(expression1 || expression2);


// Logical Not (!) turns an expression that evaluates to true to false and vice versa
// Returns true

console.log(expression2); // true

// Returns false
console.log(!expression2); //false
