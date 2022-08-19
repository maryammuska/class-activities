// Helper function to evaluate if a number is within a given range
const inRange = (x, min, max) => (x - min) * (x - max) <= 0;

const rubric = [
  {
    letter: 'A',
    max: 100,
    min: 90
  }, {
    letter: 'B',
    max: 89,
    min: 80
  }, {
    letter: 'C',
    max: 79,
    min: 70
  }, {
    letter: 'D',
    max: 69,
    min: 60
  }, {
    letter: 'F',
    max: 59,
    min: 50
  }
]

function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  // Method that will simulate method overloading in JavaScript
  this.displayGrade = function (grade) {
    const input = grade;
    if (!input) {
      throw new Error('no grade provided');
    }
    let response;
    // Return a letter grade if a number grade was passed
    // Ex. 95 => 'A'
    if (typeof input === 'number') {
      const obj = rubric.find((gradeObj) => inRange(input, gradeObj.min, gradeObj.max));
      console.log('obj', obj)
      // TODO: Add logic here to return a single letter grade
      return response;
    }
    // Return a range if a letter grade was passed
    // Ex. 'A' => '90 - 100'
    if (typeof input === 'string') {
      // TODO: Add logic here to return range as a string
      return response;
    }
  };
}

const John = new Student('John', 'Appleseed', '30');
console.log('John.displayGrade():', John.displayGrade(95));
console.log('John.displayGrade():', John.displayGrade('B'));
