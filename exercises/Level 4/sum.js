function sum(...args) {
  function reducer (acc, curr) {
    return acc+curr;
  }
  let array = (Array.isArray(args[0])) ? args[0] : args;
  return array.reduce(reducer);
}

console.log(sum([1,2,3,-1]));