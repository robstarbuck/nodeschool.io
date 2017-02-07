module.exports = function (str) {
	var m = /\bx=([0-9]+)\b/.exec(str);
	return m ? m[1] : null;
}