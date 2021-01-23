const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw CustomError;
    }
    let result = [];
    for (let i = 0; i < arr.length; ++i) {
        switch (arr[i]) {
            case '--discard-next':
                result.push(null);
                i++;
                break;
            case '--discard-prev':
                if (result.length > 0) {
                    result[result.length - 1] = null;
                } 
                break;
            case '--double-next':
                if (i + 1 !== arr.length)
                    result.push(arr[i + 1]);
                break;
            case '--double-prev':
                if (result.length > 0 && result[result.length - 1] !== undefined ) {
                    result.push(result[result.length - 1]);
                } else result.pop();
                break;
            default:
                result.push(arr[i]);
                break;
        }
    }
    return result.filter(x => x !== null);
}