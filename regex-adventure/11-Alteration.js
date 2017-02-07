module.exports = function (str) {
	return /^(cat|dog|robot)[0-9]+$/.test(str);
}