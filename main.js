let array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

function NumSum(array) {
	let sum = 0;
	let i = 0;
	let depth = 1;
	while (i < array.length) {
		if (Array.isArray(array[i])) {
			sum += depth * NumSum(array[i]);
			depth++;
		} else {
			sum += array[i];
		}
		i++;
	}
	return sum;
}
console.log(NumSum(array));
