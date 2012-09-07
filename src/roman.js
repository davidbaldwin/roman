"use strict";

var async = require("async");

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

exports.convertToRomanNumerals = function(number, callback) {

	async.waterfall([
		function(callback){
			convertToChar(number, 10, "X", "", function(number, text) {
				callback(null, number, text);
			});
		},
		function(number, text, callback){
			convertToChar(number, 5, "V", text, function(number, text) {
				callback(null, number, text);
			});
		},
		function(number, text, callback){
			convertToChar(number, 1, "I", text, function(number, text) {
				callback(null, text);
			});
		}
	], function (err, result) {
		callback(result);
	});

};

