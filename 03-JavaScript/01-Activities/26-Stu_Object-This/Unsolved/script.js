// TODO: What does 'this' refer to?
// this refers to the window
console.log(this);

// TODO: What does 'this' refer to?
// this refers to helloThis/object window
function helloThis() { 
   console.log("Inside this function, this is " + this); 
   }

// TODO: What will this log? 
// this will log 20
var child = { 
   age: 10,
   firstName: 'Harry',
   lastName: "Potter",
   ageTenYears: function() {
       console.log(this.age + 10); 
   },
   fullName: function() {
      console.log(this.firstName + ' ' + this.lastName);
   }
};

// TODO: What will this log? 
// it will log initial investment 5000 * 1.15 = 5750
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
child.fullName();
