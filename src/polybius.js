// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const grid = [
    {char: "a", num: 11}, 
    {char: "b", num: 21},
    {char: "c", num: 31},
    {char: "d", num: 41},
    {char: "e", num: 51},
    {char: "f", num: 12},
    {char: "g", num: 22},
    {char: "h", num: 32},
    {char: "i", num: 42},
    {char: "j", num: 42},
    {char: "k", num: 52},
    {char: "l", num: 13},
    {char: "m", num: 23},
    {char: "n", num: 33},
    {char: "o", num: 43},
    {char: "p", num: 53},
    {char: "q", num: 14},
    {char: "r", num: 24},
    {char: "s", num: 34},
    {char: "t", num: 44},
    {char: "u", num: 54},
    {char: "v", num: 15},
    {char: "w", num: 25},
    {char: "x", num: 35},
    {char: "y", num: 45},
    {char: "z", num: 55},
  ]

  const decodeGrid = [
    {char: "a", num: "11"}, 
    {char: "b", num: "21"},
    {char: "c", num: "31"},
    {char: "d", num: "41"},
    {char: "e", num: "51"},
    {char: "f", num: "12"},
    {char: "g", num: "22"},
    {char: "h", num: "32"},
    {char: "(i/j)", num: "42"},
    {char: "k", num: "52"},
    {char: "l", num: "13"},
    {char: "m", num: "23"},
    {char: "n", num: "33"},
    {char: "o", num: "43"},
    {char: "p", num: "53"},
    {char: "q", num: "14"},
    {char: "r", num: "24"},
    {char: "s", num: "34"},
    {char: "t", num: "44"},
    {char: "u", num: "54"},
    {char: "v", num: "15"},
    {char: "w", num: "25"},
    {char: "x", num: "35"},
    {char: "y", num: "45"},
    {char: "z", num: "55"},
  ]


  function polybius(input, encode = true) {
    if(!input) return false;
    input = input.toLowerCase();
    if(encode){
      let result = "";
      for(let i = 0; i < input.length; i++){
        let letter = input[i];
        if(letter === " ") result += " "
        else {
        grid.forEach(pair => {
          if(pair.char === letter) result += pair.num;
        })
      }
    }
    return result
  }
    if(!encode){
      let check = input.replace(/[ ]+/g,11);
      if(check.length % 2 !== 0) return false
      let regex = /(\d{2}| )/g
      input = input.match(regex);
      let decoded = "";
      for(let i = 0; i < input.length; i++){
        const number = input[i];
        if(number === " ") decoded += " ";
        else {
          decodeGrid.forEach(pair => {
            if(pair.num === number) decoded += pair.char;
          })
        }
      }
      return decoded;
    }
  }
  
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
