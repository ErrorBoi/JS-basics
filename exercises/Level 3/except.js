const numbers = [1, 2, 3, 4];

const output = except(numbers, [1, 2]);

console.log(output);

function except(array, excluded) {
    let output = [];
    for(let key of array)
        if (!excluded.includes(key)) output.push(key);
    return output;
}