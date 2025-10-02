const palindromes = function (rawStr) {
    let okChars = "abcdefghijklmnopqrstuvwxyz1234567890";

    let str = rawStr
    .toLowerCase()
    .split('')
    .reduce((newStr, char) => (okChars.includes(char)) ? newStr += char: newStr)
    
    let reverseStr = str.split('').reverse().join('');

    return str === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
