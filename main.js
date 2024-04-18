let array = [12, 3, 1, 2, -6, 5, -8, 6];

function FindSum(array) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
		let y = i + 1;
		let z = y + 1;
		while (array[i] + array[y] + array[z] != 0) {
			if (z != array.length - 1) {
				z++;
			} else if (y != array.length - 2) {
				y++;
				if (z == array.length - 1 && y == z - 1) {
					i++;
					y = i + 1;
					z = y + 1;
				}
			}
			if (z == array.length - 1 && y == z - 1 && i == y - 1) {
				return false;
			}
			console.log(i + "i", y + "y", z + "z");
		}
	}
}

console.log(FindSum(array));
// 3, 6, 7;
// 1, 5, 6;
// 2, 4, 5;
