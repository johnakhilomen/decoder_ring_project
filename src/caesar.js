// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if(!shift || shift === 0 || shift < -25 || shift > 25) return false;
    input = input.toLowerCase();
    let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    // encode section
    if(encode){
      let encoded = "";
        for(let i = 0; i < input.length; i++){
          const letter = input[i];
          const check = alpha.includes(letter);
          if(check === false) encoded += letter;
          else {
            const index = alpha.findIndex(char => char === letter);
            let parse = index + shift;
            if(parse > 25) parse = parse - 26;
            if(parse < 0) parse = parse + 26;
            encoded += alpha[parse] || alpha[index - shift];
          }
        }
      return encoded;
    }
    if(!encode){
      let decoded = "";
      for(let i = 0; i < input.length; i++){
        const letter = input[i];
        const check = alpha.includes(letter);
        if(check === false) decoded += letter;
        else {
          const index = alpha.findIndex(char => char === letter);
          let parse = index - shift;
          if(parse > 25) parse = parse - 26;
          if(parse < 0) parse = parse + 26;
          decoded += alpha[parse] || alpha[index - shift];
        }
      }
      return decoded;
    }
  } 
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;