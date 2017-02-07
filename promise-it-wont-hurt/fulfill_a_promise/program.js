/*global Promise,console*/
'use strict';
var promise = new Promise(function(f, r) {

    setTimeout(function() {
        f('FULFILLED!');
    }, 300);

});

promise.then(console.log, console.log);