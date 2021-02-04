
const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {

  return typeof sampleActivity  === 'string' &&
              Number(sampleActivity) === NaN &&
                  Number(sampleActivity) > 0  ?
   Math.ceil(Math.log(MODERN_ACTIVITY/Number(sampleActivity) )* HALF_LIFE_PERIOD / Math.LN2) : false
}
 
