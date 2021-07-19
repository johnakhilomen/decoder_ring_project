const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("the ceaser function", () => {
    it("should return the encoded variant of input", () => {
        const input = "disengage gang";
        const shift = 3;
        const encode = true
        const actual = caesar(input, shift, encode);
        const expected = "glvhqjdjh jdqj";
        expect(actual).to.eql(expected);

    }) 
    it("should return false if shift is 0, not present, greater than 25, or less than -25", () => {
        const input = "disengage gang";
        const shift = 0;
        const encode = true
        const actual = caesar(input, shift, encode);
        expect(actual).to.be.false;
    })
    it("should ignore capital letters", () => {
        const input = "DISENGAGE GANG";
        const shift = 3;
        const encode = true
        const actual = caesar(input, shift, encode);
        const expected = "glvhqjdjh jdqj";
        expect(actual).to.eql(expected);
    })
    it("should maintain spaces", () => {
        const input = "disengage gang";
        const shift = 3;
        const encode = true
        const actual = caesar(input, shift, encode);
        const expected = "glvhqjdjh jdqj";
        expect(actual).to.eql(expected);
    });
    it("should return the decoded variant of input", () => {
        const input = "glvhqjdjh jdqj";
        const shift = -3;
        const encode = true
        const actual = caesar(input, shift, encode);
        const expected = "disengage gang";
        expect(actual).to.eql(expected);
    }) 
    it("should handle shifts that go past the end of the alphabet", () => {
        const input = "z";
        const shift = 3;
        const encode = true;
        let actual = caesar(input, shift, encode);
        let expected = "c";
        expect(actual).to.equal(expected);
    });
    it("should leave symbols and spaces as is when encoding", () => {
        const input = "disengage gang!";
        const shift = 3;
        const encode = true
        const actual = caesar(input, shift, encode);
        const expected = "glvhqjdjh jdqj!";
        expect(actual).to.eql(expected);
    })
    it("should leave symbols and spaces as is when decoding", () => {
        const input = "glvhqjdjh jdqj!";
        const shift = 3;
        const encode = false;
        const actual = caesar(input, shift, encode);
        const expected = "disengage gang!";
        expect(actual).to.eql(expected);
    })

})