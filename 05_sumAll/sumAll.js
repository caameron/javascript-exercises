const sumAll = function(num1, num2) {
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        return "ERROR";
    }
    if(num1 < 0 || num2 < 0){
        return "ERROR";
    }

    let biggerNum = 0;
    let smallerNum = 0;
    if(num1 > num2){
        biggerNum = num1;
        smallerNum = num2;
    }
    else {
        biggerNum = num2;
        smallerNum = num1;
    } 
    
    let returnNum = 0;
    for(let num = smallerNum; num <= biggerNum; num++)
    {
        returnNum = returnNum + num;
    }
    return returnNum;
};

// Do not edit below this line
module.exports = sumAll;
