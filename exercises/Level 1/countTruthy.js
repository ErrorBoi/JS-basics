function countTruthy(array) {
	let counter = 0;
	for(let i = 0; i < array.length; i++)
		if (array[i]) counter++;
	return counter;
}

const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array));