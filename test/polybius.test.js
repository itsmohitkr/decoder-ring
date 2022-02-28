const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius() function", () => {
  it("encodes an input into numbers", () => {
    const input = "three";
    const actual = polybius(input);
    const expected = "4432245151";

    expect(actual).to.equal(expected);
  });
  it("decodes an input of numbers into letters", () => {
    const input = "4432245151";
    const actual = polybius(input, false);
    const expected = "three";

    expect(actual).to.equal(expected);
  });
  it("encodes both the letters i and j to 42", () => {
    const input = "ij";
    const actual = polybius(input);
    const expected = "4242";

    expect(actual).to.equal(expected);
  });
  it("decodes the number 42 to (i/j)", () => {
    const input = "42";
    const actual = polybius(input, false);
    const expected = "(i/j)";

    expect(actual).to.equal(expected);
  });
  it("ignores capital letters ", () => {
    const lowercaseInput = "helloworld";
    const uppercaseInput = "HELLOWORLD";
    const lowercaseOutput = polybius(lowercaseInput);
    const uppercaseOutput = polybius(uppercaseInput);

    expect(lowercaseOutput).to.equal(uppercaseOutput);
  });
  it("maintains spaces in the message before and after encoding", () => {
    const input = "three little pigs";
    const actual = polybius(input);
    const expected = "4432245151 134244441351 53422234";

    expect(actual).to.equal(expected);
  });
  it("maintains spaces in the message before and after decoding", () => {
    const input = "4432245151 134244441351 53422234";
    const actual = polybius(input, false);
    const expected = "three l(i/j)ttle p(i/j)gs";

    expect(actual).to.equal(expected);
  });
});