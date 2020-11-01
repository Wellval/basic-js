const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  sampleActivity = parseInt(sampleActivity);
  if (sampleActivity <= 0 || typeof(sampleActivity) !== Number || sampleActivity > 15) {
    return false;
  }
  // throw new CustomError('Not implemented');
  else {
  let n = MODERN_ACTIVITY / sampleActivity;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(n) / k;
  return Math.ceil(t);
  }
  // remove line with error and write your code here
};
