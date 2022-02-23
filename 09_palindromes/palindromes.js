const palindromes = function (string) {
	string = string
		.toLowerCase(string)
		.match(/[a-z]+/g)
		.join('');
	reversed = Array.from(string).reverse().join('');
	if (string === reversed) return true;
	else return false;
};

// Do not edit below this line
module.exports = palindromes;
