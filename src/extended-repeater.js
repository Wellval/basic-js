const CustomError = require('../extensions/custom-error');

module.exports = function(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = ''}) {
    let result = '';
    for (let i = 0; i < repeatTimes; ++i) {
        let add = '';
        for (let j = 0; j < additionRepeatTimes; ++j) {
            add += addition + (j != additionRepeatTimes - 1 ? additionSeparator || '|' : '');
        }
        result += str + add + ( i != repeatTimes - 1 ? separator : '')
    }
    return result;
}
