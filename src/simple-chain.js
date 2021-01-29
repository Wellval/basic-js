const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: '',

  getLength() {
    this.result = this.result.split('~~').length;
    return this;
  },
  addLink(value) {
    if (this.result === '') {
      this.result += `( ${value + ''} )`;
      return this;
    } else {
      this.result += `~~( ${value + ''} )`;
      return this;
    }
  },
  removeLink(position) {
    if (this.result === null || this.result[position] === undefined) {
      this.result = '';
      throw new Error('THROWN');
    }  else {
    this.result = this.result.split('~~');
    this.result.splice(position - 1, 1);
    this.result = this.result.join('~~');
    return this;
    }
  },
  reverseChain() {
    this.result = this.result.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let chain = this.result;
    this.result = '';
    return chain;
  }
};


module.exports = chainMaker;
