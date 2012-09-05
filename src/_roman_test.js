"use strict";

var roman = require("./roman.js");


exports.test_Converts1ToI = function(test) {
	roman.convertToRomanNumerals(1, function(numeral) {
		test.equal(numeral, "I");
		test.done();
	});
};

