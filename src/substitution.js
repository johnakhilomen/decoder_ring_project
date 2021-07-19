// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const alpha = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

  function substitution(input, alphabet, encode = true) {
    if(!alphabet || !input || alphabet.length !== 26) return false;
    input = input.toLowerCase();
    const check = new Set(alphabet);
    if(check.size !== 26) return false;
    let sub = alphabet.split("");
    let phrase = input.split("");

      if(encode){
        let encoded = "";
        phrase.forEach(letter => {
          if(letter === " ") encoded += letter;
          else {
          let index = alpha.indexOf(letter);
          encoded += sub[index];
          }
        });
        return encoded;
      };
      if(!encode){
        let decoded = "";
        phrase.forEach(letter => {
          if(letter === " ") decoded += letter;
          else {
          let index = sub.indexOf(letter);
          decoded += alpha[index];
          };
        });
        return decoded;
      };
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
