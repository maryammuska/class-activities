//Primitive data types include undefined, string, number and boolean
//Undefined variables haven't been assigned values yet.

// undefined - not assigned yet, type of variable is undefined 

var myUndefined;

// A string is a series of characters and is surrounded by quotes- single or double
// pieces of texts in javascript are strings 
var myStringWelcome = "Hello World"; 
var myStringPassword = "865Password!2020";

// A number can be either an integer or a decimal 
// they dont have quotes around them

var myNumberInt = 100;
var myNumberDecimal = 100.100;

// Booleans have two values: true or false
// we dont put quotes around them
var isMyBooleanTrue = true;
var isMyBooleanFalse = false;

// To check the type of data, use typeof followed by the name of the variable
// Logs undefined
console.log(' typeof myUndefined ' , typeof myUndefined);

// Logs number
console.log(' typeof myNumberInt ' , typeof myNumberInt); 

// Logs boolean
console.log('typeof true' , typeof true);

// Logs string
console.log('typeof "Howdy" ' , typeof "Howdy");

// Pro-tip: JavaScript is loosely typed, so the type is tied to the value held in the variable, not the variable itself!
// Logs number
var myVariable = 33;
console.log(' typeof myVariable ' , typeof myVariable);

// myVariable is reassigned; Logs boolean
myVariable = false;
console.log('typeof myVariable' , typeof myVariable);
