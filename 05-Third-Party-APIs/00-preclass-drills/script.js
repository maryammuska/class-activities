// Add preclass drills here

// wrute a function that takes in a string and outputs 
// the number of vowels 

function vowelCount(str1) {
    var vowelList ="AaEeIiOoUu";
    var vCount = 0;

    for (var i = 0; i < str1.length; i++0) {
        if (vowelList.index0f(str1[i]) !== -1) {
            vCount++;
        }
    }
    return vCount;
}

console.log('vowelCount("you are great!")')