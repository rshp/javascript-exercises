const sumAll = function (num1, num2) {
    if ((num1<0)||(num2<0)||(typeof num1 !=='number')||(typeof num2 !=='number')) {
        return('ERROR');
    }
       
    let sum = 0;
    for (let i = (num1 >= num2) ? num2 : num1; i <= ((num1 >= num2) ? num1 : num2); i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;