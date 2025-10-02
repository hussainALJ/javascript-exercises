const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum + num, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num, 1);
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  let factorial = 1;
  if (x === 0) {
    return factorial;
  }
	for (let i = x; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
