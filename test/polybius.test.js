const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("the polybius function", () => {
    it("should encode a message by translating each letter to number pairs", () => {
        const input = "disengage gang";
        const encode = true;
        const actual = polybius(input, encode);
        const expected = "414234513322112251 22113322";
        expect(actual).to.eql(expected);
    }) //end of it
    it("should translate both i and j to 42", () => {
        const input = "disengage gang";
        const encode = true;
        const actual = polybius(input, encode);
        const expected = "414234513322112251 22113322";
        expect(actual).to.eql(expected);
    })
    it("should leave space as is", () => {
        const input = "disengage gang";
        const encode = true;
        const actual = polybius(input, encode);
        const expected = "414234513322112251 22113322";
        expect(actual).to.eql(expected);
    })
    it("should be a string", () => {
        const input = "disengage gang";
        const encode = true;
        const actual = polybius(input, encode);
        expect(actual).to.be.a("string");
    })
    it("should return false if there is no input", () => {
        const input = null;
        const encode = true;
        const actual = polybius(input, encode);
        const expected = false;
        expect(actual).to.be.false;
    })
    it("should ignore capitol letters", () => {
        const input = "DISENGAGE GANG";
        const encode = true;
        const actual = polybius(input, encode);
        const expected = "414234513322112251 22113322";
        expect(actual).to.eql(expected);
    })
})


describe("the decode function", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
        const input = "414234513322112251 22113322";
        const encode = false;
        const actual = polybius(input, encode);
        const expected = "d(i/j)sengage gang";
        expect(actual).to.eql(expected);
    })
    it(`should translate 42 to both 'i' and 'j'`, () =>{
        const input = "414234513322112251 22113322";
        const encode = false;
        const actual = polybius(input, encode);
        const expected = "d(i/j)sengage gang";
        expect(actual).to.eql(expected);
    })
    it("should return false if the length of all numbers is odd", () => {
        const input = "414234513322112251 221133224";
        const encode = false;
        const actual = polybius(input, encode);
        expect(actual).to.be.false;
    })
    it("should leave space as is", () => {
        const input = "414234513322112251 22113322";
        const encode = false;
        const actual = polybius(input, encode);
        const expected = "d(i/j)sengage gang";
        expect(actual).to.eql(expected);
    })
})