"use strict";

var roman = require("./roman.js");


exports.test_Converts1ToI = function(test) {
	roman.convertToRomanNumerals(1, function(numeral) {
		test.equal(numeral, "I");
		test.done();
	});
};

/*
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


exports.test_Converts5ToV = function(test) {
	roman.convertToRomanNumerals(5, function(numeral) {
		test.equal(numeral, "V");
		test.done();
	});
};

exports.test_Converts6ToVI = function(test) {
	roman.convertToRomanNumerals(6, function(numeral) {
		test.equal(numeral, "VI");
		test.done();
	});
};

exports.test_Converts7ToVII = function(test) {
	roman.convertToRomanNumerals(7, function(numeral) {
		test.equal(numeral, "VII");
		test.done();
	});
};

exports.test_Converts8ToVIII = function(test) {
	roman.convertToRomanNumerals(8, function(numeral) {
		test.equal(numeral, "VIII");
		test.done();
	});
};

exports.test_Converts10ToX = function(test) {
	roman.convertToRomanNumerals(10, function(numeral) {
		test.equal(numeral, "X");
		test.done();
	});
};

exports.test_Converts11ToXI = function(test) {
	roman.convertToRomanNumerals(11, function(numeral) {
		test.equal(numeral, "XI");
		test.done();
	});
};
*/



/*
exports.test_Converts4ToIV = function(test) {
	roman.convertToRomanNumerals(4, function(numeral) {
		test.equal(numeral, "IV");
		test.done();
	});
};

exports.test_Converts9ToIX = function(test) {
	roman.convertToRomanNumerals(9, function(numeral) {
		test.equal(numeral, "IX");
		test.done();
	});
};

*/