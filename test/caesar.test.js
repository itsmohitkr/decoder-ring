// Write your tests here!

const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() function", () => {
    it("return false if shift===0", () => {
        const input = "This is a secret message!";
        const shift = 0;
        const actual = caesar(input, shift)
        expect(actual).to.be.false;
    });
    it("return false if the shift>25", () => {
        const message = "This is a secret message!";
        const shift = 26;
        const actual = caesar(message, shift);

        expect(actual).to.be.false;
    });

    it("return false if the shift <-25", () => {
        const message = "This is a secret message!";
        const shift = -26;
        const actual = caesar(message, shift);

        expect(actual).to.be.false;
    });
    
    it("decode a message by shifting the letters in the opposite direction", () => {
        const message = "phvvdjh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "message";

        expect(actual).to.equal(expected);
    });

    it("leaves spaces and other symbols as is", () => {
        const message = "d phvvdjh.";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "a message.";

        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const message = "D pHvvdjh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "a message";

        expect(actual).to.equal(expected);
    });

    it("appropriately handle letters at the end of the alphabet", () => {
        const message = "cheud pdjdclqh";
        const shift = 3;
        const actual = caesar(message, shift, false);
        const expected = "zebra magazine";

        expect(actual).to.equal(expected);
    });
    
    it("allow for a negative shift that will shift to the left", () => {
        const message = "wbyox jxdxwfkb";
        const shift = -3;
        const actual = caesar(message, shift, false);
        const expected = "zebra magazine";

        expect(actual).to.equal(expected);
    });

});
