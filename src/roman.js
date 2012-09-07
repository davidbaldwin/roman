"use strict";

String.prototype.repeat = function(n) {
    return new Array(1 + n).join(this);
};

function convertToChar(number, unit, char, text, result) {

//console.log("N:" + number + " U:" + unit + " C:" + char + " T:" + text);

	var rem = number % unit;
	var quot = (number - rem) / unit;

	if (quot > 0) {
		text = text + char.repeat(quot);
	}

	result(rem, text);
	
}

exports.convertToRomanNumerals = function(number, result) {

	var text ="";

	convertToChar(number, 10, "X", text, function(number, text) {
		convertToChar(number, 5, "V", text, function(number, text) {
			convertToChar(number, 1, "I", text, function(number, text) {
				result(text);
			});
		});
	});
	
};

