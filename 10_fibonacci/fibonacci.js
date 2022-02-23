const fibonacci = function (num) {
	if (num < 0) return 'OOPS';
	else if (num == 1 || num == 2) return 1;
	else {
		let prevNum1 = 1;
		let prevNum2 = 1;
		for (let index = 3; index <= num; index++) {
			var currentNum = prevNum1 + prevNum2;
			prevNum1 = prevNum2;
			prevNum2 = currentNum;
		}
		return currentNum;
	}
};

// Do not edit below this line
module.exports = fibonacci;
