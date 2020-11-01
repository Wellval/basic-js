const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth_prev = 1) {
    let result = depth_prev;
    for (let item of arr) {
        if (Array.isArray(item)) {
            let new_depth = this.calculateDepth(item, depth_prev + 1);
            if (new_depth > result) {
                result = new_depth;
            }
        }
    }
    return result;
}
};
