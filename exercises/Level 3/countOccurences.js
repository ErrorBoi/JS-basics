const numbers = [1, 1, 3, 4];

const count = countOccurences(numbers, 1);

console.log(count);
function countOccurences(array, searchElement) {
    
    function reducer(prev, curr) {
        return curr === searchElement ? ++prev : prev;
    }
    return array.reduce(reducer, 0);
}