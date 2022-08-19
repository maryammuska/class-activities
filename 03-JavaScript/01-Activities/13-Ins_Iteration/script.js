// We use a for-loop to execute code more than once
// the first iterator is i which is set to 0
// the second is condition i<5 as long as i is less than 5, the code will run
// this is incrimentation the variable i by 1 every single time
for (var i = 0; i < 5; i++) {
    // This is the block of code that will run each time
    console.log("This is the current value of i: " + i + ".");
}

// For-loops are often used to iterate over arrays
var zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

//To determine how many times the loop should execute, we use the array's length
for (var i = 0; i < zooAnimals.length; i++) { 
    console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}

// // to work backwards from meerkats to bears
// for (var i = zooAnimals.length-1; i >= 0, i--) { 
//     console.log("I am going to zoo to see " + zooAnimals[i] + ".");
// }