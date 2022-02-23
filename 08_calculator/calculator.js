const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (list) {
	return list.reduce((total, num) => (total += num), 0);
};

const multiply = function (list) {
	return list.reduce((total, num) => (total *= num), 1);
};

const power = function (a, b) {
	return Math.pow(a, b);
};

const factorial = function (num) {
	if (num === 0) return 1;
	else {
		let res = 1;
		while (num > 0) {
			res *= num;
			num -= 1;
		}
		return res;
	}
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
