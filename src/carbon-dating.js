const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let dating = 0;
  let sampleActivity1 = Number(sampleActivity);
  if (typeof(sampleActivity) !== 'string' || sampleActivity1 !== NaN) return false;
  let k =  0.693 / HALF_LIFE_PERIOD;
  dating = Math.log(Mocha / sampleActivity1) / k;
  return Math.ceil(dating);
};
