const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (Number.parseInt(sampleActivity) <= 0 || typeof(sampleActivity) !== 'string' || isNaN(Number.parseInt(sampleActivity)) || Number.parseInt(sampleActivity) > 15 || !sampleActivity) {
    return false;
  }
  // throw new CustomError('Not implemented');
  else {
  sampleActivity = parseFloat(sampleActivity);
  let n = MODERN_ACTIVITY / sampleActivity;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.log(n) / k;
  return (Math.ceil(t) > 0) ? Math.ceil(t) : false;
  }
  // remove line with error and write your code here
};
