var promise = new Promise(function (fulfill, reject) {
    // Your solution here
    setTimeout(function () {
        reject(new Error('REJECTED!'));
    }, 300);
});

function onReject(error) {
    console.log(error.message)
}
// Your solution here
promise.then(undefined, onReject);