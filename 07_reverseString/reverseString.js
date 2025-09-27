const reverseString = function(str) {
    let reversStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversStr += str.charAt(i);
    }
    return reversStr;
};

// Do not edit below this line
module.exports = reverseString;
