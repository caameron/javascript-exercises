const reverseString = function(stringToReverse) {
    let stringReversed = "";
    for(let index = stringToReverse.length-1; index >= 0; index--){
        stringReversed = stringReversed + stringToReverse[index];
    }
    console.log(stringReversed);
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
