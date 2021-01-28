const CustomError = require("../extensions/custom-error");

let a = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
class VigenereCipheringMachine {
  constructor(mode) {
    if (mode === undefined) {
      this.mode = true;
    } else {
      this.mode = mode;
    }
  }
  encrypt(message, key) {
    message = message.toUpperCase().split('');
    key = key.toUpperCase().split('');
    let encrypted = [];
    let difference = [];
    for (let i = 0; i < message.length; i++) {
      if (a.includes(message[i])) {
        if (key.length < message.length) {
          key.push(key[i]);
        }
        if (((a.indexOf(message[i])) + (a.indexOf(key[i])) >= 26)) {
          difference.push((a.indexOf(message[i]) + a.indexOf(key[i])) - 26);
        } else {
          difference.push((a.indexOf(message[i])) + (a.indexOf(key[i])));
        }
        encrypted.push(a[difference[i]]);
      }
      else {
        encrypted.push(message[i]);
        key.splice(i, 0, ' ');
        difference.splice(i, 0, message[i]);
      }
    }
    return this.mode ? encrypted.join('') : encrypted.reverse().join('');
  }

  decrypt(cipher, key) {
    cipher = cipher.toUpperCase().split('');
    key = key.toUpperCase().split('');
    let decrypted = [];
    let difference = [];
    for (let i = 0; i < cipher.length; i++) {
      if (a.includes(cipher[i])) {
        if (key.length < cipher.length) {
          key.push(key[i]);
        }
        if ((a.indexOf(cipher[i]) < a.indexOf(key[i]))) {
          difference.push((a.indexOf(cipher[i]) - a.indexOf(key[i])) + 27);
        } else {
          difference.push((a.indexOf(cipher[i])) - (a.indexOf(key[i])) + 1);
        }
        decrypted.push(a[difference[i] - 1]);
      }
      else {
        decrypted.push(cipher[i]);
        key.splice(i, 0, ' ');
        difference.splice(i, 0, cipher[i]);
      }
    }
    return this.mode ? decrypted.join('') : decrypted.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
