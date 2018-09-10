const numbers = [1, 2, 6, 4];

const max1 = getMax(numbers);
const max2 = getMax([]);

console.log(max1);
console.log(max2);

function getMax(array) {
    if (!array.length) return undefined;
    return array.reduce((accumulator, current) => (current > accumulator) ? current : accumulator);
}