"use strict";

var async = require("async");

String.prototype.repeat = function(n) {
    return new Array(1 + n).join(this);
};

function convertToChar(number, unit, char, callback) {

//console.log("N:" + number + " U:" + unit + " C:" + char);

	var rem = number % unit;
	var quot = (number - rem) / unit;

	callback(char.repeat(quot));
	
}

exports.convertToRomanNumerals = function(number, callback) {

	async.parallel([
		function(callback){
			convertToChar(number, 1000, "M", function(text) {
				callback(null, text);
			});
		},
		function(callback){
			convertToChar(number % 1000, 100, "C", function(text) {
				callback(null, text);
			});
		},
		function(callback){
			convertToChar(number % 100, 50, "L", function(text) {
				callback(null, text);
			});
		},
		function(callback){
			convertToChar(number % 50, 10, "X", function(text) {
				callback(null, text);
			});
		},
		function(callback){
			convertToChar(number % 10, 5, "V", function(text) {
				callback(null, text);
			});
		},
		function(callback){
			convertToChar(number % 5, 1, "I", function(text) {
				callback(null, text);
			});
		}
	], function (err, result) {
		callback(result.join(""));
	});

};

