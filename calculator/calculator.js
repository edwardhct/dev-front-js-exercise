function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (total, num) {
	return total + Math.round(num);
}

function multiply (num1, num2) {
	return num1 * num2;
}

function power(num1, num2) {
	return Math.pow(num1, num2);
}

function factorial(num) {
	if (num === 0)
	{ return 1; }
  else
	{ return num * factorial( num - 1 ); }
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}