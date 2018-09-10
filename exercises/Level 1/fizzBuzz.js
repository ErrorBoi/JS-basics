function fizzBuzz(input) {
	let result = '';
	if (typeof input !== 'number' || isNaN(input))
		return 'Not a number';
	if (input % 3 == 0) result+='Fizz';
	if (input % 5 == 0) result+='Buzz';
	if ((input % 3)&&(input % 5)) result=input;
	return result;
}

console.log(fizzBuzz(5));
console.log(fizzBuzz(3));
console.log(fizzBuzz(7));
console.log(fizzBuzz('5'));
console.log(fizzBuzz(NaN));