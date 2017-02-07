var through = require('through2');
var stream = through(write, end);
function write (buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}
// The end function was not required and could have been omitted
function end(cb){
	cb();
}
process.stdin.pipe(stream).pipe(process.stdout);

