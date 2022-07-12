//WRITE YOUR CODE BELOW

var customerOrder = {
    drinkName: "Gatorade",
    sugars: 2,
    isReady: false,
} 

console.log(customerOrder.drinkName, customerOrder ['sugars'])

if (customerOrder.isReady) {
    console.log ('Your drink is ready')
} else {
    console.log('Your drink is still in the que')
}

for (prop in customerOrder) {
    console.log(prop, customerOrder [prop]);
}
// this gives us the property name 

