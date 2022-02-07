const removeFromArray = function (arry, args) {
    args=arguments.splice(0,1);
    args.forEach (element => {
        for (i = 0; i <= arry.length; i++) {
            if (args[element] === arry[i]) {
                arry.splice(i, 1);
            }
        }
    });
};

testArray = [2, 6, 8, "yeh", "nah"];

aTest = removeFromArray(testArray, 2, 4, 5, 6, 7, 8);

// Do not edit below this line
module.exports = removeFromArray;
