const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	const sum = array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  return sum;
};

const multiply = function(array) {
  const double = array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
  return double;
;};

const power = function(base, exposant) {
	return base ** exposant;
};

const factorial = function(num) {
	let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
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
