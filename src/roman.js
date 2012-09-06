"use strict";

String.prototype.repeat = function(n) {
    return new Array(1 + n).join(this);
};

exports.convertToRomanNumerals = function(number, result) {
	if (number === 10)
	{
		result("X");
	} else if (number >= 5) {
		result("V" + "I".repeat(number - 5));
	} else {
		result("I".repeat(number));
	}
};

