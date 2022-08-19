// A variable declared in global scope is available to all functions
var hello = "Hello"; 

function sayHello() {
  console.log(hello);
  return;
}

var sayHelloAgain = function () {
  console.log(hello);
  return;
};

sayHello();
sayHelloAgain();

//A variable declared in local scope is only available to that function
// when you run say goodbye, it is invoked 
function sayGoodbye() { 
  var goodbye = "Goodbye";
  console.log(goodbye);
  return;
}

//This will throw an error
// if you put a var in front it, we can't refer to it here 
var sayGoodbyeAgain = function () { 
  console.log(goodbye);
  return;
};

// Shadowing happens when the same variable is used in the local and global scope
// Hello is global bc it is outside a function 
// goodbye is local bc it is inside a function 
// shadow is in the global scope

var shadow = "Shadow";
 console.log(shadow);

// Logs "Hello"
function sayWhat() {
  console.log(shadow);
  return;
}

//Logs "Goodbye"
// we see goodbye
var sayWhatAgain = function () {
  var shadow = "Goodbye"; //if you take out var, it'll print out goodbye
  console.log(shadow);   
};

sayGoodbye();
sayWhat();
sayWhatAgain();
sayGoodbyeAgain();