"use strict";

exports.convertToRomanNumerals = function(number, result) {
	result(new Array(number + 1).join("I"));
};