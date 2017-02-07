var concat = require('concat-stream');
var http = require('http');


var stdin = process.stdin;
var stdout = process.stdout;

stdin.pipe(concat(function(body){
    console.log(body.toString().split('').reverse().join(''));
}));
// process.stdin

// var server = http.createServer(function (req, res) {
//     if (req.method === 'POST') {
//         req.pipe(concat(function (body) {
//             var obj = JSON.parse(body);
//             res.end(Object.keys(obj).join('\n'));
//         }));
//     }
//     else res.end();
// });
// server.listen(5000);