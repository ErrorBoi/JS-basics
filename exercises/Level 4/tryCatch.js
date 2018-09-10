try {
  const numbers = [1, 2, 3, 4];
  const count = countOccurences(null, 1);
  console.log(count);
} catch (e) {
  console.error(e.message);
}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array))
      throw new Error('First argument is not an array.');
    function reducer(prev, curr) {
        return curr === searchElement ? ++prev : prev;
    }
    return array.reduce(reducer, 0);
}