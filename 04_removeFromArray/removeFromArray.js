const removeFromArray = function (arry) {
    for (let i = 1; i < arguments.length; i++) {
        for (j = 0; j < arry.length; j++) {
            if (arguments[i] === arry[j]) {
                arry.splice(j, 1);
            }
        }
    };
    return arry;
};

// testArray = [2, 6, 8, "yeh", "nah"];

// aTest = removeFromArray(testArray, 2, 7, 'nah');
// console.log (testArray)

// Do not edit below this line
module.exports = removeFromArray;
