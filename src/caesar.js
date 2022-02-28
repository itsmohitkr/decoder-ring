// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    // your solution code here
    input = input.toLowerCase();
    let result = '';

    if (!shift || shift == 0 || shift > 25 || shift < -25) {
      return false;
    } else {
      if (!encode) {
        shift *= -1;
      }
      for (let i = 0; i < input.length; i++) {
        if (input[i] >= 'a' && input[i] <= 'z') {
          let newAsciiCode = (input[i].charCodeAt()) + shift;
          if (newAsciiCode > 122) {
            let remainingShift = newAsciiCode - 122;
            newAsciiCode = 96 + remainingShift;
            result += String.fromCharCode(newAsciiCode);
          } else if (newAsciiCode < 97) {
            let remainingShift = 97 - newAsciiCode;
            newAsciiCode = 123 - remainingShift;
            result += String.fromCharCode(newAsciiCode);
          } else {
            result += String.fromCharCode(newAsciiCode);
          }

        } else {
          result += input[i];
        }
      }
    }

    return result
  }

  return {
    caesar,
  };
})();

module.exports = {
  caesar: caesarModule.caesar
};
