"use strict";

var roman = require("./roman.js");
var async= require("async");

var testCases = [
    [2367,'MMCCCLXVII'],
    [20,'XX'],
    [19,'XIX'],
    [18,'XVIII'],
    [17,'XVII'],
    [16,'XVI'],
    [15,'XV'],
    [14,'XIV'],
    [13,'XIII'],
    [12,'XII'],
    [11,'XI'],
    [10,'X'],
    [9,'IX'],
    [8,'VIII'],
    [7,'VII'],
    [6,'VI'],
    [5,'V'],
    [4,'IV'],
    [3,'III'],
    [2,'II'],
    [1,'I']
];


exports.test_syncConverts = function(test) {
    //Synchronously
    for (var i=0; i<testCases.length; i++) {
        //console.log('test ' + testCases[i][0] + ' converts to ' + testCases[i][1]);
        test.equal(roman.syncConvertToRomanNumerals(testCases[i][0]), testCases[i][1], "Number:" + testCases[i][0]);
    }
    test.done();

};


exports.test_asyncConverts = function(test) {
    //Asynchronously
    var testInputs = [];
    var testOutputs = [];

    for (var i=0; i<testCases.length; i++) {
        testInputs[i] = testCases[i][0];
        testOutputs[i] = testCases[i][1];
    }

    async.map(testInputs, roman.convertToRomanNumerals, function(err, results) {
        for (var i=0; i<testInputs.length; i++) {
            test.equal(results[i], testOutputs[i], "Number:" + testInputs[i]);
        }
        test.done();
    });
};
