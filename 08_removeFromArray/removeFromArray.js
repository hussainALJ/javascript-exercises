const removeFromArray = function(arr, ...args) {
    let newArr = arr.filter((val) => !args.includes(val));
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
