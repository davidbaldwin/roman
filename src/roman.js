"use strict";

var async = require("async");

String.prototype.repeat = function(n) {
    return new Array(1 + n).join(this);
};

function convertToChar(number, unit, char, text, callback) {

//console.log("N:" + number + " U:" + unit + " C:" + char + " T:" + text);

	var rem = number % unit;
	var quot = (number - rem) / unit;

	if (quot > 0) {
		text = text + char.repeat(quot);
	}

	callback(rem, text);
	
}

exports.convertToRomanNumerals = function(number, callback) {

	async.waterfall([
		function(callback){
			convertToChar(number, 1000, "M", "", function(number, text) {
				callback(null, number, text);
			});
		},
		function(number, text, callback){
			convertToChar(number, 100, "C", text, function(number, text) {
				callback(null, number, text);
			});
		},
		function(number, text, callback){
			convertToChar(number, 50, "L", text, function(number, text) {
				callback(null, number, text);
			});
		},
		function(number, text, callback){
			convertToChar(number, 10, "X", text, function(number, text) {
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

