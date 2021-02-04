

module.exports = function repeater( str, options ) {
  let result = [];
  let string = str === null ? 'null' : str
  let repeatTimes = options.repeatTimes || 1
  let addition =  options.addition !== null && options.addition !== undefined ? options.addition.toString() : options.addition === null ? 'null' : ''
  let additionRepeatTimes = options.additionRepeatTimes || 1
  let separator = options.separator || '+' 
  let additionSeparator = options.additionSeparator || ''
  
     for (let i = 0; i < repeatTimes; i++) {
         result.push(string)
         for (let j = 0; j < additionRepeatTimes; j++) {
             result.push(addition)
             result.push(additionSeparator)
         }
         result.pop()
         result.push(separator)
     }
    result.pop()
  return result.join('')
};
  