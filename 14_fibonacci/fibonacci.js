const fibonacci = function(member) {
    if (member < 0) {
        return "OOPS";
    }
    let num = Number(member);
    let fibonacciArr = [0, 1];
    for (let i = 0; fibonacciArr.length <  num + 1; i++) {
        fibonacciArr.push(fibonacciArr[i] + fibonacciArr[i + 1])
    }
    return fibonacciArr[num];
};

// Do not edit below this line
module.exports = fibonacci;
