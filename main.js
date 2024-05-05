
function CreateNumArray(array) {
    let NumArray = [];
    for (let i = 0; i < array.length; i++) {
        for (let y = 0; y < array[i].length; y++) {
            NumArray.push(array[y][i]);
        }
    }
    NumArray.sort((a, b) => a - b)
    return NumArray
}
console.log(CreateNumArray(array));

let array = [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
];

