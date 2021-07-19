const { expect } = require("chai");
const substitution = require("../src/substitution");



describe("the substitution function", () => {
    it("should encode a message by using the given substitution alphabet", () => {
        const alphabet = "qwer$yuiopasdfghjklzxcvbnm";
        const input = "disengage gang";
        const encode = true;
        const actual = substitution(input, alphabet, encode);
        const expected = "rol$fuqu$ uqfu";
        expect(actual).to.eql(expected);
    })
    it("should return false if the substitution alphabet does not contain unique characters", () => {
        const alphabet = "qwwr$yuiopasdfghjklzxcvbnm";
        const input = "disengage gang";
        const encode = true;
        const actual = substitution(input, alphabet, encode);
        const expected = false;
        expect(actual).to.be.false;
    })
    it("should decode a message by using the given substitution alphabet", () => {
        const alphabet = "qwer$yuiopasdfghjklzxcvbnm";
        const input = "rol$fuqu$ uqfu";
        const encode = false;
        const actual = substitution(input, alphabet, encode);
        const expected = "disengage gang";
        expect(actual).to.eql(expected);
    })
    it("should work with any kind of key with unique characters", () => {
        const alphabet = "qwer$yuiopasdfghjklzxcvbnm";
        const input = "rol$fuqu$ uqfu";
        const encode = false;
        const actual = substitution(input, alphabet, encode);
        const expected = "disengage gang";
        expect(actual).to.eql(expected);
    })
    it("should preserve spaces", () => {
        const alphabet = "qwer$yuiopasdfghjklzxcvbnm";
        const input = "disengage gang";
        const encode = true;
        const actual = substitution(input, alphabet, encode);
        const expected = "rol$fuqu$ uqfu";
        expect(actual).to.eql(expected);
    })
    it("should return false if there are not exactly 26 letters in the alpha", () => {
        const alphabet = "qwer$yuiopasdfghjklzxcvbnmtper";
        const input = "disengage gang";
        const encode = true;
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.be.false;
    })
    it("should ignore capital letters", () => {
        const alphabet = "qwer$yuiopasdfghjklzxcvbnm";
        const input = "DISENGAGE GANG";
        const encode = true;
        const actual = substitution(input, alphabet, encode);
        const expected = "rol$fuqu$ uqfu";
        expect(actual).to.eql(expected);
    })

})