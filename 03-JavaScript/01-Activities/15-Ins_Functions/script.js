// Functions are reusable blocks of code that perform a specific task
// declareHello is the function name, and parentheses come after
// {} to run 
// This is a function declaration 
// return - then no lines under code will run 
// the way to run is grabbing the name and adding parentheses 
function declareHello() { 
  console.log("Hello, I am a function declaration.");
  console.log("-----------------------------------");
  // Return stops the execution of a function
  return;
}

// This is a function expression
// Difference between function and var express is that there is none, they both run 
var expressHello = function() { 
  console.log("Hello, I am a function expression.");
  console.log("-----------------------------------");
  return;
};

// Functions must be called to execute
// the code above defines it but does not run it 
declareHello(); 
expressHello();

//Functions can be called again to make the block of code execute again
declareHello(); 

// Functions can take parameters.
// arguments or Parameters give a name to the data to be passed into the function
// xyz are variables and console logging 

function declareHelloAgain(x,y,z) { 
  console.log("Hello, my parameter's values are " + x + ", " + y + ", and " + z);
  console.log("-----------------------------------");
  return;
}

// Function arguments give parameters their values
// Here the parameter x is given the value 7 when the function is called
declareHelloAgain(7, "Hello", true);
