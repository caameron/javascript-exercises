const sumAll = function(num1, num2) {
    let returnNum = 0;
    for(let num = num1; num <= num2; num++)
    {
        returnNum = returnNum + num;
    }
    return returnNum;
};

// Do not edit below this line
module.exports = sumAll;
