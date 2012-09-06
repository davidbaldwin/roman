"use strict";

var roman = require("./roman.js");


exports.test_Converts1ToI = function(test) {
	roman.convertToRomanNumerals(1, function(numeral) {
		test.equal(numeral, "I");
		test.done();
	});
};

exports.test_Converts2ToII = function(test) {
	roman.convertToRomanNumerals(2, function(numeral) {
		test.equal(numeral, "II");
		test.done();
	});
};

exports.test_Converts3ToIII = function(test) {
	roman.convertToRomanNumerals(3, function(numeral) {
		test.equal(numeral, "III");
		test.done();
	});
};
