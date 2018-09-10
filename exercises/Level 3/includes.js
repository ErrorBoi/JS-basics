function includes(array, searchElement) {
    return !!~array.indexOf(searchElement);
}

const numbers = [1, 2, 3, 4];

console.log(includes(numbers, 6));