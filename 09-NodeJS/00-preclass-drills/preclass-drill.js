/*

Write a function that takes in a number and returns the corresponding day of the week.

Ex:
Input: 1
Output: 'Monday'

Input: 5
Output: 'Friday'

Input: 8
Output: undefined

*/

var dayOfWeek = ['Sunday', 'Monday' , 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getDay(dayNum) {
    return dayOfWeek[dayNum-1];
}

console.log('1 -- Sunday', getDay(1));