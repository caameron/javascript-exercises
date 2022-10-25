const removeFromArray = function(...args) {

    let arrayToRemoveFrom = args[0];
    let arrayToReturn = [];
    arrayToRemoveFrom.forEach(element => {
        if (!args.includes(element)) {
            arrayToReturn.push(element);
          }
    });
    return arrayToReturn;
};

// Do not edit below this line
module.exports = removeFromArray;
