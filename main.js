let array = [12, 3, 1, 2, -6, 5, -8, 6];

function FindSum(array) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		let start = 1;
		let end = array.length - 1;
		while (start < end) {
			let sum = array[i] + array[start] + array[end];
			if (sum == 0) {
				result.push([array[i], array[start], array[end]]);
			}
			if (end != start + 1) {
				end--;
			} else {
				end = array.length - 1;
				start++;
			}
			if (start >= array.length - 1) {
				i++;
				start = i + 1;
				end = array.length - 1;
			}
			console.log(i, start, end);
		}
		return result;
	}
}

console.log(FindSum(array));

// 3, 6, 7;
// 1, 5, 6;
// 2, 4, 5;

// function FindSum(array) {
// 	let result = [];
// 	for (let i = 0; i < array.length; i++) {
// 		let start = 1;
// 		let end = array.length - 1;
// 	}
// 	while (strat < end) {
// 		if (sum == 0) {
// 			result.push(array[i], array[y], array[z]);
// 			return result;
// 		}
// 		else
// 		start++;
// 	}
// }
