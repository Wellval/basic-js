const CustomError = require("../extensions/custom-error");


module.exports = function countCats(matrix) {
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '^^') {
        arr.push(1);
      }
    }
  }
  return arr.length;
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
