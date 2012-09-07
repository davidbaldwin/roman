"use strict";

var async = require("async");

String.prototype.repeat = function(n) {
    return new Array(1 + n).join(this);
};

function convertToChar(number, unit, char, nextUnitUp, nextCharUp, callback) {

//console.log("N:" + number + " U:" + unit + " C:" + char);

	var mod = number % nextUnitUp;
	var rem = mod % unit;
	var quot = (mod - rem) / unit;

	if (quot === nextUnitUp - 1) {
		callback(char + nextCharUp);
	} else {
		callback(char.repeat(quot));
	}
	
}

exports.convertToRomanNumerals = function(number, callback) {

	async.parallel([
		function(callback){
			convertToChar(number, 1000, "M", 10000, "Z", function(text) {
				callback(null, text);
			});
		},
		function(callback){
			convertToChar(number % 1000, 100, "C", 1000, "M", function(text) {
				callback(null, text);
			});
		},
		function(callback){
			convertToChar(number % 100, 50, "L", 100, "C", function(text) {
				callback(null, text);
			});
		},
		function(callback){
			convertToChar(number % 50, 10, "X", 50, "L", function(text) {
				callback(null, text);
			});
		},
		function(callback){
			convertToChar(number % 10, 5, "V", 10, "X", function(text) {
				callback(null, text);
			});
		},
		function(callback){
			convertToChar(number % 5, 1, "I", 5, "V", function(text) {
				callback(null, text);
			});
		}
	], function (err, result) {
		callback(result.join(""));
	});

};

