// //WRITE YOUR CODE BELOW
// * It's done when the `customerOrder` object has three properties that store the drink's name, the number of sugars, and a Boolean indicating whether the order is ready. 

// * It's done when the drink name and the number of sugars is logged to the console. 

// * It's done when, if the order is ready, the message `"Ready for pick-up"` logs. 

// * It's done when, if the order is not ready, the message `"Still in order queue"` logs. 


var customerOrder = {
    drinkName: "Coffee",
    sugar: "3",
    isReady: false,
}


console.log(customerOrder.drinkName);
console.log(customerOrder.sugar);

if (customerOrder.isReady){
    console.log("Ready for pick-up")
} else {
    console.log("Still in order que");
}


























// var customerOrder = {
//     drinkName: "Gatorade",
//     sugars: 2,
//     isReady: false,
// } 

// console.log(customerOrder.drinkName, customerOrder ['sugars'])

// if (customerOrder.isReady) {
//     console.log ('Your drink is ready')
// } else {
//     console.log('Your drink is still in the que')
// }

// for (prop in customerOrder) {
//     console.log(prop, customerOrder [prop]);
// }
// // this gives us the property name 


