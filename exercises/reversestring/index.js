// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let strArr = str.split("");
  for (let i = 0; i < Math.floor(strArr.length/2); i++) {
    [strArr[i], strArr[strArr.length -1 -i]] = [strArr[strArr.length -1 -i], strArr[i]];
  }
  return strArr.join("");
}

module.exports = reverse;
