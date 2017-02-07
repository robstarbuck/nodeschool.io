module.exports = function (val, reps = val.length) {
    return `${val}${'!'.repeat(reps)}`;
};