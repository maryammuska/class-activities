// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
// This is the spread operator 
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
// all of the songs 
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  // reduce being able to take a bumch of values and reducing it to one value
  // reduce does a call back of the argument, so the first value is the array and the second 
  // accumulator 
  return array.reduce((a, b) => a + b, 0);
};


// TODO: What do you expect to be logged in the console?
console.log('should be 6', addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
// rest operator - take any series or arguments, turn it into an array and give you a total of the elements 
// 
const additionRest = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
console.log('should also return 6', additionRest(1, 2, 3));

// TODO: What do you expect to be logged in the console?
console.log('should be 110', additionSpread(1, 2, 3, 4, 100));
