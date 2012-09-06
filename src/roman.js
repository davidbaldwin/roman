"use strict";

String.prototype.repeat = function(n) {
    return new Array(1 + n).join(this);
};

function convertToChar(number, unit, char, text) {
	var quot;
	var rem;

console.log("N:" + number + " U:" + unit + " C:" + char + " T:" + text);

	rem = number % unit;
	quot = (number - rem) / unit;

console.log("Q:" + quot + " R:" + rem);

	if (quot > 0) {
		text = text + char.repeat(quot);
		console.log("text " + text);
	}

	number = rem;
	
}

exports.convertToRomanNumerals = function(number, result) {

	var text ="";

	convertToChar(number, 10, "X", text);
	convertToChar(number, 5, "V", text);
	convertToChar(number, 1, "I", text);
	
	result(text);
};

