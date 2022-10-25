const repeatString = function(stringToRepeat, amount) {
    if(amount < 0)
    {return "ERROR";}

    let stringToPrint = "";
    for(let index = 0; index < amount; index++)
    {
        stringToPrint = stringToPrint + stringToRepeat;
    }
    return stringToPrint;
};

// Do not edit below this line
module.exports = repeatString;
