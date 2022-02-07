const repeatString = function (str, num) {
    result = '';
    if (num < 0)
        return 'ERROR';


    for (i = 1; i <= num; i++) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
