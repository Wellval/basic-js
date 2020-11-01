const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 2**disksNumber - 1;
  let turnsPerSec = turnsSpeed / 60 / 60;
  let seconds = Math.floor(turns / turnsPerSec);
  let obj = {
  	turns: turns,
  	seconds: seconds,
  }
  return obj;
}
