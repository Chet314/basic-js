
module.exports = function getSeason(date) {

if(date === null || date === undefined) {return 'Unable to determine the time of year!'}

  let day = date.getDay()
  let month = date.getMonth()

  month = date.getYear() % 4 === 0 && month === 2 && day >= 29 ? month + day / 29 :
    month === 2 && day >= 28 ? month + day / 28 :
    month % 2 === 0 && day >= 30 ? month + day / 30 :
    day >= 31 ? month + day / 31 : month
   

  return month >= 2 && month <= 4 ? 'spring' :
         month >= 5 && month <= 7 ? 'summer' :
         month >= 8 && month <= 9 ? 'fall'  :
         month === 0 || month === 1 || month === 11 ? 'winter' : 'autumn/fall'
};
