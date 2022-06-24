// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x > 25); //True
var expression2 = (x > 50); //false

// Write Your JavaScript Code Here

// && means both have to be true





if (expression1 && expression2) { // this is false
    console.log(" True ✅ True ✅ ") // bc the first line is false, it wont run
}  else if (!expression1 && expression2) { //simplified by removing !expression1 bc its already implied that its false 
    console.log("False ❌ True ✅ ")
} else if (expression1 && expression2) { // simplified through removing expression2 bc its already implied that its true 
    console.log(" True ✅ False ❌ ")
} else {
    console.log("False ❌ False ❌ ")
}


//  switch (true) {
//     case expression1 && expression2:
//     console.log("True ✅ True ✅ ");
//     break;
//     case expression1:
//         console.log ( "True ✅ False ❌" )
//         break;
//     case expression2:
//         console.log(" false ❌ True ✅ " ) 
//         break;
//     default:
//         console.log("False ❌ False ❌ ")
//         break;
// }