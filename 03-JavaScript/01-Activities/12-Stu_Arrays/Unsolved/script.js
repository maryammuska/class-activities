// WRITE YOUR CODE HERE

// storing names in array

var names =[ "Jaden", "Muska", "Luan", "Thomas"];

// logging entire array of names
console.log(names);

console.log(" welcome to the class " + names[0]);
console.log(" welcome to the class " + names[1]);
console.log(" welcome to the class " + names[2]);
console.log(" welcome to the class " + names[3]);

// re-assigning variable to Jake
names[0] = "jerry";

// if statement if new student is in class or not
if (names[0] == "Jake") {
    console.log(names [0] + " is in class ")
} else {
    console.log("Jerry is not in class")
}
