let array = [3, 5, -4, 8, 11, 1, -1, 6];

function NumSum(array) {
	let result = [];
	let set1 = new Set();
	for (let i = 0; i < array.length; i++) {
		if (set1.has(array[i])) {
			result.push(10 - array[i], array[i]);
			console.log(set1);
			console.log(result);
		}
		set1.add(10 - array[i]);
	}
}

NumSum(array);
