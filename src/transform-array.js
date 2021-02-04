
module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw 'Error'
    
    let array = [...arr]
    
    arr.forEach((el, index) => el === '--double-next' ?  array.splice(index, 1, arr[index + 1]) :
                               el === '--double-prev' ?  array.splice(index, 1, array[index - 1]) :
                               el === '--discard-next' ? array.splice(index + 1, 1, null) :
                               el === '--discard-prev' ? array.splice(index - 1 < 0 ? 0 : index - 1, 1, null) : el)
    
    return array.filter(el => el !== null && el !== undefined && el !== '--discard-prev' && el !== '--discard-next' && el !== '--double-next' && el !== '--double-prev')
    };

