"use strict";

String.prototype.repeat = function(n) {
    return new Array(1 + n).join(this);
};

exports.convertToRomanNumerals = function(number, result) {
	if (number >= 5)
	{
		result("V" + "I".repeat(number - 5));
	} else if (number === 4) {
		result("IV");
	} else {
		result("I".repeat(number));
	}
};

