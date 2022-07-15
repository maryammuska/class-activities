/* Write a function that takes in a string and outputs the number of vowels (not counting y).

Ex:
Input: "hello"
Output: 2

Input: "you are great!"
Output: 6

Input: "why?"
Output: 0
*/

function vowelCount(str1) {
    var vowelList = "AaEeIiOoUu";
    var vCount = 0;

    for (var i = 0; i < str1.length; i++) {
        if (vowelList.indexOf(str1[i]) !== -1){
            vCount++;
        }
    }
    return vCount;
}

var countVowels = function(str){
    var count = 0;
    var input = str.toLowerCase();
    for (var i = 0; i < input.length; i++){
    if(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u"){
        count++;
    }
    }
}

/*var countVowels = function(str){
    var count = 0;
    var input = str.toLowerCase();
    var vowelArr = [“a”, “e”, “i”, “o”, “u”];
    for (var i = 0; i < input.length; i++){
    if(vowelArr.includes(input[i])){
        count++;
    }
    }
    return count;
} 

console.log('vowelCount("you are great!")', vowelCount("you are great!"))

*/

/*

write a function that takes in a single word as a string and returns if its a palindrome and false
otherwise (a palindrome is spelledthe same way forwards and backwards),

Ex:

Input: "noon"
Output: true

Input: "Horse"
Output: false

Input: "racecar"
Output: true
 */

function isPalandrome(str) {

    for (let i = 0; i < Math.floor(str.length /2); i++) {

        console.log('str[i]', str[i], str[str.length -1 -i])
        if (str[i] !== str[str.length -1 -i]) {
            return false;
        }
    } 
    return true
}

/*
 if (str[i] !== str[str.length -1 -i]) {
we check here if the first character is equal or not to the last character 
"false" if the instant it doesnt catch it, then it becomes false 
"math.floor" rounds down/up so it doesnt give you a decim=al when dividing. 
*/

function isPalandrom(str) {
    return str.split("").reverse().join("") === str;
}

/* 
return str.split("").reverse().join("") === str;

in this case the split makes it go through each single letter of the string youve passed it in
and create an array and push each letter into an array
"reverse" once it does that then it has to go through each element in that array and create a new array
by reversing the order - has to reverse it and push into a new array 
"join" then it has to take that array and put it into a string through string cancatenation 
even before we get to the triple equal sign to do any comparison; we've had to loop over every element 
in the string 3 separate times*/

console.log('isPalandrom - noon', isPalandrome('noon'))
console.log('isPalandrome - horse', isPalandrome('horse'))
console.log('isPalandrome - racecar',  isPalandrome('racecar'))

/*

write a functio that takes in a string and outputs the first occuurrance 




*/

function firstNonRepeatChar(str) {
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        var count = 0;

        for (vasr j = 0; j < )
    }
}

function firstNonRepeatChar(str){
    var charCount = {}
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (charCount[char] {
            charCount[]
        })

    }
    }
}