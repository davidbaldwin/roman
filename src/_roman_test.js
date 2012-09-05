"use strict";

var roman = require("./roman.js");

exports.test_Converts1ToI = function(test) {
	roman.convert(1, function(numeral) {
		assert.Equals("I", numeral);
		test.done();
	});
};

