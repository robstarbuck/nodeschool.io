/*global Promise,console*/
'use strict';
var promise = new Promise(function (fulfill, reject) {
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});
var onRejected = function (err) {
    return err.message;
};
promise.then(console.log, onRejected);