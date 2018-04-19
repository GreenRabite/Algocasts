// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    if (freq[str[i]] === undefined) {
      freq[str[i]]+=1;
    }else {
      freq[str[i]] = 1;
    }
  }
  let max=0;
  let result=str[0];
  for(let ch in freq){
    if (freq[ch] > max) {
      max = freq[ch];
      result = ch;
    }
  }
  return result;
}

module.exports = maxChar;
