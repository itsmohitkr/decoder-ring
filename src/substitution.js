// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet) {
      return false;
    }
    // check unique character
    let charArray = alphabet.split('');
    charArray.sort();

    for (let i = 0; i < charArray.length; i++) {
      if (charArray[i] != ' ') {
        if (charArray[i] == charArray[i + 1]) {
          return false;
        }
      }
    }
    let result = "";
    let actualAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let arraySubs = alphabet.split("");
    let arrayActualAlphabet = actualAlphabet.split("");

    input = input.toLowerCase();
    if (alphabet.length === 26) {
      if (encode) {
        for (let i = 0; i < input.length; i++) {

          if (input[i] != " ") {
            let index = arrayActualAlphabet.indexOf(input[i]);
            result += arraySubs[index];
          } else {
            result += input[i];
          }

        }
      } else {
        // decode
        for (let i = 0; i < input.length; i++) {

          if (input[i] != " ") {
            let index = arraySubs.indexOf(input[i]);
            result += arrayActualAlphabet[index];
          } else {
            result += input[i];
          }

        }
      }
    } else {
      return false;
    }

    return result;

  }

  return {
    substitution,
  };
})();

module.exports = {
  substitution: substitutionModule.substitution
};
