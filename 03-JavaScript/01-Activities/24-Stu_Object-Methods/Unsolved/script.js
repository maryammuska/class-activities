var chosenPet = "Astrid";

var shelter = {
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Lulu", "Fluffy", "Mouser"],
  apptMessage: function () {
    console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
  }
};

//  When a name is stored in the `chosenPet` variable, a message should log to the console indicating whether the pet is available and whether it is a dog or a cat. If the pet is not available, a message should indicate that and suggest the shelter's featured cat and dog. No errors should be returned. 


//Debug the code below 
function dogMessage() {
   console.log("Congrats! " + chosenPet + ", a great dog, is available for adoption!");
   shelter.apptMessage();
}

function catMessage() {
  console.log("Congrats! " + chosenPet + ", an awesome cat, is available for adoption!");
  shelter.apptMessage();
}

if (shelter.dogs.includes(chosenPet)) {
  dogMessage();
} else if (shelter.cats.includes(chosenPet)) {
  catMessage();
} else {
  console.log("It looks like the pet is not available.");
  console.log("Check out our featured dog, " + shelter.dogs[0] + ". or our featured cat, " + shelter.cats[1]);
}
  
