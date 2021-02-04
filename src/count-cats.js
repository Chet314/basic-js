
module.exports = function countCats( matrix ) {
    return matrix.reduce((acc, val) => acc + val.reduce((sum , el) => sum + (el === '^^' ? 1 : 0), 0), 0)

};
