var comparisonOperators = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
var arithmaticOperators = ["+", "-", "%"];
var logicalOperators = ["and", "or", "not"];
var myString = "Hello String";

//Array Methods
// methods are functions on an object
// Sorts comparisonOperators array and returns the sorted array
// everything except perimatives (boolean, numbers, strings) are objects 
// sort alphabetize the array 
comparisonOperators.sort(); 

//Logs sorted array
console.log(comparisonOperators);

// Adds elements to end of an array. Takes in at least one parameter
// pushing an extra element called modulus to arithmetic 
// now we have 4 elements and 2 moduluses 
arithmaticOperators.push();

//Logs array with element "%" added to end
console.log(arithmaticOperators);

//Returns selected elements as a new array.
// slice returns a copy of a section of an array for both start and the end 
// takes to paraments to start and end 
// its returning element 0 all the way to 2 
var logicalOperatorsSliced = logicalOperators.slice(0,2);

//Logs new array
console.log(logicalOperatorsSliced);

// The orginal array is unchanged
console.log(logicalOperators);

//String Methods
//Replaces "String" with "World" and returns new string
var myNewString = myString.replace("String", "World");
console.log(myNewString);

//The orginal string is unchanged
console.log(myString);
