"use strict";

var async = require("async");

String.prototype.repeat = function(n) {
    return new Array(1 + n).join(this);
};

function convertToChar(number, unit, unitChar, unit5Char, unit10Char, callback) {

    var digit = ((number % (unit * 10)) - (number % unit)) / unit;

    if (digit === 9) {
        callback(null, unitChar + unit10Char);
    } else if (digit >= 5) {
        callback(null, unit5Char + unitChar.repeat(digit % 5));
    } else if (digit === 4) {
        callback(null, unitChar + unit5Char);
    } else {
        callback(null, unitChar.repeat(digit));
    }
}

exports.convertToRomanNumerals = function(number, callback) {

	async.parallel([
        function(callback){
            convertToChar(number, 1000, "M", "F", "S", function(err, results) {
                callback(err, results);
            });
        },
        function(callback){
            convertToChar(number, 100, "C", "D", "M", function(err, results) {
                callback(err, results);
            });
        },
        function(callback){
            convertToChar(number, 10, "X", "L", "C", function(err, results) {
                callback(err, results);
            });
        },
        function(callback){
            convertToChar(number, 1, "I", "V", "X", function(err, results) {
                callback(err, results);
            });
        }
	], function (err, result) {

        callback(err, result.join(""));
	});

};

function syncConvertToChar(number, unit, unitChar, unit5Char, unit10Char) {

    var digit = ((number % (unit * 10)) - (number % unit)) / unit;

    if (digit === 9) {
        return unitChar + unit10Char;
    } else if (digit >= 5) {
        return unit5Char + unitChar.repeat(digit % 5);
    } else if (digit === 4) {
        return unitChar + unit5Char;
    } else {
        return unitChar.repeat(digit);
    }
}

exports.syncConvertToRomanNumerals = function(number) {
    return syncConvertToChar(number, 1000, "M", "F", "S") + syncConvertToChar(number, 100, "C", "D", "M") + syncConvertToChar(number, 10, "X", "L", "C") + syncConvertToChar(number, 1, "I", "V", "X");
};

