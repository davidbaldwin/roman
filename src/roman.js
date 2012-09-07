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

	convertToChar(number, 10, "X", text, function(number2, text2) {
		convertToChar(number2, 5, "V", text2, function(number3, text3) {
			convertToChar(number3, 1, "I", text3, function(number4, text4) {
				result(text4);
			});
		});
	});
	
};

