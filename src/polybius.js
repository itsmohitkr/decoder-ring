// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    input = input.toLowerCase();
    const squareForEncoding = {
      11: "a",
      12: "f",
      13: "l",
      14: "q",
      15: "v",
      21: "b",
      22: "g",
      23: "m",
      24: "r",
      25: "w",
      31: "c",
      32: "h",
      33: "n",
      34: "s",
      35: "x",
      41: "d",
      42: "(i/j)",
      43: "o",
      44: "t",
      45: "y",
      51: "e",
      52: "k",
      53: "p",
      54: "u",
      55: "z",
    };
    const squareForDecoding = {
      'a': "11",
      'f': "12",
      'l': "13",
      'q': "14",
      'v': "15",
      'b': "21",
      'g': "22",
      'm': "23",
      'r': "24",
      'w': "25",
      'c': "31",
      'h': "32",
      'n': "33",
      's': "34",
      'x': "35",
      'd': "41",
      'i': "42",
      'j': "42",
      'o': "43",
      't': "44",
      'y': "45",
      'e': "51",
      'k': "52",
      'p': "53",
      'u': "54",
      'z': "55",
    };
    let result = "";
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        if (input[i] >= 'a' && input[i] <= 'z') {
          result += squareForDecoding[input[i]];
        } else {
          result += input[i];
        }
      }
    } else {
      // decode
      let removedSpacesText = input.split(" ").join("");
      if (removedSpacesText.length % 2 === 0) {
        for (let i = 0; i < input.length;) {
          if (input[i] != ' ') {
            result += squareForEncoding[(input[i] + input[i + 1])];
            i += 2
          } else {
            result += input[i];
            i++;

          }
        }
      } else {
        return false;
      }
    }
    return result;
  }

  return {
    polybius,
  };
})();

module.exports = {
  polybius: polybiusModule.polybius
};
