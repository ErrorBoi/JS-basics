const numbers = [1, 2, 3 ,4];

function move(array, index, offset) {
    let output = [...array];
    let buffer = output.splice(index, 1)[0]; // move an element to the buffer
    if (index + offset >= array.length || index + offset < 0) {
    console.error('Invalid offset');
    return;
    }
    output.splice(index + offset, 0, buffer);
    return output;
}

console.log(move(numbers, 2, -1));
console.log(move(numbers, 0, 2));
console.log(move(numbers, 2, -3));